import React, { useState } from 'react';
import { Check, Sparkles, Download, ArrowRight, ShieldCheck } from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';

export const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="precos" className="scroll-mt-28 py-24 sm:py-32 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>TRANSPARÊNCIA TOTAL</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Planos Simples. Sem Pegadinhas.
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg mb-8">
          Use gratuitamente com seu próprio banco de dados local ou assine o Flow Pro para IA sem fricção e nuvem contínua.
        </p>

        {/* Monthly / Yearly Billing Toggle */}
        <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
          <button
            onClick={() => {
              playClickSound();
              setIsYearly(false);
            }}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              !isYearly ? 'bg-indigo-600 text-white shadow-md' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Mensal
          </button>
          <button
            onClick={() => {
              playClickSound();
              setIsYearly(true);
            }}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              isYearly ? 'bg-indigo-600 text-white shadow-md' : 'text-zinc-400 hover:text-white'
            }`}
          >
            <span>Anual</span>
            <span className="px-1.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 text-[10px] font-mono font-bold">
              ECONOMIZE 20%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
        {/* Tier 1: Free Local */}
        <div className="double-bezel">
          <div className="double-bezel-inner p-8 sm:p-10 bg-[#0d0d14] h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-xl font-bold text-white">
                  Flow Local
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400">
                  Offline-First
                </span>
              </div>

              <div className="mb-6">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-white">
                  R$ 0
                </span>
                <span className="text-zinc-500 text-sm ml-2">/ para sempre</span>
              </div>

              <p className="text-zinc-400 text-xs sm:text-sm mb-8 leading-relaxed">
                Ideal para quem deseja controle 100% privado no próprio computador, sem assinaturas recorrentes.
              </p>

              <div className="space-y-3.5 mb-8">
                {[
                  'Rotinas, tarefas e subtarefas ilimitadas',
                  'Pomodoro vinculado a tarefas com histórico',
                  'Áudio sintetizado Tigela Tibetana 528Hz',
                  'Banco de dados SQLite nativo no disco',
                  'Backup local automático diário & exportação',
                  'IA com chave pessoal do Gemini (sem limite de mensagens)',
                  'Atalhos globais de teclado (Ctrl+K, etc.)'
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs sm:text-sm text-zinc-300">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="/downloads/Flow_Setup_x64.exe"
              download="Flow_Setup_x64.exe"
              onClick={() => playClickSound(0.5)}
              className="w-full py-3.5 px-6 rounded-full border border-white/15 hover:border-white/30 bg-white/[0.03] hover:bg-white/[0.08] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-zinc-400" />
              <span>Baixar Setup para Windows (.exe)</span>
            </a>
          </div>
        </div>

        {/* Tier 2: Pro Cloud (Highlighted) */}
        <div className="double-bezel ring-1 !ring-indigo-500/50 shadow-2xl shadow-indigo-500/10">
          <div className="double-bezel-inner p-8 sm:p-10 bg-gradient-to-b from-[#121122] via-[#0d0d17] to-[#09090e] h-full flex flex-col justify-between relative overflow-hidden">
            {/* Top Glow Accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/20 rounded-full blur-[60px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
                  <span>Flow Pro</span>
                  <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                    RECOMENDADO
                  </span>
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-xs font-mono text-indigo-300">
                  Nuvem + IA
                </span>
              </div>

              <div className="mb-6">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-white">
                  {isYearly ? 'R$ 16,58' : 'R$ 19,90'}
                </span>
                <span className="text-zinc-400 text-sm ml-2">/ mês</span>
                {isYearly && (
                  <div className="text-xs font-mono text-emerald-400 mt-1">
                    Cobrado anualmente (R$ 199/ano)
                  </div>
                )}
              </div>

              <p className="text-zinc-400 text-xs sm:text-sm mb-8 leading-relaxed">
                Tudo do plano Local, além de inteligência artificial de nuvem gerenciada e sincronização em tempo real.
              </p>

              <div className="space-y-3.5 mb-8">
                {[
                  'Tudo incluso no plano Flow Local',
                  '1.000 mensagens/mês de IA gerenciada (sem configurar chaves)',
                  'Acesso a Gemini 2.5 Pro para raciocínio complexo',
                  'Sincronização em nuvem bidirecional via Firebase',
                  'Backup automático diário na nuvem',
                  'Temas visuais e paletas de cor exclusivas',
                  'Suporte prioritário diretamente com os criadores'
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm text-white font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#upgrade"
              onClick={() => playClickSound()}
              className="pill-btn-primary w-full justify-center group !py-3.5 cursor-pointer"
            >
              <span>Garantir Flow Pro</span>
              <div className="pill-icon-bubble">
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Guarantee Notice */}
      <div className="mt-12 text-center flex items-center justify-center gap-2 text-xs text-zinc-500">
        <ShieldCheck className="w-4 h-4 text-emerald-400" />
        <span>Pagamento seguro via Stripe com garantia de 14 dias de reembolso total. Cancele quando quiser.</span>
      </div>
    </section>
  );
};
