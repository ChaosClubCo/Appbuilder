import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "../ui/dialog";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  Youtube,
  Sparkles,
  Loader2,
  SkipForward,
  RotateCcw,
  Settings,
  X,
  Monitor,
  Wand2,
  Video,
  Music,
  Image as ImageIcon,
  Send,
  CheckCircle2,
  Clock,
  Zap,
} from 'lucide-react';
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Button } from '../ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

// ─── Types ───────────────────────────────────────────────────────────────────

type VideoSource = 'placeholder' | 'youtube' | 'gemini';

interface YouTubeConfig {
  videoId: string;
  autoplay?: boolean;
  muted?: boolean;
  controls?: boolean;
  loop?: boolean;
  start?: number;
  privacyEnhanced?: boolean;
}

interface GeminiPrompt {
  text: string;
  style: 'cinematic' | 'animated' | 'minimal' | 'documentary';
  duration: '15s' | '30s' | '60s';
  audio: 'none' | 'ambient' | 'narration' | 'music';
  status?: 'idle' | 'generating' | 'complete' | 'error';
}

// ─── Constants ───────────────────────────────────────────────────────────────

const DEFAULT_YOUTUBE_CONFIG: YouTubeConfig = {
  videoId: 'dQw4w9WgXcQ', // Replace with your actual demo video ID
  autoplay: true,
  muted: false,
  controls: true,
  loop: false,
  start: 0,
  privacyEnhanced: true,
};

const THUMBNAIL_URL = "https://images.unsplash.com/photo-1760553121416-0a5750251756?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwdGVjaG5vbG9neSUyMGRhc2hib2FyZCUyMGFic3RyYWN0fGVufDF8fHx8MTc3NTYzOTY5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const AI_THUMBNAIL_URL = "https://images.unsplash.com/photo-1717501219263-9aa2d6a768d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBuZXVyYWwlMjBuZXR3b3JrfGVufDF8fHx8MTc3NTYzOTY5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const CODE_THUMBNAIL_URL = "https://images.unsplash.com/photo-1753998943619-b9cd910887e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZWRpdG9yJTIwcHJvZ3JhbW1pbmclMjBkYXJrJTIwc2NyZWVufGVufDF8fHx8MTc3NTYzOTY5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const DEMO_CHAPTERS = [
  { time: '0:00', label: 'Introduction', thumbnail: THUMBNAIL_URL },
  { time: '0:45', label: 'AI Code Generation', thumbnail: CODE_THUMBNAIL_URL },
  { time: '1:30', label: 'Live Preview', thumbnail: AI_THUMBNAIL_URL },
  { time: '2:15', label: 'Deploy & Export', thumbnail: THUMBNAIL_URL },
];

const GEMINI_STYLE_PRESETS = [
  { id: 'cinematic' as const, label: 'Cinematic', icon: Video, description: 'Film-like quality with dramatic lighting' },
  { id: 'animated' as const, label: 'Animated', icon: Sparkles, description: 'Motion graphics and illustrations' },
  { id: 'minimal' as const, label: 'Minimal', icon: Monitor, description: 'Clean and simple product showcase' },
  { id: 'documentary' as const, label: 'Documentary', icon: ImageIcon, description: 'Realistic narrated walkthrough' },
];

// ─── Sub-Components ──────────────────────────────────────────────────────────

