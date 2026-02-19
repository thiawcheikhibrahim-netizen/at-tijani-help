
import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';
import { Icons } from '../constants';

const BiographyView: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!question.trim() || isLoading) return;
    setIsLoading(true);
    setError(null);
    try {
      const res = await geminiService.askBiography(question);
      setAnswer(res);
    } catch (err) {
      console.error(err);
      setError("Impossible de joindre les archives. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        
        {/* Photo 1 - Cheikh Ahmad Tidiane */}
        <div className="group relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-2 border-slate-200 shadow-2xl bg-black">
            <img 
              src="./cheikh-tijani.jpg" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
              alt="Cheikh Ahmad Tidiane" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center bg-gradient-to-t from-black via-black/20 to-transparent">
              <h3 className="text-2xl font-bold font-arabic tracking-wide text-white mb-1">Cheikh Ahmad Tidiane Chérif</h3>
              <p className="text-[10px] text-emerald-400 uppercase tracking-widest font-black">Le Fondateur (1737-1815)</p>
            </div>
          </div>
        </div>

        {/* Photo 2 - Cheikh Ibrahim Niass */}
        <div className="group relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-2 border-slate-200 shadow-2xl bg-emerald-950">
            <img 
              src="./baye-niass.jpg" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
              alt="Cheikh Ibrahim Niass" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent">
              <h3 className="text-2xl font-bold font-arabic tracking-wide text-white mb-1">Cheikh Ibrahim Niass</h3>
              <p className="text-[10px] text-emerald-400 uppercase tracking-widest font-black">Baye (1900-1975)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200 relative overflow-hidden">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
          <span className="p-2 bg-emerald-50 rounded-lg text-emerald-900">
             <Icons.History />
          </span>
          Explorer l'Histoire
        </h2>
        
        <div className="flex flex-col md:flex-row gap-3">
          <input 
            type="text" 
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Posez une question sur les maîtres..."
            className="flex-1 bg-slate-50 border border-slate-300 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-emerald-900 focus:outline-none shadow-inner font-medium text-slate-800"
          />
          <button 
            onClick={handleSearch}
            disabled={isLoading || !question.trim()}
            className="bg-[#064e3b] hover:bg-black text-white font-bold px-10 py-4 rounded-2xl transition-all shadow-lg disabled:opacity-50"
          >
            {isLoading ? 'Recherche...' : 'Consulter'}
          </button>
        </div>

        {error && (
          <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-xl text-sm border border-red-100 font-medium">
            {error}
          </div>
        )}

        {answer && !error && (
          <div className="mt-10 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 prose prose-emerald max-w-none text-slate-800 leading-relaxed shadow-inner font-medium">
              <div className="whitespace-pre-wrap">{answer}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BiographyView;
