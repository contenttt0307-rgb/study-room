// 讓安卓 Chrome 可以「安裝」這個入口頁；不快取任何東西
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', () => {});
