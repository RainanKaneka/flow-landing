import React from 'react';
import { Sparkles, Bot, Layers, Clock, Database, Check, ShieldCheck, Zap } from 'lucide-react';

export const BentoGrid: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>BENTO GRID ASSIMÉTRICO</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Engenharia de Ponta em Cada Detalhe
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg">
          Projetado sob a filosofia de que ferramentas de produtividade devem ser rápidas como pensamento e sólidas como aço.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Card 1: AI Replanning (Span 8) */}
        <div className="lg:col-span-8 double-bezel group">
          <div className="double-bezel-inner p-8 bg-gradient-to-br from-[#12111d] to-[#0a0a0f] h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-purple-500/15 border border-purple-500/25 text-purple-400">
                  <Bot className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  Gemini 2.5 Flash / Pro
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Replanejamento Inteligente de Horários
              </h3>
              <p className="text-zinc-400 text-sm max-w-xl mb-6">
                A vida real não segue cronogramas rígidos. Se você se atrasou em um compromisso, o assistente reorganiza todas as tarefas restantes com cálculo de folgas.
              </p>
            </div>

            {/* Mock Chat Simulation */}
            <div className="p-4 sm:p-5 rounded-xl bg-black/50 border border-white/[0.08] space-y-3 font-sans">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-300 shrink-0">
                  Você
                </div>
                <div className="p-3 rounded-2xl rounded-tl-none bg-zinc-800/80 text-xs text-zinc-200 border border-white/5">
                  Me atrasei 40 minutos na reunião com o cliente. Consegue ajeitar o resto da minha tarde?
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold text-white shrink-0 shadow-md shadow-indigo-600/30">
                  IA
                </div>
                <div className="p-3.5 rounded-2xl rounded-tl-none bg-indigo-950/40 text-xs text-indigo-100 border border-indigo-500/30 space-y-2">
                  <p>
                    Sem problemas! Recomprimi o intervalo livre, desloquei <strong>Programar Landing Page</strong> para 15:40 e preservei seu horário sagrado de academia às 18:30.
                  </p>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="px-2.5 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-[11px] cursor-pointer inline-flex items-center gap-1 transition-colors">
                      <Check className="w-3 h-3" /> Aplicar Nova Rotina
                    </span>
                    <span className="text-[10px] text-indigo-300/70 font-mono">
                      Diff: +40m offset
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Double-Bezel Design (Span 4) */}
        <div className="lg:col-span-4 double-bezel group">
          <div className="double-bezel-inner p-8 bg-gradient-to-br from-[#13121b] to-[#09090e] h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-indigo-500/15 border border-indigo-500/25 text-indigo-400">
                  <Layers className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono text-zinc-500 uppercase">
                  Doppelrand
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Design Double-Bezel
              </h3>
              <p className="text-zinc-400 text-sm mb-6">
                Estrutura de aninhamento com casca externa em vidro fosco e núcleo em alumínio escuro usinado. Nenhum outro app de rotina possui essa identidade.
              </p>
            </div>

            {/* Visual Double Bezel Demonstration */}
            <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10">
              <div className="p-4 rounded-xl bg-[#09090d] border border-white/5 flex flex-col items-center justify-center text-center">
                <span className="font-mono text-xs text-indigo-300 font-semibold mb-1">
                  Raio Externo: 2.0rem
                </span>
                <span className="font-mono text-[10px] text-zinc-500">
                  Raio Interno: calc(2rem - 0.5rem)
                </span>
                <div className="mt-3 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-semibold">
                  Curvatura Concêntrica Perfeita
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Connected Pomodoro (Span 4) */}
        <div className="lg:col-span-4 double-bezel group">
          <div className="double-bezel-inner p-8 bg-gradient-to-br from-[#12131c] to-[#09090e] h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-pink-500/15 border border-pink-500/25 text-pink-400">
                  <Clock className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono text-zinc-500 uppercase">
                  Foco Real
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Pomodoro Vinculado
              </h3>
              <p className="text-zinc-400 text-sm mb-6">
                Todo segundo cronometrado é atribuído diretamente à atividade selecionada. Sem métricas vazias ou perda de tempo.
              </p>
            </div>

            {/* Mini Timer Display */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-pink-400 font-semibold uppercase">
                  Sessão Ativa
                </span>
                <div className="font-display text-2xl font-extrabold text-white">
                  23:45
                </div>
              </div>
              <div className="px-2.5 py-1 rounded bg-pink-500/15 text-pink-300 border border-pink-500/25 text-xs font-semibold">
                Estudo & Código
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: SQLite & Cloud Sync (Span 8) */}
        <div className="lg:col-span-8 double-bezel group">
          <div className="double-bezel-inner p-8 bg-gradient-to-br from-[#11121d] to-[#09090e] h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-cyan-500/15 border border-cyan-500/25 text-cyan-400">
                  <Database className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono text-zinc-500 uppercase">
                  ACID + Firebase Cloud
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Persistência Híbrida de Confiança Máxima
              </h3>
              <p className="text-zinc-400 text-sm max-w-xl mb-6">
                Seus dados não vivem no frágil localStorage do navegador. Eles residem em um banco SQLite nativo com backup diário automático, com opção de sincronização na nuvem via Firestore.
              </p>
            </div>

            {/* Features Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-white">Backup Local Diário</div>
                  <div className="text-[10px] text-zinc-500">Dumps automáticos</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-white">Undo / Redo Global</div>
                  <div className="text-[10px] text-zinc-500">Recupere em 5s</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
                <Check className="w-4 h-4 text-indigo-400 shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-white">Exportação Completa</div>
                  <div className="text-[10px] text-zinc-500">JSON & SQL livres</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
