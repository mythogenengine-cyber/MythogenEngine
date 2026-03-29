import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:col-span-8"
      >
        <span className="font-label text-secondary-container tracking-[0.3em] uppercase text-xs mb-6 block">
          Document 01 // Experimental Analysis
        </span>
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-none mb-8">
          Exploring the <span className="italic text-primary-container">Fractured Realities</span> of AI & Imagination
        </h1>
        <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed font-light">
          A dual-track exploration of synthetic intelligence through rigorous technical architecture and speculative narrative threads. Decrypting the future, one line of code and prose at a time.
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="lg:col-span-4 flex justify-end"
      >
        <div className="w-full aspect-square bg-surface-container-low relative overflow-hidden rounded-sm group">
          <img
            alt="Abstract digital distortion"
            className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHR1lznOoaBcJ2LsQffvSakNGf3Q1NjHl2ZCEw5HZiymnsAymhAl319n0TThjV_NFAgSFZyPExtKEAlffIVKwOsdNmXpljKASVIqaTdMsHs--DN1Jp_jEXDoEbeIOPZSFb_EWROTuOOOFcAXGuMdZJ6MzLbvDfSQumMjL61AvwGxvMjH-AwE7DGja5rTNXnm-7M8ll8T3f6WvEf9oJsAlUofzwaPzyrQ82ieYFPkwgAyd0TopxVERIRA-a9kX74CoieTXvpmn7Rg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
        </div>
      </motion.div>
    </section>
  );
}
