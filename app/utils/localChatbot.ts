import { profileData } from "@/app/data/profile";

interface SmartResponse {
    keywords: string[];
    response: string;
}

// Generate smart responses based on profile data
const smartResponses: SmartResponse[] = [
    // Skills
    {
        keywords: ["skill", "skills", "expertise", "know", "technologies", "tech", "stack"],
        response: `Mohamed is a highly skilled AI & Machine Learning Engineer with a focus on building production-ready systems.
        
His core expertise covers several key areas:
1. Machine Learning: PyTorch, TensorFlow, Scikit-learn, CNN/RNN.
2. Generative AI: OpenAI API, LangChain, RAG Architecture, FAISS.
3. Backend Development: FastAPI, Django, Docker, AWS.

You can view his full technical breakdown in the Skills section on the About page.`
    },
    // Experience
    {
        keywords: ["experience", "work", "job", "career", "worked", "company", "companies"],
        response: `Mohamed's professional experience:\n\n${profileData.experiences.map(e => `• **${e.role}** at ${e.company} (${e.period})\n  ${e.details[0]}`).join("\n\n")}`
    },
    // Projects
    {
        keywords: ["project", "projects", "built", "build", "portfolio", "work"],
        response: `Mohamed has built several impressive AI systems that demonstrate his capabilities.

Al-Maktabah Al-Shamilah RAG: An Arabic-first search system with 210k+ documents and semantic search.

Memorixal: An enterprise healthcare platform with real-time patient monitoring and AI insights.

Tabyin: An intelligent legal assistant for Saudi law with offline voice capabilities.

Want to see more? Explore the full showcase on the Projects page!`
    },
    // RAG
    {
        keywords: ["rag", "retrieval", "augmented", "generation", "knowledge", "base"],
        response: `Mohamed specializes in RAG (Retrieval-Augmented Generation) systems! He has built custom knowledge engines using LangChain, FAISS, and vector databases. His Caregiver Assistant project is a great example of his RAG expertise, featuring dual-model support for Ollama and OpenAI.`
    },
    // Chatbot/LLM
    {
        keywords: ["chatbot", "llm", "gpt", "gemini", "llama", "conversational", "ai"],
        response: `Mohamed has extensive experience building AI chatbots and LLM integrations! He has worked with GPT, Gemini, Llama, and other state-of-the-art models. He builds custom bots that understand context, tone, and specific business logic.`
    },
    // Computer Vision
    {
        keywords: ["vision", "cv", "image", "detection", "medical", "eye"],
        response: `Mohamed has worked on Computer Vision projects including medical image analysis and disease detection. His Eye Disease Detection project demonstrates his expertise in implementing cutting-edge CV models for healthcare applications.`
    },
    // Education
    {
        keywords: ["education", "degree", "study", "university", "college", "graduated"],
        response: `Mohamed holds a **${profileData.education.degree}** from ${profileData.education.institution}.\n\n${profileData.education.specialization}\n\nExpected graduation: ${profileData.education.graduation}`
    },
    // Contact
    {
        keywords: ["contact", "email", "reach", "hire", "available", "freelance"],
        response: `Mohamed is currently available for new opportunities! You can reach him via:

Email: ${profileData.email}
Location: ${profileData.location}

For more meaningful connections, please visit the Contact page directly.`
    },
    // About/Who
    {
        keywords: ["who", "about", "tell", "introduce", "yourself", "mohamed"],
        response: `${profileData.name} is an ${profileData.title}.\n\n${profileData.summary}\n\nHe specializes in: ${profileData.preferredRoles.join(", ")}`
    },
    // Certifications
    {
        keywords: ["certification", "certified", "certificate", "credentials"],
        response: `Mohamed's certifications include:\n\n${profileData.certifications.map(c => `• **${c.name}** by ${c.issuer} (${c.year})\n  ${c.detail}`).join("\n\n")}`
    },
    // Python
    {
        keywords: ["python", "programming", "code", "language"],
        response: `Mohamed is proficient in Python and uses it extensively for AI/ML development. His tech stack includes Flask, FastAPI, Scikit-learn, TensorFlow, and various other Python frameworks and libraries.`
    },
    // Services
    {
        keywords: ["service", "services", "offer", "help", "can you do"],
        response: `Mohamed offers the following AI services:\n\n${profileData.services.map(s => `• **${s.title}**: ${s.description.substring(0, 80)}...`).join("\n\n")}\n\nVisit the Services page for more details!`
    }
];

// Default responses for unknown queries
const defaultResponses = [
    `I'm not sure about that specific topic, but I can tell you about Mohamed's skills, projects, experience, or services. What would you like to know?`,
    `For more detailed information, you might want to explore the website or reach out to Mohamed directly at ${profileData.email}.`,
    `I don't have specific information about that. Would you like to know about Mohamed's AI projects, technical skills, or how to contact him?`
];

// Greeting responses
const greetingResponses = [
    `Hello! I'm Mohamed's AI assistant. I can tell you about his skills, projects, experience, and services. What would you like to know?`,
    `Hi there! Ask me anything about Mohamed's work in AI/ML, his projects, or how to get in touch with him!`
];

export function getLocalChatbotResponse(message: string): string {
    const lowerMessage = message.toLowerCase();

    // Check for Arabic greetings
    if (/^(مرحبا|هلا|احلا|اهلا|اهلين|سلام|السلام عليكم)/.test(lowerMessage)) {
        return "أهلاً بك! أنا المساعد الذكي الخاص بمحمد. يمكنني إخبارك عن مهاراته، مشاريعه، خبراته، وخدماته. عما تريد أن تسأل؟";
    }

    // Check for Arabic thanks
    if (/شكرا|تسلم|يعطيك العافية/.test(lowerMessage)) {
        return "على الرحب والسعة! لا تتردد في طرح المزيد من الأسئلة.";
    }

    // Check for greetings
    if (/^(hi|hello|hey|greetings|good morning|good afternoon|good evening)/i.test(lowerMessage)) {
        return greetingResponses[Math.floor(Math.random() * greetingResponses.length)];
    }

    // Check for thanks
    if (/thank|thanks/i.test(lowerMessage)) {
        return `You're welcome! Feel free to ask if you have more questions about Mohamed's work.`;
    }

    // Find best matching response based on keywords
    let bestMatch: SmartResponse | null = null;
    let bestScore = 0;

    for (const sr of smartResponses) {
        const score = sr.keywords.filter(keyword => lowerMessage.includes(keyword)).length;
        if (score > bestScore) {
            bestScore = score;
            bestMatch = sr;
        }
    }

    if (bestMatch && bestScore > 0) {
        return bestMatch.response;
    }

    // Return default response
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}
