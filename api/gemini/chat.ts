import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method Not Allowed",
    });
  }

  try {
    const { message } = req.body;

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        success: false,
        error: "GEMINI_API_KEY environment variable is missing.",
      });
    }

    const https = await import("https");

    const data = JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: `You are GrowthBot AI, an encouraging and highly knowledgeable expert Digital Business Growth Advisor.

Help small business owners grow revenue through modern AI tools, high-converting websites, WhatsApp automation, local SEO, and social media marketing.

Keep responses concise, friendly, well-structured with formatting, and actionable.

User message:
${message}`,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.7,
      },
    });

    const options = {
      hostname: "generativelanguage.googleapis.com",
      port: 443,
      method: "POST",
      path: `/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`,
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(data),
      },
    };

    const result: any = await new Promise((resolve, reject) => {
      const request = https.request(options, (response) => {
        let body = "";

        response.on("data", (chunk) => {
          body += chunk;
        });

        response.on("end", () => {
          try {
            resolve(JSON.parse(body));
          } catch {
            reject(new Error("Failed to parse Gemini response"));
          }
        });
      });

      request.on("error", reject);
      request.write(data);
      request.end();
    });

    if (result.error) {
      return res.status(500).json({
        success: false,
        error: result.error.message,
      });
    }

    const reply =
      result?.candidates?.[0]?.content?.parts?.find(
        (part: any) => typeof part.text === "string"
      )?.text || "No response generated.";

    return res.status(200).json({
      success: true,
      reply,
    });
  } catch (err: any) {
    console.error(err);

    return res.status(500).json({
      success: false,
      error: err.message || "Internal Server Error",
    });
  }
}