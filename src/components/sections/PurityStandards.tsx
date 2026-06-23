import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../ui/AnimatedSection';
import { PurityIllustration } from '../ui/PurityIllustration';

export const PurityStandards: React.FC = () => {
  const guarantees = [
    {
      title: "USDA Organic",
      description: "100% certified organic cultivation. Grown without toxic chemical pesticides, synthetic weed-killers, or artificial growth regulators. Standardized to preserve maximum botanical purity.",
      illustration: () => (
        <svg viewBox="0 0 50 50" className="w-14 h-14 text-[var(--color-navy)]" fill="none">
          <circle cx="25" cy="25" r="23" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" fill="none" className="opacity-40" />
          <motion.path
            d="M25,35 C17,35 15,25 25,12 C35,25 33,35 25,35 Z"
            fill="currentColor"
            opacity="0.1"
          />
          <motion.path
            d="M25,35 C17,35 15,25 25,12 C35,25 33,35 25,35 Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <path d="M25,15 C20,22 20,30 25,34" stroke="currentColor" strokeWidth="1.0" strokeLinecap="round" />
          <motion.path
            d="M25,22 C28,21 30,22 31,24"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            animate={{ strokeDashoffset: [10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </svg>
      )
    },
    {
      title: "cGMP Facility",
      description: "Manufactured in a certified cGMP (current Good Manufacturing Practices) facility. Rigorous production control ensures every stage of batching meets FDA sanitation and quality benchmarks.",
      illustration: () => (
        <svg viewBox="0 0 50 50" className="w-14 h-14 text-[var(--color-navy)]" fill="none">
          <circle cx="25" cy="25" r="23" stroke="currentColor" strokeWidth="1" fill="none" className="opacity-30" />
          <motion.path
            d="M25,8 L12,13 L12,25 C12,35 25,42 25,42 C25,42 38,35 38,25 L38,13 Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
            fill="currentColor"
            opacity="0.08"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M18,24 L23,29 L32,18"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ pathLength: [0, 1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          />
        </svg>
      )
    },
    {
      title: "Lab Tested",
      description: "Independently verified by third-party laboratories. Every batch undergoes gas chromatography and HPLC tests to screen for heavy metals, yeast, mold, and confirm active potency.",
      illustration: () => (
        <svg viewBox="0 0 50 50" className="w-14 h-14 text-[var(--color-navy)]" fill="none">
          <circle cx="25" cy="25" r="23" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" fill="none" className="opacity-40" />
          <motion.g
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="12" y="32" width="26" height="4" rx="1" fill="currentColor" opacity="0.3" />
            <rect x="16" y="14" width="6" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
            <line x1="16" y1="20" x2="22" y2="20" stroke="currentColor" strokeWidth="1" />
            <rect x="28" y="10" width="6" height="22" rx="3" stroke="currentColor" strokeWidth="1.8" />
            <line x1="28" y1="18" x2="34" y2="18" stroke="currentColor" strokeWidth="1" />
          </motion.g>
          <motion.circle cx="20" cy="12" r="1.5" fill="currentColor" animate={{ y: [0, -6], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
          <motion.circle cx="31" cy="7" r="1.2" fill="currentColor" animate={{ y: [0, -5], opacity: [0, 1, 0] }} transition={{ duration: 1.8, repeat: Infinity, delay: 0.4 }} />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-gradient-to-r from-[rgba(10, 25, 47,0.22)] via-[rgba(10, 25, 47,0.06)] to-white text-[var(--color-text)] py-20 md:py-28 relative overflow-hidden border-b border-[rgba(10, 25, 47,0.15)]">
      
      {/* Outer wrapper */}
      <div className="max-w-[var(--max-width)] mx-auto px-6 md:px-12 flex flex-col gap-16 md:gap-20">
        
        {/* ROW 1: Title & Narrative + Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* LEFT: Text */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            <span className="eyebrow text-[var(--color-navy)]">OUR TRADITION</span>
            
            <h2 className="heading-condensed text-4xl md:text-5xl text-[var(--color-heading)] tracking-wide">
              history of purity
            </h2>

            <div className="font-sans text-sm md:text-[0.95rem] font-light leading-relaxed flex flex-col gap-4 max-w-xl">
              <p>
                In Sanskrit, Ayurveda represents "The Science of Life". For thousands of years, adaptogenic roots were prepared with reverent precision to restore natural vitality.
              </p>
              <p className="font-semibold text-[var(--color-heading)]">
                At Vedah Vital, we preserve this botanical wisdom while validating it with modern high-performance analytical chemistry.
              </p>
              <p>
                We believe in absolute label integrity. By screening every batch in ISO-certified laboratories and printing batch codes on every bottle, we provide standard testing verification directly to your hands. Every bottle carries a 100% purity and satisfaction money-back guarantee.
              </p>
            </div>
          </div>

          {/* RIGHT: HPLC Flask Illustration */}
          <div className="lg:col-span-5 flex justify-center items-center py-6 w-full">
            <PurityIllustration />
          </div>

        </div>

        {/* ROW 2: The Three Big Cards Purity Guarantee */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-start text-left gap-2">
            <span className="eyebrow text-[var(--color-navy)]">THE VEDAH VITAL GUARANTEE</span>
            <h3 className="heading-condensed text-3xl md:text-4xl text-[var(--color-heading)]">
              purity certified, quality assured
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {guarantees.map((g, idx) => {
              const Illustration = g.illustration;
              return (
                <AnimatedSection
                  key={g.title}
                  delay={idx * 0.15}
                  className="flex flex-col items-start gap-4 p-6 rounded-3xl border border-[rgba(10,25,47,0.12)] bg-white/50 backdrop-blur-md shadow-sm hover:shadow-md hover:scale-[1.02] hover:bg-white/70 transition-all duration-300 group text-left"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[var(--color-navy-light)] text-[var(--color-navy)] shadow-inner transition-transform duration-300 group-hover:scale-105">
                    <Illustration />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-sans text-base font-bold uppercase tracking-wider text-[var(--color-heading)]">
                      {g.title}
                    </h4>
                    <p className="font-sans text-xs md:text-sm text-[var(--color-text)] opacity-85 font-light leading-relaxed">
                      {g.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
export default PurityStandards;
