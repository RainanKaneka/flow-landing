// Web Audio API synthesizer for 528Hz Tibetan Bowl and tactile sounds
// Tuned with smooth acoustic attack/decay curves to protect human hearing and sound warm/serene.

export const playTibetanBowl = (freq: number = 528, duration: number = 3.5, volumeNormalized: number = 0.6) => {
  if (typeof window === 'undefined') return;
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioContextClass();

    // Safe master volume ceiling (max 0.09 at 100% volume to prevent ear strain/clipping)
    const safeVolume = Math.max(0, Math.min(volumeNormalized, 1)) * 0.085;
    if (safeVolume <= 0.001) return;

    const now = ctx.currentTime;
    const attackTime = 0.06; // 60ms gentle attack removes any speaker pop/click

    // Master Gain with soft envelope
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.0001, now);
    masterGain.gain.linearRampToValueAtTime(safeVolume, now + attackTime);
    masterGain.gain.exponentialRampToValueAtTime(0.00005, now + duration);
    masterGain.connect(ctx.destination);

    // Fundamental Tone (Sine wave)
    const osc1 = ctx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, now);
    osc1.connect(masterGain);
    osc1.start(now);
    osc1.stop(now + duration);

    // Harmonic Overtones (gentle resonant shimmer)
    const osc2 = ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 2.005, now);
    const gain2 = ctx.createGain();
    gain2.gain.setValueAtTime(0.0001, now);
    gain2.gain.linearRampToValueAtTime(safeVolume * 0.35, now + attackTime * 1.5);
    gain2.gain.exponentialRampToValueAtTime(0.00005, now + duration * 0.75);
    osc2.connect(gain2);
    gain2.connect(masterGain);
    osc2.start(now);
    osc2.stop(now + duration);

    // Subtle Warm Third Harmonic
    const osc3 = ctx.createOscillator();
    osc3.type = 'sine';
    osc3.frequency.setValueAtTime(freq * 3.01, now);
    const gain3 = ctx.createGain();
    gain3.gain.setValueAtTime(0.0001, now);
    gain3.gain.linearRampToValueAtTime(safeVolume * 0.15, now + attackTime * 2);
    gain3.gain.exponentialRampToValueAtTime(0.00005, now + duration * 0.55);
    osc3.connect(gain3);
    gain3.connect(masterGain);
    osc3.start(now);
    osc3.stop(now + duration);
  } catch (e) {
    console.warn('Audio playback error', e);
  }
};

export const playClickSound = (volumeNormalized: number = 0.5) => {
  if (typeof window === 'undefined') return;
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    const safeVolume = Math.max(0, Math.min(volumeNormalized, 1)) * 0.035;
    if (safeVolume <= 0.001) return;

    const now = ctx.currentTime;
    osc.type = 'sine';
    osc.frequency.setValueAtTime(900, now);
    osc.frequency.exponentialRampToValueAtTime(320, now + 0.035);

    gain.gain.setValueAtTime(safeVolume, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.035);
  } catch (e) {
    console.warn('Audio error', e);
  }
};
