import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import { Cpu, Network, Activity, Moon, Layers, Sparkles, ArrowRight } from 'lucide-react';

function HeroSection() {
  return (
    <header className="hero-banner">
      <div className="container-wide">
        <div className="row">
          <div className="col col--8">
            <span className="font-label text-secondary tracking-widest uppercase text-xs mb-4 block" style={{ color: 'var(--color-secondary-container)' }}>
              Protocol 01 // Nexus Integration
            </span>
            <h1 className="hero-title text-8xl font-extralight tracking-tighter leading-none mb-8" style={{ fontSize: '5rem', lineHeight: '1.1' }}>
              Exploring the <span className="italic" style={{ color: 'var(--ifm-color-primary)' }}>Fractured Realities</span> of AI & Narrative
            </h1>
            <p className="hero-subtitle text-xl font-light leading-relaxed max-w-2xl mb-12" style={{ color: 'var(--color-on-surface-variant)', fontSize: '1.25rem' }}>
              A dual-track exploration of synthetic intelligence through rigorous technical architecture and speculative narrative threads. Decrypting the future, one line of code and prose at a time.
            </p>
            <div className="flex space-x-4">
              <Link
                className="button button--outline button--primary button--lg"
                to="/docs/ai-war/guide">
                Access Archives
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function CategoryCards() {
  return (
    <section className="padding-vert--xl" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="container-wide">
        <div className="row">
          {/* AI Ecosystem War */}
          <div className="col col--6 margin-bottom--lg">
            <div className="card shadow--md" style={{ 
              background: 'var(--color-surface-container-low)', 
              padding: '3rem', 
              borderRadius: '0.25rem',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: 'none'
            }}>
              <div>
                <div className="flex space-x-4 mb-8" style={{ color: 'var(--ifm-color-primary)', display: 'flex', gap: '1rem' }}>
                  <Cpu size={36} strokeWidth={1.5} />
                  <Network size={36} strokeWidth={1.5} />
                  <Activity size={36} strokeWidth={1.5} />
                </div>
                <h2 className="text-4xl font-headline mb-4">
                  AI Ecosystem War <br />
                  <span className="text-on-surface-variant font-light text-2xl italic" style={{ fontSize: '1.5rem', display: 'block', marginTop: '0.5rem' }}>
                    (Technical Analysis)
                  </span>
                </h2>
                <p style={{ color: 'var(--color-on-surface-variant)', fontWeight: 300 }}>
                  Architectural deep-dives into LLM orchestration, vector database scaling, and the geopolitical infrastructure of compute.
                </p>
              </div>
              <div className="margin-top--lg flex items-center" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Link to="/docs/ai-war/guide" style={{ color: 'var(--ifm-color-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 300 }}>
                  ENTER PROTOCOL <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* Mirror Realm */}
          <div className="col col--6 margin-bottom--lg">
            <div className="card shadow--md" style={{ 
              background: 'var(--color-surface-container-lowest)', 
              padding: '3rem', 
              borderRadius: '0.25rem',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: 'none',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '200px', background: 'var(--color-secondary-container)', filter: 'blur(100px)', opacity: 0.1, borderRadius: '50%' }}></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div className="flex space-x-4 mb-8" style={{ color: 'var(--color-secondary-container)', display: 'flex', gap: '1rem' }}>
                  <Moon size={36} strokeWidth={1.5} />
                  <Layers size={36} strokeWidth={1.5} />
                  <Sparkles size={36} strokeWidth={1.5} />
                </div>
                <h2 className="text-4xl font-headline mb-4" style={{ color: 'white' }}>
                  Mirror Realm <br />
                  <span className="text-on-surface-variant font-light text-2xl italic" style={{ fontSize: '1.5rem', display: 'block', marginTop: '0.5rem' }}>
                    (Sci-Fi Novel)
                  </span>
                </h2>
                <p style={{ color: 'var(--color-on-surface-variant)', fontWeight: 300 }}>
                  A serialized odyssey through a world where reality is rendered by a malfunctioning celestial engine. Where the glitch is God.
                </p>
              </div>
              <div className="margin-top--lg" style={{ position: 'relative', zIndex: 1 }}>
                <Link to="/docs/mirror-realm/prologue" style={{ color: 'var(--color-secondary-container)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 300 }}>
                  BEGIN SEQUENCE <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Refining the intersection of AI and speculative fiction.">
      <main>
        <HeroSection />
        <CategoryCards />
      </main>
    </Layout>
  );
}
