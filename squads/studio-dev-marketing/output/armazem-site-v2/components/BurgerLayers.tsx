/* SVG illustrations for each burger layer */

export const BunTop = () => (
  <svg viewBox="0 0 280 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="bunTopG" cx="50%" cy="75%" r="65%">
        <stop offset="0%" stopColor="#E8A040" />
        <stop offset="60%" stopColor="#C4762A" />
        <stop offset="100%" stopColor="#7A3F10" />
      </radialGradient>
      <radialGradient id="bunSheen" cx="35%" cy="25%" r="45%">
        <stop offset="0%" stopColor="rgba(255,220,130,0.4)" />
        <stop offset="100%" stopColor="rgba(255,220,130,0)" />
      </radialGradient>
    </defs>
    {/* Main dome */}
    <ellipse cx="140" cy="68" rx="136" ry="60" fill="url(#bunTopG)" />
    <ellipse cx="140" cy="68" rx="136" ry="60" fill="url(#bunSheen)" />
    {/* Bottom flat edge */}
    <rect x="4" y="90" width="272" height="18" rx="4" fill="#7A3F10" />
    {/* Sesame seeds */}
    <ellipse cx="100" cy="38" rx="7" ry="4" fill="rgba(255,240,180,0.55)" transform="rotate(-20 100 38)" />
    <ellipse cx="140" cy="28" rx="7" ry="4" fill="rgba(255,240,180,0.55)" transform="rotate(8 140 28)" />
    <ellipse cx="178" cy="36" rx="7" ry="4" fill="rgba(255,240,180,0.55)" transform="rotate(25 178 36)" />
    <ellipse cx="118" cy="58" rx="5" ry="3" fill="rgba(255,240,180,0.4)" transform="rotate(-10 118 58)" />
    <ellipse cx="162" cy="55" rx="5" ry="3" fill="rgba(255,240,180,0.4)" transform="rotate(15 162 55)" />
  </svg>
);

export const CheeseSlice = () => (
  <svg viewBox="0 0 280 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cheeseG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F9D030" />
        <stop offset="100%" stopColor="#E8A800" />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="280" height="18" rx="3" fill="url(#cheeseG)" />
    {/* Melting drips */}
    <path d="M20 18 Q22 28 20 28 Q18 28 20 18" fill="#F9D030" />
    <path d="M55 18 Q58 26 56 28 Q54 28 55 18" fill="#F9D030" />
    <path d="M230 18 Q233 26 231 28 Q229 28 230 18" fill="#F9D030" />
    <path d="M265 18 Q268 28 266 28 Q264 28 265 18" fill="#F9D030" />
    <path d="M130 18 Q132 24 130 26 Q128 26 130 18" fill="#F9D030" />
  </svg>
);

export const BaconStrip = () => (
  <svg viewBox="0 0 280 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bacon1" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%"  stopColor="#8B1A1A" />
        <stop offset="25%" stopColor="#C0392B" />
        <stop offset="50%" stopColor="#F4A0A0" />
        <stop offset="75%" stopColor="#C0392B" />
        <stop offset="100%" stopColor="#8B1A1A" />
      </linearGradient>
      <linearGradient id="bacon2" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%"  stopColor="#A0341E" />
        <stop offset="30%" stopColor="#E85A2A" />
        <stop offset="60%" stopColor="#FFCFA0" />
        <stop offset="100%" stopColor="#A0341E" />
      </linearGradient>
    </defs>
    <path d="M0 8 Q40 4 80 8 Q120 12 160 8 Q200 4 240 8 Q260 10 280 8 L280 16 Q240 20 200 16 Q160 12 120 16 Q80 20 40 16 Q20 14 0 16 Z" fill="url(#bacon1)" />
    <path d="M0 3 Q35 0 70 3 Q105 6 140 3 Q175 0 210 3 Q245 6 280 3 L280 8 Q245 11 210 8 Q175 5 140 8 Q105 11 70 8 Q35 5 0 8 Z" fill="url(#bacon2)" opacity="0.8" />
  </svg>
);

export const OnionRings = () => (
  <svg viewBox="0 0 280 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="onionG" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#C084FC" />
        <stop offset="100%" stopColor="#7C3AED" />
      </radialGradient>
    </defs>
    <ellipse cx="60"  cy="11" rx="55" ry="10" fill="none" stroke="url(#onionG)" strokeWidth="8" opacity="0.9" />
    <ellipse cx="140" cy="11" rx="55" ry="10" fill="none" stroke="url(#onionG)" strokeWidth="8" opacity="0.9" />
    <ellipse cx="220" cy="11" rx="55" ry="10" fill="none" stroke="url(#onionG)" strokeWidth="8" opacity="0.9" />
  </svg>
);

