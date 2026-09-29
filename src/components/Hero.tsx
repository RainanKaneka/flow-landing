import React from 'react';
import { ArrowRight, Download, Shield, Cpu, Waves, CheckCircle2 } from 'lucide-react';
import { DepthText } from './reactbits/DepthText';
import { MoltenMetal } from './reactbits/MoltenMetal';
import { TechText } from './reactbits/TechText';
import { playClickSound, playTibetanBowl } from '../utils/soundEffects';

export const Hero: React.FC = () => {
  return (
    <section className="relative isolate pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden flex flex-col items-center text-center px-4">
      {/* Dynamic MoltenMetal WebGL Background (ReactBits) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-85">
        <MoltenMetal
          color1="#4f46e5"
          color2="#c026d3"
          color3="#06b6d4"
          backgroundColor="#08080a"
          speed={0.25}
          scale={3.6}
          detail={3}
          glow={2.2}
          swirl={0.85}
          brightness={1.3}
          colorMode="molten"
          mouseInteraction={true}
          mouseStrength={0.3}
        />
        {/* Subtle vignette gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08080a]/40 via-transparent to-[#08080a]" />
      </div>

      {/* Background Radial Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/10 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-purple-700/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Hero Content (relative z-10 for sharp contrast above WebGL canvas) */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl">
        {/* Eyebrow Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-zinc-300 mb-8 backdrop-blur-md shadow-sm hover:border-indigo-500/40 transition-colors">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="tracking-wide uppercase text-[11px] font-mono text-indigo-300">
            Lançamento Oficial v1.0
          </span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-400 font-normal">Windows Desktop & Web App</span>
        </div>

        {/* 3D Depth Text Heading (ReactBits) */}
        <div className="my-2 select-none">
          <DepthText
            text="FLOW"
            layers={36}
            depth={2.6}
            faceColor="#ffffff"
            depthColor="#6366f1"
            tilt={9}
            perspective={850}
            fontSize="clamp(4.2rem, 14vw, 9.5rem)"
            fontWeight={900}
          />
        </div>

        {/* Semantic H1 for SEO */}
        <h1 className="sr-only">
          O Sistema Operacional da Sua Rotina. Com IA que replaneja seu dia.
        </h1>

        {/* High-Tech Dynamic Title with TechText (ReactBits) */}
        <div className="w-full max-w-4xl mt-6 mb-8 flex flex-col items-center gap-2 select-none">
          <div className="w-full h-11 sm:h-14 md:h-16 flex items-center justify-center">
            <TechText
              text="O Sistema Operacional da Sua Rotina."
              fontSize={44}
              fontWeight={800}
              fontFamily="Plus Jakarta Sans, sans-serif"
              color="#ffffff"
              accentColor="#6366f1"
              lineStyle="dashed"
              reveal="area"
              sweep={true}
              speed={0.8}
              labels={true}
              specks={12}
              className="w-full h-full"
            />
          </div>
          <div className="w-full h-11 sm:h-14 md:h-16 flex items-center justify-center">
            <TechText
              text="Com IA que replaneja seu dia."
              fontSize={44}
              fontWeight={800}
              fontFamily="Plus Jakarta Sans, sans-serif"
              color="#e0e7ff"
              accentColor="#ec4899"
              lineStyle="dashed"
              reveal="area"
              sweep={true}
              speed={0.8}
              labels={true}
              specks={12}
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Value Proposition Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed mb-10">
          Design <strong className="text-zinc-200 font-semibold">Double-Bezel</strong> de precisão cirúrgica,
          Pomodoro sincronizado a metas reais, áudio binaural em <strong className="text-indigo-300 font-semibold">528Hz</strong> e
          copiloto inteligente com <strong className="text-purple-300 font-semibold">Google Gemini</strong>.
          Tudo 100% offline-first no seu computador.
        </p>

      {/* High-Craft Dual CTA (Button-in-Button) */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
        <a
          href="/downloads/Flow_Setup_x64.exe"
          download="Flow_Setup_x64.exe"
          onClick={() => { playClickSound(0.5); playTibetanBowl(528, 2.5, 0.4); }}
          className="pill-btn-primary w-full sm:w-auto justify-center group whitespace-nowrap shrink-0 flex items-center"
          title="Baixar instalador direto para Windows (.exe)"
        >
          <span className="text-base whitespace-nowrap">Baixar para Windows (.exe)</span>
          <div className="pill-icon-bubble shrink-0">
            <Download className="w-4 h-4 text-white group-hover:translate-y-0.5 transition-transform" />
          </div>
        </a>

        <a
          href="http://localhost:3000"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playClickSound(0.4)}
          className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full border border-white/10 hover:border-white/25 bg-white/[0.03] hover:bg-white/[0.08] text-zinc-200 hover:text-white font-semibold text-sm transition-all duration-300 w-full sm:w-auto whitespace-nowrap shrink-0"
        >
          <span>Abrir Demonstração Web</span>
          <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-14 pt-10 border-t border-white/[0.06] max-w-3xl w-full text-left">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">100% Privado</div>
            <div className="text-[11px] text-zinc-500">SQLite local seguro</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">IA Nativa</div>
            <div className="text-[11px] text-zinc-500">Gemini 2.5 Flash & Pro</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
            <Waves className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">Frequência 528Hz</div>
            <div className="text-[11px] text-zinc-500">Tigela Tibetana pura</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">Zero Assinatura</div>
            <div className="text-[11px] text-zinc-500">Tier local gratuito</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

