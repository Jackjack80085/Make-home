import React, { useState, useEffect } from 'react';
import { MakeLogo } from './MakeLogo';

interface NavigationProps {
  onOpenEnquiry: () => void;
  activeChapter?: number;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenEnquiry, activeChapter = 1 }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Section Color Configurations
  // 1: First Light (Dark cinematic hero)
  // 2: The Feeling of Home (Limestone Beige #E0D9C9)
  // 3: Life Happens Here (Forest Ash #2B392C)
  // 4: A Place to Belong (Limestone Beige #E0D9C9)
  // 5: Come Home (Burgundy Clay #59212C)
  const getHeaderTheme = () => {
    switch (activeChapter) {
      case 2: // Limestone Beige
        return {
          bg: 'bg-[#E0D9C9]/92 backdrop-blur-md border-b border-[#242D36]/15',
          text: 'text-[#242D36]',
          logoVariant: 'dark' as const,
          underline: 'after:bg-[#242D36]',
          activeIndicator: 'bg-[#242D36]',
          button: 'border-[#59212C] text-[#59212C] hover:bg-[#59212C] hover:text-[#E0D9C9]',
          mobileMenuBg: 'bg-[#E0D9C9] border-[#242D36]/15 text-[#242D36]',
          mobileButton: 'bg-[#59212C] text-[#E0D9C9]',
        };
      case 3: // Forest Ash
        return {
          bg: 'bg-[#2B392C]/92 backdrop-blur-md border-b border-[#E0D9C9]/15',
          text: 'text-[#E0D9C9]',
          logoVariant: 'limestone' as const,
          underline: 'after:bg-[#E0D9C9]',
          activeIndicator: 'bg-[#E0D9C9]',
          button: 'border-[#E0D9C9]/50 text-[#E0D9C9] hover:bg-[#E0D9C9] hover:text-[#2B392C]',
          mobileMenuBg: 'bg-[#2B392C] border-[#E0D9C9]/15 text-[#E0D9C9]',
          mobileButton: 'bg-[#E0D9C9] text-[#2B392C]',
        };
      case 4: // Limestone Beige
        return {
          bg: 'bg-[#E0D9C9]/92 backdrop-blur-md border-b border-[#242D36]/15',
          text: 'text-[#242D36]',
          logoVariant: 'dark' as const,
          underline: 'after:bg-[#242D36]',
          activeIndicator: 'bg-[#242D36]',
          button: 'border-[#59212C] text-[#59212C] hover:bg-[#59212C] hover:text-[#E0D9C9]',
          mobileMenuBg: 'bg-[#E0D9C9] border-[#242D36]/15 text-[#242D36]',
          mobileButton: 'bg-[#59212C] text-[#E0D9C9]',
        };
      case 5: // Burgundy Clay
        return {
          bg: 'bg-[#59212C]/92 backdrop-blur-md border-b border-[#E0D9C9]/15',
          text: 'text-[#E0D9C9]',
          logoVariant: 'limestone' as const,
          underline: 'after:bg-[#E0D9C9]',
          activeIndicator: 'bg-[#E0D9C9]',
          button: 'border-[#E0D9C9]/60 text-[#E0D9C9] hover:bg-[#E0D9C9] hover:text-[#59212C]',
          mobileMenuBg: 'bg-[#59212C] border-[#E0D9C9]/15 text-[#E0D9C9]',
          mobileButton: 'bg-[#E0D9C9] text-[#59212C]',
        };
      case 1:
      default: // First Light (Dark Hero)
        return {
          bg: scrolled
            ? 'bg-[#242D36]/85 backdrop-blur-md border-b border-white/10'
            : 'bg-gradient-to-b from-black/60 via-black/25 to-transparent border-b border-transparent',
          text: 'text-[#E0D9C9]',
          logoVariant: 'limestone' as const,
          underline: 'after:bg-[#E0D9C9]',
          activeIndicator: 'bg-[#E0D9C9]',
          button: 'border-[#E0D9C9]/50 text-[#E0D9C9] hover:bg-[#E0D9C9] hover:text-[#242D36]',
          mobileMenuBg: 'bg-[#242D36] border-white/10 text-[#E0D9C9]',
          mobileButton: 'bg-[#59212C] text-[#E0D9C9]',
        };
    }
  };

  const theme = getHeaderTheme();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${theme.bg} ${theme.text}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-20 flex items-center justify-between">
        {/* Zone 1: Single element Brand Zone */}
        <a
          href="#the-first-light"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('the-first-light');
          }}
          className="group focus:outline-none focus-visible:ring-1 focus-visible:ring-current p-1 -ml-1 transition-opacity duration-200"
          aria-label="MAKE Developers Home"
        >
          <MakeLogo variant={theme.logoVariant} size="md" />
        </a>

        {/* Zone 2: 3 clean text navigation links */}
        <nav
          className="hidden md:flex items-center gap-10 text-[13px] tracking-[0.14em] uppercase font-medium"
          aria-label="Primary Navigation"
        >
          <button
            onClick={() => scrollToSection('the-feeling-of-home')}
            className={`transition-colors duration-200 hover:opacity-100 relative py-2 ${
              activeChapter === 2 ? 'opacity-100 font-semibold' : 'opacity-75'
            } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left ${theme.underline}`}
          >
            Our way
          </button>
          <button
            onClick={() => scrollToSection('life-happens-here')}
            className={`transition-colors duration-200 hover:opacity-100 relative py-2 ${
              activeChapter === 3 ? 'opacity-100 font-semibold' : 'opacity-75'
            } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left ${theme.underline}`}
          >
            Living
          </button>
          <button
            onClick={() => scrollToSection('a-place-to-belong')}
            className={`transition-colors duration-200 hover:opacity-100 relative py-2 ${
              activeChapter === 4 ? 'opacity-100 font-semibold' : 'opacity-75'
            } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left ${theme.underline}`}
          >
            Homes
          </button>
        </nav>

        {/* Zone 3: 1 primary action - Restrained "Let’s talk" link */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenEnquiry}
            className={`text-xs md:text-sm tracking-[0.12em] uppercase font-medium px-4 py-2.5 transition-all duration-300 min-h-[44px] min-w-[44px] inline-flex items-center justify-center border ${theme.button}`}
          >
            Let’s talk
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden min-h-[44px] min-w-[44px] flex flex-col justify-center items-center gap-1.5 focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`w-5 h-0.5 transition-all duration-300 ${
                activeChapter === 2 || activeChapter === 4 ? 'bg-[#242D36]' : 'bg-[#E0D9C9]'
              } ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`w-5 h-0.5 transition-all duration-300 ${
                activeChapter === 2 || activeChapter === 4 ? 'bg-[#242D36]' : 'bg-[#E0D9C9]'
              } ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
            />
            <span
              className={`w-5 h-0.5 transition-all duration-300 ${
                activeChapter === 2 || activeChapter === 4 ? 'bg-[#242D36]' : 'bg-[#E0D9C9]'
              } ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-6 py-8 border-b flex flex-col gap-6 animate-in fade-in duration-200 ${theme.mobileMenuBg}`}
        >
          <button
            onClick={() => scrollToSection('the-feeling-of-home')}
            className="text-left text-lg font-serif-display tracking-wide py-2 min-h-[44px]"
          >
            Our way
          </button>
          <button
            onClick={() => scrollToSection('life-happens-here')}
            className="text-left text-lg font-serif-display tracking-wide py-2 min-h-[44px]"
          >
            Living
          </button>
          <button
            onClick={() => scrollToSection('a-place-to-belong')}
            className="text-left text-lg font-serif-display tracking-wide py-2 min-h-[44px]"
          >
            Homes
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenEnquiry();
            }}
            className={`text-center py-3 uppercase tracking-[0.14em] text-xs font-medium mt-2 shadow-sm ${theme.mobileButton}`}
          >
            Start a conversation
          </button>
        </div>
      )}
    </header>
  );
};
