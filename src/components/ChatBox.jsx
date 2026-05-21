import { useState, useRef, useEffect } from 'react';
import MessageBubble from './MessageBubble';
import InputBox from './InputBox';
import LoadingSpinner from './LoadingSpinner';
import { getChatResponse } from '../services/api';

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I am your Smart Crop Analyser. Ask me anything about agriculture, crops, or farming practices.", sender: 'ai' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateId = () => Math.random().toString(36).substring(2, 9) + Date.now();

  const handleSendMessage = async (text) => {
    // Add user message
    const newUserMessage = { id: generateId(), text, sender: 'user' };
    setMessages(prev => [...prev, newUserMessage]);
    setIsLoading(true);

    try {
      // Call API
      const responseText = await getChatResponse(text);
      
      // Add AI response
      setMessages(prev => [
        ...prev, 
        { id: generateId(), text: responseText, sender: 'ai' }
      ]);
    } catch (error) {
      setMessages(prev => [
        ...prev, 
        { id: generateId(), text: `Error: ${error.message}`, sender: 'ai' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)] bg-gray-50 rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      <div className="flex-grow p-4 overflow-y-auto">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm px-4 py-2 shadow-sm">
              <LoadingSpinner />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <InputBox onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default ChatBox;
