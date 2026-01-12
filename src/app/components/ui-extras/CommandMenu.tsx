import React from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../ui/command";
import { 
  Calculator, 
  Calendar, 
  CreditCard, 
  Settings, 
  Smile, 
  User,
  Search,
  Zap,
  Layout,
  MessageSquare
} from "lucide-react";
import { useEffect, useState } from "react";

export function CommandMenu() {
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

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <>
      <div 
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 bg-slate-900/50 hover:bg-slate-800/50 transition-colors cursor-pointer text-sm text-gray-500 hover:text-gray-300 ml-4"
      >
        <Search className="w-4 h-4" />
        <span>Search...</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-white/10 bg-slate-800 px-1.5 font-mono text-[10px] font-medium text-gray-400 opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="bg-slate-950 text-gray-300 border-white/10">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => runCommand(() => window.location.href = '#features')}>
              <Zap className="mr-2 h-4 w-4" />
              <span>Features</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => window.location.href = '#pricing')}>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Pricing</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => window.location.href = '#how-it-works')}>
              <Layout className="mr-2 h-4 w-4" />
              <span>How it works</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Support">
            <CommandItem onSelect={() => runCommand(() => window.location.href = '#contact')}>
              <MessageSquare className="mr-2 h-4 w-4" />
              <span>Contact Support</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
