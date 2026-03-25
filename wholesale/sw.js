/**
 * 轻量 Service Worker：不缓存接口与页面，避免「假离线」。
 * 用于满足常见浏览器对「可安装 PWA」的检测（manifest + SW + HTTPS）。
 * 真正离线能力可后续用 Workbox / vite-plugin-pwa 扩展。
 */
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
