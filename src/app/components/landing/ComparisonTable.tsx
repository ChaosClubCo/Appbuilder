import React from 'react';
import { Check, X, Minus } from 'lucide-react';
import { cn } from '../ui/utils';

export function ComparisonTable() {
  return (
    <section className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-blue-500">FlashFusion</span>?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See how we stack up against traditional development methods and competitors.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[800px] border border-white/10 rounded-2xl bg-slate-950/50 backdrop-blur-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-slate-900/50">
                  <th className="p-6 text-gray-400 font-medium w-1/4">Features</th>
                  <th className="p-6 text-white font-bold text-xl w-1/4 bg-blue-500/5 border-x border-white/5">
                    FlashFusion
                  </th>
                  <th className="p-6 text-gray-400 font-medium w-1/4">Traditional Dev</th>
                  <th className="p-6 text-gray-400 font-medium w-1/4">No-Code Tools</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { feature: 'Code Quality', us: 'Production-Ready', trad: 'High (Manual)', noCode: 'Low / Locked' },
                  { feature: 'Development Speed', us: 'Instant (AI)', trad: 'Weeks/Months', noCode: 'Fast' },
                  { feature: 'Customizability', us: 'Unlimited (Code)', trad: 'Unlimited', noCode: 'Limited' },
                  { feature: 'Hosting Freedom', us: 'Export Anywhere', trad: 'Anywhere', noCode: 'Platform Lock-in' },
                  { feature: 'Scalability', us: 'Enterprise Grade', trad: 'High', noCode: 'Medium' },
                  { feature: 'Design Fidelity', us: 'Pixel Perfect', trad: 'Depends on Dev', noCode: 'Template Based' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="p-6 text-white font-medium">{row.feature}</td>
                    <td className="p-6 text-blue-400 font-semibold bg-blue-500/5 border-x border-white/5 flex items-center gap-2">
                       <Check className="w-5 h-5" /> {row.us}
                    </td>
                    <td className="p-6 text-gray-400">{row.trad}</td>
                    <td className="p-6 text-gray-400">{row.noCode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
