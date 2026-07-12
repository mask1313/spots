# Global Football Press Translator — صحافة كرة القدم العالمية المترجمة

## Original Problem
Single self-contained HTML app (HTML + Tailwind CDN + vanilla JS). Arabic RTL, dark sports theme.
Fetch football RSS from MARCA, L'Équipe, Gazzetta, Sky Sports via rss2json (free). Auto-translate
titles + short descriptions to Arabic via MyMemory (free) immediately on load. Skeleton loader,
smart Arabic search, bookmarks (localStorage), share-to-clipboard, per-source accent colors.

## Architecture
- Pure single-file app at /app/frontend/public/index.html (served at root).
- React intentionally NOT mounted (/app/frontend/src/index.js is a no-op guard).
- No backend / MongoDB. All logic client-side.
- APIs (no keys): rss2json.com (RSS->JSON), api.mymemory.translated.net (translation).

## User Choices
Single HTML file; free-tier APIs; auto-theme per source; MARCA default.

## Implemented (2025-12)
- 4 newspaper tabs w/ per-source accent (Marca #e11d2a, L'Équipe #2563eb, Gazzetta #ec4899, Sky #14b8a6).
- Immediate auto-translation (concurrency-limited pool, localStorage cache, graceful fallback).
- Skeleton loader + live status bar; refresh button.
- Smart Arabic search (matches Arabic + original title/desc).
- Bookmarks with count badge, dedicated view, localStorage persistence.
- Share button (Web Share API / clipboard fallback) + toasts.
- Fully responsive RTL, Cairo/Tajawal fonts, glassmorphism, grain overlay, micro-animations.
- L'Équipe uses working football feed: dwh.lequipe.fr/api/edito/rss?path=/Football/ (original xml.lequipe.fr feed rejected by rss2json).

## Status: MVP complete, tested 100% (test_reports/iteration_1.json).

## Backlog (P1/P2)
- P1: rss2json free tier rate limits; consider server proxy or multiple CORS fallbacks.
- P1: MyMemory daily quota; add caching TTL/size cap.
- P2: Tailwind build-time (remove CDN) for production hardening.
- P2: Article images/thumbnails, category filters, dark/light toggle, share as image card.
