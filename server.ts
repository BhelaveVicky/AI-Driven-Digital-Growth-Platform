
import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

const app = express();
const PORT = 3000;

app.use(express.json());

const getAiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable is missing.');
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
};

// 1. Business Analysis API
app.post('/api/gemini/analysis', async (req, res) => {
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

    const ai = getAiClient();
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

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        temperature: 0.7,
      },
    });

    const rawText = response.text || '';
    const cleanedText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
    let data;
    try {
      data = JSON.parse(cleanedText);
    } catch {
      data = { rawReport: rawText };
    }

    return res.json({ success: true, report: data });
  } catch (err: any) {
    console.error('Error in /api/gemini/analysis:', err);
    return res.status(500).json({ success: false, error: err.message || 'Failed to generate AI analysis.' });
  }
});

// 2. Competitor Analysis API
app.post('/api/gemini/competitor', async (req, res) => {
  try {
    const { businessName, category, location, competitorNames, keyOffering } = req.body;

    const ai = getAiClient();
    const prompt = `
You are a Competitive Intelligence AI Specialist.
Analyze the competitive landscape for:
- My Business: ${businessName || 'My Business'}
- Category: ${category || 'Local Business'}
- Location: ${location || 'City'}
- Known Competitors: ${competitorNames || 'Local area competitors'}
- My Key Offering: ${keyOffering || 'Quality products and services'}

Respond ONLY with a valid JSON object matching this structure:
{
  "marketPositioning": "Strategic summary of local market density and positioning opportunities in ${location}.",
  "competitorBreakdown": [
    { "name": "Competitor 1 / Local Chain", "strengths": "Strong brand awareness and prime location", "weaknesses": "Slow customer service and outdated website", "threatLevel": "High" },
    { "name": "Competitor 2 / Direct Rival", "strengths": "Aggressive social media ads", "weaknesses": "Poor Google reviews and higher pricing", "threatLevel": "Medium" }
  ],
  "pricingInsights": "Analysis of current market pricing vs how ${businessName} can offer superior value.",
  "keywordGaps": ["Best ${category} in ${location}", "Top rated ${category} near me", "Affordable ${category} ${location}"],
  "outrankTactics": [
    "Build a faster, mobile-optimized website with instant WhatsApp chat button",
    "Collect 20+ 5-star Google Maps reviews using automated review request link",
    "Run targeted local search ads bidding on competitor keyword gaps"
  ]
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        temperature: 0.7,
      },
    });

    const rawText = response.text || '';
    const cleanedText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
    let data;
    try {
      data = JSON.parse(cleanedText);
    } catch {
      data = { rawAnalysis: rawText };
    }

    return res.json({ success: true, analysis: data });
  } catch (err: any) {
    console.error('Error in /api/gemini/competitor:', err);
    return res.status(500).json({ success: false, error: err.message || 'Failed to analyze competitors.' });
  }
});

// 3. AI Chat Endpoint
app.post('/api/gemini/chat', async (req, res) => {
  try {
    const { message } = req.body;

    const ai = getAiClient();

    try {
  const models = await ai.models.list();
  console.log("========== AVAILABLE MODELS ==========");
  console.log(models);
  console.log("======================================");
} catch (e) {
  console.error("MODEL LIST ERROR:", e);
}
    const chat = ai.chats.create({
      model: "gemini-3.5-flash",
      config: {
        systemInstruction: `You are GrowthBot AI, an encouraging and highly knowledgeable expert Digital Business Growth Advisor.
Help small business owners grow revenue through modern AI tools, high-converting websites, WhatsApp automation, local SEO, and social media marketing.
Keep responses concise, friendly, well-structured with formatting, and actionable.`,
      },
    });

    const response = await chat.sendMessage({ message });

    return res.json({ success: true, reply: response.text });
  } catch (err: any) {
    console.error('Error in /api/gemini/chat:', err);
    return res.status(500).json({ success: false, error: err.message || 'Failed to process AI chat message.' });
  }
});

// Start Express Server & Mount Vite Middleware
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
