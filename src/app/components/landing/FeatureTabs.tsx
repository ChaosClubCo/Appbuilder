import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Code2, Paintbrush, Rocket, Database } from 'lucide-react';

export function FeatureTabs() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Built for the entire product lifecycle
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From design to deployment, FlashFusion provides the tools you need to ship faster.
          </p>
        </div>

        <Tabs defaultValue="design" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-slate-900 border border-white/10 p-1 rounded-xl h-auto">
              <TabsTrigger value="design" className="px-6 py-2.5 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-400">
                Design
              </TabsTrigger>
              <TabsTrigger value="develop" className="px-6 py-2.5 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-400">
                Develop
              </TabsTrigger>
              <TabsTrigger value="deploy" className="px-6 py-2.5 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-400">
                Deploy
              </TabsTrigger>
              <TabsTrigger value="scale" className="px-6 py-2.5 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white text-gray-400">
                Scale
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="mt-8">
            <TabsContent value="design">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center p-3 rounded-lg bg-pink-500/10 border border-pink-500/20">
                    <Paintbrush className="w-6 h-6 text-pink-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Import directly from Figma</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Our Figma plugin allows you to tag layers as interactive components. FlashFusion understands your design system, tokens, and auto-layout settings to generate pixel-perfect code.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500" /> Auto-layout to Flexbox/Grid
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500" /> Design token extraction
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500" /> Component variant support
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-900/50 rounded-2xl border border-white/10 aspect-video flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 group-hover:opacity-100 transition-opacity" />
                  {/* Placeholder visualization */}
                  <div className="text-center p-8">
                    <div className="w-16 h-24 bg-white/5 rounded mx-auto mb-4 border border-white/10" />
                    <p className="text-xs text-gray-500 font-mono">figma_import_process</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="develop">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <Code2 className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Clean, Maintainable React Code</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Unlike other tools that generate spaghetti code, FlashFusion produces human-readable, componentized React code using Shadcn UI and Tailwind CSS.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> TypeScript support by default
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Atomic component structure
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Zero proprietary runtime
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-900/50 rounded-2xl border border-white/10 aspect-video flex items-center justify-center">
                   <div className="w-full h-full p-6 font-mono text-xs text-blue-300 overflow-hidden opacity-70">
                     {'<Component className="flex gap-4">'}
                     <br/>
                     &nbsp;&nbsp;{'<Button variant="primary">Click me</Button>'}
                     <br/>
                     &nbsp;&nbsp;{'<Card title="Feature" />'}
                     <br/>
                     {'</Component>'}
                   </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="deploy">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
                    <Rocket className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">One-click Deployment</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Push your code to Vercel, Netlify, or AWS Amplify with a single click. We handle the CI/CD pipeline configuration for you.
                  </p>
                   <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Automated build pipelines
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Environment variable management
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Instant previews for every PR
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-900/50 rounded-2xl border border-white/10 aspect-video flex items-center justify-center">
                   <Rocket className="w-24 h-24 text-orange-500/20" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="scale">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                    <Database className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Scale with Confidence</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Built on top of Supabase and serverless functions, your app scales automatically to handle millions of requests without manual intervention.
                  </p>
                   <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Serverless Edge Functions
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Global CDN caching
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Auto-scaling database
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-900/50 rounded-2xl border border-white/10 aspect-video flex items-center justify-center">
                   <Database className="w-24 h-24 text-green-500/20" />
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
