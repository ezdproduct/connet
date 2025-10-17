import React, { useState, useRef, useEffect } from "react";
import { Icons } from "./Icons";
import { Link } from "react-router-dom";

interface Message {
  role: "user" | "assistant";
  content: string | React.ReactNode;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Xin chào! Tôi có thể giúp gì cho bạn?" },
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isSending) return;
    setIsSending(true);

    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    const webhookUrl = "https://n8n.probase.tech/webhook/chat-co";

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!res.ok) throw new Error("Network response was not ok");

      const data = await res.json();

      // 🔍 Kiểm tra xem data là mảng hay object
      if (Array.isArray(data)) {
        // Trường hợp trả về nhiều tin nhắn
        data.forEach((item) => {
          const text = item.text || item.reply || JSON.stringify(item);
          const botMsg: Message = { role: "assistant", content: text };
          setMessages((prev) => [...prev, botMsg]);
        });
      } else if (data.reply) {
        // Trường hợp chỉ 1 tin nhắn
        const botMsg: Message = { role: "assistant", content: data.reply };
        setMessages((prev) => [...prev, botMsg]);
      } else {
        const botMsg: Message = {
          role: "assistant",
          content: "Tôi chưa hiểu ý bạn. Bạn có thể nói rõ hơn không?",
        };
        setMessages((prev) => [...prev, botMsg]);
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      const errorMsg: Message = {
        role: "assistant",
        content: (
          <div>
            <p>
              Chào bạn, mình là Cò – đại sứ của dự án Còn Nét Gen 🌿 Có vẻ đã có
              lỗi xảy ra. Xin hãy liên hệ trực tiếp với chúng mình nhé.
            </p>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-block bg-white text-[var(--color-primary)] font-bold px-4 py-2 rounded-full border-2 border-[var(--color-primary)] hover:bg-green-50 transition-colors text-sm"
            >
              Liên hệ
            </Link>
          </div>
        ),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-[var(--color-primary)] text-white p-4 rounded-full shadow-lg hover:bg-[var(--color-primary-hover)] transition-transform hover:scale-110 z-50"
        aria-label="Open chatbot"
      >
        <Icons.Chat />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-sm h-[60vh] bg-white rounded-lg shadow-2xl flex flex-col z-50">
          <header className="bg-[var(--color-primary)] text-white p-4 flex justify-between items-center rounded-t-lg">
            <h3 className="font-bold text-lg">CÒN NÉT GEN Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <Icons.Close />
            </button>
          </header>

          {/* Khu vực hiển thị tin nhắn */}
          <div
            id="chatbot-messages"
            className="flex-1 p-4 overflow-y-auto bg-gray-50"
          >
            <div className="flex flex-col space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                      m.role === "user"
                        ? "bg-[var(--color-primary)] text-white rounded-br-none"
                        : "bg-gray-200 text-gray-800 rounded-bl-none"
                    }`}
                  >
                    {typeof m.content === "string"
                      ? m.content.split("\n").map((line, idx) => (
                          <p key={idx} className="whitespace-pre-line">
                            {line}
                          </p>
                        ))
                      : m.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Ô nhập tin nhắn */}
          <div className="p-4 border-t flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Nhập tin nhắn..."
              className="flex-1 p-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none"
              disabled={isSending}
            />
            <button
              onClick={sendMessage}
              disabled={isSending}
              className={`${
                isSending
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]"
              } text-white px-4 rounded-r-md transition-colors`}
            >
              {isSending ? "..." : "Gửi"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
