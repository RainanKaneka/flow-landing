import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Globe, Waves } from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-300">
      <nav
        className={`floating-nav w-full max-w-6xl rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'py-2 bg-[#0a0a0f]/90 border-white/10 shadow-2xl' : 'bg-[#0d0d12]/75'
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group shrink-0"
          onClick={() => playClickSound()}
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-[1.5px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
            <div className="w-full h-full bg-[#08080a] rounded-[10px] flex items-center justify-center">
              <Waves className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white flex items-center gap-1.5">
            Flow
            <span className="text-[10px] font-semibold font-mono uppercase px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              v1.0
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-[13px] font-medium text-zinc-400">
          <a
            href="#demo"
            onClick={() => playClickSound()}
            className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-colors"
          >
            Demonstração
          </a>
          <a
            href="#recursos"
            onClick={() => playClickSound()}
            className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-colors"
          >
            Recursos
          </a>
          <a
            href="#audio"
            onClick={() => playClickSound()}
            className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-colors"
          >
            Áudio 528Hz
          </a>
          <a
            href="#comparativo"
            onClick={() => playClickSound()}
            className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-colors"
          >
            Comparativo
          </a>
          <a
            href="#precos"
            onClick={() => playClickSound()}
            className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-colors"
          >
            Planos
          </a>
          <a
            href="#faq"
            onClick={() => playClickSound()}
            className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-colors"
          >
            FAQ
          </a>
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <a
            href="http://localhost:3000"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClickSound(0.4)}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] transition-all whitespace-nowrap shrink-0"
          >
            <Globe className="w-3.5 h-3.5 text-indigo-400" />
            <span>Abrir Web App</span>
          </a>

          <a
            href="/downloads/Flow_Setup_x64.exe"
            download="Flow_Setup_x64.exe"
            onClick={() => playClickSound(0.5)}
            className="pill-btn-primary !py-1.5 !px-3.5 !gap-1.5 text-xs whitespace-nowrap shrink-0 flex items-center"
            title="Baixar instalador direto para Windows (.exe)"
          >
            <span className="whitespace-nowrap">Baixar Desktop</span>
            <div className="pill-icon-bubble !w-5 !h-5 shrink-0">
              <Download className="w-3 h-3 text-white" />
            </div>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => {
            playClickSound(0.4);
            setMobileMenuOpen(!mobileMenuOpen);
          }}
          className="lg:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Abrir Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-20 bg-[#0d0d14]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-2 font-medium text-zinc-300">
            <a
              href="#demo"
              onClick={() => { playClickSound(0.4); setMobileMenuOpen(false); }}
              className="px-4 py-2.5 rounded-xl hover:bg-white/5"
            >
              Demonstração ao Vivo
            </a>
            <a
              href="#recursos"
              onClick={() => { playClickSound(0.4); setMobileMenuOpen(false); }}
              className="px-4 py-2.5 rounded-xl hover:bg-white/5"
            >
              Explorador de Recursos
            </a>
            <a
              href="#audio"
              onClick={() => { playClickSound(0.4); setMobileMenuOpen(false); }}
              className="px-4 py-2.5 rounded-xl hover:bg-white/5"
            >
              Tigela Tibetana 528Hz
            </a>
            <a
              href="#comparativo"
              onClick={() => { playClickSound(0.4); setMobileMenuOpen(false); }}
              className="px-4 py-2.5 rounded-xl hover:bg-white/5"
            >
              Flow vs. Mercado
            </a>
            <a
              href="#precos"
              onClick={() => { playClickSound(0.4); setMobileMenuOpen(false); }}
              className="px-4 py-2.5 rounded-xl hover:bg-white/5"
            >
              Planos & Preços
            </a>
            <a
              href="#faq"
              onClick={() => { playClickSound(0.4); setMobileMenuOpen(false); }}
              className="px-4 py-2.5 rounded-xl hover:bg-white/5"
            >
              Perguntas Frequentes
            </a>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <a
              href="http://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-white/15 text-sm font-semibold text-white bg-white/5"
            >
              <Globe className="w-4 h-4 text-indigo-400" />
              Abrir Web App (Localhost)
            </a>
            <a
              href="/downloads/Flow_Setup_x64.exe"
              download="Flow_Setup_x64.exe"
              onClick={() => { playClickSound(0.5); setMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-colors"
            >
              <Download className="w-4 h-4" />
              Baixar para Windows (.exe)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
