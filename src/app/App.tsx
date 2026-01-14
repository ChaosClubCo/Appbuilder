import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/landing/Hero';
import { TrustedBy } from './components/landing/TrustedBy';
import { Stats } from './components/landing/Stats';
import { Features } from './components/landing/Features';
import { InteractivePlayground } from './components/landing/InteractivePlayground';
import { TemplateGallery } from './components/landing/TemplateGallery';
import { ComparisonTable } from './components/landing/ComparisonTable';
import { Architecture } from './components/landing/Architecture';
import { WorkflowTabs } from './components/landing/WorkflowTabs';
import { Integrations } from './components/landing/Integrations';
import { Testimonials } from './components/landing/Testimonials';
import { Team } from './components/landing/Team';
import { Pricing } from './components/landing/Pricing';
import { FAQ } from './components/landing/FAQ';
import { BlogPreview } from './components/landing/BlogPreview';
import { Contact } from './components/landing/Contact';
import { Newsletter } from './components/landing/Newsletter';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { BackToTop } from './components/layout/BackToTop';
import { CustomCursor } from './components/layout/CustomCursor';
import { CookieConsent } from './components/layout/CookieConsent';
import { SkipNav } from './components/layout/SkipNav';
import { Footer } from './components/layout/Footer';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-500/30 cursor-default">
      <SkipNav />
      <CustomCursor />
      <AnnouncementBar />
      <ScrollProgress />
      <Navbar />
      
      <main id="main-content">
        <Hero />
        <TrustedBy />
        <Stats />
        <Features />
        <InteractivePlayground />
        <TemplateGallery />
        <ComparisonTable />
        <Architecture />
        <WorkflowTabs />
        <Integrations />
        <Testimonials />
        <Team />
        <Pricing />
        <FAQ />
        <BlogPreview />
        <Contact />
        <Newsletter />
      </main>

      <Footer />
      <BackToTop />
      <CookieConsent />
      <Toaster position="top-center" theme="dark" />
    </div>
  );
}
