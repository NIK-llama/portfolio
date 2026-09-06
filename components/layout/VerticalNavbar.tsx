'use client';

import { useEffect, useState } from 'react';
import MagneticButton from '@/components/ui/MagneticButton';

export default function VerticalNavbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('AboutMe');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show vertical navbar only when scrolled past the hero section
      if (currentScrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Simple intersection tracking for active section highlighting
      const sections = ['AboutMe', /*'experience',*/ 'work', 'contact'];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'AboutMe', label: '00', title: 'About Me' },
    // { id: 'experience', label: '01', title: 'Experience' },
    { id: 'work', label: '01', title: 'Work' },
    { id: 'contact', label: '02', title: 'Contact' },
  ];

  return (
    <nav 
      className={`fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6 items-center transition-all duration-500 ease-in-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12 pointer-events-none'
      }`}
    >
      {/* Decorative top line */}
      <div className="w-[1px] h-12 bg-surface-container-highest"></div>
      
      {navItems.map((item) => (
        <MagneticButton
          key={item.id}
          href={`#${item.id}`}
          onClick={item.id === 'contact' ? (e) => {
            e.preventDefault();
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            window.history.pushState(null, '', `#${item.id}`);
          } : undefined}
          className="relative group flex items-center justify-center w-10 h-10"
          title={item.title}
        >
          <span 
            className={`font-label-mono text-sm transition-colors duration-300 ${
              activeSection === item.id 
                ? 'text-primary-container font-bold scale-110' 
                : 'text-text-dim group-hover:text-primary-container'
            }`}
          >
            {item.label}
          </span>
          {/* Tooltip on hover */}
          <span className="absolute left-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-label-mono text-xs text-primary-container whitespace-nowrap bg-surface-container/80 px-2 py-1 rounded backdrop-blur-sm pointer-events-none">
            {item.title}
          </span>
        </MagneticButton>
      ))}

      {/* Decorative bottom line */}
      <div className="w-[1px] h-12 bg-surface-container-highest"></div>
    </nav>
  );
}
