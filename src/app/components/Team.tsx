import React from 'react';
import { motion } from 'motion/react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Placeholder images for team members using unspash/placeholder logic
// In a real scenario, these would be real photos.
// I'll use simple avatars or abstract visuals for now to avoid broken links if specific assets aren't provided.

const team = [
  {
    name: "Alex Rivera",
    role: "Founder & CEO",
    bio: "Ex-Google engineer with a passion for AI-driven design systems.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  {
    name: "Sarah Chen",
    role: "Lead Designer",
    bio: "Award-winning product designer specializing in glassmorphism and motion.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  },
  {
    name: "Marcus Johnson",
    role: "CTO",
    bio: "Scaling infrastructure from 0 to 100M+ requests. Rust enthusiast.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
  },
  {
    name: "Emily Zhang",
    role: "Head of AI",
    bio: "PhD in Machine Learning. Pushing the boundaries of generative models.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
  }
];

export function Team() {
  return (
    <section className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet the Minds
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The diverse team of experts behind FlashFusion's revolutionary platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-slate-950 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors"
            >
              <div className="aspect-square overflow-hidden relative">
                 {/* 
                   Ideally we use ImageWithFallback, but for external URLs simpler img is fine 
                   if we are sure they exist. Unsplash is reliable.
                 */}
                 <img 
                   src={member.image} 
                   alt={member.name}
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              </div>
              
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-blue-400 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                
                <div className="flex gap-4">
                  <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
