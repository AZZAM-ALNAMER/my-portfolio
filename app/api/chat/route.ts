import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { generateChatbotContext } from "@/app/utils/chatbotContext";
import { getLocalChatbotResponse } from "@/app/utils/localChatbot";

const apiKey = process.env.GEMINI_API_KEY || "";

export async function POST(request: NextRequest) {
    try {
        const { message, conversationHistory = [] } = await request.json();

        if (!message) {
            return NextResponse.json(
                { error: "Message is required" },
                { status: 400 }
            );
        }

        // Try Gemini API first, fallback to local chatbot
        if (apiKey) {
            try {
                console.log("Attempting to use Gemini API...");
                const genAI = new GoogleGenerativeAI(apiKey);
                const context = generateChatbotContext();

                const fullPrompt = `${context}

CONVERSATION HISTORY:
${conversationHistory.map((msg: any) => `${msg.role}: ${msg.content}`).join("\n")}

USER QUESTION: ${message}

AI RESPONSE:`;

                // Try gemini-1.5-flash first (most commonly available)
                const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });
                const result = await model.generateContent(fullPrompt);
                const response = await result.response;
                const text = response.text();

                console.log("Gemini response received successfully.");
                return NextResponse.json({ response: text });
            } catch (apiError: any) {
                console.error("Gemini API failed, falling back to local chatbot. Error:", apiError.message);
            }
        } else {
            console.warn("GEMINI_API_KEY is not set. Using local chatbot.");
        }

        // Fallback to local chatbot
        const response = getLocalChatbotResponse(message);
        return NextResponse.json({ response });

    } catch (error: any) {
        console.error("Chatbot Error:", error);
        return NextResponse.json(
            { response: "I'm having trouble processing your request. Please try asking about Azzam's skills, projects, or experience." },
            { status: 200 }
        );
    }
}
