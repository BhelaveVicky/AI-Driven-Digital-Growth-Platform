/**
 * Reusable Gemini AI Service for Digital Growth Platform.
 * Communicates safely with server-side proxy API routes.
 */

/**
 * Sends business details to Gemini AI to generate a full growth audit report.
 * @param {Object} businessDetails - Information about the business.
 * @returns {Promise<Object>} The generated AI report.
 */
export async function analyzeBusiness(businessDetails) {
  try {
    const response = await fetch('/api/gemini/analysis', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(businessDetails),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Server responded with status ${response.status}`);
    }

    const data = await response.json();
    if (!data.success) {
      throw new Error(data.error || 'Failed to generate business analysis.');
    }

    return data.report;
  } catch (error) {
    console.error('Error in analyzeBusiness:', error);
    throw new Error(error.message || 'Network or server error during business analysis.');
  }
}

/**
 * Sends competitor details to Gemini AI for competitor analysis.
 * @param {Object} competitorDetails - Details regarding competitors.
 * @returns {Promise<Object>} The generated competitor analysis.
 */
export async function analyzeCompetitor(competitorDetails) {
  try {
    const response = await fetch('/api/gemini/competitor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(competitorDetails),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Server error ${response.status}`);
    }

    const data = await response.json();
    if (!data.success) {
      throw new Error(data.error || 'Failed to perform competitor analysis.');
    }

    return data.analysis;
  } catch (error) {
    console.error('Error in analyzeCompetitor:', error);
    throw new Error(error.message || 'Error conducting competitor audit.');
  }
}

/**
 * Sends chat prompt to Gemini AI chatbot.
 * @param {string} message - User message.
 * @param {Array} history - Previous conversation messages.
 * @returns {Promise<string>} AI text reply.
 */
export async function sendChatMessage(message, history = []) {
  try {
    const response = await fetch('/api/gemini/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, history }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Server error ${response.status}`);
    }

    const data = await response.json();
    if (!data.success) {
      throw new Error(data.error || 'Failed to receive chat response.');
    }

    return data.reply;
  } catch (error) {
    console.error('Error in sendChatMessage:', error);
    throw new Error(error.message || 'Error communicating with AI Chatbot.');
  }
}
