
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
      <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200">
        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
          </svg>
          Analyseur de Textes & Hadiths
        </h2>
        <p className="text-slate-600 mb-6">Collez un passage de la jurisprudence Tidiane ou un hadith pour obtenir une traduction et une explication spirituelle.</p>
        
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ex: 'Al-hamdu lillahi rab al-alamin...' ou un extrait du Kashif al-Ilbas..."
          className="w-full h-40 p-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-slate-50"
        />
        
        <button
          onClick={handleAnalyze}
          disabled={isLoading || !text.trim()}
          className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-emerald-900/10 disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isLoading ? 'Analyse en cours...' : 'Traduire et Expliquer'}
        </button>
      </div>

      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
            <h3 className="text-emerald-800 font-bold mb-3 flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest bg-emerald-200 px-2 py-0.5 rounded">Original</span>
            </h3>
            <div className="text-slate-800 italic leading-relaxed font-arabic text-xl text-right">
              {result.original}
            </div>
          </div>
          
          <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
            <h3 className="text-amber-800 font-bold mb-3 flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest bg-amber-200 px-2 py-0.5 rounded">Traduction</span>
            </h3>
            <div className="text-slate-800 leading-relaxed font-medium">
              {result.translation}
            </div>
          </div>

          <div className="md:col-span-2 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-slate-800 font-bold mb-4 flex items-center gap-2">
              <span className="p-1.5 bg-emerald-100 rounded-lg text-emerald-700">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.117c1.435-1.27 3.8-1.27 5.236 0a.75.75 0 0 1-.993 1.117ZM9.75 10.5a.75.75 0 0 1 .75.75v3.375c0 .621.504 1.125 1.125 1.125h.375a.75.75 0 0 1 0 1.5h-.375A2.625 2.625 0 0 1 9 14.625V11.25a.75.75 0 0 1 .75-.75ZM12 7.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
                </svg>
              </span>
              Explication Spirituelle (Sharh)
            </h3>
            <div className="text-slate-700 leading-loose prose max-w-none">
              <p className="whitespace-pre-wrap">{result.explanation}</p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Contexte & Application</h4>
              <p className="text-sm text-slate-500 italic">{result.context}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TranslationTool;
