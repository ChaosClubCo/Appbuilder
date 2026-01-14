import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, X, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../ui/utils';

type PricingTier = {
  name: string;
  price: {
    monthly: string;
    yearly: string;
  };
  description: string;
  features: string[];
  notIncluded?: string[];
  highlight?: boolean;
  cta: string;
};

const tiers: PricingTier[] = [
  {
    name: 'Starter',
    price: { monthly: '$0', yearly: '$0' },
    description: 'Perfect for exploring personal projects and prototypes.',
    features: [
      '3 Projects',
      'Basic AI Models (GPT-3.5)',
      'Community Support',
      '1GB Storage',
      'Standard Generation Speed'
    ],
    notIncluded: [
      'API Access',
      'Custom Model Fine-tuning',
      'Team Collaboration'
    ],
    cta: 'Start for Free',
    highlight: false
  },
  {
    name: 'Pro',
    price: { monthly: '$49', yearly: '$39' },
    description: 'For professional developers building production apps.',
    features: [
      'Unlimited Projects',
      'Advanced AI Models (GPT-4, Claude 3)',
      'Priority Email Support',
      '50GB Storage',
      'Fast Generation Speed',
      'API Access',
      'Custom Model Fine-tuning'
    ],
    cta: 'Get Started',
    highlight: true
  },
  {
    name: 'Enterprise',
    price: { monthly: 'Custom', yearly: 'Custom' },
    description: 'Scalable solutions for large teams and organizations.',
    features: [
      'Everything in Pro',
      'Dedicated Success Manager',
      'SSO & Advanced Security',
      'Unlimited Storage',
      'SLA Guarantees',
      'On-premise Deployment Options'
    ],
    cta: 'Contact Sales',
    highlight: false
  }
];

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Pricing</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Choose the plan that fits your needs. 
            <span className="text-orange-400 font-medium ml-1">Save 20%</span> on yearly billing.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4"
          >
            <span className={cn(
              "text-sm font-medium transition-colors",
              billingCycle === 'monthly' ? "text-white" : "text-gray-500"
            )}>Monthly</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-14 h-7 bg-slate-800 rounded-full border border-white/10 p-1 transition-colors hover:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={cn(
                  "w-5 h-5 rounded-full shadow-md",
                  billingCycle === 'monthly' ? "bg-gray-400 translate-x-0" : "bg-blue-500 translate-x-7"
                )}
              />
            </button>
            <span className={cn(
              "text-sm font-medium transition-colors",
              billingCycle === 'yearly' ? "text-white" : "text-gray-500"
            )}>Yearly</span>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative flex flex-col p-8 rounded-2xl border transition-all duration-300",
                tier.highlight 
                  ? "bg-slate-900/80 border-blue-500/50 shadow-2xl shadow-blue-500/10 scale-105 z-10" 
                  : "bg-slate-900/40 border-white/10 hover:border-white/20 hover:bg-slate-900/60"
              )}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3" aria-hidden="true" /> Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-400 text-sm h-10">{tier.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">
                    {billingCycle === 'monthly' ? tier.price.monthly : tier.price.yearly}
                  </span>
                  {tier.price.monthly !== 'Custom' && (
                    <span className="text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'mo'}</span>
                  )}
                </div>
                {billingCycle === 'yearly' && tier.price.monthly !== 'Custom' && tier.price.monthly !== '$0' && (
                  <p className="text-xs text-orange-400 mt-2 font-medium">Billed annually</p>
                )}
              </div>

              <div className="flex-grow mb-8 space-y-4">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                    <div className="flex items-center justify-center w-5 h-5 shrink-0" aria-hidden="true">
                      <Check className="w-full h-full text-blue-400" />
                    </div>
                    <span className="flex-1 text-left">
                      <span className="sr-only">Included: </span>
                      {feature}
                    </span>
                  </div>
                ))}
                {tier.notIncluded?.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                    <div className="flex items-center justify-center w-5 h-5 shrink-0" aria-hidden="true">
                      <X className="w-full h-full" />
                    </div>
                    <span className="flex-1 text-left">
                      <span className="sr-only">Not included: </span>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                variant={tier.highlight ? "default" : "outline"}
                className={cn(
                  "w-full h-12 rounded-xl font-semibold transition-all",
                  tier.highlight 
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 shadow-lg shadow-blue-500/20" 
                    : "border-white/10 text-white hover:bg-white/10 hover:text-white"
                )}
                aria-label={`${tier.cta} for ${tier.name} plan`}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
