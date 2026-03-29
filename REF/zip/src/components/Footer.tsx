export function Footer() {
  return (
    <footer className="w-full py-24 px-6 lg:px-12 bg-surface-container-lowest mt-24">
      <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-16 md:space-y-0 lg:pl-20">
        <div>
          <div className="font-headline text-primary-container text-2xl mb-4 italic tracking-tighter">
            OBSIDIAN_SCHOLAR
          </div>
          <p className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">
            © 2024 OBSIDIAN SCHOLAR. ALL RIGHTS REDACTED.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          <div className="flex flex-col space-y-4">
            <span className="font-label text-[10px] text-primary-container tracking-widest uppercase mb-2">
              Systems
            </span>
            <a className="font-label text-[10px] text-on-surface-variant hover:text-secondary-container transition-colors uppercase" href="#">
              Protocol
            </a>
            <a className="font-label text-[10px] text-on-surface-variant hover:text-secondary-container transition-colors uppercase" href="#">
              Encryption
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="font-label text-[10px] text-primary-container tracking-widest uppercase mb-2">
              Network
            </span>
            <a className="font-label text-[10px] text-on-surface-variant hover:text-secondary-container transition-colors uppercase" href="#">
              Subsidies
            </a>
            <a className="font-label text-[10px] text-on-surface-variant hover:text-secondary-container transition-colors uppercase" href="#">
              Contact
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="font-label text-[10px] text-primary-container tracking-widest uppercase mb-2">
              Archives
            </span>
            <a className="font-label text-[10px] text-on-surface-variant hover:text-secondary-container transition-colors uppercase" href="#">
              Manifesto
            </a>
            <a className="font-label text-[10px] text-on-surface-variant hover:text-secondary-container transition-colors uppercase" href="#">
              Database
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="font-label text-[10px] text-primary-container tracking-widest uppercase mb-2">
              Terminal
            </span>
            <a className="font-label text-[10px] text-on-surface-variant hover:text-secondary-container transition-colors uppercase" href="#">
              SSH Access
            </a>
            <a className="font-label text-[10px] text-on-surface-variant hover:text-secondary-container transition-colors uppercase" href="#">
              Status
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1920px] mx-auto mt-24 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center text-[10px] font-label tracking-[0.2em] text-on-surface-variant/50 uppercase lg:pl-20">
        <div>Encrypted Connection via Node_01</div>
        <div className="flex space-x-6 mt-6 md:mt-0">
          <span className="hover:text-on-surface-variant transition-colors cursor-pointer">Traditional 中文</span>
          <span className="hover:text-on-surface-variant transition-colors cursor-pointer">Simplified 中文</span>
          <span className="hover:text-on-surface-variant transition-colors cursor-pointer">English (US)</span>
        </div>
      </div>
    </footer>
  );
}
