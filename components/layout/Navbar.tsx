'use client';

import { useEffect, useRef, useState } from 'react';

import MagneticButton from '@/components/ui/MagneticButton';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only show top navbar when at the absolute top of the page
      if (currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full bg-transparent flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto z-50 left-0 right-0 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <a href="#AboutMe" className="font-headline-md text-headline-md font-bold text-primary flex items-center hover:scale-95 transition-transform duration-300 cursor-pointer">
        <span className="text-primary-container mr-1">00.</span> About Me
      </a>
      <div className="hidden md:flex items-center space-x-8">
        <div className="flex items-center space-x-6 font-label-mono text-label-mono">
          {/* <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-300 nav-link flex items-center"
            href="#experience"
          >
            <span className="text-primary-container mr-1">01.</span> Experience
          </a> */}
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-300 nav-link flex items-center"
            href="#work"
          >
            <span className="text-primary-container mr-1">01.</span> Work
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-300 nav-link flex items-center"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
              window.history.pushState(null, '', '#contact');
            }}
          >
            <span className="text-primary-container mr-1">02.</span> Contact
          </a>
        </div>
        <MagneticButton
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-primary-container text-primary-container font-label-mono text-label-mono rounded hover:bg-accent-glow transition-all duration-300"
        >
          Resume
        </MagneticButton>
      </div>
      {/* Mobile menu button */}
      <div className="md:hidden text-primary">
        <span className="material-symbols-outlined text-2xl">menu</span>
      </div>
    </nav>
  );
}
