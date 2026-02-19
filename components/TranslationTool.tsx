
import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';
import { TranslationResult } from '../types';

const TranslationTool: React.FC = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState<TranslationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!text.trim() || isLoading) return;
    setIsLoading(true);
    try {
      const res = await geminiService.translateAndExplain(text);
      setResult(res);
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'analyse.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200">
        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
          <div className="p-2 bg-emerald-900 text-white rounded-xl">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
            </svg>
          </div>
          Jurisprudence & Hadiths
        </h2>
        <p className="text-slate-500 mb-8 font-medium">Analyse spirituelle et traduction fidèle des textes sacrés.</p>
        
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Entrez le texte ou le hadith..."
          className="w-full h-48 p-6 border border-slate-200 rounded-3xl focus:ring-4 focus:ring-emerald-900/5 focus:outline-none bg-slate-50 font-medium text-slate-800"
        />
        
        <button
          onClick={handleAnalyze}
          disabled={isLoading || !text.trim()}
          className="mt-6 w-full bg-[#064e3b] hover:bg-black text-white font-bold py-4 rounded-2xl transition-all shadow-xl disabled:opacity-30"
        >
          {isLoading ? 'Analyse en cours...' : 'Analyser le texte'}
        </button>
      </div>

      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="bg-[#064e3b] text-white rounded-3xl p-8 border border-white/10 shadow-xl">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 opacity-60">Texte Original</h3>
            <div className="italic leading-relaxed font-arabic text-2xl text-right">
              {result.original}
            </div>
          </div>
          
          <div className="bg-white text-slate-800 rounded-3xl p-8 border border-slate-200 shadow-xl">
            <h3 className="text-[10px] font-black text-emerald-900 uppercase tracking-[0.2em] mb-4">Traduction Littérale</h3>
            <div className="leading-relaxed font-semibold text-lg">
              {result.translation}
            </div>
          </div>

          <div className="md:col-span-2 bg-white rounded-3xl p-10 border border-slate-200 shadow-2xl">
            <h3 className="text-slate-900 font-bold mb-6 flex items-center gap-3 text-xl">
              <span className="w-1.5 h-6 bg-emerald-900 rounded-full"></span>
              Explication de la Fayda (Sharh)
            </h3>
            <div className="text-slate-700 leading-loose prose max-w-none font-medium">
              <p className="whitespace-pre-wrap">{result.explanation}</p>
            </div>
            
            <div className="mt-10 pt-8 border-t border-slate-100 bg-slate-50/50 -mx-10 px-10 -mb-10 pb-10 rounded-b-3xl">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Contexte & Guide Pratique</h4>
              <p className="text-sm text-slate-600 italic font-medium">{result.context}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TranslationTool;
