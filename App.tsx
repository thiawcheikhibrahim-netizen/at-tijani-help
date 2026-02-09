
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
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
            <h2 className="text-2xl font-bold text-emerald-900 mb-6 border-b pb-4">À Propos d'AT-TIJANI Help</h2>
            <div className="prose prose-emerald text-slate-700 space-y-4">
              <p>
                <strong>AT-TIJANI Help</strong> est une plateforme révolutionnaire fusionnant l'intelligence artificielle 
                et la spiritualité islamique selon la voie <strong>Tidiane</strong>.
              </p>
              <p>
                Créé et conçu par <strong>Cheikh Ibrahim Thiaw</strong> en <strong>2026</strong>, cet outil facilite l'accès à la connaissance spirituelle et biographique des Grands Maîtres.
              </p>
              <p>
                Notre mission est de servir les mourides attachés aux enseignements de <strong>Cheikh Ahmad Tidiane</strong> 
                et de <strong>Cheikh Ibrahim Niass (Baye Niass)</strong>.
              </p>
              <h3 className="text-lg font-bold text-emerald-800 mt-6">Avertissement Légal & Spirituel</h3>
              <p className="text-sm italic bg-amber-50 p-4 rounded-lg border border-amber-100">
                Cette IA est un outil d'assistance et de recherche. Elle ne remplace en aucun cas l'avis d'un Muqaddam ou d'un savant. Pour toute question rituelle majeure, référez-vous aux autorités religieuses compétentes.
              </p>
              <div className="pt-8 border-t flex flex-col items-center gap-4">
                 <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">Développé par Cheikh Ibrahim Thiaw • 2026</p>
                 <div className="w-12 h-1 bg-amber-400 rounded-full"></div>
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
