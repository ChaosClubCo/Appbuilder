import React from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '../lib/utils';

const features = [
  { name: 'Unlimited Projects', flashfusion: true, competitors: false },
  { name: 'AI Code Generation', flashfusion: true, competitors: 'Limited' },
  { name: 'Figma to React', flashfusion: true, competitors: true },
  { name: 'Production-Ready Code', flashfusion: true, competitors: false },
  { name: 'Integrated Backend', flashfusion: true, competitors: false },
  { name: 'Custom Design Tokens', flashfusion: true, competitors: true },
  { name: 'SEO Optimization', flashfusion: true, competitors: false },
  { name: 'One-click Deploy', flashfusion: true, competitors: true },
];

export function ComparisonTable() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why choose FlashFusion?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See how we stack up against traditional development methods and other tools.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left text-gray-500 font-medium w-1/3">Features</th>
                <th className="p-4 text-center w-1/3">
                  <div className="inline-block px-4 py-2 rounded-lg bg-blue-600/10 border border-blue-600/20 text-blue-400 font-bold">
                    FlashFusion
                  </div>
                </th>
                <th className="p-4 text-center text-gray-500 font-medium w-1/3">Other Tools</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {features.map((feature, index) => (
                <tr key={index} className="hover:bg-white/5 transition-colors">
                  <td className="p-4 text-gray-300 font-medium">{feature.name}</td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center">
                      {feature.flashfusion ? (
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <Check className="w-5 h-5 text-blue-400" />
                        </div>
                      ) : (
                        <X className="w-6 h-6 text-gray-600" />
                      )}
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center text-sm text-gray-500">
                      {feature.competitors === true ? (
                         <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                           <Check className="w-5 h-5 text-gray-400" />
                         </div>
                      ) : feature.competitors === false ? (
                        <X className="w-6 h-6 text-gray-600" />
                      ) : (
                        <span className="text-gray-500 bg-gray-900 px-2 py-1 rounded border border-white/5">{feature.competitors}</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
