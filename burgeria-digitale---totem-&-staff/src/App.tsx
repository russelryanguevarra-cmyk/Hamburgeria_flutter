/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { LayoutGrid, Users, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [view, setView] = useState<'home' | 'totem' | 'staff'>('home');

  return (
    <div className="h-screen w-screen grid-bg overflow-hidden flex flex-col font-sans">
      <header className="p-6 border-b border-white/10 flex justify-between items-center bg-black/50 backdrop-blur-md">
        <h1 className="font-display text-4xl text-[#CBFF00] tracking-tighter">
          FIX<span className="text-white">BURGERS</span>
        </h1>
        <div className="flex gap-4">
          <button 
            onClick={() => setView('home')}
            className={`px-4 py-2 font-mono text-xs uppercase tracking-widest border transition-all ${view === 'home' ? 'bg-[#CBFF00] text-black border-[#CBFF00]' : 'text-white border-white/20 hover:border-[#CBFF00]'}`}
          >
            Home
          </button>
          <button 
            onClick={() => setView('totem')}
            className={`px-4 py-2 font-mono text-xs uppercase tracking-widest border transition-all ${view === 'totem' ? 'bg-[#CBFF00] text-black border-[#CBFF00]' : 'text-white border-white/20 hover:border-[#CBFF00]'}`}
          >
            Totem Cliente
          </button>
          <button 
            onClick={() => setView('staff')}
            className={`px-4 py-2 font-mono text-xs uppercase tracking-widest border transition-all ${view === 'staff' ? 'bg-[#CBFF00] text-black border-[#CBFF00]' : 'text-white border-white/20 hover:border-[#CBFF00]'}`}
          >
            Pannello Staff
          </button>
        </div>
      </header>

      <main className="flex-1 relative overflow-auto p-8">
        <AnimatePresence mode="wait">
          {view === 'home' && (
            <motion.div 
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto space-y-12 py-12"
            >
              <div className="text-center space-y-4">
                <h2 className="font-display text-8xl leading-none">LA TUA<br/>HAMBURGERIA</h2>
                <p className="font-mono text-white/50 text-xl">Sistema Gestionale Digitalizzato v1.0</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white text-black p-8 neon-shadow group cursor-pointer" onClick={() => setView('totem')}>
                  <div className="flex justify-between items-start mb-12">
                    <LayoutGrid size={48} />
                    <span className="font-mono text-xs bg-black text-[#CBFF00] px-2 py-1">CLIENT SIDE</span>
                  </div>
                  <h3 className="font-display text-5xl mb-4">TOTEM DIGITALE</h3>
                  <p className="font-sans mb-8 opacity-70 italic">Per i clienti: consulta il menù, crea il tuo burger perfetto e ordina in pochi secondi.</p>
                  <button className="w-full bg-black text-white font-display text-2xl py-4 group-hover:bg-[#CBFF00] group-hover:text-black transition-colors">
                    AVVIA TOTEM
                  </button>
                </div>

                <div className="bg-white text-black p-8 neon-shadow group cursor-pointer" onClick={() => setView('staff')}>
                  <div className="flex justify-between items-start mb-12">
                    <Users size={48} />
                    <span className="font-mono text-xs bg-black text-[#CBFF00] px-2 py-1">ADMIN SIDE</span>
                  </div>
                  <h3 className="font-display text-5xl mb-4">PANNELLO STAFF</h3>
                  <p className="font-sans mb-8 opacity-70 italic">Per lo staff: monitora gli ordini in tempo reale e gestisci le scorte del menù.</p>
                  <button className="w-full bg-black text-white font-display text-2xl py-4 group-hover:bg-[#CBFF00] group-hover:text-black transition-colors">
                    ACCEDI STAFF
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {view === 'totem' && (
            <motion.div 
              key="totem"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full w-full bg-black/80 rounded-xl border border-white/10 flex items-center justify-center p-12 text-center"
            >
              <div className="space-y-6">
                <LayoutGrid size={80} className="mx-auto text-[#CBFF00]" />
                <h3 className="font-display text-6xl">MODALITÀ TOTEM</h3>
                <p className="font-mono text-white/50 max-w-md mx-auto">
                  L'app Flutter verrebbe visualizzata qui in produzione. 
                  Nel Codespace l'app viene compilata e servita separatamente.
                </p>
                <div className="p-4 bg-white/5 border border-white/20 rounded font-mono text-xs text-left">
                  $ flutter run -d chrome --web-port 3000
                </div>
              </div>
            </motion.div>
          )}

          {view === 'staff' && (
            <motion.div 
              key="staff"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full w-full bg-black/80 rounded-xl border border-white/10 flex items-center justify-center p-12 text-center"
            >
              <div className="space-y-6">
                <Users size={80} className="mx-auto text-[#CBFF00]" />
                <h3 className="font-display text-6xl">PANNELLO STAFF</h3>
                <p className="font-mono text-white/50 max-w-md mx-auto">
                  L'app Angular 17 verrebbe visualizzata qui in produzione.
                </p>
                <div className="p-4 bg-white/5 border border-white/20 rounded font-mono text-xs text-left">
                  $ ng serve --port 3000 --host 0.0.0.0
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="p-4 border-t border-white/10 bg-black flex justify-between items-center text-[10px] font-mono text-white/30 uppercase tracking-widest">
        <span>© 2024 FIXBURGERS S.R.L.</span>
        <div className="flex gap-4">
          <span>BACKEND: FLASK</span>
          <span>TOTEM: FLUTTER</span>
          <span>STAFF: ANGULAR</span>
        </div>
      </footer>
    </div>
  );
}
