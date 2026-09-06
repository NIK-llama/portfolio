import React from 'react';

interface EmailPopupProps {
  show: boolean;
  onClose: () => void;
  email: string;
  gmailUrl: string;
}

export default function EmailPopup({ show, onClose, email, gmailUrl }: EmailPopupProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`absolute top-full mt-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 transform w-[calc(100vw-3rem)] max-w-sm sm:w-96 ${
        show
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      <div className="glass-panel p-4 rounded-xl border border-primary-container/40 shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(95,251,214,0.15)] backdrop-blur-xl flex flex-col gap-2.5 text-left">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-primary-container text-xl animate-pulse">
              check_circle
            </span>
            <span className="font-semibold text-primary text-sm font-label-mono">
              Email Copied to Clipboard!
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-text-dim hover:text-primary transition-colors p-1 -mr-1 -mt-1 cursor-pointer"
            aria-label="Close notification"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        <p className="text-xs text-on-surface-variant font-label-mono break-all pl-7">
          {email}
        </p>

        <div className="border-t border-surface-container-highest/60 pt-2 mt-0.5 pl-7 flex items-center gap-3 text-xs font-label-mono">
          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-container hover:underline flex items-center gap-1"
          >
            <span>Open Gmail</span>
            <span className="material-symbols-outlined text-xs">open_in_new</span>
          </a>
          <span className="text-surface-container-highest">•</span>
          <a
            href={`mailto:${email}`}
            className="text-text-dim hover:text-primary transition-colors"
          >
            Use Mail App
          </a>
        </div>
      </div>
    </div>
  );
}
