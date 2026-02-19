
import React, { useState, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { Quote } from '../types';

const WisdomCard: React.FC = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchQuote = async () => {
    setIsLoading(true);
    try {
      const q = await geminiService.getDailyWisdom();
      setQuote(q);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-emerald-950 mb-2 uppercase tracking-tight">Perles de Gnose</h2>
        <p className="text-emerald-800 italic font-medium">"La sagesse est l'héritage du croyant."</p>
      </div>

      <div className="w-full relative bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl border border-slate-100 overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-3 bg-emerald-900"></div>
        <div className="absolute top-10 right-10 opacity-[0.03]">
           <svg className="w-48 h-48 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L14.017 3H21.017V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8C8.55228 16 9 15.5523 9 15V9C9 8.44772 8.55228 8 8 8H5C3.89543 8 3 7.10457 3 6V3L3 3H10V15C10 18.3137 7.31371 21 4 21H3Z"></path></svg>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center gap-6 py-24">
            <div className="w-16 h-16 border-[6px] border-slate-100 border-t-emerald-900 rounded-full animate-spin"></div>
            <p className="text-emerald-900 font-black uppercase tracking-widest text-xs animate-pulse">Archives Célestes...</p>
          </div>
        ) : quote ? (
          <div className="relative z-10 space-y-12">
            <blockquote className="text-3xl md:text-5xl font-arabic text-emerald-950 leading-relaxed text-center font-bold">
              "{quote.text}"
            </blockquote>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-1 bg-black/10 mb-6 rounded-full"></div>
              <cite className="not-italic font-black text-slate-900 text-xl tracking-tight">— Cheikh Ibrahim Niass (Baye)</cite>
              <p className="text-slate-400 text-xs mt-2 uppercase font-bold tracking-widest">{quote.source}</p>
            </div>

            <div className="mt-16 bg-slate-50 p-8 rounded-[2rem] border border-slate-200 shadow-inner">
              <h4 className="text-[10px] font-black text-emerald-900 uppercase tracking-[0.3em] mb-4 text-center">Portée Spirituelle</h4>
              <p className="text-slate-800 text-center leading-relaxed font-semibold">
                {quote.explanation}
              </p>
            </div>
          </div>
        ) : null}

        <button 
          onClick={fetchQuote}
          disabled={isLoading}
          className="mt-16 mx-auto block bg-black text-white hover:bg-[#064e3b] px-12 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all duration-500 shadow-2xl hover:scale-105 disabled:opacity-20"
        >
          Nouvelle Inspiration
        </button>
      </div>

      <div className="mt-16 text-center text-slate-400 max-w-md">
        <p className="text-[11px] font-bold uppercase tracking-widest leading-loose">Ces paroles sont des lumières pour votre méditation. Qu'elles illuminent votre cœur par le secret de la Fayda.</p>
      </div>
    </div>
  );
};

export default WisdomCard;
