import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'O que torna o Flow diferente de apps como Todoist ou Notion?',
      answer: 'A maioria dos apps são apenas listas de tarefas vazias ou bancos de dados complexos que exigem horas de configuração. O Flow é um cronograma visual contínuo com Pomodoro diretamente integrado à sua timeline, áudio sintetizado em 528Hz para relaxar o sistema nervoso e inteligência artificial que realmente entende sua rotina para replanejar seu dia se você atrasar.'
    },
    {
      question: 'Como a inteligência artificial replaneja meus horários?',
      answer: 'O assistente do Flow usa o Google Gemini e analisa todas as suas tarefas do dia, seus blocos de foco, pausas e compromissos fixos. Se você avisar que se atrasou em um compromisso, a IA calcula um novo cronograma comprimindo intervalos livres e preservando horários inegociáveis (como hora de dormir ou reuniões). Uma proposta visual é apresentada para você aprovar ou desfazer com um clique.'
    },
    {
      question: 'Preciso pagar para usar a IA no modo gratuito?',
      answer: 'Não! No plano Flow Local gratuito, você pode conectar sua própria chave de API gratuita do Google AI Studio (Gemini). Todas as chamadas vão direto para o Google sem custo algum. O plano Flow Pro existe para quem não quer o trabalho de gerar chaves e deseja uma cota de 1.000 mensagens gerenciadas em nuvem com alta velocidade.'
    },
    {
      question: 'Como funciona o áudio de Tigela Tibetana (528Hz)?',
      answer: 'Diferente de alarmes convencionais que disparam cortisol e ansiedade, o Flow utiliza a Web Audio API nativa do seu computador para sintetizar em tempo real ondas senoidais puras na frequência de 528Hz (conhecida como frequência do equilíbrio) com harmônicos na oitava superior (1056Hz). O som possui reverberação física suave e funciona 100% offline.'
    },
    {
      question: 'Onde meus dados são armazenados? Eles estão seguros?',
      answer: 'No plano Local, seus dados vivem em um banco de dados relacional SQLite nativo gravado no disco rígido do seu computador, com backups automáticos diários em pasta local. Seus dados nunca são vendidos. No plano Pro, seus dados são criptografados em trânsito e em repouso no Google Cloud Firestore com regras de segurança rígidas.'
    },
    {
      question: 'O aplicativo funciona sem internet?',
      answer: 'Sim! O Flow foi construído sob uma arquitetura 100% offline-first. Você pode gerenciar tarefas, rodar sessões de Pomodoro, ouvir os sinos tibetanos e consultar seu histórico mesmo em voos ou locais sem nenhuma conexão.'
    }
  ];

  return (
    <section id="faq" className="scroll-mt-28 py-24 sm:py-32 px-4 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 mb-4">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>DÚVIDAS FREQUENTES</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
          Perguntas Frequentes
        </h2>
        <p className="text-zinc-400 text-base">
          Tudo o que você precisa saber sobre o Flow antes de começar.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="double-bezel transition-all duration-300"
            >
              <div className="double-bezel-inner bg-[#0d0d14]">
                <button
                  onClick={() => {
                    playClickSound(0.4);
                    setOpenIndex(isOpen ? null : index);
                  }}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none group"
                  aria-expanded={isOpen}
                >
                  <span className={`font-display text-base sm:text-lg font-bold transition-colors duration-200 ${isOpen ? 'text-indigo-300' : 'text-white group-hover:text-zinc-200'}`}>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full shrink-0 transition-all duration-300 ${isOpen ? 'rotate-180 text-white bg-indigo-600 shadow-md shadow-indigo-600/30' : 'bg-white/5 text-zinc-400 group-hover:bg-white/10 group-hover:text-white'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <div className={`faq-accordion-content ${isOpen ? 'is-open' : ''}`}>
                  <div className="faq-accordion-inner">
                    <div className="px-6 pb-6 pt-2 text-sm text-zinc-400 leading-relaxed border-t border-white/[0.04]">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
