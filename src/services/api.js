import axios from 'axios';

export const getChatResponse = async (message) => {
  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
  const model = import.meta.env.VITE_OPENROUTER_MODEL || 'openrouter/free';

  if (!apiKey || apiKey.trim() === '') {
    // If no OpenRouter API Key is provided, guide the user on how to add it.
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          "⚠️ **OpenRouter API is not configured yet.**\n\nTo get real AI answers, please add your OpenRouter API Key to the `.env` file in the project root:\n`VITE_OPENROUTER_API_KEY=your_openrouter_key`\n\n*After adding it, restart your Vite dev server to apply the changes!*"
        );
      }, 1000);
    });
  }

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: model,
        max_tokens: 1000, // Limit tokens to prevent credit issues on free accounts
        messages: [
          {
            role: 'user',
            content: `You are an expert agricultural and crop analysis assistant. Help the user with their agricultural questions. User's query: ${message}`
          }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const reply = response.data?.choices?.[0]?.message?.content;
    if (reply) {
      return reply;
    } else {
      throw new Error("Could not parse the response from OpenRouter API.");
    }
  } catch (error) {
    console.error('OpenRouter API Error:', error);
    const errorMessage = error.response?.data?.error?.message || error.message;
    throw new Error(`OpenRouter API Error: ${errorMessage}`);
  }
};


