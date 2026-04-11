"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useChat } from "@ai-sdk/react";
import type { UIMessage } from "ai";
import { X, Send, Sparkles, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import ChatMessage from "./ChatMessage";

const SUGGESTED_QUESTIONS = [
  "What are Anas's skills?",
  "Tell me about his projects",
  "What's his work experience?",
  "How can I hire him?",
];

/** Extract concatenated text from a UIMessage's parts array. */
function getMessageText(message: UIMessage): string {
  return message.parts
    .filter(
      (part): part is { type: "text"; text: string } => part.type === "text",
    )
    .map((part) => part.text)
    .join("");
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { messages, sendMessage, status, setMessages } = useChat();

  // Derive a simple boolean for convenience
  const isLoading = status === "streaming" || status === "submitted";

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 350);
    }
  }, [isOpen]);

  // Show tooltip after 3s on first load
  useEffect(() => {
    const t = setTimeout(() => setShowTooltip(true), 3000);
    return () => clearTimeout(t);
  }, []);

  // Hide tooltip when chat opens
  useEffect(() => {
    if (isOpen) setShowTooltip(false);
  }, [isOpen]);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;
    const text = input.trim();
    setInput("");
    sendMessage({ text });
  };

  const handleSuggestedQuestion = (question: string) => {
    setInput("");
    sendMessage({ text: question });
  };

  const lastMessage = messages[messages.length - 1];
  const isStreaming =
    status === "streaming" && lastMessage?.role === "assistant";
  const showTypingBubble =
    status === "submitted" && lastMessage?.role === "user";

  return (
    <div className="fixed bottom-6 right-6 z-200 flex flex-col items-end gap-3">
      {/* ── Chat Window ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-window"
            className={cn(
              "w-[360px] sm:w-[390px]",
              "rounded-2xl border border-border bg-background",
              "shadow-2xl shadow-black/10 dark:shadow-black/40",
              "flex flex-col overflow-hidden",
            )}
            initial={{ opacity: 0, scale: 0.88, y: 16, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 16 }}
            transition={{ type: "spring", stiffness: 340, damping: 30 }}
            style={{ maxHeight: "min(580px, calc(100vh - 110px))" }}
          >
            {/* ── Header ── */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-background/95 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-primary/10 text-primary border border-primary/20">
                      <Sparkles size={14} />
                    </AvatarFallback>
                  </Avatar>
                  {/* Online dot */}
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-background" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold leading-none">
                      Anas&apos;s Assistant
                    </p>
                    <Badge
                      variant="secondary"
                      className="text-[9px] px-1.5 py-0 h-4 font-medium"
                    >
                      AI
                    </Badge>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    Ask me anything about Anas
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {messages.length > 0 && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-muted-foreground cursor-pointer hover:text-foreground"
                        onClick={() => setMessages([])}
                      >
                        <RotateCcw size={13} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="left" className="text-xs">
                      Clear chat
                    </TooltipContent>
                  </Tooltip>
                )}

                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-muted-foreground cursor-pointer hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={15} />
                </Button>
              </div>
            </div>

            {/* ── Messages ── */}
            <div
              className="flex-1 min-h-0 overflow-y-auto"
              onWheel={(e) => {
                // Completely halt the event from bubbling up to Lenis context
                e.stopPropagation();
              }}
            >
              <div className="p-4 space-y-4">
                  {/* Welcome screen */}
                  {messages.length === 0 && (
                    <motion.div
                      className="flex flex-col items-center text-center pt-3 pb-1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                    >
                      <motion.div
                        className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3"
                        animate={{ rotate: [0, -6, 6, 0] }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          repeatDelay: 4,
                        }}
                      >
                        <Sparkles size={26} />
                      </motion.div>

                      <p className="text-sm font-semibold mb-1">Hi there! 👋</p>
                      <p className="text-xs text-muted-foreground max-w-[230px] leading-relaxed">
                        I&apos;m Anas&apos;s AI assistant. Ask me about his
                        skills, projects, experience, or how to get in touch.
                      </p>

                      <Separator className="my-4 w-full" />

                      {/* Suggested questions */}
                      <div className="flex flex-col gap-2 w-full">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium mb-1">
                          Suggested questions
                        </p>
                        {SUGGESTED_QUESTIONS.map((q, i) => (
                          <motion.button
                            key={q}
                            onClick={() => handleSuggestedQuestion(q)}
                            className={cn(
                              "text-xs text-left px-3.5 py-2.5 rounded-xl w-full",
                              "border border-border bg-muted/30",
                              "hover:bg-accent hover:border-primary/30 hover:text-accent-foreground",
                              "text-muted-foreground transition-all duration-200",
                              "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer",
                            )}
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + i * 0.07 }}
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {q}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Messages */}
                  {messages.map((message, i) => (
                    <ChatMessage
                      key={message.id}
                      role={message.role as "user" | "assistant"}
                      content={getMessageText(message)}
                      isStreaming={isStreaming && i === messages.length - 1}
                    />
                  ))}

                  {/* Typing bubble — waiting for first chunk */}
                  {showTypingBubble && (
                    <motion.div
                      className="flex gap-2.5 items-start"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <Avatar className="w-7 h-7 shrink-0 mt-0.5">
                        <AvatarFallback className="bg-primary/10 text-primary border border-primary/20 text-[10px]">
                          <Sparkles size={12} />
                        </AvatarFallback>
                      </Avatar>
                      <div className="px-3.5 py-3 rounded-2xl rounded-tl-sm bg-muted border border-border">
                        <div className="flex gap-1 items-center h-3">
                          {[0, 1, 2].map((i) => (
                            <motion.span
                              key={i}
                              className="w-1.5 h-1.5 rounded-full bg-muted-foreground"
                              animate={{
                                opacity: [0.3, 1, 0.3],
                                y: [0, -3, 0],
                              }}
                              transition={{
                                duration: 0.9,
                                repeat: Infinity,
                                delay: i * 0.18,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
            </div>

            {/* ── Input ── */}
            <div className="p-3 border-t border-border bg-background/95 backdrop-blur-sm">
              <form
                id="chat-form"
                onSubmit={handleSubmit}
                className="flex gap-2 items-center"
              >
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Anas..."
                  disabled={isLoading}
                  className={cn(
                    "flex-1 h-9 text-sm rounded-xl",
                    "bg-muted/50 border-border/70",
                    "placeholder:text-muted-foreground/50",
                    "focus-visible:ring-1 focus-visible:ring-primary/50",
                    "disabled:opacity-50",
                  )}
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={isLoading || !input.trim()}
                  className="h-9 w-9 rounded-xl shrink-0 cursor-pointer"
                >
                  <Send size={14} />
                </Button>
              </form>
              <p className="text-[10px] text-muted-foreground/40 text-center mt-2 select-none">
                Powered by Gemini AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Tooltip above FAB ── */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            key="fab-tooltip"
            className={cn(
              "absolute bottom-[68px] right-0 pointer-events-none",
              "px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap",
              "bg-popover text-popover-foreground border border-border",
              "shadow-md",
            )}
            initial={{ opacity: 0, y: 6, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.92 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            Try Anas&apos;s assistant ✨{/* Arrow */}
            <span className="absolute -bottom-1.5 right-[22px] w-3 h-3 bg-popover border-r border-b border-border rotate-45 rounded-sm" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FAB ── */}
      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        onMouseEnter={() => {
          if (!isOpen) setShowTooltip(true);
        }}
        onMouseLeave={() => setShowTooltip(false)}
        className={cn(
          "w-14 h-14 rounded-2xl",
          "bg-primary text-primary-foreground",
          "shadow-lg hover:shadow-xl",
          "flex items-center justify-center",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "transition-shadow duration-300 cursor-pointer",
        )}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label={isOpen ? "Close assistant" : "Open Anas's assistant"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="x-icon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span
              key="sparkles-icon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <Sparkles size={22} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
