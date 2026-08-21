'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from '@/components/ui/MagneticButton';

export default function ContactSection() {
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
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto min-h-[512px] gsap-reveal scroll-section opacity-0 invisible"
      id="contact"
    >
      <p className="font-label-mono text-label-mono text-primary-container mb-4">
        <span className="mr-2">03.</span>What&apos;s Next?
      </p>
      <h2 className="font-display-mobile md:font-display text-display-mobile md:text-display text-primary mb-6">
        Get In Touch
      </h2>
      <p className="text-on-surface-variant mb-10">
        I&apos;m currently looking for new opportunities, my inbox is always open. Whether
        you have a question or just want to say hi, I&apos;ll try my best to get back to you!
      </p>
      <MagneticButton
        href="mailto:nikshitog@gmail.com"
        className="px-8 py-4 border border-primary-container text-primary-container font-label-mono text-label-mono rounded hover:bg-accent-glow transition-all duration-300 hover:shadow-[0_0_15px_rgba(95,251,214,0.3)]"
      >
        Say Hello
      </MagneticButton>
    </section>
  );
}
