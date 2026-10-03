import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface Chapter5Props {
  onStartConversation: () => void;
}

export const Chapter5ComeHome: React.FC<Chapter5Props> = ({ onStartConversation }) => {
  return (
    <section
      id="come-home"
      className="relative w-full bg-[#59212C] text-[#E0D9C9] py-16 md:py-24 overflow-hidden select-none"
      aria-label="Chapter 05: Come Home"
    >
      {/* Burgundy Tactile Paper Grain Overlay */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-35 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='burgundyNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23burgundyNoise)' opacity='0.12'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle Oversized Arch Outline near the edge of the composition */}
      <div
        className="absolute -right-24 md:-right-16 lg:right-12 top-16 pointer-events-none opacity-25 hidden md:block z-0"
        aria-hidden="true"
      >
        <motion.svg
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 0.28, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-[300px] lg:w-[460px] h-auto aspect-[20/28]"
          viewBox="0 0 20 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M1 27V10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10V27H1Z"
            stroke="#E0D9C9"
            strokeWidth="0.85"
            strokeDasharray="400"
            animate={{ strokeDashoffset: [400, 0] }}
            transition={{ duration: 2.8, ease: 'easeInOut' }}
          />
          <path d="M10 1V27" stroke="#E0D9C9" strokeWidth="0.5" strokeDasharray="1 2" />
          <path d="M1 10H19" stroke="#E0D9C9" strokeWidth="0.5" strokeDasharray="1 2" />
          <path d="M1 19H19" stroke="#E0D9C9" strokeWidth="0.5" strokeDasharray="1 2" />
        </motion.svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Chapter 5 Invitation Block */}
        <div className="reveal-on-scroll">
          <div className="flex items-center gap-3 text-xs tracking-[0.24em] uppercase text-[#E0D9C9]/80 font-accent mb-12">
            <span>05 / COME HOME</span>
            <span className="w-8 h-px bg-[#E0D9C9]/40" />
            <span>EVENING SENSE OF BELONGING</span>
          </div>

          <div className="max-w-3xl">
            <h2
              className="font-serif-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.04] text-[#E0D9C9] tracking-tight mb-8"
              style={{ textWrap: 'balance' }}
            >
              Let’s make
              <br />
              <span className="italic font-light opacity-95">room for you.</span>
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-[#E0D9C9]/90 font-light leading-relaxed mb-10 max-w-xl">
              Tell us what home means to you.
            </p>

            <motion.button
              whileHover={{ y: -2, backgroundColor: '#FFFFFF' }}
              whileTap={{ scale: 0.98 }}
              onClick={onStartConversation}
              className="group inline-flex items-center gap-4 bg-[#E0D9C9] text-[#59212C] px-8 py-4 text-xs md:text-sm tracking-[0.18em] uppercase font-semibold transition-colors duration-200 min-h-[48px] shadow-lg relative overflow-hidden"
            >
              <span>Start a conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
