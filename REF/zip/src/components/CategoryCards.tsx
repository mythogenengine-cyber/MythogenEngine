import { Cpu, Network, Activity, Moon, Layers, Sparkles, ArrowRight } from 'lucide-react';

export function CategoryCards() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        {/* Card 1: Technical */}
        <div className="bg-surface-container-low p-10 lg:p-16 flex flex-col justify-between group cursor-pointer transition-colors duration-300 hover:bg-surface-container-high">
          <div>
            <div className="flex space-x-4 mb-12 text-primary-container">
              <Cpu size={36} strokeWidth={1.5} />
              <Network size={36} strokeWidth={1.5} />
              <Activity size={36} strokeWidth={1.5} />
            </div>
            <h2 className="font-headline text-4xl mb-6 group-hover:text-primary-container transition-colors duration-300">
              AI Ecosystem War <br />
              <span className="text-on-surface-variant font-light text-2xl italic">
                (Technical Analysis)
              </span>
            </h2>
            <p className="font-body text-on-surface-variant leading-relaxed max-w-md">
              Architectural deep-dives into LLM orchestration, vector database scaling, and the geopolitical infrastructure of compute.
            </p>
          </div>
          <div className="mt-16 flex items-center space-x-4">
            <span className="font-label text-xs tracking-widest uppercase border-b border-primary-container/30 pb-1 text-primary-container">
              Enter Protocol
            </span>
            <ArrowRight className="text-primary-container group-hover:translate-x-2 transition-transform" size={20} />
          </div>
        </div>

        {/* Card 2: Sci-Fi */}
        <div className="bg-surface-container-lowest p-10 lg:p-16 flex flex-col justify-between group cursor-pointer relative overflow-hidden transition-colors duration-300 hover:bg-surface-container-low">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container/5 blur-[100px] rounded-full -mr-20 -mt-20"></div>
          <div className="relative z-10">
            <div className="flex space-x-4 mb-12 text-secondary-container">
              <Moon size={36} strokeWidth={1.5} />
              <Layers size={36} strokeWidth={1.5} />
              <Sparkles size={36} strokeWidth={1.5} />
            </div>
            <h2 className="font-headline text-4xl mb-6 group-hover:text-secondary-container transition-colors duration-300">
              Mirror Realm <br />
              <span className="text-on-surface-variant font-light text-2xl italic">
                (Sci-Fi Novel)
              </span>
            </h2>
            <p className="font-body text-on-surface-variant leading-relaxed max-w-md">
              A serialized odyssey through a world where reality is rendered by a malfunctioning celestial engine. Where the glitch is God.
            </p>
          </div>
          <div className="mt-16 flex items-center space-x-4 relative z-10">
            <span className="font-label text-xs tracking-widest uppercase border-b border-secondary-container/30 pb-1 text-secondary-container">
              Begin Sequence
            </span>
            <ArrowRight className="text-secondary-container group-hover:translate-x-2 transition-transform" size={20} />
          </div>
        </div>
      </div>
    </section>
  );
}
