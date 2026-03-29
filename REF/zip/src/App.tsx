/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TopNav } from './components/TopNav';
import { SideNav } from './components/SideNav';
import { Hero } from './components/Hero';
import { CategoryCards } from './components/CategoryCards';
import { LatestTransmissions } from './components/LatestTransmissions';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container font-body">
      <TopNav />
      <SideNav />
      <main className="pt-32 pb-24 lg:pl-20">
        <Hero />
        <CategoryCards />
        <LatestTransmissions />
      </main>
      <Footer />
    </div>
  );
}

