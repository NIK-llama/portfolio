'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from '@/components/ui/MagneticButton';
import EmailPopup from '@/components/ui/EmailPopup';

const EMAIL = 'nikshitgg@gmail.com';
const GMAIL_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

    return () => {
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    };
  }, []);

  const handleSayHello = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // 1. Copy email address to clipboard
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL);
      }
    } catch {
      // Fallback if clipboard permission is denied
    }

    // 2. Show button feedback & popup notification
    setCopied(true);
    setShowToast(true);

    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => {
      setShowToast(false);
      setCopied(false);
    }, 5000);
  };

  const handleClosePopup = () => {
    setShowToast(false);
    setCopied(false);
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
  };

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto min-h-[512px] gsap-reveal scroll-section opacity-0 invisible relative"
      id="contact"
    >
      <p className="font-label-mono text-label-mono text-primary-container mb-4">
        <span className="mr-2">02.</span>What&apos;s Next?
      </p>
      <h2 className="font-display-mobile md:font-display text-display-mobile md:text-display text-primary mb-6">
        Get In Touch
      </h2>
      <p className="text-on-surface-variant mb-10">
        I&apos;m currently looking for new opportunities, my inbox is always open. Whether
        you have a question or just want to say hi, I&apos;ll try my best to get back to you!
      </p>

      <div className="relative flex flex-col items-center">
        <MagneticButton
          onClick={handleSayHello}
          className="px-8 py-4 border border-primary-container text-primary-container font-label-mono text-label-mono rounded hover:bg-accent-glow transition-all duration-300 hover:shadow-[0_0_15px_rgba(95,251,214,0.3)] cursor-pointer overflow-hidden"
        >
          <div className="grid relative place-items-center min-w-[120px]">
            <span
              className={`flex items-center gap-2 transition-all duration-300 ease-out col-start-1 row-start-1 ${
                copied ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
              }`}
            >
              <span className="material-symbols-outlined text-lg text-primary-container">
                done_all
              </span>
              <span>Copied!</span>
            </span>
            <span
              className={`transition-all duration-300 ease-out col-start-1 row-start-1 ${
                !copied ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
              }`}
            >
              Say Hello
            </span>
          </div>
        </MagneticButton>

        <EmailPopup 
          show={showToast} 
          onClose={handleClosePopup} 
          email={EMAIL} 
          gmailUrl={GMAIL_URL} 
        />
      </div>
    </section>
  );
}
