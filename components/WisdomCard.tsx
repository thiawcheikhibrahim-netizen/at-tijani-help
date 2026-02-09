
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
        <h2 className="text-3xl font-bold text-emerald-900 mb-2">Perles de Gnose</h2>
        <p className="text-emerald-700 italic">"La sagesse est l'héritage du croyant."</p>
      </div>

      <div className="w-full relative bg-white rounded-3xl p-10 md:p-16 shadow-2xl border border-emerald-100 overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-2 spiritual-gradient"></div>
        <div className="absolute top-4 right-8 opacity-10">
           <svg className="w-32 h-32 text-emerald-900" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L14.017 3H21.017V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8C8.55228 16 9 15.5523 9 15V9C9 8.44772 8.55228 8 8 8H5C3.89543 8 3 7.10457 3 6V3L3 3H10V15C10 18.3137 7.31371 21 4 21H3Z"></path></svg>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center gap-4 py-20">
            <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
            <p className="text-emerald-800 font-medium animate-pulse">Consultation des archives...</p>
          </div>
        ) : quote ? (
          <div className="relative z-10 space-y-8">
            <blockquote className="text-2xl md:text-4xl font-arabic text-emerald-900 leading-relaxed text-center mb-8">
              "{quote.text}"
            </blockquote>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-0.5 bg-amber-400 mb-4"></div>
              <cite className="not-italic font-bold text-slate-800 text-lg">— Cheikh Ibrahim Niass (Baye)</cite>
              <p className="text-slate-500 text-sm mt-1">{quote.source}</p>
            </div>

            <div className="mt-12 bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
              <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-2 text-center">Portée Spirituelle</h4>
              <p className="text-emerald-900 text-center leading-relaxed">
                {quote.explanation}
              </p>
            </div>
          </div>
        ) : null}

        <button 
          onClick={fetchQuote}
          disabled={isLoading}
          className="mt-12 mx-auto block bg-white border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-lg shadow-emerald-200"
        >
          Nouvelle Inspiration
        </button>
      </div>

      <div className="mt-12 text-center text-slate-500 max-w-md">
        <p className="text-sm">Ces paroles sont générées pour votre méditation quotidienne. Qu'elles éclairent votre journée par la baraka du Cheikh.</p>
      </div>
    </div>
  );
};

export default WisdomCard;
