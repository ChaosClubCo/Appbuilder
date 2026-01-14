import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { Zap, Code, Shield } from 'lucide-react';

// This is a placeholder for a detailed view of a feature
// In a real app, this might be dynamic based on the feature clicked.
export function FeatureDetails({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-slate-950 border-white/10 text-white">
        <DialogHeader>
          <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4 text-blue-400">
            <Zap className="w-6 h-6" />
          </div>
          <DialogTitle className="text-2xl font-bold">Fast Performance Engine</DialogTitle>
          <DialogDescription className="text-gray-400 text-base">
            Our core engine is built on Rust, ensuring millisecond latency for all your AI generations.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          <div className="p-4 rounded-xl bg-slate-900 border border-white/5">
            <h4 className="font-semibold mb-2 flex items-center gap-2"><Code className="w-4 h-4 text-purple-400" /> Zero-Overhead Runtime</h4>
            <p className="text-sm text-gray-400">
              The compiled code carries no extra runtime weight, meaning your applications start fast and stay fast.
            </p>
          </div>
          
          <div className="p-4 rounded-xl bg-slate-900 border border-white/5">
            <h4 className="font-semibold mb-2 flex items-center gap-2"><Shield className="w-4 h-4 text-green-400" /> Edge Caching</h4>
            <p className="text-sm text-gray-400">
              Assets are automatically distributed to the edge, reducing TTFB (Time to First Byte) globally.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
