import http from 'http';
import { URL } from 'url';
import { config } from 'dotenv';
import chatHandler from './gemini/chat';
import analysisHandler from './gemini/analysis';
import competitorHandler from './gemini/competitor';

// Load environment variables
config();

const PORT = 3001;

const server = http.createServer(async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url || '', `http://localhost:${PORT}`);
  const pathname = parsedUrl.pathname;

  // Mock Vercel request/response objects
  const mockReq = {
    method: req.method,
    url: req.url,
    headers: req.headers,
    body: '',
  };

  let headersSent = false;
  const mockRes = {
    status: (code: number) => {
      if (!headersSent) {
        res.writeHead(code);
        headersSent = true;
      }
      return mockRes;
    },
    json: (data: any) => {
      if (!headersSent) {
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        headersSent = true;
      }
      res.end(JSON.stringify(data));
    },
  };

  // Read request body
  if (req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', async () => {
      try {
        mockReq.body = JSON.parse(body);
        
        if (pathname === '/api/gemini/chat') {
          await chatHandler(mockReq as any, mockRes as any);
        } else if (pathname === '/api/gemini/analysis') {
          await analysisHandler(mockReq as any, mockRes as any);
        } else if (pathname === '/api/gemini/competitor') {
          await competitorHandler(mockReq as any, mockRes as any);
        } else {
          if (!headersSent) {
            res.writeHead(404);
            headersSent = true;
          }
          res.end(JSON.stringify({ error: 'Not Found' }));
        }
      } catch (err) {
        console.error('Error:', err);
        if (!headersSent) {
          res.writeHead(500);
          headersSent = true;
        }
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
      }
    });
  } else {
    if (!headersSent) {
      res.writeHead(404);
      headersSent = true;
    }
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(PORT, () => {
  console.log(`Local API server running on http://localhost:${PORT}`);
  console.log('API endpoints:');
  console.log('  POST http://localhost:3001/api/gemini/chat');
  console.log('  POST http://localhost:3001/api/gemini/analysis');
  console.log('  POST http://localhost:3001/api/gemini/competitor');
});
