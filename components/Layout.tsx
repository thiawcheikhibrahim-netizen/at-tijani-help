
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
    { id: AppView.BIOGRAPHY, label: 'Biographies', icon: Icons.History },
    { id: AppView.TRANSLATION, label: 'Jurisprudence', icon: Icons.Book },
    { id: AppView.WISDOM, label: 'Sagesse', icon: Icons.Star },
    { id: AppView.ABOUT, label: 'Infos', icon: Icons.Info },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 overflow-hidden">
      <nav className="w-full md:w-64 bg-[#064e3b] text-white flex flex-col shadow-2xl z-20 flex-shrink-0 border-r border-black/20">
        <div className="p-6 border-b border-black/20 flex items-center gap-3 bg-black/10">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-900 shadow-xl flex-shrink-0 overflow-hidden border-2 border-emerald-700">
             <img 
               src="./logo.png" 
               className="w-full h-full object-cover" 
               alt="AT" 
               onError={(e) => {
                 e.currentTarget.style.display = 'none';
                 const parent = e.currentTarget.parentElement;
                 if (parent) parent.innerHTML = '<span class="font-bold text-xl text-emerald-900">AT</span>';
               }}
             />
          </div>
          <div className="overflow-hidden">
            <h1 className="font-bold text-lg tracking-tight truncate uppercase text-white">AT-TIJANI Help</h1>
            <p className="text-[10px] text-emerald-100 uppercase tracking-widest font-medium opacity-80">Assistant Spirituel</p>
          </div>
        </div>
        
        <ul className="flex-1 p-4 space-y-2 flex md:block overflow-x-auto md:overflow-y-auto scrollbar-hide">
          {navItems.map((item) => (
            <li key={item.id} className="flex-shrink-0">
              <button
                onClick={() => setActiveView(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 whitespace-nowrap ${
                  activeView === item.id 
                    ? 'bg-white text-emerald-900 font-bold shadow-xl md:scale-105' 
                    : 'hover:bg-emerald-800 text-emerald-50'
                }`}
              >
                <div className={`${activeView === item.id ? 'text-emerald-900' : 'text-white'}`}>
                  <item.icon />
                </div>
                <span className="text-sm">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="p-6 hidden md:block mt-auto text-[10px] text-emerald-100/60 border-t border-black/10 bg-black/5">
          <p className="font-bold text-white mb-1 tracking-wide uppercase">© 2026 AT-TIJANI Help</p>
          <p className="mb-2">Par Cheikh Ibrahim Thiaw</p>
        </div>
      </nav>

      <main className="flex-1 flex flex-col relative overflow-hidden h-[calc(100vh-80px)] md:h-screen bg-slate-50">
        <div className="absolute inset-0 pattern-overlay pointer-events-none opacity-[0.03]"></div>
        <div className="flex-1 overflow-y-auto p-4 md:p-8 z-10 custom-scrollbar relative">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
