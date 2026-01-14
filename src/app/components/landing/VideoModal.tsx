import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "../ui/dialog";
import { Play } from 'lucide-react';
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

export function VideoModal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent 
        className="sm:max-w-[800px] bg-slate-950 border-white/10 p-0 overflow-hidden rounded-2xl"
        aria-describedby={undefined}
      >
        <VisuallyHidden.Root>
          <DialogTitle>Demo Video</DialogTitle>
        </VisuallyHidden.Root>
        <div className="aspect-video w-full bg-slate-900 relative group flex items-center justify-center">
            {/* Placeholder for actual video embed */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
            
            <div className="text-center z-10">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform cursor-pointer">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
                <p className="text-gray-400">Demo Video Placeholder</p>
                <p className="text-xs text-gray-500 mt-2">Replace with YouTube/Vimeo Embed</p>
            </div>

            {/* Example iframe implementation (commented out) */}
            {/* 
            <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="Demo Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            ></iframe> 
            */}
        </div>
      </DialogContent>
    </Dialog>
  );
}
