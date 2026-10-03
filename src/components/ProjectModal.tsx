import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Sun, Wind, Layers, Compass } from 'lucide-react';
import { ProjectConcept } from './Chapter4PlaceToBelong';

interface ProjectModalProps {
  project: ProjectConcept | null;
  onClose: () => void;
  onEnquire: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onEnquire }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-12 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          {/* Backdrop with Motion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#242D36]/80 backdrop-blur-xs"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Card with Motion Spring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-4xl bg-[#E0D9C9] paper-grain plaster-surface text-[#242D36] border border-[#242D36]/20 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
          >
            {/* Modal Header */}
            <div className="p-6 md:p-8 border-b border-[#242D36]/15 flex items-center justify-between bg-[#E0D9C9]/95 backdrop-blur-sm sticky top-0 z-20">
              <div>
                <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[#59212C] font-accent font-medium mb-1">
                  <span>{project.kicker}</span>
                  <span>·</span>
                  <span>{project.index}</span>
                </div>
                <h2 id="project-modal-title" className="font-serif-display text-2xl md:text-3xl text-[#242D36] font-normal">
                  {project.name}
                </h2>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="p-2 border border-[#242D36]/20 hover:border-[#59212C] hover:text-[#59212C] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-1 focus-visible:ring-[#59212C]"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-8 flex-1">
              {/* Main Visual Asset */}
              <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#242D36]/15 bg-[#D8D0BF]">
                <img
                  src={project.image}
                  alt={project.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='pm-noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23pm-noise)' opacity='0.08'/%3E%3C/svg%3E")`,
                  }}
                />
              </div>

              {/* Editorial Overview & Spatial Concept */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-7 space-y-4">
                  <h3 className="font-serif-display text-xl text-[#242D36] font-normal">
                    Architectural Intent
                  </h3>
                  <p className="text-sm md:text-base text-[#242D36]/80 font-light leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-xs md:text-sm text-[#242D36]/70 font-light leading-relaxed">
                    At MAKE, each dwelling is calibrated to the micro-climate: deep verandas that temper harsh summer heat, stone sills that welcome morning winter sun, and continuous cross-draft corridors framing living nature.
                  </p>
                </div>

                {/* Design Specifications Grid */}
                <div className="md:col-span-5 bg-[#DCD4C4]/65 border border-[#242D36]/15 p-5 space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <Compass className="w-4 h-4 text-[#59212C] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-accent uppercase tracking-wider text-[10px] text-[#242D36]/50">Orientation</div>
                      <div className="font-medium text-[#242D36]">{project.orientation}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Sun className="w-4 h-4 text-[#59212C] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-accent uppercase tracking-wider text-[10px] text-[#242D36]/50">Natural Light</div>
                      <div className="font-light text-[#242D36]/80">East-facing dawn court & filtered southern shade</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Wind className="w-4 h-4 text-[#59212C] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-accent uppercase tracking-wider text-[10px] text-[#242D36]/50">Ventilation</div>
                      <div className="font-light text-[#242D36]/80">Passive courtyard stack effect & clerestory louvers</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Layers className="w-4 h-4 text-[#59212C] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-accent uppercase tracking-wider text-[10px] text-[#242D36]/50 mb-1.5">Material Tactility</div>
                      <div className="grid grid-cols-2 gap-2">
                        {project.materialPalette.map((mat, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#242D36]/85">
                            <span className={`w-3.5 h-3.5 rounded-none border border-[#242D36]/20 shadow-xs shrink-0 ${mat.textureClass}`} />
                            <span className="truncate">{mat.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Honest Concept State Banner */}
              <div className="p-4 bg-[#59212C]/10 border border-[#59212C]/20 text-xs text-[#59212C] font-accent tracking-wide leading-relaxed">
                <span className="font-semibold uppercase">Honest Concept Note:</span> This study demonstrates MAKE’s architectural principles and spatial proportions. It represents an ongoing design investigation without speculative prices, sales claims, or artificial delivery guarantees.
              </div>
            </div>

            {/* Modal Action Footer */}
            <div className="p-6 md:p-8 bg-[#D8D0BF]/60 border-t border-[#242D36]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#242D36]/70 font-accent">
                Curious about this design language?
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 border border-[#242D36]/25 hover:border-[#242D36] text-xs font-accent uppercase tracking-[0.14em] text-[#242D36] transition-colors min-h-[44px] flex-1 sm:flex-initial"
                >
                  Close
                </button>
                <motion.button
                  whileHover={{ y: -1, backgroundColor: '#6e2936' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onClose();
                    onEnquire(project.name);
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-[#59212C] text-[#E0D9C9] px-6 py-2.5 text-xs font-accent uppercase tracking-[0.16em] font-medium transition-colors min-h-[44px] flex-1 sm:flex-initial shadow-sm"
                >
                  <span>Enquire About {project.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
