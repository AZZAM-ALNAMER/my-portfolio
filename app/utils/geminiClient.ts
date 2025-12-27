import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function getChatbotResponse(
    userMessage: string,
    context: string,
    conversationHistory: { role: string; content: string }[] = []
): Promise<string> {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        // Build conversation context
        const fullPrompt = `${context}

CONVERSATION HISTORY:
${conversationHistory.map(msg => `${msg.role}: ${msg.content}`).join("\n")}

USER QUESTION: ${userMessage}

AI RESPONSE:`;

        const result = await model.generateContent(fullPrompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "I'm having trouble connecting right now. Please try again in a moment or reach out directly via email.";
    }
}
