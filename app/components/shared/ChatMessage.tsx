"use client";

import { motion } from "framer-motion";
import { HiUser, HiSparkles } from "react-icons/hi";

interface ChatMessageProps {
    role: "user" | "assistant";
    content: string;
    isLatest?: boolean;
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
    const isUser = role === "user";

    return (
        <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"} mb-4 animate-fade-in`}>
            {/* Avatar */}
            <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isUser
                        ? "bg-tertiary-color text-white"
                        : "bg-gradient-to-br from-primary-color to-tertiary-color text-white"
                    }`}
            >
                {isUser ? <HiUser className="text-sm" /> : <HiSparkles className="text-sm" />}
            </div>

            {/* Message Bubble */}
            <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 ${isUser
                        ? "bg-tertiary-color text-white rounded-tr-sm"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-tl-sm"
                    }`}
            >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{content}</p>
            </div>
        </div>
    );
}
