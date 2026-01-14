import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Card } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Code, Sparkles, Copy, Check, Play } from 'lucide-react';
import { toast } from 'sonner';

const examplePrompts = [
  {
    name: 'Landing Page',
    prompt: 'Create a modern landing page for a SaaS product with a hero section, features, and pricing.',
    output: `<div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
  <nav className="px-6 py-4 flex justify-between items-center">
    <div className="text-2xl font-bold">YourSaaS</div>
    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
      Get Started
    </button>
  </nav>
  
  <section className="max-w-4xl mx-auto px-6 py-20 text-center">
    <h1 className="text-5xl font-bold mb-6">
      Transform Your Workflow
    </h1>
    <p className="text-xl text-gray-600 mb-8">
      Build faster, ship smarter, grow bigger
    </p>
    <button className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg">
      Start Free Trial
    </button>
  </section>
</div>`
  },
  {
    name: 'Dashboard',
    prompt: 'Build a dashboard with stats cards and a chart section.',
    output: `<div className="p-8 bg-gray-50 min-h-screen">
  <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
  
  <div className="grid grid-cols-3 gap-6 mb-8">
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="text-gray-500 text-sm">Total Users</div>
      <div className="text-3xl font-bold mt-2">12,543</div>
      <div className="text-green-500 text-sm mt-1">+12.5%</div>
    </div>
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="text-gray-500 text-sm">Revenue</div>
      <div className="text-3xl font-bold mt-2">$45,231</div>
      <div className="text-green-500 text-sm mt-1">+8.2%</div>
    </div>
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="text-gray-500 text-sm">Conversion</div>
      <div className="text-3xl font-bold mt-2">3.2%</div>
      <div className="text-red-500 text-sm mt-1">-1.1%</div>
    </div>
  </div>
</div>`
  },
  {
    name: 'Contact Form',
    prompt: 'Generate a contact form with name, email, and message fields.',
    output: `<form className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
  <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
  
  <div className="mb-4">
    <label className="block text-sm font-medium mb-2">Name</label>
    <input 
      type="text" 
      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
      placeholder="John Doe"
    />
  </div>
  
  <div className="mb-4">
    <label className="block text-sm font-medium mb-2">Email</label>
    <input 
      type="email" 
      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
      placeholder="john@example.com"
    />
  </div>
  
  <div className="mb-6">
    <label className="block text-sm font-medium mb-2">Message</label>
    <textarea 
      rows={4}
      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
      placeholder="Your message..."
    />
  </div>
  
  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
    Send Message
  </button>
</form>`
  }
];

export function InteractivePlayground() {
  const [prompt, setPrompt] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentView, setCurrentView] = useState<'code' | 'preview'>('code');

  const handleGenerate = () => {
    if (!prompt.trim()) {
      toast.error('Please enter a prompt');
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation with a delay
    setTimeout(() => {
      // Find matching example or use default
      const example = examplePrompts.find(ex => 
        prompt.toLowerCase().includes(ex.name.toLowerCase())
      ) || examplePrompts[0];
      
      setGeneratedCode(example.output);
      setIsGenerating(false);
      toast.success('Code generated successfully!');
      setCurrentView('code');
    }, 1500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    toast.success('Code copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const loadExample = (example: typeof examplePrompts[0]) => {
    setPrompt(example.prompt);
    setGeneratedCode(example.output);
    setCurrentView('code');
  };

  return (
    <section 
      id="playground" 
      className="py-24 bg-slate-950 relative overflow-hidden"
      aria-labelledby="playground-heading"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full -z-10" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full -z-10" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-12 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center">
              <Code className="h-6 w-6 text-cyan-400" aria-hidden="true" />
            </div>
            <span className="text-cyan-400 font-semibold tracking-wide uppercase text-sm">Try It Live</span>
          </div>
          
          <h2 id="playground-heading" className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Playground</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Experience the power of FlashFusion. Enter a prompt and watch as AI generates production-ready code in seconds.
          </p>
        </div>

        {/* Example Prompts */}
        <div className="mb-8">
          <p className="text-sm text-gray-400 mb-3">Quick examples:</p>
          <div className="flex flex-wrap gap-3">
            {examplePrompts.map((example) => (
              <Button
                key={example.name}
                variant="outline"
                size="sm"
                onClick={() => loadExample(example)}
                className="border-white/10 text-white hover:bg-white/10"
              >
                {example.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Main Playground Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <Card className="bg-slate-900/50 backdrop-blur-sm border-white/10 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" aria-hidden="true" />
                Your Prompt
              </h3>
            </div>
            
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe what you want to build... e.g., 'Create a pricing page with 3 tiers'"
              className="bg-slate-950/50 border-white/10 text-white min-h-[200px] mb-4 resize-none"
              aria-label="Enter your prompt"
            />
            
            <Button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white h-12"
            >
              {isGenerating ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                    aria-hidden="true"
                  />
                  Generating...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" aria-hidden="true" />
                  Generate Code
                </>
              )}
            </Button>
          </Card>

          {/* Output Section */}
          <Card className="bg-slate-900/50 backdrop-blur-sm border-white/10 p-6">
            <div className="flex items-center justify-between mb-4">
              <Tabs value={currentView} onValueChange={(v) => setCurrentView(v as 'code' | 'preview')} className="w-full">
                <div className="flex items-center justify-between">
                  <TabsList className="bg-slate-950/50">
                    <TabsTrigger value="code">Code</TabsTrigger>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                  </TabsList>
                  
                  {generatedCode && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCopy}
                      className="text-gray-400 hover:text-white"
                      aria-label="Copy code to clipboard"
                    >
                      {copied ? (
                        <Check className="w-4 h-4" aria-hidden="true" />
                      ) : (
                        <Copy className="w-4 h-4" aria-hidden="true" />
                      )}
                    </Button>
                  )}
                </div>

                <TabsContent value="code" className="mt-4">
                  <div className="bg-slate-950/50 rounded-lg p-4 min-h-[300px] max-h-[400px] overflow-auto">
                    {generatedCode ? (
                      <pre className="text-sm text-gray-300 font-mono">
                        <code>{generatedCode}</code>
                      </pre>
                    ) : (
                      <div className="flex items-center justify-center h-[300px] text-gray-500">
                        Enter a prompt and click generate to see the code
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="preview" className="mt-4">
                  <div className="bg-white rounded-lg min-h-[300px] max-h-[400px] overflow-auto p-4">
                    {generatedCode ? (
                      <div className="text-sm text-gray-700">
                        <div className="mb-2 text-xs text-gray-500 font-mono px-2 py-1 bg-gray-100 rounded">
                          Preview rendering would show live component here
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: `<!-- Preview mode: Component would render here -->` }} />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-[300px] text-gray-400">
                        Generate code to see preview
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            This is just a taste. <strong className="text-white">Sign up</strong> to unlock the full power of FlashFusion.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl text-lg font-medium">
            Start Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
}
