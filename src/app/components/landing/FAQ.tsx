import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    question: "How does the AI code generation work?",
    answer: "Our advanced RAG pipeline analyzes your Figma designs and translates them into production-ready React and Tailwind CSS code. It understands your design tokens, layout structure, and component hierarchy to generate pixel-perfect code."
  },
  {
    question: "Is the generated code optimized for performance?",
    answer: "Absolutely. We prioritize performance by default. The generated code includes image optimization, code splitting, and best practices for Core Web Vitals. It's not just a prototype; it's ready for deployment."
  },
  {
    question: "Can I integrate with my existing backend?",
    answer: "Yes! FlashFusion generates standard React code. You can easily connect it to any REST or GraphQL API, including Supabase, Firebase, or your own custom backend."
  },
  {
    question: "What about security and data privacy?",
    answer: "Security is paramount. Your design data is encrypted in transit and at rest. We are SOC2 compliant and never train our public models on your private intellectual property without explicit consent."
  },
  {
    question: "Do you offer enterprise support?",
    answer: "Yes, our Enterprise plan includes 24/7 dedicated support, custom model fine-tuning, and on-premise deployment options for organizations with strict compliance needs."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400">
            Everything you need to know about the platform.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-white/10 rounded-xl px-4 bg-slate-900/30 data-[state=open]:bg-slate-900/50 data-[state=open]:border-blue-500/30 transition-all"
            >
              <AccordionTrigger className="text-white hover:text-blue-400 hover:no-underline text-lg font-medium py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
