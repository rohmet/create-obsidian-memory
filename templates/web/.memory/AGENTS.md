---
project: [NAMA PROJECT]
type: [fullstack | frontend | backend]
stack: [e.g. Next.js, Supabase, Gemini API]
last_updated: YYYY-MM-DD
spec: web-project-memory v1.0
---

# [NAMA PROJECT] — AI Context Entry Point

## Apa project ini?
[Deskripsi singkat 2-3 kalimat. Apa yang dibangun, untuk siapa, masalah apa yang diselesaikan.]

## Tech Stack
- **Frontend:** [e.g. Next.js 15, React, Tailwind CSS]
- **Backend:** [e.g. Next.js API Routes / Express / FastAPI]
- **Database:** [e.g. Supabase PostgreSQL]
- **AI/LLM:** [e.g. Gemini 1.5 Flash via Google AI SDK]
- **Auth:** [e.g. Supabase Auth]
- **Deploy:** [e.g. Vercel (web) + Railway (bot)]
- **Lainnya:** [tools lain yang signifikan]

## Struktur Project
```
[NAMA PROJECT]/
├── src/                  # [deskripsi singkat]
├── public/               # [deskripsi singkat]
├── [folder lain]/        # [deskripsi singkat]
└── .memory/              # AI memory vault (baca ini dulu!)
```

## Cara Run Lokal
```bash
# Install dependencies
npm install

# Setup environment
cp .env.example .env.local
# isi variabel di .env.local

# Run development
npm run dev
```

## Environment Variables Penting
| Variable | Keterangan |
|---|---|
| `[VAR_NAME]` | [untuk apa] |
| `[VAR_NAME]` | [untuk apa] |

---

## Instruksi untuk AI Agent

**Setiap memulai sesi, kamu HARUS:**
1. Baca file ini (`AGENTS.md`) terlebih dahulu
2. Baca `progress.md` untuk status fitur terkini
3. Baca `sessions/` terbaru untuk konteks sesi sebelumnya
4. Baca `file-map.md` sebelum mencari file di project
5. Baru kemudian baca file project yang benar-benar relevan

**Setiap selesai mengerjakan sesuatu, kamu HARUS:**
1. Update status di `progress.md`
2. Update `file-map.md` jika ada file baru yang penting
3. Tambah entry di `sessions/YYYY-MM-DD.md`
4. Buat `decisions/DEC-XXX.md` jika ada keputusan arsitektur baru

**Hal yang TIDAK boleh dilakukan:**
- Jangan langsung scan semua file project — baca memory dulu
- Jangan edit file `sessions/` yang sudah ada — buat file baru
- Jangan hapus decisions record — append saja jika ada perubahan

**File-file lain di .memory/:**
- `project.md` — Detail lengkap project & setup
- `progress.md` — Status semua fitur
- `architecture.md` — Keputusan arsitektur & pattern yang dipakai
- `file-map.md` — Peta file-file penting di project
- `decisions/` — Decision records individual
- `sessions/` — Log per sesi coding
