import React, { useState, useEffect } from 'react';
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "../ui/command";
import { Calculator, Calendar, CreditCard, Settings, User, Rocket, MessageSquare, Zap } from "lucide-react";

export function Search() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (callback: () => void) => {
    setOpen(false);
    callback();
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm text-gray-400 bg-slate-900 border border-white/10 rounded-md hover:border-white/20 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Open search dialog (Cmd+K)"
      >
        <span className="text-xs">Search...</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-slate-950 px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>
      
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." className="text-white" />
        <CommandList className="bg-slate-950 text-gray-300">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => runCommand(() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }))} className="data-[selected='true']:bg-blue-600/20 data-[selected='true']:text-white">
              <Zap className="mr-2 h-4 w-4" />
              <span>Features</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }))} className="data-[selected='true']:bg-blue-600/20 data-[selected='true']:text-white">
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Pricing</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }))} className="data-[selected='true']:bg-blue-600/20 data-[selected='true']:text-white">
              <Rocket className="mr-2 h-4 w-4" />
              <span>How it Works</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => document.getElementById('playground')?.scrollIntoView({ behavior: 'smooth' }))} className="data-[selected='true']:bg-blue-600/20 data-[selected='true']:text-white">
              <Calendar className="mr-2 h-4 w-4" />
              <span>Interactive Playground</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator className="bg-white/10" />
          <CommandGroup heading="Actions">
            <CommandItem onSelect={() => runCommand(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }))} className="data-[selected='true']:bg-blue-600/20 data-[selected='true']:text-white">
              <MessageSquare className="mr-2 h-4 w-4" />
              <span>Contact Support</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => window.scrollTo({ top: 0, behavior: 'smooth' }))} className="data-[selected='true']:bg-blue-600/20 data-[selected='true']:text-white">
              <User className="mr-2 h-4 w-4" />
              <span>Start Free Trial</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}