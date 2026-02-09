
import React from 'react';
import { AppView } from '../types';
import { Icons } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  activeView: AppView;
  setActiveView: (view: AppView) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeView, setActiveView }) => {
  const navItems = [
    { id: AppView.CHAT, label: 'Assistant Chat', icon: Icons.Chat },
    { id: AppView.BIOGRAPHY, label: 'Vie & Œuvre', icon: Icons.History },
    { id: AppView.TRANSLATION, label: 'Traduction & Fiqh', icon: Icons.Book },
    { id: AppView.WISDOM, label: 'Sagesse de Baye', icon: Icons.Star },
    { id: AppView.ABOUT, label: 'À Propos', icon: Icons.Info },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50">
      {/* Sidebar / Top Nav for Mobile */}
      <nav className="w-full md:w-64 spiritual-gradient text-white flex flex-col shadow-xl z-10">
        <div className="p-6 border-b border-emerald-800/50 flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-emerald-900 font-bold text-xl shadow-inner">
            AT
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-tight">AT-TIJANI Help</h1>
            <p className="text-xs text-emerald-200">Assistant Spirituel</p>
          </div>
        </div>
        
        <ul className="flex-1 p-4 space-y-2 flex md:block overflow-x-auto md:overflow-visible scrollbar-hide">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveView(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 whitespace-nowrap ${
                  activeView === item.id 
                    ? 'bg-amber-400 text-emerald-900 font-semibold shadow-lg scale-105' 
                    : 'hover:bg-emerald-700/50 text-emerald-50'
                }`}
              >
                <item.icon />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="p-6 hidden md:block mt-auto text-xs text-emerald-300 border-t border-emerald-800/50">
          <p className="font-semibold text-white mb-1">© 2026 AT-TIJANI Help</p>
          <p className="mb-2">Créé par Cheikh Ibrahim Thiaw</p>
          <p className="italic">"La connaissance est une lumière."</p>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay pointer-events-none"></div>
        <div className="flex-1 overflow-y-auto p-4 md:p-8 z-0">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
