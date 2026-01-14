import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Slider } from '../ui/slider';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Wand2, RotateCcw, Palette, Type, Layout } from 'lucide-react';

export function AICustomizer() {
  const [borderRadius,WBOrderRadius] = useState([8]);
  const [primaryColor, setPrimaryColor] = useState('#3b82f6');
  const [fontScale, setFontScale] = useState([16]);
  
  const colors = [
    '#3b82f6', // Blue
    '#8b5cf6', // Violet
    '#ec4899', // Pink
    '#10b981', // Emerald
    '#f59e0b', // Amber
  ];

  const handleOptimize = () => {
    // Simulate AI optimization
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setPrimaryColor(randomColor);
    WBOrderRadius([Math.floor(Math.random() * 20)]);
    setFontScale([14 + Math.floor(Math.random() * 6)]);
  };

  const handleReset = () => {
    WBOrderRadius([8]);
    setPrimaryColor('#3b82f6');
    setFontScale([16]);
  };

  return (
    <section className="py-24 bg-slate-900 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">Style Tuner</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Fine-tune your design system with AI assistance. Adjust global parameters and watch your entire UI adapt instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="bg-slate-950/50 border-white/10 p-6 backdrop-blur-md">
              <div className="space-y-8">
                {/* Color Picker */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <Palette className="w-4 h-4 text-violet-400" />
                    Primary Color
                  </div>
                  <div className="flex gap-3">
                    {colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setPrimaryColor(color)}
                        className={`w-8 h-8 rounded-full transition-transform hover:scale-110 ${
                          primaryColor === color ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-950 scale-110' : ''
                        }`}
                        style={{ backgroundColor: color }}
                        aria-label={`Select color ${color}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Border Radius Slider */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-white font-medium">
                    <div className="flex items-center gap-2">
                      <Layout className="w-4 h-4 text-violet-400" />
                      Border Radius
                    </div>
                    <span className="text-sm text-gray-400">{borderRadius[0]}px</span>
                  </div>
                  <Slider
                    value={borderRadius}
                    onValueChange={WBOrderRadius}
                    max={24}
                    step={1}
                    className="cursor-pointer"
                  />
                </div>

                {/* Font Scale Slider */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-white font-medium">
                    <div className="flex items-center gap-2">
                      <Type className="w-4 h-4 text-violet-400" />
                      Typography Base
                    </div>
                    <span className="text-sm text-gray-400">{fontScale[0]}px</span>
                  </div>
                  <Slider
                    value={fontScale}
                    onValueChange={setFontScale}
                    min={12}
                    max={24}
                    step={1}
                    className="cursor-pointer"
                  />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex gap-3">
                <Button 
                  onClick={handleOptimize}
                  className="flex-1 bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white"
                >
                  <Wand2 className="w-4 h-4 mr-2" />
                  AI Optimize
                </Button>
                <Button 
                  variant="outline"
                  onClick={handleReset}
                  className="border-white/10 text-white hover:bg-white/5"
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-8">
            <motion.div 
              layout
              className="grid gap-6"
              style={{ 
                '--primary': primaryColor,
                '--radius': `${borderRadius[0]}px`,
              } as any}
            >
              {/* Preview Components */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card 
                  className="bg-slate-950 border-white/10 p-6 transition-all duration-300"
                  style={{ borderRadius: borderRadius[0] }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: primaryColor }}>
                      JS
                    </div>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-slate-900 text-gray-400" style={{ borderRadius: borderRadius[0] }}>
                      Pro User
                    </span>
                  </div>
                  <h3 className="font-bold text-white mb-2" style={{ fontSize: fontScale[0] * 1.2 }}>Jane Smith</h3>
                  <p className="text-gray-400 text-sm mb-4">Product Designer at FlashFusion</p>
                  <Button 
                    className="w-full text-white transition-colors"
                    style={{ 
                      backgroundColor: primaryColor,
                      borderRadius: borderRadius[0],
                      fontSize: fontScale[0]
                    }}
                  >
                    Follow
                  </Button>
                </Card>

                <Card 
                  className="bg-slate-950 border-white/10 p-6 transition-all duration-300"
                  style={{ borderRadius: borderRadius[0] }}
                >
                  <div className="space-y-4">
                    <div className="h-2 bg-slate-800 rounded-full w-3/4" />
                    <div className="h-2 bg-slate-800 rounded-full w-1/2" />
                    <div className="h-32 bg-slate-900 rounded-lg w-full border-2 border-dashed border-slate-800 flex items-center justify-center text-gray-500 text-sm" style={{ borderRadius: borderRadius[0] }}>
                      Content Placeholder
                    </div>
                    <div className="flex justify-end">
                       <Button 
                        variant="outline"
                        className="border-white/10 text-white hover:bg-white/5"
                        style={{ 
                          borderColor: primaryColor,
                          color: primaryColor,
                          borderRadius: borderRadius[0]
                        }}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Wide Card */}
              <Card 
                className="bg-slate-950 border-white/10 p-8 transition-all duration-300"
                style={{ borderRadius: borderRadius[0] }}
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1 space-y-4">
                    <h3 className="font-bold text-white" style={{ fontSize: fontScale[0] * 1.5 }}>
                      Ready to launch?
                    </h3>
                    <p className="text-gray-400">
                      Get started with our premium plan and unlock unlimited possibilities.
                    </p>
                  </div>
                  <div className="flex gap-4">
                     <Button 
                        variant="ghost"
                        className="text-gray-300 hover:text-white hover:bg-white/5"
                        style={{ borderRadius: borderRadius[0] }}
                      >
                        Learn More
                      </Button>
                     <Button 
                        className="text-white px-8"
                        style={{ 
                          backgroundColor: primaryColor,
                          borderRadius: borderRadius[0]
                        }}
                      >
                        Get Started
                      </Button>
                  </div>
                </div>
              </Card>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
