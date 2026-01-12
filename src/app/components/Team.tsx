import React from 'react';
import { motion } from 'motion/react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const team = [
  {
    name: 'Sarah Drasner',
    role: 'Founder & CEO',
    bio: 'Former VP of Engineering at Netlify. Passionate about developer experience.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Alex Tuller',
    role: 'Head of AI',
    bio: 'PhD in Machine Learning from Stanford. Previously at OpenAI.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Marcus Johnson',
    role: 'Lead Designer',
    bio: 'Award-winning UI/UX designer. Creator of the "Glass" design system.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Emily Chen',
    role: 'CTO',
    bio: 'Full-stack architect. Built high-scale systems for Uber and Airbnb.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
];

export function Team() {
  return (
    <section className="py-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet the Minds
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A diverse team of engineers, designers, and researchers building the future of web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all"
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <a href="#" className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 text-white transition-colors">
                        <Twitter className="w-4 h-4" />
                    </a>
                    <a href="#" className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 text-white transition-colors">
                        <Github className="w-4 h-4" />
                    </a>
                    <a href="#" className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 text-white transition-colors">
                        <Linkedin className="w-4 h-4" />
                    </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-blue-400 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
