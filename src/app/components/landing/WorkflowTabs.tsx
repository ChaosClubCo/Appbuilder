import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { motion } from 'motion/react';
import { Layers, Zap, Code2, Rocket } from 'lucide-react';

export function WorkflowTabs() {
  return (
    <section className="py-24 bg-slate-900/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          How FlashFusion Works
        </h2>
        <p className="text-gray-400">
            From concept to code in four simple steps.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="design" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-slate-950 p-1 rounded-xl border border-white/10 h-auto">
                <TabsTrigger value="design" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white py-3 rounded-lg text-gray-400">
                    <Layers className="w-4 h-4 mr-2" /> Design
                </TabsTrigger>
                <TabsTrigger value="import" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white py-3 rounded-lg text-gray-400">
                    <Zap className="w-4 h-4 mr-2" /> Import
                </TabsTrigger>
                <TabsTrigger value="refine" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white py-3 rounded-lg text-gray-400">
                    <Code2 className="w-4 h-4 mr-2" /> Refine
                </TabsTrigger>
                <TabsTrigger value="deploy" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white py-3 rounded-lg text-gray-400">
                    <Rocket className="w-4 h-4 mr-2" /> Deploy
                </TabsTrigger>
            </TabsList>
            
            <div className="mt-8 bg-slate-950 border border-white/10 rounded-2xl p-8 min-h-[300px] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

                <TabsContent value="design" className="mt-0">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1 text-left">
                            <h3 className="text-2xl font-bold text-white mb-4">Design in Figma</h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Start with your favorite design tool. FlashFusion works directly with your Figma files, 
                                respecting auto-layout, variables, and component properties. No special naming conventions required.
                            </p>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500" /> Auto-layout support</li>
                                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500" /> Variable mapping</li>
                                <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500" /> Vector import</li>
                            </ul>
                        </div>
                        <div className="flex-1 bg-slate-900 rounded-xl aspect-video w-full flex items-center justify-center border border-white/5">
                            <Layers className="w-16 h-16 text-gray-600" />
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="import" className="mt-0">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1 text-left">
                            <h3 className="text-2xl font-bold text-white mb-4">One-Click Import</h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Paste your Figma URL and let our AI engine analyze the structure. 
                                We identify repetitive patterns, extract images, and generate clean, semantic React code.
                            </p>
                        </div>
                        <div className="flex-1 bg-slate-900 rounded-xl aspect-video w-full flex items-center justify-center border border-white/5">
                            <Zap className="w-16 h-16 text-yellow-500" />
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="refine" className="mt-0">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1 text-left">
                            <h3 className="text-2xl font-bold text-white mb-4">AI-Assisted Refinement</h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Chat with the code. Ask FlashFusion to "add a mobile menu", "hook up the contact form", 
                                or "animate this section". The AI understands context and modifies the codebase intelligently.
                            </p>
                        </div>
                        <div className="flex-1 bg-slate-900 rounded-xl aspect-video w-full flex items-center justify-center border border-white/5">
                            <Code2 className="w-16 h-16 text-blue-500" />
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="deploy" className="mt-0">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-1 text-left">
                            <h3 className="text-2xl font-bold text-white mb-4">Ship to Production</h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Push directly to GitHub or deploy to Vercel/Netlify with a single command. 
                                The output is standard React/Next.js code that you fully own and can extend forever.
                            </p>
                        </div>
                        <div className="flex-1 bg-slate-900 rounded-xl aspect-video w-full flex items-center justify-center border border-white/5">
                            <Rocket className="w-16 h-16 text-purple-500" />
                        </div>
                    </div>
                </TabsContent>
            </div>
        </Tabs>
      </div>
    </section>
  );
}
