import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const IngredientInfographic: React.FC = () => {
  const [strengthCount, setStrengthCount] = useState(0.0);
  const [absorptionCount, setAbsorptionCount] = useState(0);

  // Smooth counter animations
  useEffect(() => {
    let strengthStart = 0.0;
    const strengthEnd = 5.0;
    const strengthDuration = 1800;
    const strengthStepTime = Math.abs(Math.floor(strengthDuration / (strengthEnd * 10)));
    
    const strengthTimer = setInterval(() => {
      strengthStart += 0.1;
      if (strengthStart >= strengthEnd) {
        setStrengthCount(strengthEnd);
        clearInterval(strengthTimer);
      } else {
        setStrengthCount(parseFloat(strengthStart.toFixed(1)));
      }
    }, strengthStepTime);

    let absStart = 0;
    const absEnd = 30;
    const absDuration = 1800;
    const absStepTime = Math.abs(Math.floor(absDuration / absEnd));

    const absTimer = setInterval(() => {
      absStart += 1;
      if (absStart >= absEnd) {
        setAbsorptionCount(absEnd);
        clearInterval(absTimer);
      } else {
        setAbsorptionCount(absStart);
      }
    }, absStepTime);

    return () => {
      clearInterval(strengthTimer);
      clearInterval(absTimer);
    };
  }, []);

  return (
    <div className="w-full max-w-[500px] min-h-[500px] md:min-h-[530px] flex flex-col gap-4 p-5 md:p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl relative">
      
      {/* Decorative background grid lines */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-[0.03] pointer-events-none">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="border-r border-b border-white" />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow relative z-10">
        
        {/* CARD 1: Sourcing Purity (Root vs Leaf) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col p-4 rounded-2xl bg-white/5 border border-white/10 items-center text-center justify-between min-h-[220px] relative"
        >
          <span className="text-[9px] font-sans font-bold tracking-[0.18em] text-[#8FB3FF] uppercase">1. THE SOURCE</span>
          
          <div className="w-full h-32 flex items-center justify-center relative">
            {/* Elegant, organic, recognizable plant SVG with gradient coloring */}
            <svg className="w-36 h-full" viewBox="0 0 100 80" fill="none">
              <defs>
                <linearGradient id="plantLeafGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8FB3FF" />
                  <stop offset="100%" stopColor="#5A7FA8" />
                </linearGradient>
                <linearGradient id="plantRootGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFE296" />
                  <stop offset="100%" stopColor="#D9A05B" />
                </linearGradient>
                <linearGradient id="extractField" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FFE296" stopOpacity="0.0" />
                  <stop offset="50%" stopColor="#FFE296" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#8FB3FF" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* Soil Line */}
              <line x1="10" y1="45" x2="90" y2="45" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              {/* Soil crumbs */}
              <circle cx="20" cy="48" r="1" fill="rgba(255,255,255,0.3)" />
              <circle cx="45" cy="47" r="0.8" fill="rgba(255,255,255,0.3)" />
              <circle cx="78" cy="48" r="1" fill="rgba(255,255,255,0.3)" />

              {/* Leaves (Upper Plant) - Faded blue outline with low opacity fill */}
              <motion.g 
                animate={{ rotate: [-1, 1, -1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="origin-[50px_45px]"
              >
                {/* Center stem */}
                <path d="M50,15 L50,45" stroke="url(#plantLeafGrad)" strokeWidth="2.0" strokeLinecap="round" />
                
                {/* Top Leaf */}
                <path d="M50,15 C42,7 50,0 50,0 C50,0 58,7 50,15 Z" fill="url(#plantLeafGrad)" opacity="0.25" />
                <path d="M50,15 C42,7 50,0 50,0 C50,0 58,7 50,15 Z" stroke="url(#plantLeafGrad)" strokeWidth="1.6" />
                
                {/* Left Leaf 1 */}
                <path d="M50,23 C34,16 26,23 26,23 C26,23 34,31 50,27 Z" fill="url(#plantLeafGrad)" opacity="0.25" />
                <path d="M50,23 C34,16 26,23 26,23 C26,23 34,31 50,27 Z" stroke="url(#plantLeafGrad)" strokeWidth="1.6" />
                
                {/* Right Leaf 1 */}
                <path d="M50,25 C66,18 74,25 74,25 C74,25 66,33 50,29 Z" fill="url(#plantLeafGrad)" opacity="0.25" />
                <path d="M50,25 C66,18 74,25 74,25 C74,25 66,33 50,29 Z" stroke="url(#plantLeafGrad)" strokeWidth="1.6" />

                {/* Left Leaf 2 */}
                <path d="M50,32 C36,26 28,32 28,32 C28,32 36,40 50,36 Z" fill="url(#plantLeafGrad)" opacity="0.2" />
                <path d="M50,32 C36,26 28,32 28,32 C28,32 36,40 50,36 Z" stroke="url(#plantLeafGrad)" strokeWidth="1.6" />

                {/* Right Leaf 2 */}
                <path d="M50,34 C64,28 72,34 72,34 C72,34 64,42 50,38 Z" fill="url(#plantLeafGrad)" opacity="0.2" />
                <path d="M50,34 C64,28 72,34 72,34 C72,34 64,42 50,38 Z" stroke="url(#plantLeafGrad)" strokeWidth="1.6" />
              </motion.g>

              {/* Extraction Vapor/Glow Field surrounding the roots */}
              <motion.path
                d="M 20,78 Q 50,60 80,78"
                stroke="url(#extractField)"
                strokeWidth="12"
                strokeLinecap="round"
                opacity="0.3"
                animate={{ opacity: [0.1, 0.4, 0.1], strokeWidth: [8, 14, 8] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Highly Detailed Tuberous Roots - Tapered paths with details */}
              <g className="filter drop-shadow-[0_2px_4px_rgba(217,160,91,0.2)]">
                {/* Main tuber body */}
                <path
                  d="M45,45 C45,55 42,64 45,74 C47,76 49,76 50,74 C52,64 53,55 52,45 Z"
                  fill="url(#plantRootGrad)"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                
                {/* Main tuber vertical wrinkles */}
                <path d="M47,48 C46,55 45,62 47,70" stroke="rgba(10,25,47,0.18)" strokeWidth="0.8" />
                <path d="M49,50 C48,58 48,65 49,72" stroke="rgba(10,25,47,0.18)" strokeWidth="0.8" />

                {/* Left side branching tuber */}
                <path
                  d="M45,51 C37,54 32,58 26,60 C25,60 25,62 26,62 C34,60 40,56 45,54 Z"
                  fill="url(#plantRootGrad)"
                  stroke="currentColor"
                  strokeWidth="1.0"
                />

                {/* Right side branching tuber */}
                <path
                  d="M51,54 C60,56 66,61 74,62 C75,62 75,60 74,60 C66,59 60,54 51,52 Z"
                  fill="url(#plantRootGrad)"
                  stroke="currentColor"
                  strokeWidth="1.0"
                />

                {/* Fibrous rootlet hairs (Thin lateral extensions) */}
                {/* Main bottom fibers */}
                <path d="M47,74 Q46,79 43,84" stroke="url(#plantRootGrad)" strokeWidth="0.8" strokeLinecap="round" />
                <path d="M48,74 Q51,80 54,85" stroke="url(#plantRootGrad)" strokeWidth="0.8" strokeLinecap="round" />
                <path d="M48,77 Q48,82 48,87" stroke="url(#plantRootGrad)" strokeWidth="0.6" strokeLinecap="round" />
                {/* Left fibers */}
                <path d="M26,61 Q21,63 18,67" stroke="url(#plantRootGrad)" strokeWidth="0.7" strokeLinecap="round" />
                <path d="M29,60 Q26,65 24,70" stroke="url(#plantRootGrad)" strokeWidth="0.6" strokeLinecap="round" />
                {/* Right fibers */}
                <path d="M74,61 Q79,63 82,67" stroke="url(#plantRootGrad)" strokeWidth="0.7" strokeLinecap="round" />
                <path d="M71,61 Q73,66 74,71" stroke="url(#plantRootGrad)" strokeWidth="0.6" strokeLinecap="round" />
              </g>

              {/* Extraction/Diffusion Animation: particles escaping roots and floating into beaker */}
              
              {/* Withanolides escaping left branch */}
              <motion.circle
                r="1.8"
                fill="#FFE296"
                animate={{
                  cx: [32, 22, 12],
                  cy: [59, 62, 55],
                  opacity: [0, 1, 1, 0],
                  scale: [0.6, 1.2, 0.5]
                }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.2 }}
              />

              {/* Withanolides escaping right branch */}
              <motion.circle
                r="1.8"
                fill="#FFE296"
                animate={{
                  cx: [66, 76, 86],
                  cy: [59, 62, 55],
                  opacity: [0, 1, 1, 0],
                  scale: [0.6, 1.2, 0.5]
                }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.8 }}
              />

              {/* Concentrating into upward active pulses */}
              <motion.circle
                cx={48}
                cy={70}
                r="2.5"
                fill="#FFF"
                animate={{
                  cx: [48, 50, 50],
                  cy: [70, 45, 18],
                  opacity: [0, 1, 0.8, 0]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.circle
                cx={29}
                cy={60}
                r="2"
                fill="#FFE296"
                animate={{
                  cx: [29, 48, 50],
                  cy: [60, 51, 45],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
              />
              <motion.circle
                cx={68}
                cy={60}
                r="2"
                fill="#8FB3FF"
                animate={{
                  cx: [68, 52, 50],
                  cy: [60, 53, 45],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 1.1 }}
              />
            </svg>
          </div>

          {/* Absolute labels placed cleanly at outer card edges */}
          <div className="absolute top-10 right-3 bg-white/10 text-white/80 border border-white/20 rounded-full px-2 py-0.5 text-[7px] font-sans font-bold uppercase tracking-wider">
            LEAVES DISCARDED
          </div>
          <div className="absolute bottom-14 left-3 bg-[#FFE296] text-[var(--color-navy-deep)] rounded-full px-2 py-0.5 text-[7px] font-sans font-bold shadow-md uppercase tracking-wider">
            ROOT ONLY
          </div>
          
          <div className="flex flex-col gap-0.5">
            <span className="text-[11px] font-sans font-bold tracking-wide text-white uppercase">Pure Root Extraction</span>
            <span className="text-[9px] font-sans text-white/70">No leaf waste or fillers</span>
          </div>
        </motion.div>

        {/* CARD 2: Strength Dial (5.0% Standardized Potency) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col p-4 rounded-2xl bg-white/5 border border-white/10 items-center text-center justify-between min-h-[220px] relative"
        >
          <span className="text-[9px] font-sans font-bold tracking-[0.18em] text-[#FFE296] uppercase">2. THE STRENGTH</span>
          
          <div className="w-full h-32 flex items-center justify-center relative">
            <defs>
              <linearGradient id="dialGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8FB3FF" />
                <stop offset="50%" stopColor="#FFE296" />
                <stop offset="100%" stopColor="#F5B041" />
              </linearGradient>
            </defs>

            {/* Larger Standardized Strength Progress Ring */}
            <svg className="w-28 h-28 transform -rotate-90">
              <circle
                cx="56"
                cy="56"
                r="45"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="5.5"
                fill="transparent"
              />
              <motion.circle
                cx="56"
                cy="56"
                r="45"
                stroke="url(#dialGrad)"
                strokeWidth="5.5"
                fill="transparent"
                strokeDasharray={282.7}
                initial={{ strokeDashoffset: 282.7 }}
                animate={{ strokeDashoffset: 282.7 - (282.7 * 0.75) }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                strokeLinecap="round"
              />
            </svg>
            
            {/* Center Dial Value */}
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-xl font-condensed tracking-wide text-white font-bold leading-none filter drop-shadow-[0_2px_4px_rgba(255,226,150,0.25)]">
                {strengthCount.toFixed(1)}%
              </span>
              <span className="text-[7.5px] font-sans tracking-widest text-[#FFE296] font-semibold uppercase leading-none mt-1">
                WITHANOLIDES
              </span>
            </div>
          </div>

          {/* Absolute label placed cleanly at top right */}
          <div className="absolute top-10 right-3 bg-white/10 border border-white/20 rounded-full px-2 py-0.5 text-[7px] font-sans font-semibold text-white uppercase tracking-wider">
            LAB CERTIFIED
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-[11px] font-sans font-bold tracking-wide text-white uppercase">Consistent Potency</span>
            <span className="text-[9px] font-sans text-white/70">Exact active strength daily</span>
          </div>
        </motion.div>

      </div>

      {/* CARD 3: Enhanced Absorption Synergy (Black Pepper) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col p-4 rounded-2xl bg-white/5 border border-white/10 justify-between items-stretch min-h-[160px] mt-4"
      >
        <div className="flex justify-between items-center w-full">
          <span className="text-[9px] font-sans font-bold tracking-[0.18em] text-[#8FB3FF] uppercase">3. THE ABSORPTION SYNERGY</span>
          <span className="text-[10px] font-sans font-bold text-[#FFE296] uppercase bg-white/10 px-2.5 py-0.5 rounded-full">
            +{absorptionCount}% FASTER
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-2">
          
          {/* Visual animated capsule illustration */}
          <div className="md:col-span-5 h-20 flex items-center justify-center relative bg-white/5 rounded-xl border border-white/5 overflow-hidden">
            
            <svg viewBox="0 0 160 50" className="w-full h-12" fill="none">
              <defs>
                <linearGradient id="capsuleNavy" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1B365D" />
                  <stop offset="100%" stopColor="#0D1B2A" />
                </linearGradient>
                <linearGradient id="capsuleGold" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFE296" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#F5B041" stopOpacity="0.25" />
                </linearGradient>
              </defs>

              {/* Left Cap (Navy) - represents Ashwagandha */}
              <motion.g
                animate={{ x: [-2, 2, -2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <rect x="25" y="12" width="28" height="20" rx="10" fill="url(#capsuleNavy)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                <text x="31" y="24" fill="rgba(255,255,255,0.6)" fontSize="6" fontFamily="sans-serif" fontWeight="bold">KSM</text>
              </motion.g>

              {/* Right Cap (Clear Gold) - represents Piperine absorption catalyst */}
              <motion.g
                animate={{ x: [2, -2, 2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <rect x="55" y="12" width="28" height="20" rx="10" fill="url(#capsuleGold)" stroke="#FFE296" strokeWidth="1.5" />
                
                {/* Small floating molecular particles inside clear capsule */}
                <motion.circle cx="62" cy="18" r="1.5" fill="#FFE296" animate={{ y: [0, 4, 0], x: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
                <motion.circle cx="72" cy="22" r="1.2" fill="#8FB3FF" animate={{ y: [0, -3, 0], x: [0, -1, 0] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.3 }} />
                <motion.circle cx="68" cy="26" r="1.5" fill="#FFF" animate={{ y: [0, -4, 0] }} transition={{ duration: 1.8, repeat: Infinity, delay: 0.6 }} />
                <text x="64" y="24" fill="#FFE296" fontSize="5" fontFamily="sans-serif" fontWeight="bold">95%</text>
              </motion.g>

              {/* Center Synergy Sparkle */}
              <motion.g
                animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path d="M54,6 L54,22 M46,14 L62,14" stroke="#FFE296" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="54" cy="14" r="3.5" fill="#FFF" className="blur-[0.5px]" opacity="0.8" />
              </motion.g>
            </svg>

            {/* Glowing caption */}
            <span className="absolute bottom-1 text-[7px] font-sans font-bold text-white/55 tracking-widest uppercase">
              active bonding
            </span>
          </div>

          {/* Simple side-by-side comparison bars */}
          <div className="md:col-span-7 flex flex-col gap-2 justify-center">
            
            {/* Bar 1: Regular Ashwagandha */}
            <div className="flex flex-col gap-0.5">
              <div className="flex justify-between text-[8px] font-sans text-white/70 uppercase tracking-wide">
                <span>Standard Ashwagandha</span>
                <span>Normal</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/15">
                <div className="h-full bg-white/40 rounded-full w-[70%]" />
              </div>
            </div>

            {/* Bar 2: Synergized Ashwagandha */}
            <div className="flex flex-col gap-0.5">
              <div className="flex justify-between text-[8px] font-sans text-white uppercase tracking-wide font-bold">
                <span>Synergized with Black Pepper</span>
                <span>30% Faster</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden relative">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
                  className="h-full bg-gradient-to-r from-[#8FB3FF] to-[#FFE296] rounded-full"
                />
              </div>
            </div>

          </div>

        </div>

        <div className="flex justify-between items-center w-full border-t border-white/5 pt-2 mt-1">
          <span className="text-[11px] font-sans font-bold tracking-wide text-white uppercase">Optimal Bioavailability</span>
          <span className="text-[9px] font-sans text-white/70">With 5mg Black Pepper absorption catalyst</span>
        </div>
      </motion.div>

    </div>
  );
};
