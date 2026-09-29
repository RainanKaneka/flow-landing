import React, { useState } from 'react';
import { Play, Waves, Volume2, Volume1, VolumeX, Sliders } from 'lucide-react';
import { playTibetanBowl, playClickSound } from '../utils/soundEffects';
import { WakeSlider } from './reactbits/WakeSlider';

export const AuralSensorySection: React.FC = () => {
  const [activeFrequency, setActiveFrequency] = useState<number | null>(null);
  const [volume, setVolume] = useState<number>(50); // Safe 50% default volume

  const handlePlay = (freq: number) => {
    setActiveFrequency(freq);
    playTibetanBowl(freq, 3.8, volume / 100);
    setTimeout(() => {
      setActiveFrequency(null);
    }, 3800);
  };

  const soundProfiles = [
    {
      name: 'Tigela Tibetana — Centramento',
      freq: 528,
      duration: '3.8s',
      description: 'Frequência do Solfeggio associada à restauração biológica e redução imediata de cortisol.',
      role: 'Sino de conclusão de bloco de foco'
    },
    {
      name: 'Harmônico Superior — Transição',
      freq: 1056,
      duration: '3.0s',
      description: 'Oitava superior cristalina que desperta a atenção sem sobressaltos ou estresse.',
      role: 'Início de intervalo / pausa curta'
    },
    {
      name: 'Ressonância Terrena — Calma',
      freq: 432,
      duration: '4.2s',
      description: 'Harmonia natural que induz ondas cerebrais Alfa propícias para planejamento profundo.',
      role: 'Alerta de encerramento da rotina'
    }
  ];

  return (
    <section id="audio" className="scroll-mt-28 py-24 sm:py-32 px-4 max-w-7xl mx-auto">
      <div className="double-bezel">
        <div className="double-bezel-inner p-8 sm:p-14 bg-gradient-to-b from-[#11111a] via-[#0c0c14] to-[#08080c] relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-semibold text-pink-300 mb-4">
              <Waves className="w-3.5 h-3.5" />
              <span>DESIGN SENSORIAL PROPRIETÁRIO</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Feedback Aural em 528Hz.{' '}
              <span className="text-zinc-400 font-light">Seu cérebro agradece.</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              Enquanto outros aplicativos usam alertas estridentes que disparam adrenalina,
              o Flow sintetiza ondas senoidais tibetanas em tempo real no seu hardware com envelopes orgânicos. Zero distorção. Ajuste o volume abaixo e experimente:
            </p>
          </div>

          {/* Volume Control Card with ReactBits WakeSlider */}
          <div className="mb-10 p-5 rounded-2xl bg-[#0e0e17]/80 border border-white/[0.08] backdrop-blur-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  {volume === 0 ? (
                    <VolumeX className="w-4 h-4" />
                  ) : volume < 45 ? (
                    <Volume1 className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white">Controle de Intensidade Aural</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {volume}%
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Sintetizado com curvas de ataque e decaimento suaves para nunca agredir os tímpanos.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Sliders className="w-3.5 h-3.5 text-indigo-400" />
                <span>Deslize para afinar o ganho</span>
              </div>
            </div>

            {/* WakeSlider from ReactBits */}
            <div className="px-2 py-1">
              <WakeSlider
                value={volume}
                onChange={(val) => {
                  setVolume(val);
                }}
                min={0}
                max={100}
                step={1}
                bars={36}
                height={50}
                restHeight={10}
                gap={3}
                fillColor="#6366f1"
                crestColor="#a855f7"
                trackColor="#1f1f2e"
                sensitivity={1.1}
                reach={6}
                ariaLabel="Volume do Áudio Flow"
              />
            </div>
          </div>

          {/* Sound Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {soundProfiles.map(sound => (
              <div
                key={sound.freq}
                className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  activeFrequency === sound.freq
                    ? 'bg-indigo-950/40 border-indigo-500/50 shadow-lg shadow-indigo-500/10'
                    : 'bg-white/[0.02] hover:bg-white/[0.04] border-white/[0.07]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xl font-bold text-white">
                      {sound.freq} Hz
                    </span>
                    <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-white/[0.06] text-zinc-400">
                      {sound.duration}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {sound.name}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {sound.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] text-indigo-300/80 font-medium">
                    {sound.role}
                  </span>

                  <button
                    onClick={() => handlePlay(sound.freq)}
                    className="p-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center"
                    aria-label={`Tocar som de ${sound.freq}Hz no volume ${volume}%`}
                  >
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Sound Wave Bar & Tactile Click */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-end gap-1 h-6 px-2">
                {[12, 24, 16, 20, 10, 22, 14, 18, 24, 12, 16, 20].map((h, i) => (
                  <span
                    key={i}
                    style={{ height: `${activeFrequency ? h : 6}px` }}
                    className={`w-1 rounded-full transition-all duration-200 ${
                      activeFrequency ? 'bg-indigo-400 animate-pulse' : 'bg-zinc-700'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-zinc-400 font-mono">
                {activeFrequency ? `Tocando ressonância em ${activeFrequency}Hz (${volume}% vol)...` : 'Clique em qualquer botão acima para testar o som'}
              </span>
            </div>

            <button
              onClick={() => playClickSound(volume / 100)}
              className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-zinc-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
            >
              Testar Feedback Tátil (Click)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

