"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { HiX, HiSparkles, HiPaperAirplane } from "react-icons/hi";
import ChatMessage from "./ChatMessage";

interface Message {
    role: "user" | "assistant";
    content: string;
}

export default function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content: "Hi! I'm Azzam's AI assistant. Ask me about his AI engineering experience, skills, or projects!",
        },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput("");
        setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
        setIsLoading(true);

        try {
            const conversationHistory = messages.map((msg) => ({
                role: msg.role === "user" ? "User" : "Assistant",
                content: msg.content,
            }));

            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: userMessage,
                    conversationHistory,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to get response");
            }

            const data = await response.json();
            setMessages((prev) => [...prev, { role: "assistant", content: data.response }]);
        } catch (error) {
            console.error("Chat error:", error);
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "Sorry, I encountered an error. Please try again or connect with Azzam via LinkedIn.",
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Floating Button */}
            <AnimatePresence>
                {!isOpen && (
                    <button
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-tertiary-color to-primary-color text-white shadow-2xl flex items-center justify-center hover:shadow-tertiary-color/50 transition-all hover:scale-110 active:scale-95 animate-fade-in"
                    >
                        <HiSparkles className="text-2xl" />
                    </button>
                )}
            </AnimatePresence>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed bottom-6 right-6 z-50 w-[400px] h-[600px] max-w-[calc(100vw-3rem)] max-h-[calc(100vh-3rem)] rounded-3xl border dark:border-zinc-800 border-zinc-200 bg-white dark:bg-zinc-900 shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl animate-slide-up">
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b dark:border-zinc-800 border-zinc-200 bg-gradient-to-r from-tertiary-color/10 to-primary-color/10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-tertiary-color to-primary-color flex items-center justify-center">
                                    <HiSparkles className="text-white text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm">AI Assistant</h3>
                                    <p className="text-xs text-zinc-500">Ask about Azzam</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                            >
                                <HiX className="text-xl" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((msg, idx) => (
                                <ChatMessage
                                    key={idx}
                                    role={msg.role}
                                    content={msg.content}
                                    isLatest={idx === messages.length - 1}
                                />
                            ))}
                            {isLoading && (
                                <div className="flex gap-3 mb-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary-color to-tertiary-color flex items-center justify-center">
                                        <HiSparkles className="text-sm text-white" />
                                    </div>
                                    <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl rounded-tl-sm px-4 py-3">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                                            <div className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                                            <div className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t dark:border-zinc-800 border-zinc-200 bg-zinc-50/50 dark:bg-zinc-900/50">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Ask me anything..."
                                    disabled={isLoading}
                                    className="flex-1 px-4 py-3 rounded-xl border dark:border-zinc-700 border-zinc-300 bg-white dark:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-tertiary-color/50 text-sm disabled:opacity-50"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim() || isLoading}
                                    className="px-4 py-3 rounded-xl bg-tertiary-color text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <HiPaperAirplane className="text-lg" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
