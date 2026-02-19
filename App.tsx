
import React, { useState } from 'react';
import Layout from './components/Layout';
import ChatInterface from './components/ChatInterface';
import TranslationTool from './components/TranslationTool';
import WisdomCard from './components/WisdomCard';
import BiographyView from './components/BiographyView';
import { AppView } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<AppView>(AppView.CHAT);

  const renderView = () => {
    switch (activeView) {
      case AppView.CHAT:
        return <ChatInterface />;
      case AppView.BIOGRAPHY:
        return <BiographyView />;
      case AppView.TRANSLATION:
        return <TranslationTool />;
      case AppView.WISDOM:
        return <WisdomCard />;
      case AppView.ABOUT:
        return (
          <div className="max-w-2xl mx-auto bg-white p-12 rounded-[2.5rem] shadow-2xl border border-slate-200">
            <h2 className="text-3xl font-black text-emerald-950 mb-8 border-b-4 border-emerald-900 pb-6 uppercase tracking-tighter italic">AT-TIJANI Help</h2>
            <div className="prose prose-emerald text-slate-800 space-y-6 font-medium">
              <p>
                <strong>AT-TIJANI Help</strong> est une plateforme révolutionnaire fusionnant l'intelligence artificielle 
                et la spiritualité islamique selon la voie <strong>Tidiane</strong>.
              </p>
              <p>
                Créé par <strong>Cheikh Ibrahim Thiaw</strong> en <strong>2026</strong>, cet outil facilite l'accès à la connaissance spirituelle et biographique des Grands Maîtres.
              </p>
              <p>
                Notre mission est de servir les mourides attachés aux enseignements de <strong>Cheikh Ahmad Tidiane</strong> 
                et de <strong>Cheikh Ibrahim Niass (Baye Niass)</strong>.
              </p>
              
              <div className="bg-[#064e3b] text-white p-8 rounded-3xl border border-black/20 shadow-xl mt-10">
                <h3 className="text-sm font-black uppercase tracking-widest text-emerald-200 mb-4">Avertissement Spirituel</h3>
                <p className="text-sm leading-relaxed opacity-90 italic">
                  Cette IA est un outil d'assistance et de recherche. Elle ne remplace en aucun cas l'avis d'un Muqaddam ou d'un savant. Pour toute question rituelle majeure, référez-vous aux autorités religieuses compétentes.
                </p>
              </div>

              <div className="pt-12 border-t border-slate-100 flex flex-col items-center gap-6 mt-12">
                 <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.4em]">Cheikh Ibrahim Thiaw • 2026</p>
                 <div className="w-16 h-1 bg-black rounded-full"></div>
              </div>
            </div>
          </div>
        );
      default:
        return <ChatInterface />;
    }
  };

  return (
    <Layout activeView={activeView} setActiveView={setActiveView}>
      {renderView()}
    </Layout>
  );
};

export default App;
