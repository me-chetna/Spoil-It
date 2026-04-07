"use client";

import { useState, useRef, useEffect } from 'react';
import { Send, Film, Sparkles } from 'lucide-react';

// Types to match the Figma UI components
interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your movie recommendation assistant. Tell me what kind of movies you're in the mood for, and I'll suggest some great options!",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatAreaRef = useRef<HTMLDivElement>(null);

  const userId = "demo-user"; // Replace with your real auth ID

  const scrollToBottom = () => {
    if (chatAreaRef.current) {
      setTimeout(() => {
        if (chatAreaRef.current) {
          chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
        }
      }, 0);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText || isLoading) return;

    // 1. Add User Message to UI
    const userMsg: Message = {
      id: Date.now().toString(),
      text: messageText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      // 2. Fetch from your Gemini API endpoint
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          message: messageText,
        }),
      });

      const data = await res.json();

      // 3. Add Bot Message to UI
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: data.reply || "I'm sorry, I couldn't process that. Try again!",
        isBot: true,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Chat Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen bg-black flex flex-col">
        
        {/* Header */}
        <div className="shrink-0 bg-black border-b-4 border-cyan-400 p-6 shadow-[0_4px_20px_rgba(34,211,238,0.3)]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black border-2 border-cyan-400 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.5)]">
              <Film className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-white text-xl font-bold mb-1">SpillBot</h1>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(163,230,53,0.8)]"></div>
                <span className="text-sm text-lime-400">Your personal movie assistant</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div ref={chatAreaRef} className="flex-1 overflow-y-auto p-6 bg-white flex flex-col gap-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] px-4 py-3 rounded-2xl shadow-sm ${
                  msg.isBot
                    ? 'bg-zinc-100 text-black border-l-4 border-cyan-400'
                    : 'bg-black text-white border-r-4 border-cyan-400'
                }`}
              >
                <p className="text-sm leading-relaxed">{msg.text}</p>
                <span className="text-[10px] opacity-50 mt-1 block">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          ))}

          {/* Typing/Loading Indicator */}
          {isLoading && (
            <div className="flex gap-3 mb-4">
              <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 bg-black border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
              </div>
              <div className="bg-zinc-900 border-2 border-cyan-400/30 rounded-2xl px-4 py-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="shrink-0 bg-zinc-50 border-t-2 border-zinc-200 p-6">
          {/* Quick Suggestions */}
          
          <div className="flex gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask for a movie recommendation..."
              className="flex-1 px-4 py-3 bg-white border-2 border-zinc-300 rounded-xl focus:outline-none focus:border-cyan-400 transition-all text-black"
            />
            <button
              onClick={() => handleSend()}
              disabled={!inputValue.trim() || isLoading}
              className="px-6 py-3 bg-black border-2 border-cyan-400 rounded-xl text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] disabled:opacity-50 transition-all"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
  );
}