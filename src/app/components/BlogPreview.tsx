import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from './ui/button';

const posts = [
  {
    title: "Introducing FlashFusion 2.0",
    excerpt: "The next generation of AI-powered design-to-code is here. See what's new in our latest major release.",
    date: "Oct 12, 2025",
    category: "Product",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
  },
  {
    title: "How to Optimize React Performance",
    excerpt: "Learn the advanced techniques we use to keep FlashFusion apps running at 60fps on mobile devices.",
    date: "Sep 28, 2025",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80"
  },
  {
    title: "The Future of Generative UI",
    excerpt: "Why static templates are dead and how dynamic, AI-generated interfaces are taking over.",
    date: "Sep 15, 2025",
    category: "Design",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"
  }
];

export function BlogPreview() {
  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Latest from the Lab
            </h2>
            <p className="text-gray-400 max-w-xl">
              Insights, tutorials, and announcements from the FlashFusion team.
            </p>
          </div>
          <Button variant="outline" className="border-white/10 text-white hover:bg-white/10 hidden md:flex">
            View All Posts <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="rounded-xl overflow-hidden mb-4 relative aspect-video border border-white/5 bg-slate-900">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" 
                />
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur text-xs font-semibold text-white px-3 py-1 rounded-full border border-white/10">
                  {post.category}
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              
              <span className="text-blue-500 text-sm font-medium flex items-center group-hover:underline">
                Read Article <ArrowRight className="ml-1 w-3 h-3" />
              </span>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
          <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/10">
            View All Posts <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
