import React from 'react';
import { Button } from '../ui/button';
import { ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600/5 blur-[150px] pointer-events-none" />
      
      <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-800 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Page not found</h2>
      <p className="text-gray-400 max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      <Button 
        className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
        onClick={() => window.location.href = '/'}
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Button>
    </div>
  );
}
