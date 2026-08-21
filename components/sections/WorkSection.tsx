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
          title="StackUnderflow"
          description="An AI-powered Stack Overflow clone built with Next.js 16, React 19, Tailwind CSS v4, Prisma, PostgreSQL, and Gemini AI."
          backgroundImage="/images/proj1.png"
          githubLink="https://github.com/NIK-llama/stackunderflow"
          deploymentLink="https://stackunderflow-ten.vercel.app"
          tags={['React', 'Next.js', 'Prisma', 'Gemini-ai', 'PostgreSQL', 'Tailwindcss', 'TypeScript']}
        />
        <ProjectCard
          title="Fastapi-Nextjs Blog"
          description="Modern full-stack blog platform built with Next.js 15 (App Router), FastAPI (Python 3.13), Turborepo monorepo, PostgreSQL (SQLAlchemy async), and Cloudflare R2 media storage. Fully typed with pnpm workspaces & JWT authentication."
          backgroundImage="/images/proj2.png"
          githubLink="https://github.com/NIK-llama/fastapi-nextjs-blog"
          deploymentLink="https://fastapi-nextjs-blog-web.vercel.app"
          tags={['FastAPI', 'Next.js', 'Python', 'uv', 'Sqlalchemy', 'Alembic', 'Turborepo', 'Cloudflare', 'TypeScript']}
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
