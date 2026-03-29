import { TerminalSquare, FileText, Network, EyeOff, Settings } from 'lucide-react';

export function SideNav() {
  return (
    <aside className="hidden lg:flex flex-col h-screen w-20 fixed left-0 top-0 bg-surface-container-lowest items-center py-12 space-y-12 z-40">
      <div className="text-primary-container font-bold mt-16">
        <TerminalSquare size={28} strokeWidth={1.5} />
      </div>
      <div className="flex flex-col space-y-10">
        <button
          className="text-primary-container opacity-100 hover:scale-110 transition-transform"
          title="Documentation"
        >
          <FileText size={24} strokeWidth={1.5} />
        </button>
        <button
          className="text-on-surface-variant opacity-40 hover:opacity-100 hover:text-primary-container transition-all"
          title="Network"
        >
          <Network size={24} strokeWidth={1.5} />
        </button>
        <button
          className="text-on-surface-variant opacity-40 hover:opacity-100 hover:text-primary-container transition-all"
          title="Redacted"
        >
          <EyeOff size={24} strokeWidth={1.5} />
        </button>
        <button
          className="text-on-surface-variant opacity-40 hover:opacity-100 hover:text-primary-container transition-all"
          title="Settings"
        >
          <Settings size={24} strokeWidth={1.5} />
        </button>
      </div>
      <div className="mt-auto">
        <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant/20">
          <img
            alt="User terminal profile"
            className="w-full h-full object-cover grayscale brightness-75"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNUpdn_rX-gJJMI_SzWezer_pECbqCkN8spWXW83hmMcOTKWLHDRspRu09vaZ4f3trviUBLwEnIsHrk92eZ99NAxdIKF-goJEeBzNbaWq4JHy192ngUjTsDUqt97Um0CXBZKC8TiFv0sn-qEgezUjbygU97fZDmnBaPs8O1OFND4fl7O_tJNLvF_fzJ8EJJfYnzPAWyJRnAW8N2akKIViLCPSBznbz8RiyAfu581ul92SG82MAWdG59DY6V-TwdEPuTUxOsCB9mQ"
          />
        </div>
      </div>
    </aside>
  );
}
