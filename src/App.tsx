import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Chapter1FirstLight } from './components/Chapter1FirstLight';
import { Chapter2FeelingOfHome } from './components/Chapter2FeelingOfHome';
import { Chapter3LifeHappensHere } from './components/Chapter3LifeHappensHere';
import { Chapter4PlaceToBelong, ProjectConcept } from './components/Chapter4PlaceToBelong';
import { Chapter5ComeHome } from './components/Chapter5ComeHome';
import { Footer } from './components/Footer';
import { EnquiryDrawer } from './components/EnquiryDrawer';
import { ProjectModal } from './components/ProjectModal';

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedProjectForEnquiry, setSelectedProjectForEnquiry] = useState<string>('');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectConcept | null>(null);
  const [activeChapter, setActiveChapter] = useState(1);

  // Intersection Observer-based animation system with cubic-bezier(0.22, 1, 0.36, 1)
  // and reduced-motion accessibility compliance
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer: IntersectionObserver | null = null;

    const setupObserver = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');

      // Accessibility: if reduced motion is preferred, immediately reveal all elements without motion
      if (mediaQuery.matches) {
        elements.forEach((el) => {
          el.classList.add('is-revealed');
        });
        if (observer) {
          observer.disconnect();
          observer = null;
        }
        return;
      }

      // Intersection Observer with custom cubic-bezier threshold
      observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              obs.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      elements.forEach((el) => {
        // If element is already in the upper viewport on load, reveal immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          el.classList.add('is-revealed');
        } else {
          observer?.observe(el);
        }
      });
    };

    setupObserver();

    // Listen for system reduced-motion preference changes dynamically
    const handleMotionChange = () => {
      setupObserver();
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMotionChange);
    } else {
      mediaQuery.addListener(handleMotionChange);
    }

    // MutationObserver to observe dynamically injected elements or route changes
    const mutationObserver = new MutationObserver(() => {
      if (!mediaQuery.matches && observer) {
        document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)').forEach((el) => {
          observer?.observe(el);
        });
      }
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (observer) observer.disconnect();
      mutationObserver.disconnect();
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMotionChange);
      } else {
        mediaQuery.removeListener(handleMotionChange);
      }
    };
  }, []);

  // Monitor scroll position to determine active chapter for navigation
  useEffect(() => {
    const handleScroll = () => {
      const chapters = [
        { id: 'the-first-light', chapter: 1 },
        { id: 'the-feeling-of-home', chapter: 2 },
        { id: 'life-happens-here', chapter: 3 },
        { id: 'a-place-to-belong', chapter: 4 },
        { id: 'come-home', chapter: 5 },
        { id: 'site-footer', chapter: 2 },
      ];

      // The header is 80px tall and fixed at the top of the viewport.
      // Evaluate which section is directly behind the header (40px from viewport top).
      const headerY = 40;

      for (let i = chapters.length - 1; i >= 0; i--) {
        const el = document.getElementById(chapters[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerY && rect.bottom > headerY) {
            setActiveChapter(chapters[i].chapter);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenEnquiry = (initialProject?: string) => {
    setSelectedProjectForEnquiry(initialProject || '');
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#E0D9C9] text-[#242D36] flex flex-col relative selection:bg-[#59212C] selection:text-[#E0D9C9]">
      {/* Top Navigation */}
      <Navigation
        onOpenEnquiry={() => handleOpenEnquiry()}
        activeChapter={activeChapter}
      />

      <main className="flex-1 w-full flex flex-col">
        {/* Chapter 1: The First Light */}
        <Chapter1FirstLight
          onDiscoverClick={() => scrollToSection('the-feeling-of-home')}
        />

        {/* Chapter 2: The Feeling of Home */}
        <Chapter2FeelingOfHome />

        {/* Chapter 3: Life Happens Here */}
        <Chapter3LifeHappensHere />

        {/* Chapter 4: A Place to Belong */}
        <Chapter4PlaceToBelong
          onExploreProject={(project) => setActiveProjectModal(project)}
        />

        {/* Chapter 5: Come Home */}
        <Chapter5ComeHome
          onStartConversation={() => handleOpenEnquiry()}
        />
      </main>

      {/* Redesigned Architectural Footer */}
      <Footer
        onStartConversation={() => handleOpenEnquiry()}
        onExploreSection={scrollToSection}
      />

      {/* Accessible Enquiry Side Panel / Sheet */}
      <EnquiryDrawer
        isOpen={isEnquiryOpen}
        onClose={handleCloseEnquiry}
        initialProject={selectedProjectForEnquiry}
      />

      {/* Architectural Project Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
        onEnquire={(projectName) => {
          setActiveProjectModal(null);
          handleOpenEnquiry(projectName);
        }}
      />
    </div>
  );
}
