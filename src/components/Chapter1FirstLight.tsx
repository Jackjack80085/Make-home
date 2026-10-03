import pageImage0 from '../assets/images/hero_sunlit_home_1791013817349.jpg';
import React from 'react';
import { motion } from 'motion/react';

interface Chapter1Props {
  onDiscoverClick: () => void;
}

export const Chapter1FirstLight: React.FC<Chapter1Props> = ({ onDiscoverClick }) => {
  return (
    <section
      id="the-first-light"
      className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden select-none"
      aria-label="Chapter 01: The First Light"
    >
      {/* Background Cinematic Photo with Settle Motion & Subtle Continuous Atmosphere */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src={pageImage0}
          alt="Sunlight pouring across a quiet architect-designed living space with billowing linen curtains"
          referrerPolicy="no-referrer"
          initial={{ scale: 1.055, opacity: 0.92 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full object-cover object-[65%_35%] md:object-center"
        />

        {/* Tactile Texture Overlay: Paper & Plaster grain */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-40 z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />

        {/* Ambient Morning Light Beams (Soft Golden Ray Shimmer) */}
        <div
          className="absolute -top-32 -left-20 w-[900px] h-[900px] pointer-events-none rounded-full blur-3xl opacity-20 bg-gradient-to-br from-amber-100/40 via-amber-200/10 to-transparent animate-light-beam"
        />

        {/* Subtle Sunlit Dust Motes in the Morning Light */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 hidden sm:block">
          <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-amber-100/80 blur-[0.5px] animate-dust-1" />
          <div className="absolute top-1/2 left-1/3 w-1 h-1 rounded-full bg-amber-200/60 blur-[0.5px] animate-dust-2" />
          <div className="absolute top-2/5 left-1/2 w-1.5 h-1.5 rounded-full bg-stone-100/70 blur-[0.5px] animate-dust-3" />
          <div className="absolute top-3/5 left-2/5 w-1 h-1 rounded-full bg-amber-100/50 blur-[0.5px] animate-dust-1" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/4 left-3/5 w-2 h-2 rounded-full bg-amber-50/40 blur-[1px] animate-dust-2" style={{ animationDelay: '5s' }} />
        </div>

        {/* Measured Contrast Scrims for Editorial Readability */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(to top, rgba(36,45,54,0.88) 0%, rgba(36,45,54,0.45) 40%, rgba(36,45,54,0.08) 70%, transparent 100%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none hidden md:block z-10"
          style={{
            background:
              'linear-gradient(to right, rgba(36,45,54,0.72) 0%, rgba(36,45,54,0.25) 45%, transparent 85%)',
          }}
        />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-24 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Lower-left Typography Block */}
          <div className="lg:col-span-8 flex flex-col items-start">
            {/* Large Serif Headline with Staggered Entrance Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#E0D9C9] font-serif-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] font-normal mb-6 max-w-2xl"
              style={{ textWrap: 'balance' }}
            >
              Make room
              <br />
              <span className="italic font-light">for living.</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#E0D9C9]/90 text-lg md:text-xl font-light tracking-wide max-w-lg mb-8"
            >
              Thoughtful homes. Everyday joys.
            </motion.p>

            {/* Small Burgundy Action with Tactile Elevation */}
            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -2, backgroundColor: '#6e2936' }}
              whileTap={{ scale: 0.98 }}
              onClick={onDiscoverClick}
              className="group inline-flex items-center gap-3.5 bg-[#59212C] text-[#E0D9C9] px-6 py-3.5 text-xs md:text-sm tracking-[0.16em] uppercase font-medium transition-colors duration-200 min-h-[44px] shadow-lg border border-[#E0D9C9]/10 relative overflow-hidden"
            >
              {/* Subtle inner sheen on button */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span>Discover the MAKE way</span>
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 14 14"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 7h12m-5-5l5 5-5 5" />
              </svg>
            </motion.button>
          </div>

          {/* Right Column: Fine vertical scroll line & small caption: “01 / THE FIRST LIGHT” */}
          <div className="lg:col-span-4 flex flex-col lg:items-end justify-end mt-6 lg:mt-0">
            <motion.a
              href="#the-feeling-of-home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              onClick={(e) => {
                e.preventDefault();
                onDiscoverClick();
              }}
              className="group flex items-center lg:flex-col lg:items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#E0D9C9]/80 hover:text-[#E0D9C9] transition-colors py-2"
              aria-label="Scroll to 01 / The First Light"
            >
              <span className="text-[11px] font-accent tracking-[0.22em] text-[#E0D9C9]/90 font-medium">
                01 / THE FIRST LIGHT
              </span>
              <div className="w-12 lg:w-px h-px lg:h-20 bg-[#E0D9C9]/25 relative overflow-hidden">
                <motion.div
                  animate={{ y: ['-100%', '100%'] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-full h-1/2 bg-gradient-to-b from-transparent via-[#E0D9C9] to-transparent"
                />
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};
