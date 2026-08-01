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
    const { businessName, category, location, competitorNames, keyOffering } = req.body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY environment variable is missing.');
    }

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
    let analysisData;
    try {
      analysisData = JSON.parse(cleanedText);
    } catch {
      analysisData = { rawAnalysis: rawText };
    }

    return res.json({ success: true, analysis: analysisData });
  } catch (err: any) {
    console.error('Error in /api/gemini/competitor:', err);
    return res.status(500).json({ success: false, error: err.message || 'Failed to analyze competitors.' });
  }
}
