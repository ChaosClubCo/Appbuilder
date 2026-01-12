import React from 'react';
import { motion } from 'motion/react';
import { Database, Cloud, Lock, Server, Globe, Cpu, Smartphone, Code } from 'lucide-react';

const integrations = [
  { name: "Supabase", icon: Database, color: "text-green-400" },
  { name: "Vercel", icon: Cloud, color: "text-white" },
  { name: "Auth0", icon: Lock, color: "text-orange-400" },
  { name: "AWS", icon: Server, color: "text-yellow-500" },
  { name: "Stripe", icon: Globe, color: "text-purple-400" },
  { name: "OpenAI", icon: Cpu, color: "text-teal-400" },
  { name: "React Native", icon: Smartphone, color: "text-blue-400" },
  { name: "GitHub", icon: Code, color: "text-gray-200" }
];

export function Integrations() {
  return (
    <section className="py-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Seamless Integrations
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Connect FlashFusion with your favorite tools and services instantly.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {integrations.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center justify-center p-6 bg-slate-900/40 border border-white/5 rounded-2xl hover:bg-slate-800/60 hover:border-blue-500/30 transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-slate-950 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <span className="text-gray-300 font-medium">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
