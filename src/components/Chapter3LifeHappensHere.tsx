import pageImage0 from '../assets/images/morning_ritual_breakfast_1791013841349.jpg';
import pageImage1 from '../assets/images/connection_living_terrace_1791013851990.jpg';
import pageImage2 from '../assets/images/solitude_quiet_corner_1791013863623.jpg';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Sun, Users, BookOpen } from 'lucide-react';

export const Chapter3LifeHappensHere: React.FC = () => {
  const [activeMoment, setActiveMoment] = useState<number | null>(null);

  const moments = [
    {
      id: 'moment-1',
      index: '01',
      time: '07:30 AM · DAWN LIGHT',
      title: 'Slow mornings.',
      tagline: 'Breaking bread across solid teak, while the world outside waits.',
      description:
        'Kitchen surfaces are calibrated to catch south-east morning sunlight, creating a natural hearth where morning coffee cools unhurriedly and conversation begins quietly.',
      materials: ['Solid Reclaimed Teak', 'Honed Kadappa Stone', 'Linen Drapery'],
      image: pageImage0,
      aspect: 'aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/10]',
      alt: 'Hands breaking freshly baked sourdough bread at a warm timber table in natural morning daylight',
      icon: Sun,
    },
    {
      id: 'moment-2',
      index: '02',
      time: '04:15 PM · SHELTERED PERGOLA',
      title: 'Closer together.',
      tagline: 'Sheltered courtyards where conversations deepen without effort.',
      description:
        'A shaded outdoor living room framed by brick columns and climbing greenery. It acts as an open-air transition zone, bringing breezes and family together before evening.',
      materials: ['Raked Brick Colonnade', 'Weathered Teak Bench', 'Micro-climate Garden'],
      image: pageImage1,
      aspect: 'aspect-[4/5]',
      alt: 'Family sharing time together in a lush garden terrace courtyard',
      icon: Users,
    },
    {
      id: 'moment-3',
      index: '03',
      time: '06:00 PM · GARDEN WINDOW BENCH',
      title: 'Time for yourself.',
      tagline: 'A deep window bench overlooking garden leaves, unhurried and still.',
      description:
        'Deep-silled timber reveals create a sanctuary for solitary reading, holding the quiet evening cool beneath the garden canopy while evening slowly settles.',
      materials: ['Solid Timber Window Box', 'Wool & Linen Throws', 'Garden Canopy View'],
      image: pageImage2,
      aspect: 'aspect-[4/5]',
      alt: 'Tranquil reading nook framed with warm wood overlooking green foliage in afternoon sun',
      icon: BookOpen,
    },
  ];

  return (
    <section
      id="life-happens-here"
      className="relative w-full bg-[#2B392C] text-[#E0D9C9] py-16 md:py-24 overflow-hidden select-none"
      aria-label="Chapter 03: Life Happens Here"
    >
      {/* Deep Forest Ash Organic Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='forestNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23forestNoise)' opacity='0.12'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle top hairline rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#E0D9C9]/20 max-w-7xl mx-auto px-6 md:px-12" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Chapter Header / Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between border-b border-[#E0D9C9]/20 pb-5 mb-10 md:mb-12"
        >
          <div className="flex items-center gap-3 text-xs tracking-[0.24em] uppercase text-[#E0D9C9]/95 font-accent font-medium">
            <span>03 / LIFE HAPPENS HERE</span>
            <span className="w-6 h-px bg-[#E0D9C9]/40" />
            <span className="opacity-80">EVERYDAY RITUALS</span>
          </div>
          <span className="hidden sm:block text-xs tracking-[0.18em] uppercase text-[#E0D9C9]/55 font-accent">
            3 MOMENTS OBSERVED
          </span>
        </motion.div>

        {/* Generous Editorial Intro Spread across full container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-12 md:pb-16 border-b border-[#E0D9C9]/15">
          <div className="lg:col-span-7">
            <h2
              className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.08] text-[#E0D9C9] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              The little things.
              <br />
              <span className="italic font-light opacity-90">The whole point.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <p className="text-sm md:text-base text-[#E0D9C9]/85 font-light leading-relaxed">
              Homes are not statues. They are quiet settings for human lives. We design spaces that hold warmth, quiet, and genuine connection through the shifting light of a single day.
            </p>

            {/* Quick Ritual Indicator Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              {moments.map((m, idx) => (
                <button
                  key={m.id}
                  onClick={() => {
                    const el = document.getElementById(m.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    setActiveMoment(idx);
                  }}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 border transition-all text-[11px] font-accent uppercase tracking-wider ${
                    activeMoment === idx
                      ? 'bg-[#E0D9C9] text-[#2B392C] border-[#E0D9C9]'
                      : 'border-[#E0D9C9]/25 text-[#E0D9C9]/75 hover:border-[#E0D9C9]/60 hover:text-[#E0D9C9]'
                  }`}
                >
                  <m.icon className="w-3 h-3" />
                  <span>{m.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Photographic Narrative Flow */}
        <div className="pt-12 md:pt-16 space-y-16 md:space-y-24">
          {/* Moment 1: Wide Horizontal Editorial Feature */}
          <div
            id={moments[0].id}
            className="reveal-on-scroll group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Cinematic Large Photo (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="overflow-hidden bg-[#242D36]/40 border border-[#E0D9C9]/20 shadow-xl relative group">
                <div className={`${moments[0].aspect} overflow-hidden`}>
                  <img
                    src={moments[0].image}
                    alt={moments[0].alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-25"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n1'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n1)' opacity='0.08'/%3E%3C/svg%3E")`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Architectural Story Block (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-2.5 text-[11px] font-accent uppercase tracking-[0.2em] text-[#E0D9C9]/60 mb-3">
                <Sun className="w-3.5 h-3.5 text-[#E0D9C9]/70" />
                <span>{moments[0].time}</span>
              </div>

              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-accent text-sm text-[#E0D9C9]/50 font-semibold">
                  {moments[0].index}
                </span>
                <h3 className="font-serif-display text-3xl sm:text-4xl text-[#E0D9C9] font-normal">
                  {moments[0].title}
                </h3>
              </div>

              <p className="font-serif-display text-lg text-[#E0D9C9]/90 italic mb-4 font-normal">
                “{moments[0].tagline}”
              </p>

              <p className="text-xs md:text-sm text-[#E0D9C9]/75 font-light leading-relaxed mb-6">
                {moments[0].description}
              </p>

              {/* Material Palette Tags */}
              <div className="border-t border-[#E0D9C9]/15 pt-4">
                <div className="text-[10px] font-accent uppercase tracking-[0.16em] text-[#E0D9C9]/50 mb-2">
                  Spatial Elements
                </div>
                <div className="flex flex-wrap gap-2">
                  {moments[0].materials.map((mat, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[11px] bg-[#E0D9C9]/10 border border-[#E0D9C9]/15 text-[#E0D9C9]/85"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Moments 2 & 3: Perfectly Balanced 50/50 Grid (Spanning Full 12 Cols) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Moment 2: Closer together */}
            <div
              id={moments[1].id}
              className="reveal-on-scroll group flex flex-col"
            >
              <div className="overflow-hidden bg-[#242D36]/40 border border-[#E0D9C9]/20 shadow-xl relative">
                <div className={`${moments[1].aspect} overflow-hidden`}>
                  <img
                    src={moments[1].image}
                    alt={moments[1].alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-25"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n2)' opacity='0.08'/%3E%3C/svg%3E")`,
                    }}
                  />
                </div>
              </div>

              {/* Story Details below photo */}
              <div className="pt-6">
                <div className="flex items-center gap-2.5 text-[11px] font-accent uppercase tracking-[0.2em] text-[#E0D9C9]/60 mb-2">
                  <Users className="w-3.5 h-3.5 text-[#E0D9C9]/70" />
                  <span>{moments[1].time}</span>
                </div>

                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-accent text-sm text-[#E0D9C9]/50 font-semibold">
                    {moments[1].index}
                  </span>
                  <h3 className="font-serif-display text-2xl sm:text-3xl text-[#E0D9C9] font-normal">
                    {moments[1].title}
                  </h3>
                </div>

                <p className="font-serif-display text-base text-[#E0D9C9]/90 italic mb-3 font-normal">
                  “{moments[1].tagline}”
                </p>

                <p className="text-xs md:text-sm text-[#E0D9C9]/75 font-light leading-relaxed mb-5">
                  {moments[1].description}
                </p>

                <div className="border-t border-[#E0D9C9]/15 pt-3.5 flex flex-wrap gap-2">
                  {moments[1].materials.map((mat, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[11px] bg-[#E0D9C9]/10 border border-[#E0D9C9]/15 text-[#E0D9C9]/85"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Moment 3: Time for yourself */}
            <div
              id={moments[2].id}
              className="reveal-on-scroll group flex flex-col md:mt-0"
            >
              <div className="overflow-hidden bg-[#242D36]/40 border border-[#E0D9C9]/20 shadow-xl relative">
                <div className={`${moments[2].aspect} overflow-hidden`}>
                  <img
                    src={moments[2].image}
                    alt={moments[2].alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-25"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n3'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n3)' opacity='0.08'/%3E%3C/svg%3E")`,
                    }}
                  />
                </div>
              </div>

              {/* Story Details below photo */}
              <div className="pt-6">
                <div className="flex items-center gap-2.5 text-[11px] font-accent uppercase tracking-[0.2em] text-[#E0D9C9]/60 mb-2">
                  <BookOpen className="w-3.5 h-3.5 text-[#E0D9C9]/70" />
                  <span>{moments[2].time}</span>
                </div>

                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-accent text-sm text-[#E0D9C9]/50 font-semibold">
                    {moments[2].index}
                  </span>
                  <h3 className="font-serif-display text-2xl sm:text-3xl text-[#E0D9C9] font-normal">
                    {moments[2].title}
                  </h3>
                </div>

                <p className="font-serif-display text-base text-[#E0D9C9]/90 italic mb-3 font-normal">
                  “{moments[2].tagline}”
                </p>

                <p className="text-xs md:text-sm text-[#E0D9C9]/75 font-light leading-relaxed mb-5">
                  {moments[2].description}
                </p>

                <div className="border-t border-[#E0D9C9]/15 pt-3.5 flex flex-wrap gap-2">
                  {moments[2].materials.map((mat, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[11px] bg-[#E0D9C9]/10 border border-[#E0D9C9]/15 text-[#E0D9C9]/85"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Grounding Arch Note */}
        <div className="mt-14 md:mt-20 pt-8 border-t border-[#E0D9C9]/15 flex flex-col sm:flex-row items-baseline justify-between gap-4 text-xs text-[#E0D9C9]/60 font-light">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#E0D9C9]/50" />
            <span className="font-serif-display italic text-[#E0D9C9]/80 text-sm">
              “Architecture begins where the sun touches stone, and thrives where life happens unhurriedly.”
            </span>
          </div>
          <span className="font-accent tracking-[0.2em] uppercase text-[10px] text-[#E0D9C9]/50 shrink-0">
            MAKE LIFE CHRONICLE
          </span>
        </div>
      </div>
    </section>
  );
};
