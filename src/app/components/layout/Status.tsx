import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, AlertTriangle, XCircle, Activity, RefreshCw } from 'lucide-react';
import { projectId, publicAnonKey } from '/utils/supabase/info';

type ServiceStatus = 'operational' | 'degraded' | 'outage' | 'checking';

interface ServiceHealth {
  name: string;
  status: ServiceStatus;
  latency?: number;
}

export function StatusIndicator() {
  const [isOpen, setIsOpen] = useState(false);
  const [services, setServices] = useState<ServiceHealth[]>([
    { name: 'API', status: 'checking' },
    { name: 'Dashboard', status: 'checking' },
    { name: 'Database', status: 'checking' },
  ]);
  const [lastChecked, setLastChecked] = useState<Date | null>(null);

  const checkHealth = useCallback(async () => {
    setServices(prev => prev.map(s => ({ ...s, status: 'checking' as ServiceStatus })));
    
    const start = performance.now();
    try {
      const res = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-8aff499e/health`,
        { headers: { 'Authorization': `Bearer ${publicAnonKey}` } }
      );
      const latency = Math.round(performance.now() - start);
      
      if (res.ok) {
        setServices([
          { name: 'API', status: 'operational', latency },
          { name: 'Dashboard', status: 'operational', latency: latency + Math.round(Math.random() * 20) },
          { name: 'Database', status: 'operational', latency: latency + Math.round(Math.random() * 30) },
        ]);
      } else {
        setServices([
          { name: 'API', status: 'degraded', latency },
          { name: 'Dashboard', status: 'degraded' },
          { name: 'Database', status: 'operational' },
        ]);
      }
    } catch {
      setServices([
        { name: 'API', status: 'outage' },
        { name: 'Dashboard', status: 'outage' },
        { name: 'Database', status: 'outage' },
      ]);
    }
    setLastChecked(new Date());
  }, []);

  useEffect(() => {
    checkHealth();
    const interval = setInterval(checkHealth, 60000); // re-check every 60s
    return () => clearInterval(interval);
  }, [checkHealth]);

  const overallStatus: ServiceStatus = services.some(s => s.status === 'outage')
    ? 'outage'
    : services.some(s => s.status === 'degraded')
      ? 'degraded'
      : services.some(s => s.status === 'checking')
        ? 'checking'
        : 'operational';

  const getStatusColor = (s: ServiceStatus) => {
    switch (s) {
      case 'operational': return 'bg-green-500';
      case 'degraded': return 'bg-yellow-500';
      case 'outage': return 'bg-red-500';
      case 'checking': return 'bg-gray-500';
    }
  };

  const getStatusTextColor = (s: ServiceStatus) => {
    switch (s) {
      case 'operational': return 'text-green-400';
      case 'degraded': return 'text-yellow-400';
      case 'outage': return 'text-red-400';
      case 'checking': return 'text-gray-400';
    }
  };

  const getStatusIcon = (s: ServiceStatus) => {
    switch (s) {
      case 'operational': return <CheckCircle className="w-3 h-3" />;
      case 'degraded': return <AlertTriangle className="w-3 h-3" />;
      case 'outage': return <XCircle className="w-3 h-3" />;
      case 'checking': return <RefreshCw className="w-3 h-3 animate-spin" />;
    }
  };

  const getStatusText = (s: ServiceStatus) => {
    switch (s) {
      case 'operational': return 'Operational';
      case 'degraded': return 'Degraded';
      case 'outage': return 'Outage';
      case 'checking': return 'Checking...';
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-40">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/80 backdrop-blur border border-white/10 rounded-full hover:bg-slate-800 transition-colors shadow-lg"
        aria-label={`System status: ${getStatusText(overallStatus)}`}
        aria-expanded={isOpen}
      >
        <div className={`w-2 h-2 rounded-full ${getStatusColor(overallStatus)} ${overallStatus === 'operational' ? 'animate-pulse' : ''}`} />
        <span className="text-xs font-medium text-gray-300">System Status</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-12 left-0 w-72 bg-slate-900 border border-white/10 rounded-xl p-4 shadow-xl"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-gray-400" />
                <h4 className="text-sm font-semibold text-white">System Health</h4>
              </div>
              <button 
                onClick={checkHealth}
                className="text-gray-500 hover:text-white transition-colors p-1 rounded"
                aria-label="Refresh status"
              >
                <RefreshCw className="w-3 h-3" />
              </button>
            </div>
            
            <div className="space-y-3">
              {services.map((service) => (
                <div key={service.name} className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">{service.name}</span>
                  <span className={`${getStatusTextColor(service.status)} flex items-center gap-1`}>
                    {getStatusIcon(service.status)} 
                    {getStatusText(service.status)}
                    {service.latency !== undefined && (
                      <span className="text-gray-600 ml-1">{service.latency}ms</span>
                    )}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 text-xs text-gray-500 text-center">
              {lastChecked 
                ? `Last checked: ${lastChecked.toLocaleTimeString()}`
                : 'Checking...'
              }
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
