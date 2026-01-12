import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import { InteractivePlayground } from './components/InteractivePlayground';
import { ComparisonTable } from './components/ComparisonTable';
import { Architecture } from './components/Architecture';
import { WorkflowTabs } from './components/WorkflowTabs';
import { Integrations } from './components/Integrations';
import { Testimonials } from './components/Testimonials';
import { Team } from './components/Team';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { BlogPreview } from './components/BlogPreview';
import { Contact } from './components/Contact';
import { Newsletter } from './components/Newsletter';
import logo3D from 'figma:asset/676d3e83379c91f0e4d0eaddd3fc40a84d24b262.png';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { AnnouncementBar } from './components/AnnouncementBar';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';
import { CustomCursor } from './components/CustomCursor';
import { CookieConsent } from './components/CookieConsent';
import { PrivacyPolicy } from './components/legal/PrivacyPolicy';
import { Terms } from './components/legal/Terms';
import { SkipNav } from './components/SkipNav';
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

      <footer className="bg-slate-950 border-t border-white/10 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <ImageWithFallback 
                src={logo3D} 
                alt="FlashFusion" 
                className="h-16 w-auto mb-4 object-contain"
              />
              <p className="text-gray-400 max-w-sm">
                Powering the next generation of intelligent workflows. 
                Seamlessly integrated, secure, and lightning fast.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Integrations</a></li>
                <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <div className="mb-4 md:mb-0">
              © {new Date().getFullYear()} FlashFusion. All rights reserved.
            </div>
            <div className="flex gap-6">
                <PrivacyPolicy>
                    <button className="hover:text-white transition-colors">Privacy Policy</button>
                </PrivacyPolicy>
                <Terms>
                    <button className="hover:text-white transition-colors">Terms of Service</button>
                </Terms>
            </div>
          </div>
        </div>
      </footer>
      <BackToTop />
      <CookieConsent />
      <Toaster position="top-center" theme="dark" />
    </div>
  );
}