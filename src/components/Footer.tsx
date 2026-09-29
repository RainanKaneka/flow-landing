import React from 'react';
import { Download, Globe, Heart, Sparkles } from 'lucide-react';
import { playClickSound, playTibetanBowl } from '../utils/soundEffects';

export const Footer: React.FC = () => {
  return (
    <footer id="download" className="pt-20 pb-16 px-4 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Final Call to Action Card */}
      <div className="double-bezel mb-20">
        <div className="double-bezel-inner p-8 sm:p-16 text-center bg-gradient-to-br from-[#121124] via-[#0e0d18] to-[#08080c] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMECE HOJE MESMO</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 max-w-2xl mx-auto">
            Retome o Controle Total do Seu Tempo.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Baixe o Flow para Windows ou use diretamente no seu navegador. Grátis, com design premium e foco inabalável.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/downloads/Flow_Setup_x64.exe"
              download="Flow_Setup_x64.exe"
              onClick={() => { playClickSound(0.5); playTibetanBowl(528, 2.5, 0.4); }}
              className="pill-btn-primary !px-6 !py-3.5 group cursor-pointer whitespace-nowrap shrink-0 flex items-center justify-center"
              title="Baixar instalador direto do Flow para Windows (.exe)"
            >
              <span className="whitespace-nowrap">Baixar Flow para Windows (.exe)</span>
              <div className="pill-icon-bubble shrink-0">
                <Download className="w-4 h-4 text-white group-hover:translate-y-0.5 transition-transform" />
              </div>
            </a>

            <a
              href="http://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClickSound(0.4)}
              className="px-6 py-3.5 rounded-full border border-white/15 hover:border-white/30 bg-white/[0.03] hover:bg-white/[0.08] text-white font-semibold text-sm flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap"
            >
              <Globe className="w-4 h-4 text-indigo-400" />
              <span>Abrir Web App Local</span>
            </a>
          </div>

          <div className="mt-6 text-xs text-zinc-500 font-mono">
            Versão v1.0.0 • Compatível com Windows 10/11 x64 • 18.3 MB
          </div>
        </div>
      </div>

      {/* Footer Navigation & Credits */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 text-xs text-zinc-500">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">
            F
          </div>
          <span className="text-zinc-400 font-semibold font-display text-sm">Flow</span>
          <span>© 2026. Todos os direitos reservados.</span>
        </div>

        <div className="flex items-center gap-6 font-medium text-zinc-400">
          <a href="#demo" className="hover:text-white transition-colors">Demonstração</a>
          <a href="#recursos" className="hover:text-white transition-colors">Recursos</a>
          <a href="#audio" className="hover:text-white transition-colors">Áudio 528Hz</a>
          <a href="#precos" className="hover:text-white transition-colors">Preços</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a
            href="https://github.com/RainanKaneka"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
          >
            GitHub
          </a>
        </div>

        <div className="flex items-center gap-2 text-zinc-400">
          <span>Desenvolvido com</span>
          <Heart className="w-3.5 h-3.5 text-pink-500 fill-current" />
          <span>por <a href="https://github.com/RainanKaneka" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-indigo-400 font-semibold underline underline-offset-2 transition-colors">RainanKaneka</a></span>
        </div>
      </div>
    </footer>
  );
};
