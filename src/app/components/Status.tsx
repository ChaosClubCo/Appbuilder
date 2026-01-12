import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, AlertTriangle, XCircle, Activity } from 'lucide-react';

type Status = 'operational' | 'degraded' | 'outage';

export function StatusIndicator() {
  const [isOpen, setIsOpen] = useState(false);
  const status: Status = 'operational'; // In a real app, fetch this from status page API

  const getStatusColor = (s: Status) => {
    switch (s) {
      case 'operational': return 'bg-green-500';
      case 'degraded': return 'bg-yellow-500';
      case 'outage': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (s: Status) => {
    switch (s) {
      case 'operational': return 'All Systems Operational';
      case 'degraded': return 'Partial System Outage';
      case 'outage': return 'Major System Outage';
      default: return 'Unknown Status';
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-40">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/80 backdrop-blur border border-white/10 rounded-full hover:bg-slate-800 transition-colors shadow-lg"
      >
        <div className={`w-2 h-2 rounded-full ${getStatusColor(status)} animate-pulse`} />
        <span className="text-xs font-medium text-gray-300">System Status</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-12 left-0 w-64 bg-slate-900 border border-white/10 rounded-xl p-4 shadow-xl"
          >
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-4 h-4 text-gray-400" />
              <h4 className="text-sm font-semibold text-white">System Health</h4>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">API</span>
                <span className="text-green-400 flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Operational</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">Dashboard</span>
                <span className="text-green-400 flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Operational</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">Database</span>
                <span className="text-green-400 flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Operational</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 text-xs text-gray-500 text-center">
              Last updated: Just now
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
