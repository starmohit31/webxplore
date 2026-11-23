
import React, { useState, useRef, useEffect } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([]);

  const chatBodyRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  // Auto Scroll
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop =
        chatBodyRef.current.scrollHeight;
    }
  }, [messages, isTyping, isOpen]);

  // Clear pending timeout when component unmounts
  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  // Demo Bot Responses
  const getBotResponse = (message) => {
    const text = message.toLowerCase();

    if (
      text.includes("hello") ||
      text.includes("hi") ||
      text.includes("hey")
    ) {
      return "Hello! 👋 Welcome to WebXplore Technologies. How can I help you today?";
    }

    if (
      text.includes("service") ||
      text.includes("services")
    ) {
      return "We offer website development, WordPress development, React development, UI/UX design and website maintenance services.";
    }

    if (text.includes("wordpress")) {
      return "We provide WordPress website development, custom theme development, website customization and maintenance.";
    }

    if (text.includes("react")) {
      return "We build modern and interactive web applications using React. Tell us about your project requirements!";
    }

    if (
      text.includes("website") ||
      text.includes("development")
    ) {
      return "We help businesses create modern, responsive and professional websites. What type of website are you planning?";
    }

    if (
      text.includes("contact") ||
      text.includes("email") ||
      text.includes("phone")
    ) {
      return "You can contact our team using the WhatsApp button on this website to discuss your project.";
    }

    if (
      text.includes("price") ||
      text.includes("cost") ||
      text.includes("charges")
    ) {
      return "Website pricing depends on your requirements, features and project complexity. Please share your project details for an estimate.";
    }

    if (
      text.includes("thank")
    ) {
      return "You're welcome! 😊 Let me know if you need any more help.";
    }

    return "Thanks for contacting WebXplore! 😊 Could you tell me a little more about your project so I can guide you better?";
  };

  // Send Message
  const sendMessage = (text = input) => {
    const userMessage = text.trim();

    if (!userMessage || isTyping) return;

    setMessages((previousMessages) => [
      ...previousMessages,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setInput("");
    setIsTyping(true);

    typingTimeoutRef.current = setTimeout(() => {
      const reply = getBotResponse(userMessage);

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          role: "bot",
          text: reply,
        },
      ]);

      setIsTyping(false);
      typingTimeoutRef.current = null;
    }, 1000);
  };

  // Clear Chat
  const clearChat = () => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = null;
    }

    setMessages([]);
    setInput("");
    setIsTyping(false);
  };

  const suggestions = [
    "What services do you offer?",
    "Website development",
    "React development",
    "How can I contact you?",
  ];

  return (
    <div className="ai-chatbot">

      {/* CHAT LAUNCHER BUTTON */}
      <button
        type="button"
        className={`chat-launcher ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
        aria-expanded={isOpen}
        title="Chat with WebXplore"
      >
        {isOpen ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-comment-dots"></i>
        )}
      </button>

      {/* CHAT WINDOW */}
      {isOpen && (
        <div className="chat-window">

          {/* CHAT HEADER */}
          <div className="chat-header">

            <div className="chat-brand">
              <div className="chat-avatar">
                <i className="fas fa-robot"></i>
              </div>

              <div className="chat-brand-info">
                <h3>WebXplore Assistant</h3>

                <div className="chat-status">
                  <i></i>
                  Online Demo Assistant
                </div>
              </div>
            </div>

            <div className="chat-header-actions">

              <button
                type="button"
                onClick={clearChat}
                title="Clear chat"
                aria-label="Clear chat"
              >
                <i className="fas fa-trash-alt"></i>
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close chat"
                aria-label="Close chatbot"
              >
                <i className="fas fa-times"></i>
              </button>

            </div>
          </div>

          {/* CHAT BODY */}
          <div className="chat-body" ref={chatBodyRef}>

            {/* WELCOME SCREEN */}
            {messages.length === 0 && (
              <div className="chat-welcome">

                <div className="welcome-icon">
                  <i className="fas fa-robot"></i>
                </div>

                <h3>How can we help?</h3>

                <p>
                  Welcome to WebXplore Technologies!
                  Ask us about our web development
                  services and let's discuss your project.
                </p>

                <div className="chat-suggestions">
                  {suggestions.map((item, index) => (
                    <button
                      type="button"
                      key={index}
                      onClick={() => sendMessage(item)}
                      disabled={isTyping}
                    >
                      {item}
                    </button>
                  ))}
                </div>

              </div>
            )}

            {/* CHAT MESSAGES */}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message ${message.role}`}
              >

                {message.role === "bot" && (
                  <div className="message-avatar">
                    <i className="fas fa-robot"></i>
                  </div>
                )}

                <div className="message-content">
                  {message.text}
                </div>

              </div>
            ))}

            {/* TYPING INDICATOR */}
            {isTyping && (
              <div className="chat-message bot">

                <div className="message-avatar">
                  <i className="fas fa-robot"></i>
                </div>

                <div className="message-content typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

              </div>
            )}

          </div>

          {/* CHAT INPUT */}
          <form
            className="chat-input-area"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
          >

            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
              aria-label="Type your message"
              autoComplete="off"
            />

            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              aria-label="Send message"
            >
              <i className="fas fa-paper-plane"></i>
            </button>

          </form>

          {/* CHAT FOOTER */}
          <div className="chat-footer">
            Powered by WebXplore Technologies
          </div>

        </div>
      )}

    </div>
  );
};

export default Chatbot;
