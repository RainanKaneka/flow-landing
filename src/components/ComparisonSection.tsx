import React from 'react';
import { Check, Minus, Sparkles } from 'lucide-react';

interface CompetitorRow {
  feature: string;
  flow: boolean | string;
  ticktick: boolean | string;
  structured: boolean | string;
  todoist: boolean | string;
  motion: boolean | string;
}

export const ComparisonSection: React.FC = () => {
  const rows: CompetitorRow[] = [
    {
      feature: 'Design Double-Bezel & OLED Dark',
      flow: true,
      ticktick: false,
      structured: false,
      todoist: false,
      motion: false
    },
    {
      feature: 'Pomodoro Vinculado a Tarefas',
      flow: true,
      ticktick: true,
      structured: false,
      todoist: false,
      motion: false
    },
    {
      feature: 'IA com Replanejamento Automático de Horários',
      flow: true,
      ticktick: false,
      structured: false,
      todoist: false,
      motion: true
    },
    {
      feature: 'Feedback Aural com Tigela Tibetana 528Hz',
      flow: true,
      ticktick: false,
      structured: false,
      todoist: false,
      motion: false
    },
    {
      feature: 'Persistência Local Real em SQLite (ACID)',
      flow: true,
      ticktick: false,
      structured: 'Parcial',
      todoist: false,
      motion: false
    },
    {
      feature: 'Algoritmo das Três Regras de Ouro',
      flow: true,
      ticktick: false,
      structured: false,
      todoist: false,
      motion: false
    },
    {
      feature: 'Modo Grátis Completo com Chave Própria de IA',
      flow: true,
      ticktick: false,
      structured: false,
      todoist: false,
      motion: false
    },
    {
      feature: 'Preço Mensal para Recursos Avançados',
      flow: 'R$ 19,90/mês',
      ticktick: '$2.99/mês',
      structured: '$4.99/mês',
      todoist: '$5.00/mês',
      motion: '$34.00/mês'
    }
  ];

  const renderVal = (val: boolean | string, isFlow: boolean = false) => {
    if (typeof val === 'string') {
      return (
        <span className={`text-xs font-semibold ${isFlow ? 'text-indigo-300 font-mono font-bold' : 'text-zinc-400'}`}>
          {val}
        </span>
      );
    }
    if (val === true) {
      return (
        <div className={`w-5 h-5 rounded-full flex items-center justify-center mx-auto ${
          isFlow ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/40' : 'bg-emerald-500/10 text-emerald-400'
        }`}>
          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
        </div>
      );
    }
    return (
      <div className="w-5 h-5 rounded-full bg-zinc-800/60 text-zinc-600 flex items-center justify-center mx-auto">
        <Minus className="w-3 h-3" />
      </div>
    );
  };

  return (
    <section id="comparativo" className="scroll-mt-28 py-24 sm:py-32 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ANÁLISE DE MERCADO</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Como o Flow se Compara
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg">
          O melhor do Structured (timeline visual) com a potência do TickTick (Pomodoro) e a inteligência do Motion, sem a mensalidade corporativa abusiva.
        </p>
      </div>

      {/* Comparison Table Inside Double-Bezel */}
      <div className="double-bezel overflow-x-auto">
        <div className="double-bezel-inner min-w-[720px] bg-[#0c0c12]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                <th className="py-5 px-6 text-sm font-semibold text-zinc-300">
                  Funcionalidades & Filosofia
                </th>
                <th className="py-5 px-4 text-center font-display font-extrabold text-white text-base bg-indigo-600/15 border-x border-indigo-500/25">
                  <div className="flex items-center justify-center gap-1.5">
                    <span>Flow</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500 text-white font-mono uppercase">
                      Você
                    </span>
                  </div>
                </th>
                <th className="py-5 px-4 text-center text-xs font-semibold text-zinc-400">
                  TickTick
                </th>
                <th className="py-5 px-4 text-center text-xs font-semibold text-zinc-400">
                  Structured
                </th>
                <th className="py-5 px-4 text-center text-xs font-semibold text-zinc-400">
                  Todoist
                </th>
                <th className="py-5 px-4 text-center text-xs font-semibold text-zinc-400">
                  Motion
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.05] text-sm">
              {rows.map((row, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-6 text-zinc-300 font-medium text-xs sm:text-sm">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 text-center bg-indigo-600/10 border-x border-indigo-500/20">
                    {renderVal(row.flow, true)}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {renderVal(row.ticktick)}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {renderVal(row.structured)}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {renderVal(row.todoist)}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {renderVal(row.motion)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
