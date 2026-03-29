import { Search } from 'lucide-react';

export function TopNav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_0_15px_rgba(0,243,255,0.1)]">
      <div className="flex items-center justify-between px-6 lg:px-12 py-6 max-w-[1920px] mx-auto">
        <div className="font-headline italic text-primary-container tracking-tighter text-2xl">
          OBSIDIAN_SCHOLAR
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <a
            className="font-headline text-lg font-light tracking-tight text-primary-container border-b border-primary-container/40 pb-1"
            href="#"
          >
            Technical Analysis
          </a>
          <a
            className="font-headline text-lg font-light tracking-tight text-on-surface-variant hover:text-primary-container transition-all duration-200 ease-out"
            href="#"
          >
            Sci-Fi Novel
          </a>
          <a
            className="font-headline text-lg font-light tracking-tight text-on-surface-variant hover:text-primary-container transition-all duration-200 ease-out"
            href="#"
          >
            Archives
          </a>
          <a
            className="font-headline text-lg font-light tracking-tight text-on-surface-variant hover:text-primary-container transition-all duration-200 ease-out"
            href="#"
          >
            System Log
          </a>
        </div>
        <div className="flex items-center space-x-6">
          <button className="text-on-surface-variant hover:text-primary-container transition-colors">
            <Search size={24} strokeWidth={1.5} />
          </button>
          <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-sm font-label text-xs tracking-widest uppercase hover:opacity-90 transition-transform scale-98 active:opacity-80 shadow-[0_0_15px_rgba(0,243,255,0.3)] hover:shadow-[0_0_25px_rgba(0,243,255,0.5)]">
            Start Reading
          </button>
        </div>
      </div>
    </nav>
  );
}
