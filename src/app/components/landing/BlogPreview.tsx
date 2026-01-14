import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const posts = [
  {
    title: 'The Future of AI-Generated UI',
    excerpt: 'Why generative design is the next big leap for frontend developers.',
    date: 'Mar 15, 2024',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1631375937044-6dd5beac01d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBjb2RlJTIwY29tcHV0ZXIlMjB0ZWNobm9sb2d5JTIwZnV0dXJlJTIwQUklMjBhYnN0cmFjdCUyMGJhY2tncm91bmQlMjBuZW9ufGVufDF8fHx8MTc2ODIwOTIxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Scaling to 1 Million Users',
    excerpt: 'Lessons learned from optimizing our edge network for global traffic.',
    date: 'Mar 10, 2024',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1569660424259-87e64a80f6fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjByb29tJTIwZGF0YSUyMGNlbnRlciUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdCUyMGJsdWV8ZW58MXx8fHwxNzY4MjA5MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Design Systems at Scale',
    excerpt: 'How we maintain consistency across 50+ projects with one token set.',
    date: 'Mar 05, 2024',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1762784574847-16c5100cd1ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBtZWV0aW5nJTIwY3JlYXRpdmUlMjB0ZWFtJTIwYnJhaW5zdG9ybWluZ3xlbnwxfHx8fDE3NjgyMDkyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function BlogPreview() {
  return (
    <section className="py-24 bg-slate-900/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Latest Insights
            </h2>
            <p className="text-gray-400">Thinking, tutorials, and tales from the team.</p>
          </div>
          <a href="#" className="hidden md:flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium">
            View all posts <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-950 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all cursor-pointer"
            >
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-slate-900/80 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-blue-500 text-sm font-medium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Read Article <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium">
                View all posts <ArrowRight className="w-4 h-4 ml-2" />
            </a>
        </div>
      </div>
    </section>
  );
}
