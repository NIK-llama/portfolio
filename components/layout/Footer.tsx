export default function Footer() {
  return (
    <footer className="w-full py-12 flex flex-col items-center justify-center space-y-4 bg-background mt-auto z-10 relative">
      <div className="flex space-x-6 mb-2">
        <a
          className="text-on-surface-variant hover:text-primary transition-colors duration-300 hover:translate-y-[-2px] flex flex-col items-center group"
          href="https://github.com/NIK-llama"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined mb-1 group-hover:text-primary-container">
            code
          </span>
          <span className="font-label-mono text-label-caps opacity-0 group-hover:opacity-100 transition-opacity text-primary-container">
            GitHub
          </span>
        </a>
        <a
          className="text-on-surface-variant hover:text-primary transition-colors duration-300 hover:translate-y-[-2px] flex flex-col items-center group"
          href="#"
        >
          <span className="material-symbols-outlined mb-1 group-hover:text-primary-container">
            work
          </span>
          <span className="font-label-mono text-label-caps opacity-0 group-hover:opacity-100 transition-opacity text-primary-container">
            LinkedIn
          </span>
        </a>
      </div>
      <p className="font-label-mono text-label-mono text-text-dim hover:text-primary-container transition-colors cursor-default">
        404: Footer creativity not found © 2026
      </p>
    </footer>
  );
}
