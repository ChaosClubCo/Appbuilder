import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Zap, Loader2, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import mobileAppImage from 'figma:asset/6d92b79b8a00a67f055e0b2eb9b83ae89d113bf0.png';
import { toast } from 'sonner';
import { api } from '../utils/api';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async () => {
    if (!email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await api.subscribeNewsletter(email);
      if (result.alreadySubscribed) {
        toast.info("You're already subscribed!", {
          description: "We'll notify you as soon as we launch.",
        });
      } else {
        toast.success("Welcome aboard!", {
          description: result.message,
        });
      }
      setIsSubscribed(true);
      setEmail('');
      api.trackEvent('newsletter_subscribed', { email });
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast.error("Failed to subscribe", {
        description: error instanceof Error ? error.message : "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with slight gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 -z-20" />
      
      {/* Glowing orb effect */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
               <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                 <Zap className="h-6 w-6 text-white fill-white" />
               </div>
               <span className="text-2xl font-bold text-white tracking-wide">FLASHFUSION</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              COMING SOON
            </h2>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Get notified when we launch. Join our waiting list and be the first to experience the power of FlashFusion.
            </p>
            
            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-5 py-4 max-w-md"
              >
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <p className="text-emerald-400 font-medium text-sm">You're on the list!</p>
                  <p className="text-gray-400 text-xs mt-0.5">We'll email you when FlashFusion launches.</p>
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                  className="bg-slate-800/50 border-white/10 text-white placeholder:text-gray-500 h-12 rounded-lg"
                  aria-label="Email address for newsletter"
                  disabled={isSubmitting}
                />
                <Button 
                  onClick={handleSubscribe}
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-8 rounded-lg font-medium disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    'Subscribe'
                  )}
                </Button>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-950">
               <ImageWithFallback 
                 src={mobileAppImage} 
                 alt="FlashFusion Mobile App" 
                 className="w-full h-auto object-cover"
               />
               
               {/* Overlay gradient to blend bottom of image if needed */}
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
