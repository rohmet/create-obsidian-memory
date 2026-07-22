---
last_updated: YYYY-MM-DD
---

# Architecture — Keputusan Teknis & Pattern

> File ini menjelaskan **mengapa** keputusan teknis dibuat, bukan hanya apa yang dipakai.
> Untuk detail keputusan individual, lihat `decisions/DEC-XXX.md`.

---

## Stack Overview

```
[Gambar/diagram arsitektur dalam bentuk ASCII art atau deskripsi]

[Frontend: Next.js]
      ↓
[API Layer: Next.js API Routes]
      ↓
[Database: Supabase PostgreSQL]
      +
[External: Gemini API]
```

---

## Pattern yang Dipakai

### State Management
[Bagaimana state dikelola — local state, global state, server state]

### Data Fetching
[Pattern untuk fetching data — SWR, TanStack Query, server components, dll]

### Authentication
[Bagaimana auth bekerja — session-based, JWT, OAuth, dll]

### Error Handling
[Bagaimana error ditangani — global error boundary, per-route, dll]

### Folder Structure Convention
```
src/
├── app/              # Next.js App Router pages
│   ├── (auth)/       # Route group: halaman yang butuh auth
│   └── api/          # API Routes
├── components/
│   ├── ui/           # Reusable UI components (Button, Card, dll)
│   └── features/     # Feature-specific components
├── lib/              # Utilities, helpers, configs
│   ├── db.ts         # Database client
│   └── ai.ts         # AI client
├── hooks/            # Custom React hooks
└── types/            # TypeScript type definitions
```

### Naming Convention
- **Files:** `kebab-case.ts` / `PascalCase.tsx` untuk components
- **Variables:** `camelCase`
- **Constants:** `SCREAMING_SNAKE_CASE`
- **Types/Interfaces:** `PascalCase`
- **Database tables:** `snake_case`

---

## Keputusan yang Sudah Final (Jangan Diubah Tanpa DEC)

| Keputusan | Alasan Singkat | Detail |
|---|---|---|
| [Keputusan 1] | [Alasan] | `decisions/DEC-001.md` |
| [Keputusan 2] | [Alasan] | `decisions/DEC-002.md` |

---

## Hal yang TIDAK Boleh Dilakukan

- ❌ [Larangan 1 dan alasannya]
- ❌ [Larangan 2 dan alasannya]
- ❌ Jangan gunakan `any` di TypeScript kecuali benar-benar terpaksa
- ❌ Jangan commit secrets ke git

---

## Dependencies Kritis

| Package | Versi | Alasan Dipilih |
|---|---|---|
| [package] | [versi] | [alasan] |
| [package] | [versi] | [alasan] |

---

## Catatan Performa
[Hal-hal yang perlu diperhatikan terkait performa — lazy loading, caching strategy, dll]

---

## Security Considerations
[Hal-hal terkait keamanan yang perlu dijaga — input validation, auth checks, rate limiting, dll]
