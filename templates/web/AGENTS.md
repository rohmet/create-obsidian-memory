---
project: [NAMA PROJECT]
type: [fullstack | frontend | backend]
stack: [e.g. Next.js, Supabase, Gemini API]
last_updated: YYYY-MM-DD
memory_vault: .memory/
spec: web-project-memory v1.0
---

# [NAMA PROJECT] — AI Agent Entry Point

> **📍 File ini ada di ROOT project.** Semua AI coding tools otomatis membaca ini.
> **📂 Detail lengkap ada di `.memory/`** — buka sebagai Obsidian vault untuk visualisasi.

## Apa project ini?
[Deskripsi singkat 2-3 kalimat. Apa yang dibangun, untuk siapa, masalah apa yang diselesaikan.]

## Tech Stack (ringkas)
- **Frontend:** [e.g. Next.js 15]
- **Backend:** [e.g. Next.js API Routes]
- **Database:** [e.g. Supabase PostgreSQL]
- **AI/LLM:** [e.g. Gemini 1.5 Flash]
- **Deploy:** [e.g. Vercel]

## Cara Run
```bash
npm install && npm run dev
```

---

## Instruksi untuk AI Agent

**Setiap memulai sesi, kamu HARUS:**
1. Baca `.memory/progress.md` → status semua fitur
2. Baca `.memory/sessions/` terbaru → konteks sesi sebelumnya
3. Baca `.memory/file-map.md` → sebelum cari file di project
4. Baru baca file project yang benar-benar relevan untuk task

**Setiap selesai mengerjakan sesuatu, kamu HARUS:**
1. Update `.memory/progress.md`
2. Update `.memory/file-map.md` jika ada file baru yang signifikan
3. Buat `.memory/sessions/YYYY-MM-DD.md`
4. Buat `.memory/decisions/DEC-XXX.md` jika ada keputusan arsitektur baru

**Jangan lakukan:**
- ❌ Scan semua file project — baca `.memory/file-map.md` dulu
- ❌ Edit file `sessions/` yang sudah ada — append-only
- ❌ [Tambahkan larangan spesifik project di sini]

## Memory Vault Index
| File | Isi |
|---|---|
| `.memory/project.md` | Detail project & environment setup |
| `.memory/progress.md` | Status semua fitur (baca ini dulu!) |
| `.memory/architecture.md` | Keputusan arsitektur & pattern |
| `.memory/file-map.md` | Peta file-file penting |
| `.memory/decisions/` | Decision records individual |
| `.memory/sessions/` | Log per sesi coding |
