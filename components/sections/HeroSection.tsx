'use client';

import { useEffect, useRef, Suspense } from 'react';
import gsap from 'gsap';
import MagneticButton from '@/components/ui/MagneticButton';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import HouseModel from '@/components/canvas/HouseModel';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial Load Animation for Hero
    gsap.set('.gsap-reveal-hero', { autoAlpha: 1 });
    gsap.set('#threejs-container', { opacity: 0 });

    const tl = gsap.timeline();

    tl.fromTo(
      '.hero-text',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
    ).to('#threejs-container', { opacity: 1, duration: 1, ease: 'power2.out' }, '-=0.5');
  }, []);

  return (
    <section
      ref={containerRef}
      className="pb-20 md:pb-32 flex flex-col md:flex-row items-center justify-between relative gsap-reveal-hero opacity-0 invisible"
      id="AboutMe"
    >
      <div className="w-full md:w-3/5 flex flex-col z-10">
        <p className="font-label-mono text-label-mono text-primary-container mb-4 hero-text">
          Hi, my name is Nikshit Chauhan
        </p>
        <h1 className="font-display-mobile md:font-display text-display-mobile md:text-display text-primary mb-2 hero-text">
          Engineer & Builder.
        </h1>
        <h2 className="font-display-mobile md:font-display text-display-mobile md:text-display text-text-dim mb-6 hero-text opacity-80 leading-tight">
          I build things for the web.
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10 hero-text">
          I&apos;m a software engineer focused on building modern, performant web applications — from thoughtful interfaces to reliable backend systems.
        </p>
        <div className="hero-text">
          <MagneticButton
            href="https://github.com/NIK-llama"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-primary-container text-primary-container font-label-mono text-label-mono rounded hover:bg-accent-glow transition-all duration-300 hover:shadow-[0_0_15px_rgba(95,251,214,0.3)]"
          >
            Check out my GitHub!
          </MagneticButton>
        </div>
      </div>
      
      <div
        className="w-full md:w-2/5 h-80 md:h-[600px] relative mt-10 md:mt-0 float-anim cursor-grab active:cursor-grabbing"
        id="threejs-container"
      >
        <Canvas camera={{ position: [0, 0, 10], fov: 45, near: 0.1, far: 2000 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <Environment preset="city" />
          <Suspense fallback={null}>
            <HouseModel />
            <ContactShadows position={[0, -1.0, 0]} opacity={0.4} scale={10} blur={2} far={4} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
