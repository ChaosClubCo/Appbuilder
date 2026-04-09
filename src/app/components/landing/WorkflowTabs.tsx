import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Layers, Zap, Code2, Rocket, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

function StepIllustration({ children, accentColor }: { children: React.ReactNode; accentColor: string }) {
  return (
    <div className="flex-1 bg-slate-900 rounded-xl aspect-video w-full border border-white/5 overflow-hidden relative">
      <div className={`absolute inset-0 bg-gradient-to-br ${accentColor} opacity-5`} />
      <div className="p-6 h-full flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
}

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
                        <StepIllustration accentColor="from-blue-500 to-purple-500">
                          <div className="space-y-3">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-6 h-6 rounded bg-pink-500/30 border border-pink-500/50" />
                              <span className="text-xs text-gray-400 font-mono">Frame: Hero Section</span>
                            </div>
                            <div className="border border-dashed border-white/10 rounded-lg p-3 space-y-2">
                              <div className="h-3 w-3/4 bg-white/10 rounded" />
                              <div className="h-3 w-1/2 bg-white/10 rounded" />
                              <div className="flex gap-2 mt-3">
                                <div className="h-8 w-20 rounded bg-blue-500/30 border border-blue-500/50" />
                                <div className="h-8 w-20 rounded bg-white/5 border border-white/10" />
                              </div>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                              <CheckCircle className="w-3 h-3 text-green-400" />
                              <span className="text-[10px] text-green-400 font-mono">Auto-layout detected</span>
                            </div>
                          </div>
                        </StepIllustration>
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
                        <StepIllustration accentColor="from-yellow-500 to-orange-500">
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 bg-slate-800 rounded-lg px-3 py-2 border border-white/10">
                              <span className="text-xs text-gray-500">URL:</span>
                              <span className="text-xs text-blue-400 font-mono truncate">figma.com/design/abc123...</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-4 h-4 border-2 border-yellow-400 border-t-transparent rounded-full" />
                              <span className="text-xs text-yellow-400 font-mono">Analyzing 24 layers...</span>
                            </div>
                            <div className="space-y-1.5 mt-2">
                              {['Header.tsx', 'Hero.tsx', 'Features.tsx'].map((f, i) => (
                                <div key={f} className="flex items-center gap-2">
                                  <CheckCircle className="w-3 h-3 text-green-400" />
                                  <span className="text-[10px] text-gray-300 font-mono">{f}</span>
                                  <ArrowRight className="w-3 h-3 text-gray-600 ml-auto" />
                                  <span className="text-[10px] text-green-400 font-mono">Generated</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </StepIllustration>
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
                        <StepIllustration accentColor="from-blue-500 to-cyan-500">
                          <div className="space-y-3">
                            <div className="bg-slate-800 rounded-lg p-2 border border-white/10">
                              <div className="flex items-start gap-2">
                                <div className="w-5 h-5 rounded-full bg-blue-500/30 flex items-center justify-center shrink-0 text-[8px] text-blue-400 font-bold">U</div>
                                <p className="text-[10px] text-gray-300">"Add a responsive mobile menu with slide animation"</p>
                              </div>
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-2 border border-blue-500/20">
                              <div className="flex items-start gap-2">
                                <div className="w-5 h-5 rounded-full bg-cyan-500/30 flex items-center justify-center shrink-0 text-[8px] text-cyan-400 font-bold">AI</div>
                                <div className="text-[10px] text-gray-300 font-mono">
                                  <span className="text-blue-400">{'const'}</span> [isOpen, setIsOpen] = <span className="text-yellow-400">useState</span>(<span className="text-orange-400">false</span>);
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-400" />
                              <span className="text-[10px] text-green-400 font-mono">3 files modified</span>
                            </div>
                          </div>
                        </StepIllustration>
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
                        <StepIllustration accentColor="from-purple-500 to-pink-500">
                          <div className="space-y-3">
                            <div className="bg-slate-800 rounded-lg p-2 font-mono text-[10px] border border-white/10">
                              <div className="text-green-400">$ flashfusion deploy --prod</div>
                              <div className="text-gray-400 mt-1">Building project...</div>
                              <div className="text-gray-400">Optimizing assets... <span className="text-blue-400">done</span></div>
                              <div className="text-gray-400">Uploading to edge network...</div>
                              <div className="text-green-400 mt-1">✓ Deployed to https://myapp.vercel.app</div>
                            </div>
                            <div className="grid grid-cols-3 gap-2 mt-2">
                              {[
                                { label: 'Build', value: '1.2s', color: 'text-green-400' },
                                { label: 'Size', value: '48kb', color: 'text-blue-400' },
                                { label: 'Score', value: '100', color: 'text-purple-400' },
                              ].map((m) => (
                                <div key={m.label} className="bg-slate-800/50 rounded p-2 text-center border border-white/5">
                                  <div className={`text-xs font-bold ${m.color}`}>{m.value}</div>
                                  <div className="text-[8px] text-gray-500">{m.label}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </StepIllustration>
                    </div>
                </TabsContent>
            </div>
        </Tabs>
      </div>
    </section>
  );
}
