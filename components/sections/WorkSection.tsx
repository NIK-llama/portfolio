'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    if (!section) return;

    // Scroll animation for the section container
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

    // Stagger project cards specifically
    gsap.fromTo(
      section.querySelectorAll('.glass-panel'),
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="gsap-reveal scroll-section opacity-0 invisible" id="work">
      <div className="flex items-center mb-10">
        <h2 className="font-headline-lg text-headline-lg text-primary flex items-center whitespace-nowrap">
          <span className="font-label-mono text-headline-md text-primary-container mr-3 font-normal">
            02.
          </span>
          Some Things I&apos;ve Built
        </h2>
        <div className="h-px bg-surface-container-highest w-full ml-6 max-w-xs"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project 1 */}
        <div className="glass-panel rounded-xl overflow-hidden group hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(95,251,214,0.2)] hover:border-primary-container/50 transition-all duration-300 relative flex flex-col h-full">
          <div className="h-48 relative overflow-hidden bg-surface-container">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
              style={{
                backgroundImage:
                  "url('')",
              }}
            ></div>
            <div className="absolute inset-0 bg-surface-dim/40 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>
          <div className="p-6 relative z-10 flex flex-col flex-1">
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-primary-container text-4xl">
                folder_open
              </span>
              <div className="flex gap-3">
                <a
                  className="text-text-dim hover:text-primary-container transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined">code</span>
                </a>
                <a
                  className="text-text-dim hover:text-primary-container transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined">open_in_new</span>
                </a>
              </div>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-primary-container transition-colors">
              Quantum Data Platform
            </h3>
            <p className="text-on-surface-variant text-sm mb-6 grow">
              A high-performance data visualization dashboard built for real-time analytics. Features
              complex SVG charting and interactive 3D data representations.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto font-label-mono text-label-caps text-text-dim">
              <span className="px-2 py-1 bg-surface-container rounded">React</span>
              <span className="px-2 py-1 bg-surface-container rounded">Next.js</span>
              <span className="px-2 py-1 bg-surface-container rounded">Three.js</span>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="glass-panel rounded-xl overflow-hidden group hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(95,251,214,0.2)] hover:border-primary-container/50 transition-all duration-300 relative flex flex-col h-full">
          <div className="h-48 relative overflow-hidden bg-surface-container">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
              style={{
                backgroundImage:
                  "url('')",
              }}
            ></div>
            <div className="absolute inset-0 bg-surface-dim/40 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>
          <div className="p-6 relative z-10 flex flex-col flex-1">
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-primary-container text-4xl">
                folder_open
              </span>
              <div className="flex gap-3">
                <a
                  className="text-text-dim hover:text-primary-container transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined">code</span>
                </a>
                <a
                  className="text-text-dim hover:text-primary-container transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined">open_in_new</span>
                </a>
              </div>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-primary-container transition-colors">
              Aether Protocol
            </h3>
            <p className="text-on-surface-variant text-sm mb-6 grow">
              A decentralized application interface allowing users to seamlessly interact with smart
              contracts. Focuses on bridging complex technical operations with intuitive UI design.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto font-label-mono text-label-caps text-text-dim">
              <span className="px-2 py-1 bg-surface-container rounded">TypeScript</span>
              <span className="px-2 py-1 bg-surface-container rounded">Tailwind</span>
              <span className="px-2 py-1 bg-surface-container rounded">Web3.js</span>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="glass-panel rounded-xl overflow-hidden group hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(95,251,214,0.2)] hover:border-primary-container/50 transition-all duration-300 relative flex flex-col h-full">
          <div className="h-48 relative overflow-hidden bg-surface-container">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
              style={{
                backgroundImage:
                  "url('')",
              }}
            ></div>
            <div className="absolute inset-0 bg-surface-dim/40 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>
          <div className="p-6 relative z-10 flex flex-col flex-1">
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-primary-container text-4xl">
                folder_open
              </span>
              <div className="flex gap-3">
                <a
                  className="text-text-dim hover:text-primary-container transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined">code</span>
                </a>
                <a
                  className="text-text-dim hover:text-primary-container transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined">open_in_new</span>
                </a>
              </div>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-primary-container transition-colors">
              Lumina E-Commerce
            </h3>
            <p className="text-on-surface-variant text-sm mb-6 grow">
              A headless e-commerce solution with fluid page transitions and scroll-driven animations,
              providing a premium shopping experience.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto font-label-mono text-label-caps text-text-dim">
              <span className="px-2 py-1 bg-surface-container rounded">Next.js</span>
              <span className="px-2 py-1 bg-surface-container rounded">GSAP</span>
              <span className="px-2 py-1 bg-surface-container rounded">Shopify API</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
