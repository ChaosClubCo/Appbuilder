import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { PrivacyPolicy } from '../legal/PrivacyPolicy';
import { Terms } from '../legal/Terms';
import logo3D from 'figma:asset/676d3e83379c91f0e4d0eaddd3fc40a84d24b262.png';

export function Footer() {
  return (
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
  );
}
