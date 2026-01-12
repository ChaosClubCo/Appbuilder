import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";

export function PrivacyPolicy({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-slate-950 border-white/10 text-white max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
        </DialogHeader>
        <ScrollArea className="flex-1 pr-4">
            <div className="space-y-4 text-gray-400 text-sm">
                <p>Last updated: March 15, 2024</p>
                <h3 className="text-white font-semibold text-base">1. Introduction</h3>
                <p>
                    FlashFusion ("we", "our", or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
                </p>
                <h3 className="text-white font-semibold text-base">2. Information We Collect</h3>
                <p>
                    We collect information that you provide directly to us when you register for an account, 
                    create or modify your profile, set preferences, sign up for newsletters, or make purchases.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Account Information (Name, Email, Password)</li>
                    <li>Payment Information (via Stripe)</li>
                    <li>Design Data (Figma files processed by our system)</li>
                </ul>
                <h3 className="text-white font-semibold text-base">3. Use of Data</h3>
                <p>
                    We use the collected data to provide, maintain, and improve our services, 
                    process transactions, send you technical notices, and respond to your comments.
                </p>
                <h3 className="text-white font-semibold text-base">4. Data Security</h3>
                <p>
                    We implement appropriate technical and organizational measures to protect the security 
                    of your personal information. However, please note that no system is completely secure.
                </p>
                {/* Add more sections as needed */}
            </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}