import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  backgroundImage: string;
  githubLink?: string;
  deploymentLink?: string;
  tags: string[];
}

export default function ProjectCard({
  title,
  description,
  backgroundImage,
  githubLink,
  deploymentLink,
  tags,
}: ProjectCardProps) {
  return (
    <div className="glass-panel rounded-xl overflow-hidden group hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(95,251,214,0.2)] hover:border-primary-container/50 transition-all duration-300 relative flex flex-col h-full">
      <div className="h-48 relative overflow-hidden bg-surface-container">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
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
            {githubLink && (
              <a
                className="text-text-dim hover:text-primary-container transition-colors"
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined">code</span>
              </a>
            )}
            {deploymentLink && (
              <a
                className="text-text-dim hover:text-primary-container transition-colors"
                href={deploymentLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
            )}
          </div>
        </div>
        <h3 className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-primary-container transition-colors">
          {title}
        </h3>
        <p className="text-on-surface-variant text-sm mb-6 grow">
          {description}
        </p>
        <div className="flex flex-wrap gap-3 mt-auto font-label-mono text-xs text-text-dim">
          {tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 bg-surface-container-highest/50 rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
