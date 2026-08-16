'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section,
      { y: 50, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="gsap-reveal scroll-section opacity-0 invisible" id="experience">
      <div className="flex items-center mb-10">
        <h2 className="font-headline-lg text-headline-lg text-primary flex items-center whitespace-nowrap">
          <span className="font-label-mono text-headline-md text-primary-container mr-3 font-normal">
            01.
          </span>
          Where I&apos;ve Worked
        </h2>
        <div className="h-px bg-surface-container-highest w-full ml-6 max-w-xs"></div>
      </div>
      
      <div className="glass-panel p-8 rounded-xl max-w-3xl mx-auto min-h-[300px] flex items-center justify-center border border-primary-container/20">
        <p className="text-on-surface-variant font-label-mono opacity-60">
          [ Experience Details Placeholder ]
        </p>
      </div>
    </section>
  );
}
