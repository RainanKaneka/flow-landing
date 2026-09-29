import React, { useState } from 'react';
import { Play, Calendar, Timer, Bot, BarChart3, ListTodo, Maximize2, Sparkles } from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';

interface ViewTab {
  id: string;
  label: string;
  icon: React.ReactNode;
  mediaType: 'image' | 'video';
  src: string;
  badge: string;
  description: string;
}

export const InteractiveAppPreview: React.FC = () => {
  const tabs: ViewTab[] = [
    {
      id: 'walkthrough',
      label: 'Walkthrough em Vídeo',
      icon: <Play className="w-4 h-4 text-emerald-400" />,
      mediaType: 'video',
      src: '/assets/flow_walkthrough.webp',
      badge: 'GRAVAÇÃO REAL',
      description: 'Navegação fluida entre rotina diária, cronômetro vinculado, chat inteligente e estatísticas em tempo real.'
    },
    {
      id: 'rotina',
      label: 'Minha Rotina',
      icon: <Calendar className="w-4 h-4 text-indigo-400" />,
      mediaType: 'image',
      src: '/assets/flow_rotina.png',
      badge: 'TIMELINE & REGRAS DE OURO',
      description: 'Visão cronológica de alta precisão com horários fixos, intervalos livres calculados e status imediato.'
    },
    {
      id: 'pomodoro',
      label: 'Pomodoro Vinculado',
      icon: <Timer className="w-4 h-4 text-pink-400" />,
      mediaType: 'image',
      src: '/assets/flow_pomodoro.png',
      badge: 'FOCO CONTABILIZADO',
      description: 'O tempo focado no timer é diretamente creditado na tarefa ativa. Transição automática de pausas com sinos tibetanos.'
    },
    {
      id: 'ia',
      label: 'Agente Gemini',
      icon: <Bot className="w-4 h-4 text-purple-400" />,
      mediaType: 'image',
      src: '/assets/flow_ia.png',
      badge: 'IA CONTEXTUAL',
      description: 'Entende sua rotina inteira em tempo real. Solicite replanning de horários caso se atrase e crie tarefas por linguagem natural.'
    },
    {
      id: 'dashboard',
      label: 'Dashboard Analítico',
      icon: <BarChart3 className="w-4 h-4 text-cyan-400" />,
      mediaType: 'image',
      src: '/assets/flow_dashboard.png',
      badge: 'MÉTRICAS & STREAKS',
      description: 'Gráficos de aderência semanal, distribuição de tempo por categoria e cálculo de consistência sem perder dados.'
    },
    {
      id: 'backlog',
      label: 'Backlog & Notas',
      icon: <ListTodo className="w-4 h-4 text-amber-400" />,
      mediaType: 'image',
      src: '/assets/flow_backlog.png',
      badge: 'SEM PERDA DE IDEIAS',
      description: 'Tarefas não concluídas vão para o backlog seguro. Transforme notas em atividades agendadas com um clique.'
    }
  ];

  const [activeTab, setActiveTab] = useState<string>('walkthrough');
  const current = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <section id="demo" className="scroll-mt-28 py-24 sm:py-32 px-4 max-w-7xl mx-auto flex flex-col items-center">
      {/* Section Header */}
      <div className="text-center max-w-3xl mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>INTERFACE REAL DO PRODUTO</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Veja o Flow em Ação
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg">
          Nenhum mockup estático. Explore capturas reais da versão 1.0 rodando diretamente no desktop.
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 max-w-full scrollbar-none mb-8 px-2">
        <div className="p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md flex items-center gap-1.5">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                playClickSound();
                setActiveTab(tab.id);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Machine Double-Bezel Viewport Frame */}
      <div className="double-bezel w-full max-w-5xl">
        <div className="double-bezel-inner">
          {/* OS Title Bar */}
          <div className="bg-[#121218] px-4 py-3 border-b border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]/80 inline-block" />
              <span className="ml-3 font-mono text-[11px] text-zinc-400 flex items-center gap-2">
                <span className="text-zinc-600">app:</span>
                <span className="text-zinc-300 font-medium">Flow Desktop v1.0.0</span>
                <span className="text-zinc-600">/</span>
                <span className="text-indigo-400">{current.label}</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {current.badge}
              </span>
              <a
                href="http://localhost:3000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                title="Abrir em tela cheia no Localhost"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Media Content Display */}
          <div className="relative aspect-[16/10] bg-[#08080a] flex items-center justify-center overflow-hidden group">
            {current.mediaType === 'video' ? (
              <img
                src={current.src}
                alt="Flow App Real Walkthrough"
                className="w-full h-full object-cover object-top select-none"
                loading="eager"
              />
            ) : (
              <img
                src={current.src}
                alt={current.label}
                className="w-full h-full object-cover object-top select-none transition-transform duration-700 group-hover:scale-[1.01]"
                loading="eager"
              />
            )}

            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] border border-white/[0.04]" />
          </div>

          {/* Bottom Context Info Bar */}
          <div className="bg-[#0f0f15] px-6 py-4 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-ping" />
              <p className="text-xs sm:text-sm text-zinc-300">
                {current.description}
              </p>
            </div>

            <a
              href="http://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 shrink-0"
            >
              <span>Interagir no app web</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
