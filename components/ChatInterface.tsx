
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { geminiService } from '../services/geminiService';

const ChatInterface: React.FC = () => {
  const STORAGE_KEY = 'at_tijani_chat_history_v2';

  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Erreur de chargement de l'historique", e);
      }
    }
    return [{
      id: '1',
      role: 'model',
      content: 'Salam alaykum. Je suis AT-TIJANI Help. Comment puis-je vous accompagner aujourd\'hui dans votre cheminement spirituel ?',
      timestamp: Date.now()
    }];
  });

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.slice(-10).map(m => ({
        role: m.role,
        parts: [{ text: m.content }]
      }));
      
      const response = await geminiService.chat(input, history);
      
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: response,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
      const errorMsg: Message = {
        id: 'error-' + Date.now(),
        role: 'model',
        content: "Désolé, une erreur technique est survenue. Veuillez réessayer.",
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearHistory = () => {
    if (window.confirm("Voulez-vous vraiment effacer toute la discussion ?")) {
      const defaultMsg: Message = {
        id: '1',
        role: 'model',
        content: 'Salam alaykum. Historique effacé. Comment puis-je vous aider ?',
        timestamp: Date.now()
      };
      setMessages([defaultMsg]);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
      <div className="p-5 border-b bg-white flex items-center justify-between">
        <h2 className="font-bold text-slate-800 flex items-center gap-3">
          <div className="w-2.5 h-2.5 bg-emerald-600 rounded-full shadow-[0_0_8px_rgba(5,150,105,0.5)]"></div>
          Discussion Spirituelle
        </h2>
        <button 
          onClick={clearHistory}
          className="text-xs text-slate-400 hover:text-emerald-700 font-bold uppercase tracking-wider transition-colors"
        >
          Effacer
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-8 bg-slate-50/30">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] md:max-w-[75%] rounded-3xl p-5 shadow-sm ${
              msg.role === 'user' 
                ? 'bg-[#064e3b] text-white rounded-tr-none' 
                : 'bg-white text-slate-800 rounded-tl-none border border-slate-200 shadow-md'
            }`}>
              <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">{msg.content}</p>
              <div className={`text-[9px] mt-3 font-bold uppercase tracking-widest ${msg.role === 'user' ? 'text-emerald-200/60' : 'text-slate-400'}`}>
                {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl p-4 rounded-tl-none border border-slate-200 flex gap-1.5 shadow-sm">
              <span className="w-2 h-2 bg-emerald-800 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-emerald-800 rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-2 h-2 bg-emerald-800 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 border-t bg-white">
        <div className="flex gap-3 items-center bg-slate-100 rounded-2xl p-2 border border-slate-200 focus-within:ring-2 focus-within:ring-emerald-900/10 transition-all">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Écrivez votre message..."
            className="flex-1 bg-transparent border-none focus:outline-none px-4 py-2 text-slate-800 font-medium"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-[#064e3b] hover:bg-black text-white px-8 py-3 rounded-xl font-bold transition-all disabled:opacity-30 shadow-lg"
          >
            Envoyer
          </button>
        </div>
        <p className="text-[10px] text-center text-slate-400 mt-4 font-medium uppercase tracking-tighter">
          Appuyez sur Entrée pour envoyer • Propulsé par AT-TIJANI AI
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;
