import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Code, Terminal, FileCode, Share2, Download, Braces } from 'lucide-react';

const fileStructure = [
  { name: 'src', type: 'folder' },
  { name: 'components', type: 'folder', indent: 1 },
  { name: 'Header.tsx', type: 'file', indent: 2 },
  { name: 'Hero.tsx', type: 'file', indent: 2 },
  { name: 'pages', type: 'folder', indent: 1 },
  { name: 'index.tsx', type: 'file', indent: 2 },
  { name: 'styles', type: 'folder', indent: 1 },
  { name: 'globals.css', type: 'file', indent: 2 },
  { name: 'package.json', type: 'file', indent: 0 },
];

const codeSnippet = `import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black">
      <Hero 
        title="Built for Developers"
        subtitle="Export clean, semantic React code."
      />
      <Features />
    </main>
  );
}`;

export function DeveloperExperience() {
  const [activeTab, setActiveTab] = useState('react');

  return (
    <section className="py-24 bg-slate-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Terminal className="w-4 h-4" />
              <span>Developer First</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Full Code Ownership. <br />
              <span className="text-gray-400">No Lock-in.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Unlike other builders, FlashFusion generates clean, semantic React code that looks like you wrote it yourself. Export project files, sync with GitHub, or deploy directly to Vercel.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">One-Click Export</h3>
                  <p className="text-gray-400 text-sm">Download your entire project as a ZIP file or push to a new GitHub repo instantly.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                  <Braces className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Modern Stack</h3>
                  <p className="text-gray-400 text-sm">Built on Next.js, Tailwind CSS, and TypeScript. Industry standard tech stack.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <Button className="bg-white text-slate-900 hover:bg-gray-200">
                View Documentation
              </Button>
              <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
                Explore API
              </Button>
            </div>
          </div>

          {/* Right Side: IDE Mockup */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur-xl opacity-20" />
            
            <Card className="bg-[#1e1e1e] border-white/10 overflow-hidden shadow-2xl relative">
              {/* Window Controls */}
              <div className="bg-[#252526] px-4 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs text-gray-500 font-mono">FlashFusion Project</div>
                <div className="w-16" />
              </div>

              <div className="flex h-[400px]">
                {/* File Tree */}
                <div className="w-48 bg-[#252526] border-r border-white/5 p-4 hidden sm:block">
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-4">Explorer</div>
                  <div className="space-y-2">
                    {fileStructure.map((file, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white cursor-pointer"
                        style={{ paddingLeft: `${file.indent * 12}px` }}
                      >
                        {file.type === 'folder' ? (
                          <span className="opacity-50">▸</span>
                        ) : (
                          <FileCode className="w-3 h-3 text-blue-400" />
                        )}
                        {file.name}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Code Editor */}
                <div className="flex-1 flex flex-col">
                  {/* Tabs */}
                  <div className="flex bg-[#1e1e1e] border-b border-white/5">
                    <div className="px-4 py-2 bg-[#1e1e1e] text-blue-400 text-sm border-t-2 border-blue-500 flex items-center gap-2">
                      <FileCode className="w-3 h-3" />
                      index.tsx
                    </div>
                  </div>
                  
                  {/* Editor */}
                  <div className="p-4 font-mono text-sm overflow-auto">
                    <pre className="text-gray-300">
                      <code>{codeSnippet}</code>
                    </pre>
                  </div>

                  {/* Terminal */}
                  <div className="mt-auto border-t border-white/5 bg-[#252526] p-3">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <div className="flex gap-4">
                        <span className="text-white border-b border-white">TERMINAL</span>
                        <span>OUTPUT</span>
                        <span>Kgf</span>
                      </div>
                    </div>
                    <div className="font-mono text-xs text-gray-300">
                      <span className="text-green-500">➜</span> <span className="text-blue-400">~/project</span> npm run dev<br />
                      <span className="text-gray-500">ready - started server on 0.0.0.0:3000, url: http://localhost:3000</span><br />
                      <span className="text-green-500">event</span> - compiled client and server successfully in 1241 ms (156 modules)
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
