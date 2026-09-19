// univerDM Multi-Cloud Edge Router (Cloudflare Worker)
// Implements 5-Pillar Edge Topology: Cloudflare Gateway -> Vercel / Netlify / EdgeOne

const BACKENDS = [
  {
    name: "vercel",
    url: "https://vercel.univerdm.tech",
    weight: 5,
    region: "GLOBAL",
  },
  {
    name: "netlify",
    url: "https://netlify.univerdm.tech",
    weight: 3,
    region: "Asia/Africa/LatAm",
  },
  {
    name: "qcloud",
    url: "https://qcloud.univerdm.tech",
    weight: 3,
    region: "APAC",
  },
];

const TIMEOUT_MS = 3000;
const CACHE_STATIC = true;
const CACHE_HTML = true;
const HTML_CACHE_TTL = 600;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const backend = BACKENDS[0];
    const targetUrl = new URL(url.pathname + url.search, backend.url);
    
    try {
      const response = await fetch(targetUrl.toString(), {
        method: request.method,
        headers: request.headers,
        body: request.method !== "GET" && request.method !== "HEAD" ? request.body : undefined,
      });
      return response;
    } catch (err) {
      return new Response("Service Unavailable", { status: 503 });
    }
  },
};
