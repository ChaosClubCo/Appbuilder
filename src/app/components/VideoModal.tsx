import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Play } from 'lucide-react';

export function VideoModal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-5xl bg-black border-white/10 p-0 overflow-hidden aspect-video">
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
          title="Product Demo" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="w-full h-full"
        />
      </DialogContent>
    </Dialog>
  );
}
