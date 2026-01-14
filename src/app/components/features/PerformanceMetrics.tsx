import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Zap, Search, MousePointer2 } from 'lucide-react';

const performanceData = [
  { name: 'Jan', speed: 85, competitors: 65 },
  { name: 'Feb', speed: 88, competitors: 64 },
  { name: 'Mar', speed: 92, competitors: 66 },
  { name: 'Apr', speed: 95, competitors: 62 },
  { name: 'May', speed: 98, competitors: 65 },
  { name: 'Jun', speed: 100, competitors: 63 },
];

const metricCards = [
  {
    title: 'LCP',
    value: '0.8s',
    label: 'Largest Contentful Paint',
    icon: Zap,
    color: 'text-green-400',
    bg: 'bg-green-400/10'
  },
  {
    title: 'FID',
    value: '12ms',
    label: 'First Input Delay',
    icon: MousePointer2,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    title: 'CLS',
    value: '0.01',
    label: 'Cumulative Layout Shift',
    icon: Search,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10'
  }
];

export function PerformanceMetrics() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-green-900/30 text-green-400 border-green-500/20">
            Unmatched Performance
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Speed</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            FlashFusion sites load instantly. We optimize images, code, and assets automatically so you score 100/100 on Core Web Vitals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {metricCards.map((metric) => (
            <Card key={metric.title} className="bg-slate-900/50 border-white/10 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${metric.bg}`}>
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm font-medium">{metric.label}</h3>
                  <div className={`text-2xl font-bold ${metric.color}`}>{metric.title}</div>
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 w-[98%]" />
              </div>
            </Card>
          ))}
        </div>

        <Card className="bg-slate-900/50 border-white/10 p-6 backdrop-blur-sm">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-2">Performance Trends</h3>
            <p className="text-gray-400 text-sm">FlashFusion sites vs Traditional CMS</p>
          </div>
          
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorSpeed" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4ade80" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#4ade80" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorComp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} unit="%" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="speed" 
                  name="FlashFusion Score"
                  stroke="#4ade80" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorSpeed)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="competitors" 
                  name="Industry Avg"
                  stroke="#94a3b8" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  fillOpacity={1} 
                  fill="url(#colorComp)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </section>
  );
}
