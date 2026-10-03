import pageImage0 from '../assets/images/architectural_residence_1791013875636.jpg';
import pageImage1 from '../assets/images/hero_sunlit_home_1791013817349.jpg';
import pageImage2 from '../assets/images/domestic_detail_reading_1791013828318.jpg';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

export interface MaterialItem {
  name: string;
  finish: string;
  role: string;
  textureClass: string;
}

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface ProjectConcept {
  id: string;
  index: string;
  name: string;
  kicker: string;
  subtitle: string;
  status: string;
  orientation: string;
  scale: string;
  description: string;
  specs: ProjectSpec[];
  materialPalette: MaterialItem[];
  image: string;
  alt: string;
}

interface Chapter4Props {
  onExploreProject: (project: ProjectConcept) => void;
}

export const Chapter4PlaceToBelong: React.FC<Chapter4Props> = ({ onExploreProject }) => {
  const concepts: ProjectConcept[] = [
    {
      id: 'courtyard-residence',
      index: '01 / 03',
      name: 'The Courtyard Sanctuary',
      kicker: 'CONCEPT 01',
      subtitle: 'Inward-looking domesticity wrapped around a central garden',
      status: 'Architectural Concept',
      orientation: 'Inward Garden Courtyard',
      scale: '3,850 sq.ft · 2 Levels',
      description:
        'An exploration of inward-looking sanctuary. Living spaces wrap gently around a private central garden, dissolving boundaries between raw earth, solid timber, and daily domestic rituals.',
      specs: [
        { label: 'Orientation', value: 'Inward Garden Court' },
        { label: 'Natural Light', value: 'Dawn Courtyard & Filtered NE Light' },
        { label: 'Ventilation', value: 'Courtyard Thermal Stack Effect' },
      ],
      materialPalette: [
        {
          name: 'Reclaimed Teak',
          finish: 'Quarter-sawn, matte oil',
          role: 'Veranda Joinery',
          textureClass: 'teak-pattern',
        },
        {
          name: 'Wire-Cut Brick',
          finish: 'High-fire raw face',
          role: 'Thermal Masonry',
          textureClass: 'brick-pattern',
        },
        {
          name: 'Limestone Plaster',
          finish: 'Burnished lime wash',
          role: 'Daylight Bounces',
          textureClass: 'limestone-swatch',
        },
        {
          name: 'Cast Bronze',
          finish: 'Hand-patinated satin',
          role: 'Hardware & Scuppers',
          textureClass: 'bronze-pattern',
        },
      ],
      image: pageImage0,
      alt: 'Architectural concept of an honest modern home wrapped around a private tree-filled courtyard',
    },
    {
      id: 'canopy-pavilion',
      index: '02 / 03',
      name: 'The Canopy Pavilion',
      kicker: 'CONCEPT 02',
      subtitle: 'Elevated living rooms designed to breathe alongside mature trees',
      status: 'Design Investigation',
      orientation: 'Elevated Garden Verandas',
      scale: '4,200 sq.ft · Deep Overhangs',
      description:
        'Crafted to breathe alongside mature trees. Deep stone eaves, shaded outdoor living rooms, and natural cross-ventilation designed for quiet mornings and restorative evenings.',
      specs: [
        { label: 'Orientation', value: 'Elevated Verandas' },
        { label: 'Natural Light', value: 'Canopy-Filtered Southern Shade' },
        { label: 'Ventilation', value: 'Deep Eaves Cross-Ventilation' },
      ],
      materialPalette: [
        {
          name: 'Solid Oak',
          finish: 'Brushed natural grain',
          role: 'Exposed Ceiling Rafters',
          textureClass: 'teak-pattern',
        },
        {
          name: 'Honed Travertine',
          finish: 'Open-pore unfilled slab',
          role: 'Living Floor Paving',
          textureClass: 'limestone-swatch',
        },
        {
          name: 'Raw Linen',
          finish: 'Organic weave',
          role: 'Light Diffusers',
          textureClass: 'limestone-swatch',
        },
        {
          name: 'Charcoal Steel',
          finish: 'Satin oxide finish',
          role: 'Slender Mullions',
          textureClass: 'bronze-pattern',
        },
      ],
      image: pageImage1,
      alt: 'Light-filled residential pavilion with floor-to-ceiling openings into green canopy',
    },
    {
      id: 'hearth-house',
      index: '03 / 03',
      name: 'The Earth & Hearth Home',
      kicker: 'CONCEPT 03',
      subtitle: 'Textured masonry and filtered skylight for generational permanence',
      status: 'Material Study',
      orientation: 'Skylit Core & Raked Brickwork',
      scale: '3,600 sq.ft · Raked Masonry',
      description:
        'Rooted in quiet permanence. Textured earth-toned masonry, tactile joinery built by master carpenters, and filtered skylight illuminating the everyday paths of family life.',
      specs: [
        { label: 'Orientation', value: 'Skylit Core & Central Hearth' },
        { label: 'Natural Light', value: 'Filtered Central Light Wells' },
        { label: 'Ventilation', value: 'Earthen Thermal Storage' },
      ],
      materialPalette: [
        {
          name: 'Earth-Toned Clay',
          finish: 'Hand-pressed raked bed',
          role: 'Hearth Wall',
          textureClass: 'brick-pattern',
        },
        {
          name: 'Natural Lime Wash',
          finish: 'Breathable coat',
          role: 'Internal Walls',
          textureClass: 'limestone-swatch',
        },
        {
          name: 'Black Walnut',
          finish: 'Oil-rubbed timber',
          role: 'Built-in Benches',
          textureClass: 'teak-pattern',
        },
        {
          name: 'Matte Terrazzo',
          finish: 'River pebble aggregate',
          role: 'Ground Floor',
          textureClass: 'limestone-swatch',
        },
      ],
      image: pageImage2,
      alt: 'Warm domestic corner in an architect-crafted home with morning light',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [parallaxY, setParallaxY] = useState(0);
  const activeProject = concepts[currentIndex];

  useEffect(() => {
    const handleScroll = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setParallaxY(0);
        return;
      }

      const container = document.getElementById('chapter4-image-container');
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.top < viewportHeight && rect.bottom > 0) {
        const centerDelta = (rect.top + rect.height / 2) - viewportHeight / 2;
        const slowParallax = Math.max(-20, Math.min(20, centerDelta * -0.045));
        setParallaxY(slowParallax);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? concepts.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === 0 ? concepts.length - 1 : prev + 1));
  };

  return (
    <section
      id="a-place-to-belong"
      className="relative w-full bg-[#E0D9C9] text-[#242D36] paper-grain plaster-surface py-16 md:py-24 overflow-hidden select-none"
      aria-label="Chapter 04: A Place to Belong"
    >
      {/* Top Hairline Rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#242D36]/15 max-w-7xl mx-auto px-6 md:px-12" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Chapter Kicker & Header */}
        <div className="reveal-on-scroll p-6 sm:p-8 md:p-10 bg-gradient-to-r from-[#E0D9C9]/95 via-[#E0D9C9]/85 to-[#E0D9C9]/65 backdrop-blur-[6px] border border-[#242D36]/10 shadow-xs mb-10 md:mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 text-xs tracking-[0.24em] uppercase text-[#59212C] font-accent font-medium mb-4">
                <span>04 / A PLACE TO BELONG</span>
                <span className="w-6 h-px bg-[#59212C]/40" />
                <span className="text-[#242D36]/65">CONCEPTS TAKING SHAPE</span>
              </div>
              <h2
                className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.08] text-[#242D36] tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                Find your
                <br />
                <span className="italic font-light text-[#59212C]">kind of home.</span>
              </h2>
            </div>

            <div className="max-w-sm text-left md:text-right">
              <p className="text-xs md:text-sm text-[#242D36]/75 font-light leading-relaxed mb-2">
                Discover the homes taking shape at MAKE. Honest concepts rooted in craft, natural light, and quiet belonging.
              </p>
              <span className="text-[11px] tracking-[0.16em] uppercase text-[#59212C] font-accent">
                ARCHITECTURAL CONCEPT REPERTORY
              </span>
            </div>
          </div>
        </div>

        {/* Featured Project Composition: Image (7/12) + Minimal Editorial Column (5/12) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Main Visual Asset */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div
              id="chapter4-image-container"
              className="relative aspect-[16/10] overflow-hidden bg-[#D8D0BF] border border-[#242D36]/15 shadow-md group"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full relative"
                >
                  <img
                    src={activeProject.image}
                    alt={activeProject.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    style={{
                      transform: `scale(1.05) translateY(${parallaxY}px)`,
                      transition: 'transform 0.18s cubic-bezier(0.22, 1, 0.36, 1)',
                      willChange: 'transform',
                    }}
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='pn'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23pn)' opacity='0.08'/%3E%3C/svg%3E")`,
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Status Badge in Editorial Style */}
              <div className="absolute top-4 left-4 bg-[#E0D9C9]/95 backdrop-blur-sm px-3.5 py-1.5 border border-[#242D36]/15 text-[11px] font-accent tracking-[0.16em] text-[#59212C] uppercase shadow-sm">
                {activeProject.status}
              </div>
            </div>

            {/* Manually Controlled Navigation Bar with Tactile Touches */}
            <div className="mt-4 pt-4 border-t border-[#242D36]/15 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrev}
                  className="p-2.5 border border-[#242D36]/25 hover:border-[#59212C] hover:text-[#59212C] bg-[#E0D9C9] text-[#242D36] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-1 focus-visible:ring-[#59212C]"
                  aria-label="Previous home concept"
                >
                  <ChevronLeft className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNext}
                  className="p-2.5 border border-[#242D36]/25 hover:border-[#59212C] hover:text-[#59212C] bg-[#E0D9C9] text-[#242D36] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-1 focus-visible:ring-[#59212C]"
                  aria-label="Next home concept"
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
                <span className="text-xs font-accent tracking-[0.2em] text-[#242D36]/75">
                  {activeProject.index}
                </span>
              </div>

              <div className="text-[11px] tracking-[0.16em] uppercase text-[#242D36]/50 font-accent hidden sm:block">
                CONCEPT STUDY NO. {currentIndex + 1}
              </div>
            </div>
          </div>

          {/* Minimal, High-Luxury Architectural Editorial Column (5/12) */}
          <div className="lg:col-span-5 bg-[#E0D9C9] border border-[#242D36]/12 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6"
              >
                {/* Top: Minimal Concept Number Navigation */}
                <div className="flex items-center justify-between pb-4 border-b border-[#242D36]/10 text-xs">
                  <div className="flex items-center gap-4">
                    {concepts.map((c, idx) => (
                      <button
                        key={c.id}
                        onClick={() => setCurrentIndex(idx)}
                        className={`font-accent text-xs tracking-[0.18em] transition-all py-0.5 ${
                          currentIndex === idx
                            ? 'text-[#59212C] font-semibold border-b-2 border-[#59212C]'
                            : 'text-[#242D36]/40 hover:text-[#242D36]'
                        }`}
                      >
                        0{idx + 1}
                      </button>
                    ))}
                  </div>

                  <span className="text-[10px] font-accent uppercase tracking-[0.2em] text-[#59212C] font-semibold">
                    {activeProject.kicker}
                  </span>
                </div>

                {/* Title & Poetic Subtitle */}
                <div>
                  <h3 className="font-serif-display text-3xl sm:text-4xl text-[#242D36] font-normal tracking-tight mb-2">
                    {activeProject.name}
                  </h3>
                  <p className="font-serif-display text-sm italic text-[#59212C] font-normal mb-3">
                    “{activeProject.subtitle}”
                  </p>
                  <p className="text-xs sm:text-sm text-[#242D36]/80 font-light leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>

                {/* Minimal Architectural Key Details (Hairline rules, zero heavy boxes) */}
                <div className="pt-4 border-t border-[#242D36]/10 space-y-2.5 text-xs">
                  <div className="flex justify-between items-baseline gap-4">
                    <span className="text-[10px] font-accent uppercase tracking-[0.18em] text-[#242D36]/50">
                      Orientation
                    </span>
                    <span className="text-[#242D36] font-medium text-right">
                      {activeProject.orientation}
                    </span>
                  </div>

                  <div className="flex justify-between items-baseline gap-4">
                    <span className="text-[10px] font-accent uppercase tracking-[0.18em] text-[#242D36]/50">
                      Scale
                    </span>
                    <span className="text-[#242D36]/85 font-light text-right">
                      {activeProject.scale}
                    </span>
                  </div>

                  {activeProject.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between items-baseline gap-4">
                      <span className="text-[10px] font-accent uppercase tracking-[0.18em] text-[#242D36]/50">
                        {spec.label}
                      </span>
                      <span className="text-[#242D36]/80 font-light text-right truncate max-w-[210px]" title={spec.value}>
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Minimal Material Palette (Subtle tactile chips) */}
                <div className="pt-4 border-t border-[#242D36]/10">
                  <div className="text-[10px] font-accent uppercase tracking-[0.18em] text-[#242D36]/50 mb-3">
                    Material Palette
                  </div>
                  <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
                    {activeProject.materialPalette.map((mat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span
                          className={`w-3 h-3 rounded-none border border-[#242D36]/25 shadow-xs shrink-0 ${mat.textureClass}`}
                          title={mat.name}
                        />
                        <div className="flex flex-col min-w-0">
                          <span className="text-[11px] font-medium text-[#242D36] truncate">
                            {mat.name}
                          </span>
                          <span className="text-[9px] text-[#242D36]/55 truncate font-light">
                            {mat.role}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Minimal & Confident Action Button */}
            <div className="pt-6 border-t border-[#242D36]/10 mt-6">
              <button
                onClick={() => onExploreProject(activeProject)}
                className="w-full inline-flex items-center justify-between px-5 py-3.5 bg-[#59212C] text-[#E0D9C9] hover:bg-[#431821] transition-colors text-xs font-accent uppercase tracking-[0.16em] font-medium shadow-sm"
              >
                <span>Explore this home</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
