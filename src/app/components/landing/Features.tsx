import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Zap, Cpu, Shield, RefreshCw, PenTool, Code } from 'lucide-react';
import { FeatureDetails } from './FeatureDetails';

const features = [
  {
    id: 'performance',
    icon: <Zap className="h-6 w-6 text-orange-400" />,
    title: "Fast Performance",
    description: "Sub-second code generation powered by our Rust-based engine. Every page loads instantly with optimized assets and edge caching.",
    details: {
      heading: "Fast Performance Engine",
      subtitle: "Our core engine is built on Rust, ensuring millisecond latency for all your AI generations.",
      bullets: [
        "Sub-100ms code generation for most prompts",
        "Automatic image optimization and lazy loading",
        "Edge-cached assets across 35+ global locations",
        "Zero-overhead runtime — no extra JavaScript bloat"
      ]
    }
  },
  {
    id: 'ai',
    icon: <Cpu className="h-6 w-6 text-blue-400" />,
    title: "Advanced A.I.",
    description: "GPT-4 and Claude 3 powered generation that understands design intent, component hierarchy, and responsive patterns.",
    details: {
      heading: "Advanced AI Models",
      subtitle: "Leverage the latest frontier models fine-tuned specifically for UI code generation.",
      bullets: [
        "Multi-model routing: GPT-4, Claude 3, and custom fine-tuned models",
        "Context-aware generation that understands your design system",
        "Iterative refinement via natural language chat",
        "Automatic accessibility attribute injection"
      ]
    }
  },
  {
    id: 'bolt',
    icon: <PenTool className="h-6 w-6 text-pink-400" />,
    title: "Bolt-Enhancer",
    description: "One-click enhancements that add animations, interactions, and responsive breakpoints to your generated components.",
    details: {
      heading: "Bolt-Enhancer Suite",
      subtitle: "Transform static designs into interactive, animated experiences with a single click.",
      bullets: [
        "Auto-animate scroll-triggered entrances",
        "Add hover states and micro-interactions",
        "Generate responsive variants for all breakpoints",
        "Insert loading skeletons and error states automatically"
      ]
    }
  },
  {
    id: 'security',
    icon: <Shield className="h-6 w-6 text-green-400" />,
    title: "Data Security",
    description: "SOC2 compliant infrastructure with end-to-end encryption. Your design data never trains our public models.",
    details: {
      heading: "Enterprise-Grade Security",
      subtitle: "Your intellectual property is protected by industry-leading security measures.",
      bullets: [
        "SOC2 Type II certified infrastructure",
        "AES-256 encryption at rest and TLS 1.3 in transit",
        "Private model instances for Enterprise customers",
        "GDPR and CCPA compliant data handling"
      ]
    }
  },
  {
    id: 'updates',
    icon: <RefreshCw className="h-6 w-6 text-purple-400" />,
    title: "Dynamic Updates",
    description: "Real-time hot module replacement during generation. See changes instantly without full page reloads.",
    details: {
      heading: "Dynamic Update Engine",
      subtitle: "Watch your code evolve in real-time as you refine your prompts and designs.",
      bullets: [
        "Hot module replacement during AI generation",
        "Live preview with instant feedback loop",
        "Incremental updates — only changed components regenerate",
        "Version history with one-click rollback"
      ]
    }
  },
  {
    id: 'api',
    icon: <Code className="h-6 w-6 text-cyan-400" />,
    title: "Powerful API",
    description: "RESTful and GraphQL APIs for programmatic code generation. Integrate FlashFusion into your CI/CD pipeline.",
    details: {
      heading: "Developer API",
      subtitle: "Full programmatic access to every FlashFusion capability via REST and GraphQL.",
      bullets: [
        "RESTful API with comprehensive OpenAPI spec",
        "GraphQL endpoint for flexible queries",
        "Webhook support for CI/CD integration",
        "SDK libraries for Node.js, Python, and Go"
      ]
    }
  }
];

export function Features() {
  const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null);

  return (
    <section id="features" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Discover the Power of <span className="text-blue-500">FlashFusion</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Innovative tech solutions designed to scale with your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedFeature(feature)}
              className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:bg-slate-800/50 hover:border-white/10 transition-all group cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedFeature(feature); } }}
              aria-label={`Learn more about ${feature.title}`}
            >
              <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <FeatureDetails 
        isOpen={!!selectedFeature} 
        onClose={() => setSelectedFeature(null)} 
        feature={selectedFeature}
      />
    </section>
  );
}
