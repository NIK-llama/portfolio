'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from '@/components/ui/ProjectCard';

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
        <ProjectCard
          title="Quantum Data Platform"
          description="A high-performance data visualization dashboard built for real-time analytics. Features complex SVG charting and interactive 3D data representations."
          backgroundImage="/images/quantum.png"
          githubLink="#"
          deploymentLink="#"
          tags={['React', 'Next.js', 'Three.js']}
        />
        <ProjectCard
          title="Aether Protocol"
          description="A decentralized application interface allowing users to seamlessly interact with smart contracts. Focuses on bridging complex technical operations with intuitive UI design."
          backgroundImage="/images/aether.png"
          githubLink="#"
          deploymentLink="#"
          tags={['TypeScript', 'Tailwind', 'Web3.js']}
        />
        <ProjectCard
          title="Lumina E-Commerce"
          description="A headless e-commerce solution with fluid page transitions and scroll-driven animations, providing a premium shopping experience."
          backgroundImage="/images/lumina.png"
          githubLink="#"
          deploymentLink="#"
          tags={['Next.js', 'GSAP', 'Shopify API']}
        />
      </div>
    </section>
  );
}
