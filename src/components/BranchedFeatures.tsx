import React, { useState } from 'react';
import {
  Sparkles,
  Calendar,
  Clock,
  Archive,
  Volume2,
  Bell,
  Cpu,
  RefreshCw,
  ListTree,
  Database,
  Cloud,
  CheckCircle,
  Play
} from 'lucide-react';
import { BranchedMenu, type BranchedMenuItem } from './reactbits/BranchedMenu';
import { playClickSound, playTibetanBowl } from '../utils/soundEffects';

interface FeatureDetail {
  id: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
  techSpec: string;
  interactiveAction?: {
    label: string;
    onClick: () => void;
  };
}

export const BranchedFeatures: React.FC = () => {
  const [activeFeatureId, setActiveFeatureId] = useState<string>('cronograma');

  const menuItems: BranchedMenuItem[] = [
    {
      label: 'Núcleo de Rotina',
      children: [
        { value: 'cronograma', label: 'Cronograma & Timeline', icon: <Calendar className="w-3.5 h-3.5" /> },
        { value: 'regras', label: 'Regras de Ouro', icon: <Clock className="w-3.5 h-3.5" /> },
        { value: 'backlog', label: 'Backlog Sem Culpa', icon: <Archive className="w-3.5 h-3.5" /> }
      ]
    },
    {
      label: 'Foco & Sensorial',
      children: [
        { value: 'pomodoro', label: 'Pomodoro Vinculado', icon: <Clock className="w-3.5 h-3.5" /> },
        { value: 'bowl528', label: 'Tigela Tibetana 528Hz', icon: <Volume2 className="w-3.5 h-3.5" /> },
        { value: 'notificacoes', label: 'Notificações Nativas', icon: <Bell className="w-3.5 h-3.5" /> }
      ]
    },
    {
      label: 'Inteligência Artificial',
      children: [
        { value: 'gemini', label: 'Chat Contextual (Gemini)', icon: <Cpu className="w-3.5 h-3.5" /> },
        { value: 'replanning', label: 'Replanejamento Automático', icon: <RefreshCw className="w-3.5 h-3.5" /> },
        { value: 'subtarefas', label: 'Quebra de Metas em Ações', icon: <ListTree className="w-3.5 h-3.5" /> }
      ]
    },
    {
      label: 'Engenharia & Dados',
      children: [
        { value: 'sqlite', label: 'Persistência SQLite Real', icon: <Database className="w-3.5 h-3.5" /> },
        { value: 'cloudsync', label: 'Firebase Cloud Sync', icon: <Cloud className="w-3.5 h-3.5" /> }
      ]
    }
  ];

  const featuresMap: Record<string, FeatureDetail> = {
    cronograma: {
      id: 'cronograma',
      category: 'Núcleo de Rotina',
      title: 'Cronograma Diário de Alta Precisão',
      tagline: 'Não apenas um checklist. Um mapa visual contínuo do seu dia.',
      description: 'O Flow organiza suas atividades em blocos lógicos calculados ao minuto. Tarefas concluídas recebem status imediato enquanto o tempo livre restante é calculado em tempo real para evitar burnout.',
      points: [
        'Duração estimada vs. tempo real cronometrado',
        'Cálculo de intervalos livres para respiro mental',
        'Reordenação drag-and-drop de alta fluidez',
        'Classificação por categorias personalizadas e cores'
      ],
      techSpec: 'Motor de ordenação O(N) com validação de colisões de horário.'
    },
    regras: {
      id: 'regras',
      category: 'Núcleo de Rotina',
      title: 'As Três Regras de Ouro',
      tagline: 'Algoritmo proprietário de pontuação de consistência.',
      description: 'Diga adeus ao desânimo de falhar tarefas. O Flow analisa se você cumpriu os pilares essenciais do seu dia: Tarefa Âncora matinal, Bloco de Foco Profundo sem distrações e Encerramento Consciente.',
      points: [
        'Pontuação diária de 0 a 100 baseada em aderência real',
        'Identificação de gargalos na rotina e causas de atraso',
        'Histórico para alimentar diagnósticos do agente de IA',
        'Respeito aos limites biológicos do ritmo circadiano'
      ],
      techSpec: 'Pesos probabilísticos com mitigação de efeito falso-positivo.'
    },
    backlog: {
      id: 'backlog',
      category: 'Núcleo de Rotina',
      title: 'Backlog Sem Culpa & Notas Rápidas',
      tagline: 'O que não coube hoje fica guardado com segurança.',
      description: 'Tarefas não realizadas ao final do dia nunca desaparecem nem acumulam culpa na sua timeline. Elas são enviadas ao backlog com um toque, prontas para serem resgatadas quando você tiver capacidade.',
      points: [
        'Transfira pendências do dia para o backlog com 1 clique',
        'Promova ideias do backlog para o dia atual em segundos',
        'Bloco de notas rápido integrado que vira tarefa instantaneamente',
        'Sem poluição visual na sua rotina do presente'
      ],
      techSpec: 'Indexação com SQLite FTS e sincronização com Firestore.'
    },
    pomodoro: {
      id: 'pomodoro',
      category: 'Foco & Sensorial',
      title: 'Pomodoro Conectado a Entregas Reais',
      tagline: 'Chega de cronômetros isolados que não sabem o que você está fazendo.',
      description: 'No Flow, cada minuto de foco no timer é creditado diretamente na tarefa que você escolheu. Ao terminar a sessão, sua tarefa atualiza o tempo despendido e o histórico de produtividade se consolida.',
      points: [
        'Vinculação direta com tarefas ativas do dia',
        'Ciclos automáticos: 25min foco, 5min pausa, 15min pausa longa',
        'Som de início e fim sintetizado com Tigela Tibetana',
        'Notificação desktop mesmo com o app minimizado'
      ],
      techSpec: 'Web Worker de alta precisão imune ao throttling de abas inativas.',
      interactiveAction: {
        label: 'Ouvir Sino Tibetano (528Hz)',
        onClick: () => playTibetanBowl(528, 3.5)
      }
    },
    bowl528: {
      id: 'bowl528',
      category: 'Foco & Sensorial',
      title: 'Áudio Sintetizado Proprietário (528Hz / 1056Hz)',
      tagline: 'Zero arquivos MP3 pesados. 100% sintetizado pela Web Audio API.',
      description: 'Sons de alerta comuns despertam cortisol e ansiedade. O Flow usa ondas senoidais harmônicas puras nas frequências da Tigela Tibetana antiga (528Hz, a frequência do equilíbrio, e 1056Hz na oitava superior) para restaurar a calma após o foco intenso.',
      points: [
        'Zero dependência de arquivos de áudio externos',
        'Decaimento exponencial suave (reverberação física natural)',
        'Feedback tátil em cliques e transições de estado',
        'Funciona offline e não consome largura de banda'
      ],
      techSpec: 'Síntese de oscilador trigonométrico em tempo real no áudio buffer.',
      interactiveAction: {
        label: 'Tocar Frequência de Cura 528Hz',
        onClick: () => playTibetanBowl(528, 4.0)
      }
    },
    notificacoes: {
      id: 'notificacoes',
      category: 'Foco & Sensorial',
      title: 'Notificações Nativas no Windows',
      tagline: 'Alertas que funcionam mesmo por cima de jogos e fullscreen.',
      description: 'Construído em Rust com Tauri v2 e integração WinRT de baixo nível. Você é avisado 5 minutos antes da próxima atividade sem depender do navegador estar aberto.',
      points: [
        'Avisos de transição de blocos da rotina',
        'Lembrete de pausas e alongamento no Pomodoro',
        'Totalmente configurável por categorias',
        'Zero consumo de bateria ou recursos em background'
      ],
      techSpec: 'Bridge IPC Tauri nativa com WinRT Toast Notification Manager.'
    },
    gemini: {
      id: 'gemini',
      category: 'Inteligência Artificial',
      title: 'Chat Contextual com Google Gemini',
      tagline: 'O modelo que enxerga sua agenda inteira antes de responder.',
      description: 'O assistente de IA do Flow recebe um contexto dinâmico contendo suas tarefas do dia, horários livres, histórico de conclusões e regras de ouro. Ele cria tarefas por linguagem natural em português com parsing de datas.',
      points: [
        'Criação de tarefas: "Agende reunião com Carlos amanhã às 14h"',
        'Diagnósticos periódicos de produtividade com dicas práticas',
        'Suporte a chave API pessoal (Modo Gratuito) ou Nuvem (Premium)',
        'Respeito absoluto à privacidade dos seus dados pessoais'
      ],
      techSpec: 'Roteamento com Gemini 2.5 Flash / Pro via Cloud Proxy seguro.'
    },
    replanning: {
      id: 'replanning',
      category: 'Inteligência Artificial',
      title: 'Replanning Inteligente de Horários',
      tagline: 'Um imprevisto atrasou sua manhã? A IA recalcula a tarde inteira.',
      description: 'A maioria dos apps quebra quando seu dia sai do trilho. No Flow, basta avisar o assistente: "Fiquei preso no trânsito por 40 minutos". O Gemini comprime intervalos livres, preserva horários fixos e propõe um novo cronograma com aprovação em 1 clique.',
      points: [
        'Detecção inteligente de tarefas inadiáveis e tarefas elásticas',
        'Apresentação de diff de horários antes da aplicação',
        'Suporte a desfazer (Undo) com restauração instantânea',
        'Preservação da hora de dormir e descanso'
      ],
      techSpec: 'Geração de AiActionProposal tipada com schema union estrito.'
    },
    subtarefas: {
      id: 'subtarefas',
      category: 'Inteligência Artificial',
      title: 'Decomposição de Metas Complexas',
      tagline: 'Transforme projetos assustadores em passos executáveis.',
      description: 'Está procrastinando porque a tarefa parece grande demais? Abra a tarefa e peça para a IA sugerir uma checklist detalhada. Em segundos, um plano passo a passo com estimativas de tempo é gerado dentro do card.',
      points: [
        'Geração de 3 a 7 subtarefas acionáveis por item',
        'Estimativa de tempo individual por subtarefa',
        'Checklist interativa com cálculo de completude',
        'Importação direta para a rotina diária'
      ],
      techSpec: 'Prompt engineering baseado em cognitive load theory.'
    },
    sqlite: {
      id: 'sqlite',
      category: 'Engenharia & Dados',
      title: 'Persistência Híbrida: SQLite Local Real',
      tagline: 'Seus dados moram no seu disco. Nunca perca nada ao limpar o browser.',
      description: 'Ao contrário de apps que confiam cegamente no volátil localStorage, o Flow grava tudo em banco SQLite nativo no seu disco via Tauri SQL Plugin, com transações ACID e dumps de backup automáticos.',
      points: [
        'Leitura instantânea em microssegundos',
        'Backup diário automático no seu diretório de usuário',
        'Exportação e importação completa em JSON e SQL',
        'Zero perda de histórico, streaks e anotações'
      ],
      techSpec: 'tauri-plugin-sql com engine SQLite 3 embarcada.'
    },
    cloudsync: {
      id: 'cloudsync',
      category: 'Engenharia & Dados',
      title: 'Sincronização em Nuvem com Firebase',
      tagline: 'Acesse seus dados em múltiplos dispositivos com segurança.',
      description: 'Autenticação fluida com Google ou e-mail, Firestore para sincronização em tempo real e controle de cotas inteligentes através de Cloud Functions dedicadas.',
      points: [
        'Sincronização bidirecional com resolução de conflitos',
        'Autenticação segura via Firebase Auth & ID Tokens',
        'Proxy backend para IA sem expor chaves de API secretas',
        'Estrutura preparada para expansão mobile e web'
      ],
      techSpec: 'Firebase Cloud Functions v2 na região southamerica-east1.'
    }
  };

  const currentFeature = featuresMap[activeFeatureId] || featuresMap['cronograma'];

  return (
    <section id="recursos" className="scroll-mt-28 py-24 sm:py-32 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>MICRO-INTERAÇÃO REACT BITS</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Explorador de Arquitetura & Recursos
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg">
          Navegue pelas ramificações do sistema. Clique em qualquer galho para desdobrar seus segredos técnicos.
        </p>
      </div>

      {/* Interactive Two-Column Hub */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: ReactBits BranchedMenu */}
        <div className="lg:col-span-4 double-bezel">
          <div className="double-bezel-inner p-6 bg-[#0c0c12]">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
              <span className="text-xs font-mono font-semibold uppercase text-zinc-400 tracking-wider">
                Módulos do Sistema
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 font-mono">
                ReactBits Tree
              </span>
            </div>

            {/* The Branched Menu Component */}
            <div className="py-2 overflow-hidden">
              <BranchedMenu
                items={menuItems}
                defaultOpen={[0, 1, 2, 3]}
                defaultActive={activeFeatureId}
                color="#e4e4e7"
                accentColor="#818cf8"
                lineColor="rgba(255, 255, 255, 0.14)"
                width={320}
                rowHeight={40}
                indent={38}
                onSelect={(value) => {
                  playClickSound();
                  setActiveFeatureId(value);
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Feature Spotlight Card */}
        <div className="lg:col-span-8 double-bezel">
          <div className="double-bezel-inner p-6 sm:p-10 bg-gradient-to-br from-[#0e0e16] to-[#09090d] min-h-[460px] flex flex-col justify-between">
            <div>
              {/* Feature Eyebrow */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase bg-indigo-500/10 text-indigo-300 border border-indigo-500/25">
                  {currentFeature.category}
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  ID: {currentFeature.id}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                {currentFeature.title}
              </h3>
              <p className="text-sm font-medium text-indigo-300/90 mb-6">
                {currentFeature.tagline}
              </p>

              {/* Main Description */}
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
                {currentFeature.description}
              </p>

              {/* Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {currentFeature.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-zinc-300 font-medium">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Footer Info */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs font-mono text-zinc-400">
                <span className="text-zinc-600">Engine: </span>
                <span className="text-zinc-300">{currentFeature.techSpec}</span>
              </div>

              {currentFeature.interactiveAction && (
                <button
                  onClick={() => {
                    playClickSound();
                    currentFeature.interactiveAction?.onClick();
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/40 text-xs font-semibold text-indigo-200 transition-all cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{currentFeature.interactiveAction.label}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
