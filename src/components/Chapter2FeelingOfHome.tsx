import pageImage0 from '../assets/images/domestic_detail_reading_1791013828318.jpg';
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const Chapter2FeelingOfHome: React.FC = () => {
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Check prefers-reduced-motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setParallaxY(0);
        return;
      }

      const section = document.getElementById('the-feeling-of-home');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.top < viewportHeight && rect.bottom > 0) {
        const centerDelta = (rect.top + rect.height / 2) - viewportHeight / 2;
        // Subtle slow-speed parallax (clamped to [-20px, 20px] for calm editorial feel)
        const slowParallax = Math.max(-20, Math.min(20, centerDelta * -0.055));
        setParallaxY(slowParallax);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="the-feeling-of-home"
      className="relative w-full bg-[#E0D9C9] text-[#242D36] paper-grain plaster-surface py-16 md:py-24 overflow-hidden"
      aria-label="Chapter 02: The Feeling of Home"
    >
      {/* Delicate hairline decorative border on top with central architectural notch */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#242D36]/15 max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <span className="w-1.5 h-1.5 rounded-full bg-[#59212C]/40 -translate-y-1/2" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#59212C]/40 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Top Header / Chapter Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between border-b border-[#242D36]/15 pb-5 mb-10 md:mb-14"
        >
          <div className="flex items-center gap-3 text-xs tracking-[0.24em] uppercase text-[#59212C] font-accent font-medium">
            <span>02 / THE FEELING OF HOME</span>
            <span className="w-6 h-px bg-[#59212C]/40" />
            <span className="text-[#242D36]/65">THE DOMESTIC RHYTHM</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-[#242D36]/50 font-accent">
            <span>ARCHITECTURAL PROPORTIONS</span>
          </div>
        </motion.div>

        {/* Magazine Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Statement Column with Subtle Backdrop-Filter and Gradient Overlay */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="reveal-on-scroll p-6 sm:p-8 md:p-10 bg-gradient-to-br from-[#E0D9C9]/95 via-[#E0D9C9]/85 to-[#E0D9C9]/60 backdrop-blur-[6px] border border-[#242D36]/10 shadow-xs relative">
              <div className="mb-8 md:mb-12">
                <h2
                  className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] text-[#242D36] tracking-tight mb-8"
                  style={{ textWrap: 'balance' }}
                >
                  Some things
                  <br />
                  can’t be measured
                  <br />
                  <span className="italic font-light text-[#59212C]">in square feet.</span>
                </h2>

                <div className="w-16 h-px bg-[#59212C]/30 my-8" />
              </div>

              {/* Paragraph placed toward the right */}
              <div className="lg:ml-auto max-w-md pt-2">
                <p className="text-base md:text-lg leading-relaxed text-[#242D36]/85 font-light mb-6">
                  The comfort of a familiar corner. Light that finds its way in. Space for the people you love.
                  At MAKE, everyday life is where our thinking begins.
                </p>

                <div className="flex items-center gap-3 text-xs tracking-[0.14em] uppercase text-[#59212C] font-accent">
                  <span className="w-3 h-px bg-[#59212C]" />
                  <span>Sanctuary by design</span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrow Portrait Photograph Offset Vertically with subtle desktop drift */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-sm overflow-hidden bg-[#D8D0BF] border border-[#242D36]/15 shadow-md"
              style={{
                transform: `translateY(${parallaxY}px)`,
                transition: 'transform 0.18s cubic-bezier(0.22, 1, 0.36, 1)',
                willChange: 'transform',
              }}
            >
              {/* Tactile border trim */}
              <div className="aspect-[3/4] overflow-hidden relative group">
                <img
                  src={pageImage0}
                  alt="Quiet domestic detail: warm morning sun falling across tactile limestone and an oak chair with an open book"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  style={{
                    transform: `scale(1.06) translateY(${parallaxY * -0.4}px)`,
                    transition: 'transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)',
                    willChange: 'transform',
                  }}
                  loading="lazy"
                />
                {/* Subtle paper grain on the photo itself */}
                <div
                  className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
                  }}
                />
              </div>

              {/* Discreet Editorial Caption */}
              <div className="p-4 bg-[#E0D9C9] border-t border-[#242D36]/15 flex items-center justify-between text-[11px] tracking-[0.14em] text-[#242D36]/75 uppercase font-accent">
                <span>DETAIL 02.1 — MORNING LIGHT</span>
                <span>35MM STUDY</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Brand Line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 md:mt-20 pt-8 border-t border-[#242D36]/15 flex flex-col sm:flex-row items-baseline justify-between gap-4"
        >
          <p className="font-serif-display text-2xl md:text-3xl text-[#59212C] tracking-wide italic">
            “Thoughtful living, carefully built.”
          </p>
          <span className="text-xs tracking-[0.2em] uppercase text-[#242D36]/50 font-accent">
            MAKE CORE PROMISE
          </span>
        </motion.div>
      </div>
    </section>
  );
};
