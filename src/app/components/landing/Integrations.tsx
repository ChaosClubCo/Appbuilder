import React from 'react';
import { motion } from 'motion/react';
import { 
    Github, 
    Slack, 
    Figma, 
    Database, 
    Cloud, 
    CreditCard, 
    Mail 
} from 'lucide-react';

const integrations = [
    { name: 'GitHub', icon: Github, color: 'text-white' },
    { name: 'Slack', icon: Slack, color: 'text-purple-400' },
    { name: 'Figma', icon: Figma, color: 'text-pink-400' },
    { name: 'Supabase', icon: Database, color: 'text-green-400' },
    { name: 'AWS', icon: Cloud, color: 'text-orange-400' },
    { name: 'Stripe', icon: CreditCard, color: 'text-blue-400' },
    { name: 'Resend', icon: Mail, color: 'text-slate-200' },
    // Repeat for grid effect
    { name: 'GitLab', icon: Github, color: 'text-orange-500' },
];

export function Integrations() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
            
            <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Connects With Your Favorite Tools
                </h2>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                    FlashFusion plays nice with your existing stack. 
                    From design to deployment, we integrate seamlessly with the tools you use every day.
                    Push code to GitHub, trigger builds on Vercel, and collect payments with Stripe instantly.
                </p>
                <div className="flex flex-wrap gap-4">
                    <span className="px-4 py-2 rounded-lg bg-slate-900 border border-white/10 text-sm text-gray-300">
                        Webhooks
                    </span>
                    <span className="px-4 py-2 rounded-lg bg-slate-900 border border-white/10 text-sm text-gray-300">
                        REST API
                    </span>
                    <span className="px-4 py-2 rounded-lg bg-slate-900 border border-white/10 text-sm text-gray-300">
                        GraphQL
                    </span>
                    <span className="px-4 py-2 rounded-lg bg-slate-900 border border-white/10 text-sm text-gray-300">
                        CLI Tool
                    </span>
                </div>
            </div>

            <div className="w-full md:w-1/2">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {integrations.map((tool, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="aspect-square bg-slate-900/50 border border-white/5 rounded-2xl flex flex-col items-center justify-center hover:bg-slate-800/50 hover:border-white/20 transition-all group cursor-pointer"
                        >
                            <tool.icon className={`w-8 h-8 mb-3 ${tool.color} group-hover:scale-110 transition-transform`} />
                            <span className="text-xs text-gray-500 font-medium">{tool.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}
