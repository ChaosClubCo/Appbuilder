import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { Check } from 'lucide-react';

interface FeatureData {
  title: string;
  details: {
    heading: string;
    subtitle: string;
    bullets: string[];
  };
  icon: React.ReactNode;
}

export function FeatureDetails({ 
  isOpen, 
  onClose, 
  feature 
}: { 
  isOpen: boolean; 
  onClose: () => void;
  feature: FeatureData | null;
}) {
  if (!feature) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-slate-950 border-white/10 text-white">
        <DialogHeader>
          <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-4">
            {feature.icon}
          </div>
          <DialogTitle className="text-2xl font-bold">{feature.details.heading}</DialogTitle>
          <DialogDescription className="text-gray-400 text-base">
            {feature.details.subtitle}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-3 mt-4">
          {feature.details.bullets.map((bullet, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900 border border-white/5">
              <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-gray-300 leading-relaxed">{bullet}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
