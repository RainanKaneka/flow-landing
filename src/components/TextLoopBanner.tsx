import React from 'react';
import { TextLoop } from './reactbits/TextLoop';

export const TextLoopBanner: React.FC = () => {
  return (
    <div className="w-full relative overflow-hidden py-2 my-2 bg-transparent">
      <div className="w-full pointer-events-auto">
        <TextLoop
          text="FOCO PROFUNDO ✦ DESIGN DOUBLE-BEZEL ✦ ÁUDIO 528HZ ✦ GEMINI IA NATIVA ✦ SQLITE LOCAL ZERO LATÊNCIA ✦ OFFLINE-FIRST"
          shape="wave"
          curviness={12}
          fontSize={19}
          fontWeight={700}
          letterSpacing={3}
          color="#e0e7ff"
          ribbon={false}
          speed={55}
          pauseOnHover={true}
        />
      </div>
    </div>
  );
};
