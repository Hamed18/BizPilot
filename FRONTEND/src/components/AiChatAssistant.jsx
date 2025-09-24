import { useState } from "react";
import { FaPaperPlane, FaUpload } from "react-icons/fa";

const AiChatAssistant = () => {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! I’m your BizPilot AI assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { type: "user", text: input }]);
    setInput("");

    // Simulate bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "This is a simulated AI response." },
      ]);
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <section className="flex justify-center items-center px-4 py-6">
      <div className="w-full max-w-[95%] sm:max-w-lg md:max-w-2xl lg:min-w-5xl flex flex-col">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
          AI Chat Assistant
        </h2>

        {/* Chat Box */}
        <div className="bg-white shadow-lg rounded-lg p-4 
                        h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] 
                        overflow-y-auto flex flex-col gap-3">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-4 py-2 rounded-lg break-words 
                            ${msg.type === "user" ? "bg-blue-500 text-white max-w-[70%] sm:max-w-[60%]" 
                            : "bg-gray-200 text-gray-800 max-w-[70%] sm:max-w-[60%]"}`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="flex flex-col sm:flex-row items-center mt-4 gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
          />
          <div className="flex gap-2 mt-2 sm:mt-0">
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition"
            >
              <FaPaperPlane />
            </button>
            <button
              className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition"
              title="Upload Image (mock)"
            >
              <FaUpload />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiChatAssistant;
