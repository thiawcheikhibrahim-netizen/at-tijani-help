
import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';

const BiographyView: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!question.trim() || isLoading) return;
    setIsLoading(true);
    try {
      const res = await geminiService.askBiography(question);
      setAnswer(res);
    } catch (error) {
      console.error(error);
      setAnswer("Une erreur s'est produite lors de la recherche historique.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      {/* Portraits Section (Photos removed as requested) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="group relative">
          <div className="aspect-[16/9] md:aspect-[3/2] flex items-center justify-center overflow-hidden rounded-2xl border-4 border-amber-400/30 shadow-2xl transition-transform duration-500 bg-emerald-950 group-hover:scale-[1.02]">
            <div className="absolute inset-0 pattern-overlay opacity-20"></div>
            <div className="relative z-10 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-arabic tracking-wide text-white">Cheikh Ahmad Tidiane Chérif</h3>
              <p className="text-xs text-emerald-200 mt-2 uppercase tracking-widest font-semibold">Le Fondateur de la Tariqa (1737-1815)</p>
              <div className="mt-4 w-12 h-0.5 bg-amber-400 mx-auto"></div>
            </div>
          </div>
        </div>

        <div className="group relative">
          <div className="aspect-[16/9] md:aspect-[3/2] flex items-center justify-center overflow-hidden rounded-2xl border-4 border-amber-400/30 shadow-2xl transition-transform duration-500 bg-emerald-900 group-hover:scale-[1.02]">
            <div className="absolute inset-0 pattern-overlay opacity-20"></div>
            <div className="relative z-10 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.499Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-arabic tracking-wide text-white">Cheikh Ibrahim Niass (Baye)</h3>
              <p className="text-xs text-emerald-200 mt-2 uppercase tracking-widest font-semibold">Le Sultan de la Fayda (1900-1975)</p>
              <div className="mt-4 w-12 h-0.5 bg-amber-400 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Section */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
          <svg className="w-32 h-32 text-emerald-900" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
        </div>
        
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
          <span className="p-2 bg-amber-100 rounded-lg text-amber-700 shadow-inner">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
          </span>
          Explorer la Vie et l'Œuvre des Maîtres
        </h2>
        
        <div className="flex flex-col md:flex-row gap-3">
          <input 
            type="text" 
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Posez une question sur leur parcours, leurs écrits ou leurs miracles..."
            className="flex-1 bg-slate-50 border border-slate-300 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald-500 focus:outline-none focus:bg-white transition-all text-slate-800 shadow-inner"
          />
          <button 
            onClick={handleSearch}
            disabled={isLoading || !question.trim()}
            className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-10 py-4 md:py-0 rounded-2xl transition-all shadow-lg hover:shadow-emerald-900/20 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Recherche...
              </>
            ) : 'Rechercher'}
          </button>
        </div>

        {answer && (
          <div className="mt-10 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 shadow-inner prose prose-emerald max-w-none text-slate-800 leading-relaxed font-normal">
              <div className="whitespace-pre-wrap">{answer}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BiographyView;