/** YouTube Facade - shows thumbnail, loads iframe on click (best practice for performance) */
function YouTubeFacade({
  config,
  onPlay,
  isPlaying,
}: {
  config: YouTubeConfig;
  onPlay: () => void;
  isPlaying: boolean;
}) {
  const embedDomain = config.privacyEnhanced
    ? 'www.youtube-nocookie.com'
    : 'www.youtube.com';

  const params = new URLSearchParams({
    autoplay: '1',
    mute: config.muted ? '1' : '0',
    controls: config.controls ? '1' : '0',
    loop: config.loop ? '1' : '0',
    rel: '0',
    modestbranding: '1',
    ...(config.start ? { start: String(config.start) } : {}),
  });

  if (!isPlaying) {
    return (
      <div className="relative w-full h-full cursor-pointer group" onClick={onPlay}>
        {/* YouTube thumbnail with facade pattern */}
        <ImageWithFallback
          src={`https://img.youtube.com/vi/${config.videoId}/maxresdefault.jpg`}
          alt="Video thumbnail - Click to play demo video"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-20 h-20 md:w-24 md:h-24 bg-red-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-red-600/30"
          >
            <Play className="w-10 h-10 text-white fill-white ml-1" aria-hidden="true" />
          </motion.div>
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-4 right-4 bg-black/80 text-white text-xs font-medium px-2 py-1 rounded">
          2:45
        </div>

        {/* YouTube branding */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <Youtube className="w-5 h-5 text-red-500" aria-hidden="true" />
          <span className="text-white text-sm font-medium drop-shadow-lg">Watch Demo</span>
        </div>
      </div>
    );
  }

  return (
    <iframe
      width="100%"
      height="100%"
      src={`https://${embedDomain}/embed/${config.videoId}?${params.toString()}`}
      title="FlashFusion Demo Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="absolute inset-0 w-full h-full"
      loading="lazy"
    />
  );
}

/** Placeholder video player with simulated controls */
function PlaceholderPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const controlsTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const togglePlay = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.6;
        });
      }, 100);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeout.current) clearTimeout(controlsTimeout.current);
    if (isPlaying) {
      controlsTimeout.current = setTimeout(() => setShowControls(false), 3000);
    }
  };

  const formatTime = (pct: number) => {
    const total = 165; // 2:45
    const current = Math.floor((pct / 100) * total);
    const min = Math.floor(current / 60);
    const sec = current % 60;
    return `${min}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      {/* Background visual */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={THUMBNAIL_URL}
          alt="Demo video placeholder"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-purple-950/80" />
      </div>

      {/* Animated content overlay when "playing" */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* Animated code lines simulation */}
            <div className="w-[80%] max-w-lg space-y-3">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20, width: 0 }}
                  animate={{ opacity: 1, x: 0, width: `${60 + Math.random() * 40}%` }}
                  transition={{ delay: i * 0.3 + (progress / 100) * i * 0.1, duration: 0.5 }}
                  className="h-3 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, rgba(6,182,212,${0.3 + i * 0.1}) 0%, rgba(139,92,246,${0.2 + i * 0.1}) 100%)`,
                  }}
                />
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="h-5 w-0.5 bg-cyan-400 ml-1 mt-2"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Center play button (when paused) */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <button
              onClick={togglePlay}
              className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              aria-label="Play demo video"
            >
              <Play className="w-8 h-8 text-white fill-white ml-1" aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chapter markers */}
      {!isPlaying && (
        <div className="absolute bottom-20 left-0 right-0 px-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {DEMO_CHAPTERS.map((chapter, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setProgress((idx / DEMO_CHAPTERS.length) * 100);
                  setIsPlaying(true);
                }}
                className="flex-shrink-0 flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 hover:bg-white/20 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label={`Jump to chapter: ${chapter.label} at ${chapter.time}`}
              >
                <span className="text-cyan-400 text-xs font-mono">{chapter.time}</span>
                <span className="text-white text-xs whitespace-nowrap">{chapter.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Video controls bar */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-12 pb-4 px-4"
          >
            {/* Progress bar */}
            <div className="relative w-full h-1.5 bg-white/20 rounded-full mb-3 cursor-pointer group/progress">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-lg opacity-0 group-hover/progress:opacity-100 transition-opacity"
                style={{ left: `calc(${Math.min(progress, 100)}% - 7px)` }}
              />
            </div>

            {/* Controls row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="text-white hover:text-cyan-400 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                </button>
                <button
                  onClick={() => { setProgress(0); setIsPlaying(false); }}
                  className="text-white/60 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                  aria-label="Restart"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setProgress(prev => Math.min(prev + 10, 100))}
                  className="text-white/60 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                  aria-label="Skip forward"
                >
                  <SkipForward className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-white/60 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="text-white/60 text-xs font-mono ml-1">
                  {formatTime(progress)} / 2:45
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="text-white/60 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                  aria-label="Settings"
                >
                  <Settings className="w-4 h-4" />
                </button>
                <button
                  className="text-white/60 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                  aria-label="Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Gemini AI Video Generation Panel */
function GeminiGenerator() {
  const [prompt, setPrompt] = useState<GeminiPrompt>({
    text: '',
    style: 'cinematic',
    duration: '30s',
    audio: 'ambient',
    status: 'idle',
  });
  const [generationLog, setGenerationLog] = useState<string[]>([]);

  const handleGenerate = useCallback(() => {
    if (!prompt.text.trim()) return;

    setPrompt(prev => ({ ...prev, status: 'generating' }));
    setGenerationLog([]);

    const steps = [
      'Analyzing prompt...',
      'Generating scene composition...',
      `Applying ${prompt.style} style filters...`,
      'Rendering video frames (0%)...',
      'Rendering video frames (25%)...',
      'Rendering video frames (50%)...',
      'Rendering video frames (75%)...',
      `Generating ${prompt.audio} audio track...`,
      'Compositing final video...',
      'Encoding to MP4...',
      'Generation complete!',
    ];

    steps.forEach((step, i) => {
      setTimeout(() => {
        setGenerationLog(prev => [...prev, step]);
        if (i === steps.length - 1) {
          setPrompt(prev => ({ ...prev, status: 'complete' }));
        }
      }, (i + 1) * 800);
    });
  }, [prompt.text, prompt.style, prompt.audio]);

  return (
    <div className="w-full h-full flex flex-col bg-slate-950">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-slate-900/80">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-white text-sm font-semibold">Gemini AI Video</h3>
            <p className="text-gray-400 text-xs">Generate demo videos with AI</p>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-xs">Ready</span>
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Prompt input */}
        <div>
          <label htmlFor="gemini-prompt" className="text-gray-300 text-xs font-medium block mb-1.5">
            Video Prompt
          </label>
          <div className="relative">
            <textarea
              id="gemini-prompt"
              value={prompt.text}
              onChange={(e) => setPrompt(prev => ({ ...prev, text: e.target.value }))}
              placeholder="Describe your demo video... e.g., 'A sleek product walkthrough showing FlashFusion generating a landing page from a text prompt, with smooth transitions and a dark UI theme'"
              className="w-full h-24 bg-slate-800/80 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
              aria-describedby="prompt-hint"
              disabled={prompt.status === 'generating'}
            />
            <p id="prompt-hint" className="text-gray-500 text-xs mt-1">
              Be specific about scenes, transitions, and visual style for best results.
            </p>
          </div>
        </div>

        {/* Style presets */}
        <div>
          <span className="text-gray-300 text-xs font-medium block mb-2">Visual Style</span>
          <div className="grid grid-cols-2 gap-2">
            {GEMINI_STYLE_PRESETS.map((style) => {
              const Icon = style.icon;
              return (
                <button
                  key={style.id}
                  onClick={() => setPrompt(prev => ({ ...prev, style: style.id }))}
                  className={`flex items-start gap-2.5 p-3 rounded-xl border transition-all text-left focus-visible:ring-2 focus-visible:ring-blue-400 ${
                    prompt.style === style.id
                      ? 'border-blue-500/50 bg-blue-500/10 text-white'
                      : 'border-white/10 bg-slate-800/50 text-gray-400 hover:bg-slate-800 hover:text-gray-200'
                  }`}
                  aria-pressed={prompt.style === style.id}
                  disabled={prompt.status === 'generating'}
                >
                  <Icon className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-xs font-medium block">{style.label}</span>
                    <span className="text-[10px] text-gray-500 leading-tight">{style.description}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Duration & Audio row */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="duration-select" className="text-gray-300 text-xs font-medium block mb-1.5">
              Duration
            </label>
            <select
              id="duration-select"
              value={prompt.duration}
              onChange={(e) => setPrompt(prev => ({ ...prev, duration: e.target.value as GeminiPrompt['duration'] }))}
              className="w-full bg-slate-800/80 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              disabled={prompt.status === 'generating'}
            >
              <option value="15s">15 seconds</option>
              <option value="30s">30 seconds</option>
              <option value="60s">60 seconds</option>
            </select>
          </div>
          <div>
            <label htmlFor="audio-select" className="text-gray-300 text-xs font-medium block mb-1.5">
              Audio Track
            </label>
            <select
              id="audio-select"
              value={prompt.audio}
              onChange={(e) => setPrompt(prev => ({ ...prev, audio: e.target.value as GeminiPrompt['audio'] }))}
              className="w-full bg-slate-800/80 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              disabled={prompt.status === 'generating'}
            >
              <option value="none">No Audio</option>
              <option value="ambient">Ambient</option>
              <option value="narration">AI Narration</option>
              <option value="music">Background Music</option>
            </select>
          </div>
        </div>

        {/* Generation log */}
        <AnimatePresence>
          {generationLog.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="bg-slate-900/80 border border-white/10 rounded-xl p-3 space-y-1.5 max-h-40 overflow-y-auto"
            >
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                <span className="text-amber-400 text-xs font-medium">Generation Progress</span>
              </div>
              {generationLog.map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2"
                >
                  {i === generationLog.length - 1 && prompt.status === 'generating' ? (
                    <Loader2 className="w-3 h-3 text-blue-400 animate-spin shrink-0" aria-hidden="true" />
                  ) : (
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" aria-hidden="true" />
                  )}
                  <span className="text-gray-400 text-xs font-mono">{log}</span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Generated preview */}
        <AnimatePresence>
          {prompt.status === 'complete' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl overflow-hidden border border-emerald-500/30"
            >
              <div className="relative aspect-video">
                <ImageWithFallback
                  src={AI_THUMBNAIL_URL}
                  alt="AI-generated video preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-emerald-500/20 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-2">
                      <Play className="w-6 h-6 text-emerald-400 fill-emerald-400 ml-0.5" aria-hidden="true" />
                    </div>
                    <p className="text-white text-sm font-medium">AI Video Ready</p>
                    <p className="text-gray-400 text-xs mt-1">{prompt.duration} | {prompt.style} | {prompt.audio}</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-900/90 p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  <span className="text-emerald-400 text-xs font-medium">Generation Complete</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/20 bg-white/5 text-white hover:bg-white/15 hover:text-white text-xs h-7"
                    onClick={() => {
                      setPrompt(prev => ({ ...prev, status: 'idle' }));
                      setGenerationLog([]);
                    }}
                  >
                    <RotateCcw className="w-3 h-3 mr-1" aria-hidden="true" />
                    Regenerate
                  </Button>
                  <Button
                    size="sm"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs h-7"
                  >
                    Use Video
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Generate button */}
      <div className="p-4 border-t border-white/10 bg-slate-900/50">
        <Button
          onClick={handleGenerate}
          disabled={!prompt.text.trim() || prompt.status === 'generating'}
          className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white h-11 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {prompt.status === 'generating' ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
              Generating Video...
            </>
          ) : (
            <>
              <Wand2 className="w-4 h-4 mr-2" aria-hidden="true" />
              Generate with Gemini AI
            </>
          )}
        </Button>
        <p className="text-center text-gray-500 text-[10px] mt-2">
          Powered by Google Gemini 2.0 | Video generation may take 30-60 seconds
        </p>
      </div>
    </div>
  );
}

// ─── Main VideoModal Component ───────────────────────────────────────────────

export function VideoModal({ children }: { children: React.ReactNode }) {
  const [activeSource, setActiveSource] = useState<VideoSource>('placeholder');
  const [ytPlaying, setYtPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Reset state when dialog closes
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setYtPlaying(false);
      setActiveSource('placeholder');
    }
  };

  const sources: { id: VideoSource; label: string; icon: React.ReactNode; description: string }[] = [
    { id: 'placeholder', label: 'Demo Player', icon: <Play className="w-4 h-4" />, description: 'Interactive preview' },
    { id: 'youtube', label: 'YouTube', icon: <Youtube className="w-4 h-4" />, description: 'Embedded video' },
    { id: 'gemini', label: 'Gemini AI', icon: <Sparkles className="w-4 h-4" />, description: 'Generate with AI' },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent
        hideDescription
        className="sm:max-w-[900px] lg:max-w-[1000px] bg-slate-950 border-white/10 p-0 overflow-hidden rounded-2xl"
      >
        <VisuallyHidden.Root>
          <DialogTitle>FlashFusion Demo Video</DialogTitle>
        </VisuallyHidden.Root>

        {/* Source tabs */}
        <div className="flex items-center gap-1 p-2 bg-slate-900/80 border-b border-white/10" role="tablist" aria-label="Video source">
          {sources.map((source) => (
            <button
              key={source.id}
              role="tab"
              aria-selected={activeSource === source.id}
              aria-controls={`panel-${source.id}`}
              onClick={() => {
                setActiveSource(source.id);
                setYtPlaying(false);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                activeSource === source.id
                  ? 'bg-white/10 text-white'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
              }`}
            >
              {source.icon}
              <span className="hidden sm:inline">{source.label}</span>
              <span className="sm:hidden">{source.label.slice(0, 5)}</span>
            </button>
          ))}

          {/* Settings gear on the right */}
          <div className="ml-auto flex items-center gap-2 pr-2">
            {activeSource === 'youtube' && (
              <span className="text-gray-500 text-xs hidden md:inline">youtube-nocookie.com (privacy enhanced)</span>
            )}
          </div>
        </div>

        {/* Video panel */}
        <div className={`relative ${activeSource === 'gemini' ? '' : 'aspect-video'} w-full bg-slate-950`}>
          {/* Placeholder player */}
          <div
            id="panel-placeholder"
            role="tabpanel"
            className={activeSource === 'placeholder' ? 'w-full h-full' : 'hidden'}
          >
            {activeSource === 'placeholder' && <PlaceholderPlayer />}
          </div>

          {/* YouTube embed with facade */}
          <div
            id="panel-youtube"
            role="tabpanel"
            className={activeSource === 'youtube' ? 'w-full h-full' : 'hidden'}
          >
            {activeSource === 'youtube' && (
              <YouTubeFacade
                config={DEFAULT_YOUTUBE_CONFIG}
                onPlay={() => setYtPlaying(true)}
                isPlaying={ytPlaying}
              />
            )}
          </div>

          {/* Gemini AI Generator */}
          <div
            id="panel-gemini"
            role="tabpanel"
            className={activeSource === 'gemini' ? 'w-full max-h-[70vh] overflow-hidden' : 'hidden'}
          >
            {activeSource === 'gemini' && <GeminiGenerator />}
          </div>
        </div>

        {/* Bottom info bar (non-gemini) */}
        {activeSource !== 'gemini' && (
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gray-400" aria-hidden="true" />
                <span className="text-gray-400 text-xs">2:45</span>
              </div>
              <span className="text-gray-600 text-xs">|</span>
              <span className="text-gray-400 text-xs">FlashFusion Platform Demo</span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/15 hover:text-white text-xs h-7"
                onClick={() => setActiveSource('gemini')}
              >
                <Sparkles className="w-3 h-3 mr-1" aria-hidden="true" />
                Generate with AI
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
