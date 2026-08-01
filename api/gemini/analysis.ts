import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method Not Allowed',
    });
  }

  try {
    const { 
      ownerName, 
      businessName, 
      businessCategory, 
      location, 
      businessProblems, 
      targetCustomers, 
      monthlyBudget, 
      websiteRequirement 
    } = req.body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY environment variable is missing.');
    }

    const prompt = `
You are an expert AI Digital Growth Consultant for small and medium businesses.
Analyze the following business details and produce a comprehensive, structured growth audit in valid JSON format.

BUSINESS DETAILS:
- Owner Name: ${ownerName || 'Business Owner'}
- Business Name: ${businessName || 'Small Business'}
- Category: ${businessCategory || 'General Retail/Service'}
- Location: ${location || 'Local Area'}
- Stated Problems: ${businessProblems || 'Low footfall and lack of digital leads'}
- Target Customers: ${targetCustomers || 'Local community'}
- Monthly Budget: ${monthlyBudget || 'Under ₹10,000'}
- Website Status/Requirement: ${websiteRequirement || 'New website required'}

IMPORTANT: Respond ONLY with a valid JSON object matching this exact structure (do NOT add extra text or markdown wrap outside the JSON):
{
  "score": 88,
  "summary": "Detailed 2-3 sentence strategic executive summary.",
  "problems": [
    { "issue": "Problem title", "impact": "High", "explanation": "Detailed explanation of why it hurts growth." },
    { "issue": "Second problem title", "impact": "Medium", "explanation": "Detailed explanation." }
  ],
  "websiteSuggestions": [
    "Specific suggestion 1 for website UI, mobile optimization, or lead capture",
    "Specific suggestion 2 for trust badges or CTA buttons"
  ],
  "seoStrategy": [
    { "tactic": "Local SEO & Google Maps", "keywords": ["Keyword 1", "Keyword 2"], "details": "How to rank on local searches" },
    { "tactic": "On-Page Keyword Optimization", "keywords": ["Keyword 3", "Keyword 4"], "details": "How to optimize headings and content" }
  ],
  "marketingPlan": [
    { "channel": "WhatsApp Business Automation", "strategy": "Automated greeting & lead capture bot", "expectedRoi": "3x Lead Conversion" },
    { "channel": "Hyper-Local Instagram Ads", "strategy": "Target local demographic within 5km radius", "expectedRoi": "2.5x Footfall" }
  ],
  "growthRecommendations": [
    "Deploy high-converting 24/7 mobile website",
    "Launch automated WhatsApp lead response system",
    "Claim and optimize Google Business Profile with customer reviews"
  ]
}
`;

    const https = await import('https');
    
    const data = JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.7,
      },
    });

    const options = {
      hostname: 'generativelanguage.googleapis.com',
      port: 443,
      path: `/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data),
      },
    };

    const result: any = await new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        let body = '';
        res.on('data', (chunk) => {
          body += chunk;
        });
        res.on('end', () => {
          try {
            resolve(JSON.parse(body));
          } catch (e) {
            reject(new Error('Failed to parse response'));
          }
        });
      });

      req.on('error', reject);
      req.write(data);
      req.end();
    });

    const rawText = result.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const cleanedText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
    let reportData;
    try {
      reportData = JSON.parse(cleanedText);
    } catch {
      reportData = { rawReport: rawText };
    }

    return res.json({ success: true, report: reportData });
  } catch (err: any) {
    console.error('Error in /api/gemini/analysis:', err);
    return res.status(500).json({ success: false, error: err.message || 'Failed to generate AI analysis.' });
  }
}
