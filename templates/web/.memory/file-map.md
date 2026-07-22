---
last_updated: YYYY-MM-DD
---

# File Map — Peta File Penting

> Gunakan file ini sebelum mencari file di project. AI cukup baca ini untuk tahu file mana yang relevan, tanpa scan semua folder.

---

## 📄 Config & Setup Files

| File | Kegunaan |
|---|---|
| `package.json` | Dependencies & scripts |
| `next.config.ts` | Next.js configuration |
| `.env.local` | Environment variables (tidak di-commit) |
| `.env.example` | Template environment variables |
| `tsconfig.json` | TypeScript config |
| `tailwind.config.ts` | Tailwind CSS config |

---

## 🖼️ Pages / Routes

| Route | File | Keterangan |
|---|---|---|
| `/` | `src/app/page.tsx` | Halaman utama |
| `/[route]` | `src/app/[route]/page.tsx` | [Deskripsi] |
| `/api/[endpoint]` | `src/app/api/[endpoint]/route.ts` | [Deskripsi] |

---

## 🧩 Komponen Utama

| Komponen | File | Keterangan |
|---|---|---|
| Layout | `src/components/Layout.tsx` | Wrapper utama |
| [Komponen] | `src/components/[...].tsx` | [Deskripsi] |

---

## 🔌 API Routes

| Endpoint | File | Method | Auth Required |
|---|---|---|---|
| `/api/[route]` | `src/app/api/[route]/route.ts` | GET, POST | Ya/Tidak |

---

## 🗄️ Database

### Schema
| Tabel | Kolom Utama | Keterangan |
|---|---|---|
| `[tabel]` | `id, created_at, ...` | [Deskripsi] |

### Database Files
| File | Kegunaan |
|---|---|
| `src/lib/db.ts` | Database client (Supabase/Prisma) |
| `supabase/migrations/` | SQL migrations |
| `prisma/schema.prisma` | Prisma schema (jika pakai Prisma) |

---

## 🤖 AI / LLM

| File | Kegunaan |
|---|---|
| `src/lib/ai.ts` | AI client initialization |
| `src/lib/prompts/` | Prompt templates |

---

## 🔐 Auth

| File | Kegunaan |
|---|---|
| `src/lib/auth.ts` | Auth configuration |
| `src/middleware.ts` | Route protection middleware |

---

## 🛠️ Utilities & Helpers

| File | Kegunaan |
|---|---|
| `src/lib/utils.ts` | General utilities |
| `src/types/index.ts` | TypeScript type definitions |
| `src/hooks/` | Custom React hooks |

---

## 📝 Catatan File
[Catatan tambahan tentang file-file yang perlu perhatian khusus atau memiliki perilaku tidak standar]
