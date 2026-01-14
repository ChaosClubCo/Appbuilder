import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Send, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newErrors: Record<string, string> = {};

    // Validate required fields
    if (!formData.get('firstName')) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.get('email')) {
      newErrors.email = 'Email is required';
    } else {
      const email = formData.get('email') as string;
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors.email = 'Please enter a valid email';
      }
    }
    if (!formData.get('message')) {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill in all required fields");
      return;
    }

    setErrors({});
    toast.success("Message sent!", {
      description: "We'll get back to you within 24 hours.",
    });
    e.currentTarget.reset();
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-slate-950 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full -z-10" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-blue-400" aria-hidden="true" />
              </div>
              <span className="text-blue-400 font-semibold tracking-wide uppercase text-sm">Get in Touch</span>
            </div>
            
            <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
              Whether you have questions about our Enterprise plan, need a custom integration, or just want to say hi, our team is here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-1" aria-hidden="true">
                  <span className="text-blue-400 text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Fill out the form</h4>
                  <p className="text-sm text-gray-500">Tell us a bit about your project and needs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-1" aria-hidden="true">
                  <span className="text-blue-400 text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">We'll schedule a call</h4>
                  <p className="text-sm text-gray-500">Our experts will reach out within 24 hours.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-1" aria-hidden="true">
                  <span className="text-blue-400 text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Start building</h4>
                  <p className="text-sm text-gray-500">Get access to the platform and start shipping.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl">
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white">
                    First Name <span className="text-red-400" aria-label="required">*</span>
                  </Label>
                  <Input 
                    id="firstName" 
                    name="firstName"
                    placeholder="John" 
                    className="bg-slate-950/50 border-white/10 text-white" 
                    required
                    aria-required="true"
                    aria-invalid={errors.firstName ? "true" : "false"}
                    aria-describedby={errors.firstName ? "firstName-error" : undefined}
                  />
                  {errors.firstName && (
                    <p id="firstName-error" className="text-sm text-red-400" role="alert">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white">Last Name</Label>
                  <Input 
                    id="lastName" 
                    name="lastName"
                    placeholder="Doe" 
                    className="bg-slate-950/50 border-white/10 text-white" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email <span className="text-red-400" aria-label="required">*</span>
                </Label>
                <Input 
                  id="email" 
                  name="email"
                  type="email" 
                  placeholder="john@company.com" 
                  className="bg-slate-950/50 border-white/10 text-white"
                  required
                  aria-required="true"
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-red-400" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Message <span className="text-red-400" aria-label="required">*</span>
                </Label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..." 
                  className="bg-slate-950/50 border-white/10 text-white min-h-[120px]" 
                  required
                  aria-required="true"
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-sm text-red-400" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white h-12 rounded-xl text-lg font-medium shadow-lg shadow-blue-500/20"
              >
                Send Message
                <Send className="ml-2 w-4 h-4" aria-hidden="true" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
