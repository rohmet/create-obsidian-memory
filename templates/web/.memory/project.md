---
last_updated: YYYY-MM-DD
---

# Project Overview

## Deskripsi
[Deskripsi panjang project. Apa yang dibangun, konteks bisnis/teknis, target user, masalah yang diselesaikan.]

## Goals / Tujuan
- [Goal 1]
- [Goal 2]
- [Goal 3]

## Target User
[Siapa yang akan menggunakan aplikasi ini? Seberapa tech-savvy mereka?]

## Tech Stack Detail

### Frontend
- **Framework:** [Next.js 15 / React 18 / Vue 3 / dll]
- **Styling:** [Tailwind CSS / Vanilla CSS / dll]
- **State Management:** [Zustand / Redux / Context API / dll]
- **HTTP Client:** [Fetch / Axios / SWR / TanStack Query]

### Backend
- **Runtime:** [Node.js / Python / dll]
- **Framework:** [Next.js API Routes / Express / FastAPI / dll]
- **API Style:** [REST / GraphQL / tRPC]

### Database
- **Provider:** [Supabase / PlanetScale / MongoDB Atlas / dll]
- **ORM/SDK:** [Prisma / Drizzle / Supabase JS / dll]
- **Schema:** lihat `file-map.md` → Database Schema

### AI / LLM
- **Provider:** [Google AI / OpenAI / Anthropic / dll]
- **Model:** [gemini-1.5-flash / gpt-4o / claude-3-5-sonnet / dll]
- **SDK:** [Google AI SDK / OpenAI SDK / dll]

### External Services
| Service | Kegunaan |
|---|---|
| [Service name] | [untuk apa] |

## Environment Setup

### Prerequisites
- Node.js >= [versi]
- [Tool lain yang dibutuhkan]

### Environment Variables
```env
# Database
DATABASE_URL=

# AI
GOOGLE_AI_API_KEY=

# Auth
NEXTAUTH_SECRET=
NEXTAUTH_URL=

# [Lainnya]
```

### Setup Commands
```bash
git clone [repo-url]
cd [project-name]
npm install
cp .env.example .env.local
# isi .env.local
npm run dev
```

## Deployment
- **Platform:** [Vercel / Railway / Fly.io / dll]
- **URL Production:** [url jika sudah deploy]
- **Branch Production:** [main / production]

## Catatan Penting
- [Hal penting yang perlu diketahui developer baru]
- [Gotcha atau quirk yang perlu dihindari]
