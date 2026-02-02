import { useState, useRef, useEffect } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  sender: "user" | "support";
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: "1",
    text: "Здравствуйте! Добро пожаловать в службу поддержки Транспорт TM. Чем мы можем вам помочь?",
    sender: "support",
    timestamp: new Date(Date.now() - 60000),
  },
];

const SupportChat = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");

    // Simulate support response
    setTimeout(() => {
      const supportMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Спасибо за ваше сообщение! Наш специалист скоро с вами свяжется. Среднее время ответа: 5-10 минут.",
        sender: "support",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, supportMessage]);
    }, 1000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <AppLayout title="Чат с поддержкой" showNotifications={false} hideBottomNav>
      <div className="flex flex-col h-[calc(100vh-56px-env(safe-area-inset-bottom))]">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex",
                message.sender === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[80%] rounded-2xl px-4 py-3",
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-card border border-border text-foreground rounded-bl-md"
                )}
              >
                <p className="text-base">{message.text}</p>
                <p
                  className={cn(
                    "text-xs mt-1",
                    message.sender === "user"
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  )}
                >
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-border bg-card p-4 safe-area-bottom">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Введите сообщение..."
              className="flex-1 p-3 bg-secondary rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={handleSend}
              disabled={!inputText.trim()}
              className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                inputText.trim()
                  ? "bg-primary text-primary-foreground active:scale-95"
                  : "bg-secondary text-muted-foreground"
              )}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default SupportChat;
