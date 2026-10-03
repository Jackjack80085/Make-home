import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check } from 'lucide-react';

interface EnquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialProject?: string;
}

export const EnquiryDrawer: React.FC<EnquiryDrawerProps> = ({
  isOpen,
  onClose,
  initialProject = '',
}) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [projectPreference, setProjectPreference] = useState(initialProject);
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const drawerRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (initialProject) {
      setProjectPreference(initialProject);
    }
  }, [initialProject]);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';

      const timer = setTimeout(() => {
        firstInputRef.current?.focus();
      }, 150);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleClose();
        }

        if (e.key === 'Tab' && drawerRef.current) {
          const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    }
  }, [isOpen]);

  const handleClose = () => {
    onClose();
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Please provide your name.';
    }

    if (!contact.trim()) {
      newErrors.contact = 'Please provide an email or telephone number.';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.trim()) &&
      !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(contact.trim().replace(/\s+/g, ''))
    ) {
      newErrors.contact = 'Please enter a valid email address or phone number.';
    }

    if (!message.trim()) {
      newErrors.message = 'Please share a brief note about what you are looking for in a home.';
    }

    if (!consent) {
      newErrors.consent = 'Your consent is required to process this enquiry note.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setName('');
    setContact('');
    setMessage('');
    setConsent(false);
    setErrors({});
    setSubmitted(false);
    handleClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-panel-title"
        >
          {/* Dimmed backdrop with motion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#242D36]/75 backdrop-blur-xs"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Side Panel (Desktop) / Full-height sheet (Mobile) with Motion Slide */}
          <motion.div
            ref={drawerRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full md:max-w-lg lg:max-w-xl h-full bg-[#E0D9C9] paper-grain plaster-surface text-[#242D36] shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-[#242D36]/15"
          >
            {/* Panel Header */}
            <div className="p-6 md:p-8 border-b border-[#242D36]/15 flex items-center justify-between sticky top-0 bg-[#E0D9C9]/95 backdrop-blur-sm z-20">
              <div>
                <span className="text-[10px] tracking-[0.24em] uppercase text-[#59212C] font-accent font-semibold block mb-1">
                  CONVERSATION INVITATION
                </span>
                <h2 id="enquiry-panel-title" className="font-serif-display text-2xl md:text-3xl text-[#242D36] font-normal">
                  Start a conversation
                </h2>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClose}
                className="p-2 border border-[#242D36]/20 hover:border-[#59212C] hover:text-[#59212C] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-1 focus-visible:ring-[#59212C]"
                aria-label="Close conversation drawer"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Panel Content */}
            <div className="p-6 md:p-8 flex-1">
              {submitted ? (
                <div className="py-12 flex flex-col items-start justify-center h-full max-w-md">
                  <div className="w-12 h-12 rounded-none border border-[#59212C] flex items-center justify-center text-[#59212C] mb-6 bg-[#E0D9C9]">
                    <Check className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif-display text-2xl md:text-3xl text-[#242D36] font-normal mb-3">
                    Note recorded.
                  </h3>

                  <div className="bg-[#59212C]/10 border border-[#59212C]/30 p-4 text-xs text-[#59212C] font-medium tracking-wide uppercase font-accent mb-6 leading-relaxed">
                    Prototype only — your enquiry has not been sent.
                  </div>

                  <p className="text-sm text-[#242D36]/80 font-light leading-relaxed mb-8">
                    Thank you for taking the time to share your perspective with MAKE. In an active production release, our studio principal would review your notes and arrange an unhurried consultation.
                  </p>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center justify-center bg-[#59212C] text-[#E0D9C9] px-6 py-3 text-xs tracking-[0.16em] uppercase font-medium hover:bg-[#6e2936] transition-colors min-h-[44px]"
                  >
                    Return to website
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <p className="text-xs md:text-sm text-[#242D36]/80 font-light leading-relaxed pb-2 border-b border-[#242D36]/10">
                    We believe the design of a home begins with listening. Share your thoughts or the kind of everyday atmosphere you seek.
                  </p>

                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="enquiry-name" className="block text-xs font-accent uppercase tracking-[0.14em] text-[#242D36]">
                      Your Name <span className="text-[#59212C]">*</span>
                    </label>
                    <input
                      ref={firstInputRef}
                      id="enquiry-name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                      }}
                      placeholder="e.g. Elena Vance"
                      className={`w-full bg-[#FFFFFF]/85 border ${
                        errors.name ? 'border-[#59212C] ring-1 ring-[#59212C]' : 'border-[#242D36]/25'
                      } px-3.5 py-3 text-sm text-[#242D36] placeholder-[#242D36]/40 focus:outline-none focus:border-[#59212C] focus:ring-1 focus:ring-[#59212C] transition-colors`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'enquiry-name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="enquiry-name-error" className="text-xs text-[#59212C] font-accent">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email / Phone Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="enquiry-contact" className="block text-xs font-accent uppercase tracking-[0.14em] text-[#242D36]">
                      Email or Telephone <span className="text-[#59212C]">*</span>
                    </label>
                    <input
                      id="enquiry-contact"
                      type="text"
                      value={contact}
                      onChange={(e) => {
                        setContact(e.target.value);
                        if (errors.contact) setErrors((prev) => ({ ...prev, contact: '' }));
                      }}
                      placeholder="name@domain.com or +91 98450 00000"
                      className={`w-full bg-[#FFFFFF]/85 border ${
                        errors.contact ? 'border-[#59212C] ring-1 ring-[#59212C]' : 'border-[#242D36]/25'
                      } px-3.5 py-3 text-sm text-[#242D36] placeholder-[#242D36]/40 focus:outline-none focus:border-[#59212C] focus:ring-1 focus:ring-[#59212C] transition-colors`}
                      aria-invalid={!!errors.contact}
                      aria-describedby={errors.contact ? 'enquiry-contact-error' : undefined}
                    />
                    {errors.contact && (
                      <p id="enquiry-contact-error" className="text-xs text-[#59212C] font-accent">
                        {errors.contact}
                      </p>
                    )}
                  </div>

                  {/* Optional Project Preference */}
                  <div className="space-y-1.5">
                    <label htmlFor="enquiry-project" className="block text-xs font-accent uppercase tracking-[0.14em] text-[#242D36]/80">
                      Concept Preference <span className="text-[10px] text-[#242D36]/50">(Optional)</span>
                    </label>
                    <select
                      id="enquiry-project"
                      value={projectPreference}
                      onChange={(e) => setProjectPreference(e.target.value)}
                      className="w-full bg-[#FFFFFF]/85 border border-[#242D36]/25 px-3.5 py-3 text-sm text-[#242D36] focus:outline-none focus:border-[#59212C] focus:ring-1 focus:ring-[#59212C] transition-colors"
                    >
                      <option value="">General conversation / Open consultation</option>
                      <option value="The Courtyard Sanctuary">The Courtyard Sanctuary (Concept 01)</option>
                      <option value="The Canopy Pavilion">The Canopy Pavilion (Concept 02)</option>
                      <option value="The Earth & Hearth Home">The Earth & Hearth Home (Concept 03)</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="enquiry-message" className="block text-xs font-accent uppercase tracking-[0.14em] text-[#242D36]">
                      What are you looking for in a home? <span className="text-[#59212C]">*</span>
                    </label>
                    <textarea
                      id="enquiry-message"
                      rows={4}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors((prev) => ({ ...prev, message: '' }));
                      }}
                      placeholder="Tell us about the light, pace, spaces, or rituals that matter most to you..."
                      className={`w-full bg-[#FFFFFF]/85 border ${
                        errors.message ? 'border-[#59212C] ring-1 ring-[#59212C]' : 'border-[#242D36]/25'
                      } px-3.5 py-3 text-sm text-[#242D36] placeholder-[#242D36]/40 focus:outline-none focus:border-[#59212C] focus:ring-1 focus:ring-[#59212C] transition-colors`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'enquiry-message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="enquiry-message-error" className="text-xs text-[#59212C] font-accent">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Consent and Privacy Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => {
                          setConsent(e.target.checked);
                          if (errors.consent) setErrors((prev) => ({ ...prev, consent: '' }));
                        }}
                        className="mt-1 h-4 w-4 rounded-none border-[#242D36]/40 text-[#59212C] focus:ring-[#59212C] accent-[#59212C]"
                      />
                      <span className="text-xs text-[#242D36]/80 leading-relaxed font-light">
                        I agree to share these details for a direct conversation regarding MAKE architectural concepts. Read our{' '}
                        <span className="underline hover:text-[#59212C] transition-colors">privacy approach</span>.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-xs text-[#59212C] font-accent mt-1.5 ml-7">
                        {errors.consent}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <motion.button
                      whileHover={{ y: -1, backgroundColor: '#6e2936' }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full inline-flex items-center justify-center bg-[#59212C] text-[#E0D9C9] py-3.5 text-xs tracking-[0.16em] uppercase font-medium transition-colors min-h-[44px] shadow-sm"
                    >
                      Send Enquiry Note
                    </motion.button>
                  </div>
                </form>
              )}
            </div>

            {/* Panel Footer Honest Disclaimer */}
            <div className="p-6 md:p-8 bg-[#D8D0BF]/60 border-t border-[#242D36]/10 text-[11px] text-[#242D36]/70 font-accent leading-relaxed">
              <span className="font-semibold text-[#59212C]">PROTOTYPE DISCLOSURE:</span> This submission interface operates in simulation mode. No communications are transmitted to external servers.
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
