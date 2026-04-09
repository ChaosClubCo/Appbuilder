import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-8aff499e/health", (c) => {
  return c.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ─── Contact Form ────────────────────────────────────────────────────────────

app.post("/make-server-8aff499e/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { firstName, lastName, email, message } = body;

    if (!firstName || !email || !message) {
      return c.json({ error: "Missing required fields: firstName, email, message" }, 400);
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return c.json({ error: "Invalid email format" }, 400);
    }

    const id = `contact_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    
    await kv.set(id, JSON.stringify({
      firstName,
      lastName: lastName || '',
      email,
      message,
      createdAt: new Date().toISOString(),
      status: 'new',
    }));

    console.log(`Contact form submitted: ${id} from ${email}`);
    
    return c.json({ 
      success: true, 
      id, 
      message: "Your message has been received. We'll respond within 24 hours." 
    });
  } catch (error) {
    console.log(`Error processing contact form submission: ${error}`);
    return c.json({ error: `Failed to process contact submission: ${error}` }, 500);
  }
});

// ─── Newsletter ──────────────────────────────────────────────────────────────

app.post("/make-server-8aff499e/newsletter", async (c) => {
  try {
    const body = await c.req.json();
    const { email } = body;

    if (!email) {
      return c.json({ error: "Email is required" }, 400);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return c.json({ error: "Invalid email format" }, 400);
    }

    const key = `newsletter_${email.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;

    // Check if already subscribed
    const existing = await kv.get(key);
    if (existing) {
      return c.json({ 
        success: true, 
        message: "You're already subscribed!", 
        alreadySubscribed: true 
      });
    }

    await kv.set(key, JSON.stringify({
      email: email.toLowerCase(),
      subscribedAt: new Date().toISOString(),
    }));

    // Increment subscriber count
    const countRaw = await kv.get('newsletter_count');
    const count = countRaw ? parseInt(String(countRaw), 10) : 0;
    await kv.set('newsletter_count', String(count + 1));

    console.log(`Newsletter subscription: ${email}`);

    return c.json({ 
      success: true, 
      message: "Welcome aboard! You've been added to the waiting list." 
    });
  } catch (error) {
    console.log(`Error processing newsletter subscription: ${error}`);
    return c.json({ error: `Failed to process newsletter subscription: ${error}` }, 500);
  }
});

app.get("/make-server-8aff499e/newsletter/count", async (c) => {
  try {
    const countRaw = await kv.get('newsletter_count');
    const count = countRaw ? parseInt(String(countRaw), 10) : 0;
    return c.json({ count });
  } catch (error) {
    console.log(`Error fetching newsletter count: ${error}`);
    return c.json({ error: `Failed to fetch subscriber count: ${error}` }, 500);
  }
});

// ─── AI Video Script ─────────────────────────────────────────────────────────

app.post("/make-server-8aff499e/ai/video-script", async (c) => {
  try {
    const body = await c.req.json();
    const { prompt, style, duration, audio } = body;

    if (!prompt) {
      return c.json({ error: "Prompt is required" }, 400);
    }

    const scriptId = `script_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

    // Generate a structured script based on the prompt parameters
    const script = {
      id: scriptId,
      prompt,
      style,
      duration,
      audio,
      scenes: generateScenes(prompt, style, duration),
      createdAt: new Date().toISOString(),
    };

    await kv.set(scriptId, JSON.stringify(script));

    console.log(`AI video script generated: ${scriptId}`);

    return c.json({ success: true, script, scriptId });
  } catch (error) {
    console.log(`Error generating AI video script: ${error}`);
    return c.json({ error: `Failed to generate video script: ${error}` }, 500);
  }
});

function generateScenes(prompt: string, style: string, duration: string): any[] {
  const durationSec = parseInt(duration) || 30;
  const sceneCount = Math.max(3, Math.ceil(durationSec / 10));
  const sceneDuration = durationSec / sceneCount;

  const promptLower = prompt.toLowerCase();
  const scenes = [];

  for (let i = 0; i < sceneCount; i++) {
    scenes.push({
      index: i,
      durationSeconds: sceneDuration,
      description: `Scene ${i + 1}: ${getSceneDescription(i, sceneCount, promptLower, style)}`,
      transition: i === 0 ? 'fade-in' : (i === sceneCount - 1 ? 'fade-out' : 'cross-dissolve'),
      style,
    });
  }

  return scenes;
}

function getSceneDescription(index: number, total: number, prompt: string, style: string): string {
  if (index === 0) return `Opening shot establishing the ${style} mood. ${prompt.slice(0, 60)}...`;
  if (index === total - 1) return `Closing sequence with call-to-action and brand signature.`;
  if (prompt.includes('product') || prompt.includes('walkthrough'))
    return `Product feature showcase - highlighting key functionality with ${style} transitions.`;
  if (prompt.includes('landing') || prompt.includes('page'))
    return `UI demonstration showing the generated interface with smooth scroll animations.`;
  return `Mid-section content development with dynamic ${style} visual elements.`;
}

// ─── Analytics Events ────────────────────────────────────────────────────────

app.post("/make-server-8aff499e/analytics/event", async (c) => {
  try {
    const body = await c.req.json();
    const { event, data } = body;

    if (!event) {
      return c.json({ error: "Event name is required" }, 400);
    }

    const eventId = `event_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

    await kv.set(eventId, JSON.stringify({
      event,
      data: data || {},
      timestamp: new Date().toISOString(),
    }));

    return c.json({ success: true });
  } catch (error) {
    console.log(`Error tracking analytics event: ${error}`);
    return c.json({ error: `Failed to track event: ${error}` }, 500);
  }
});

Deno.serve(app.fetch);