export const LettuceLayer = () => (
  <svg viewBox="0 0 280 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="lettuceG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4ADE80" />
        <stop offset="100%" stopColor="#166534" />
      </linearGradient>
    </defs>
    <path d="M0 20 Q15 6 30 14 Q45 4 60 16 Q75 4 90 14 Q105 4 120 18 Q135 6 150 16 Q165 4 180 14 Q195 4 210 16 Q225 6 240 14 Q255 4 270 12 Q278 8 280 14 L280 26 Q270 32 255 26 Q240 22 225 28 Q210 22 195 28 Q180 22 165 28 Q150 22 135 28 Q120 22 105 28 Q90 22 75 28 Q60 22 45 28 Q30 22 15 28 Q6 30 0 26 Z"
      fill="url(#lettuceG)" opacity="0.9" />
  </svg>
);

export const PattyLayer = () => (
  <svg viewBox="0 0 280 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="pattyG" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stopColor="#5C3A1E" />
        <stop offset="70%" stopColor="#2C1810" />
        <stop offset="100%" stopColor="#1A0D06" />
      </radialGradient>
    </defs>
    <rect x="8" y="6" width="264" height="40" rx="10" fill="url(#pattyG)" />
    {/* Grill marks */}
    <line x1="60"  y1="10" x2="50"  y2="42" stroke="rgba(0,0,0,0.5)" strokeWidth="5" strokeLinecap="round" />
    <line x1="100" y1="10" x2="90"  y2="42" stroke="rgba(0,0,0,0.5)" strokeWidth="5" strokeLinecap="round" />
    <line x1="140" y1="10" x2="130" y2="42" stroke="rgba(0,0,0,0.5)" strokeWidth="5" strokeLinecap="round" />
    <line x1="180" y1="10" x2="170" y2="42" stroke="rgba(0,0,0,0.5)" strokeWidth="5" strokeLinecap="round" />
    <line x1="220" y1="10" x2="210" y2="42" stroke="rgba(0,0,0,0.5)" strokeWidth="5" strokeLinecap="round" />
    {/* edge highlight */}
    <rect x="8" y="6" width="264" height="8" rx="10" fill="rgba(255,150,80,0.06)" />
  </svg>
);

export const SauceLayer = () => (
  <svg viewBox="0 0 280 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sauceG" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%"  stopColor="#C0392B" />
        <stop offset="40%" stopColor="#E74C3C" />
        <stop offset="100%" stopColor="#C0392B" />
      </linearGradient>
    </defs>
    <path d="M10 6 Q30 2 50 8 Q70 14 90 8 Q110 2 130 8 Q150 14 170 8 Q190 2 210 8 Q230 14 250 8 Q265 4 272 8 L272 14 Q255 18 235 12 Q215 6 195 12 Q175 18 155 12 Q135 6 115 12 Q95 18 75 12 Q55 6 35 12 Q20 16 10 14 Z"
      fill="url(#sauceG)" opacity="0.95" />
  </svg>
);

export const CheddarLayer = () => (
  <svg viewBox="0 0 280 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cheddarG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F39C12" />
        <stop offset="100%" stopColor="#D68910" />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="280" height="16" rx="3" fill="url(#cheddarG)" />
    {/* Drips */}
    <path d="M35 16 Q37 24 35 24 Q33 24 35 16" fill="#F39C12" />
    <path d="M90 16 Q92 22 90 22 Q88 22 90 16" fill="#F39C12" />
    <path d="M155 16 Q158 24 156 24 Q154 24 155 16" fill="#F39C12" />
    <path d="M200 16 Q202 22 200 22 Q198 22 200 16" fill="#F39C12" />
    <path d="M250 16 Q252 24 250 24 Q248 24 250 16" fill="#F39C12" />
  </svg>
);

export const BunBottom = () => (
  <svg viewBox="0 0 280 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bunBotG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#C4722A" />
        <stop offset="100%" stopColor="#7A3810" />
      </linearGradient>
    </defs>
    <rect x="4" y="0" width="272" height="44" rx="10" fill="url(#bunBotG)" />
    {/* Shadow bottom */}
    <ellipse cx="140" cy="52" rx="130" ry="6" fill="rgba(0,0,0,0.4)" />
  </svg>
);
