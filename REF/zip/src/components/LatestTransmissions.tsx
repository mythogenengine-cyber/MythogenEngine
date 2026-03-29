export function LatestTransmissions() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex justify-between items-baseline mb-16">
        <h3 className="font-headline text-3xl md:text-4xl">Latest Transmissions</h3>
        <a
          className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary-container transition-colors"
          href="#"
        >
          View All Logs
        </a>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Large Featured Update */}
        <div className="lg:col-span-2 bg-surface-container-low p-8 md:p-10 flex flex-col justify-between group cursor-pointer hover:bg-surface-container-high transition-colors duration-300">
          <div className="prose max-w-none">
            <span className="font-label text-xs text-primary-container tracking-widest uppercase">
              LOG // 042
            </span>
            <h2 className="!text-3xl md:!text-4xl !mt-4 group-hover:text-primary-container transition-colors duration-300">
              The Entropy of Context Windows: Why Memory Fails in Large Models
            </h2>
            <p className="text-lg">
              An investigation into the visual and semantic degradation of long-context retrievals in modern transformer architectures...
            </p>
            <pre className="text-sm">
              <code>
                config.max_position_embeddings = 128000{'\n'}
                # Warning: Contextual drift detected beyond 32k tokens
              </code>
            </pre>
          </div>
          <div className="flex items-center space-x-6 mt-8 font-label text-[10px] tracking-widest text-on-surface-variant uppercase">
            <span>October 24, 2024</span>
            <span>12 Min Read</span>
            <span className="flex items-center text-primary-container">
              <span className="w-1.5 h-1.5 bg-primary-container rounded-full mr-2 shadow-[0_0_8px_rgba(0,243,255,0.8)]"></span>
              Technical
            </span>
          </div>
        </div>

        {/* Secondary List */}
        <div className="flex flex-col space-y-8">
          <div className="bg-surface-container-high p-8 group hover:bg-surface-bright transition-colors duration-300 cursor-pointer">
            <span className="font-label text-[10px] text-secondary-container block mb-3 tracking-widest uppercase">
              CHAPTER // VII
            </span>
            <h4 className="font-headline text-xl mb-6 group-hover:text-secondary-container transition-colors duration-300 leading-snug">
              The Chrome Mirage: Fragmented Identity in the Mirror Realm
            </h4>
            <div className="flex justify-between font-label text-[9px] tracking-widest text-on-surface-variant uppercase mt-auto">
              <span>Oct 21</span>
              <span>8 Min Read</span>
            </div>
          </div>

          <div className="bg-surface-container-high p-8 group hover:bg-surface-bright transition-colors duration-300 cursor-pointer">
            <span className="font-label text-[10px] text-primary-container block mb-3 tracking-widest uppercase">
              RESEARCH // OP-01
            </span>
            <h4 className="font-headline text-xl mb-6 group-hover:text-primary-container transition-colors duration-300 leading-snug">
              Vector Space Geopolitics: The New Iron Curtain
            </h4>
            <div className="flex justify-between font-label text-[9px] tracking-widest text-on-surface-variant uppercase mt-auto">
              <span>Oct 18</span>
              <span>15 Min Read</span>
            </div>
          </div>

          <div className="bg-surface-container-high p-8 group hover:bg-surface-bright transition-colors duration-300 cursor-pointer">
            <span className="font-label text-[10px] text-secondary-container block mb-3 tracking-widest uppercase">
              CHAPTER // VI
            </span>
            <h4 className="font-headline text-xl mb-6 group-hover:text-secondary-container transition-colors duration-300 leading-snug">
              Whispers from the Root Directory
            </h4>
            <div className="flex justify-between font-label text-[9px] tracking-widest text-on-surface-variant uppercase mt-auto">
              <span>Oct 14</span>
              <span>6 Min Read</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
