<div align="center">

# 🧠 create-obsidian-memory

**CLI tool untuk generate structured AI memory system berbasis Obsidian Vault dalam hitungan detik.**

[![npm version](https://img.shields.io/npm/v/create-obsidian-memory?color=brightgreen&style=flat-square)](https://www.npmjs.com/package/create-obsidian-memory)
[![npm downloads](https://img.shields.io/npm/dm/create-obsidian-memory?color=blue&style=flat-square)](https://www.npmjs.com/package/create-obsidian-memory)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

*Compatible with Cursor · Claude Code · Gemini · Windsurf · GitHub Copilot · and any AI coding agent*

</div>

---

## 🤔 Apa Masalahnya?

Setiap kamu membuka sesi baru dengan AI agent (Cursor, Claude, dsb), kamu harus menjelaskan ulang dari awal:

> *"Ini projectku tentang apa, tech stack-nya ini, fitur yang sudah selesai ini, yang belum ini..."*

Ini membuang waktu dan membuat AI memberikan saran yang tidak kontekstual.

**`create-obsidian-memory` hadir untuk menyelesaikan masalah ini.**

---

## ✅ Solusinya: Base Memory System

Sistem ini memberikan AI agent sebuah **"buku panduan" permanen** dalam format Markdown yang terstruktur — bisa dibaca oleh semua AI tools dan bisa divisualisasikan sebagai knowledge graph di Obsidian.

```
Sesi AI Tanpa Memory          Sesi AI Dengan Memory
─────────────────────         ────────────────────────────────
User: "Lanjutkan projectku"   User: "Lanjutkan projectku"
AI:   "Project apa? Stack     AI:   [Baca AGENTS.md otomatis]
       apa? Sudah sampai            "Oke, melanjutkan dari
       mana?"                        fitur auth. Terakhir kamu
                                     selesai di signup flow,
                                     next step-nya adalah JWT
                                     middleware..."
```

---

## 🚀 Cara Penggunaan

Cukup jalankan **satu perintah** ini di terminal:

```bash
npx create-obsidian-memory
```

CLI akan menampilkan menu interaktif:

```
🧠 Create Obsidian Memory — Base Memory Generator for AI Agents

? Pilih template base memory yang ingin kamu buat: (Use arrow keys)
❯ 🌐 Web Project Memory (untuk vibe coding / software project)
  🔬 Research Memory (untuk skripsi / tesis / paper ilmiah)
  📝 Theory Assignment Memory (untuk tugas esai / kajian literatur)
  💼 Career Memory (untuk CV, portofolio, & lamaran kerja)
  🎥 Content Creator Memory (untuk ideasi, scripting, & manajemen konten)
  📓 Notes Memory (untuk Personal Knowledge Management & Second Brain)

? Masukkan nama folder/direktori tujuan (tekan Enter untuk direktori saat ini): .

⏳ Menyalin file template ke direktori tujuan...

✅ Berhasil membuat base memory!
──────────────────────────────────────────────────────
Langkah selanjutnya:
 1. Buka folder ini di editor (Cursor, VS Code, DLL).
 2. Buka subfolder .memory/ sebagai Vault di Obsidian.
 3. AI agent akan otomatis membaca AGENTS.md di root.
──────────────────────────────────────────────────────
```

---

## 📦 6 Template Yang Tersedia

### 🌐 1. Web Project Memory
> Untuk pengembangan aplikasi web/software — vibe coding, Next.js, fullstack, backend, dsb.

**Struktur yang dihasilkan:**
```
project-root/
├── AGENTS.md               ← AI entry point (dibaca otomatis oleh Cursor, Claude, dll)
└── .memory/
    ├── project.md          ← Deskripsi project, tech stack, goal
    ├── progress.md         ← Status fitur (todo/in-progress/done)
    ├── architecture.md     ← Diagram arsitektur & keputusan desain
    ├── file-map.md         ← Peta file & tanggung jawab tiap folder
    ├── decisions/
    │   └── DEC-XXX.md      ← Architecture Decision Records
    └── sessions/
        └── YYYY-MM-DD.md   ← Log sesi coding harian
```

**Cocok untuk:**
- Vibe coding dengan AI (Cursor, Windsurf, Claude Code)
- Project Next.js, React, Vue, Node.js, Laravel, dll
- Solo developer maupun tim kecil

---

### 🔬 2. Research Memory
> Untuk skripsi S1, tesis S2, disertasi S3, dan paper jurnal ilmiah.

**Struktur yang dihasilkan:**
```
thesis-project/
├── AGENTS.md               ← AI entry point
└── .memory/
    ├── research.md         ← Topik, RQ, hipotesis, kerangka teori
    ├── progress.md         ← Status tiap bab + milestone sidang
    ├── literature.md       ← Peta literatur & research gap
    ├── methodology.md      ← Desain penelitian & instrumen
    ├── findings.md         ← Temuan kunci (update berkala)
    ├── data/
    │   ├── sources.md
    │   ├── qualitative.md  ← Info informan & status wawancara
    │   └── quantitative.md ← Dataset & status analisis statistik
    ├── decisions/
    │   └── RDC-XXX.md      ← Research Decision Records
    ├── sessions/
    │   └── YYYY-MM-DD.md
    └── meetings/
        └── YYYY-MM-DD.md   ← Catatan bimbingan pembimbing
```

**Cocok untuk:**
- Skripsi S1 / Tesis S2 / Disertasi S3
- Penelitian kualitatif, kuantitatif, maupun mixed-methods
- Semua disiplin ilmu

---

### 📝 3. Theory Assignment Memory
> Untuk tugas esai, makalah analisis teori, dan tinjauan literatur non-empiris.

**Struktur yang dihasilkan:**
```
assignment/
├── AGENTS.md               ← AI entry point
└── .memory/
    ├── assignment.md       ← Instruksi tugas, tesis utama, outline
    ├── progress.md         ← Status penulisan per bagian
    ├── literature.md       ← Peta bacaan, kutipan kunci, & debat teori
    ├── analysis.md         ← Brainstorming argumen & sintesis orisinal
    ├── decisions/
    │   └── TDC-XXX.md      ← Theory Decision Records
    └── sessions/
        └── YYYY-MM-DD.md
```

**Cocok untuk:**
- Tugas esai mata kuliah
- Makalah analisis teori / kritik teori
- Tinjauan literatur & review paper

---

### 💼 4. Career Memory
> Untuk identitas profesional, CV/resume, portofolio, dan tracking lamaran kerja.

**Struktur yang dihasilkan:**
```
my-career/
├── AGENTS.md               ← AI entry point (Build Mode & Application Mode)
└── .memory/
    ├── profile.md          ← Bio, kontak, career summary, target karier
    ├── experience.md       ← Riwayat kerja dengan pencapaian kuantitatif
    ├── projects.md         ← Semua proyek + highlight siap pakai untuk CV
    ├── skills.md           ← Inventaris skill teknikal + soft skills
    ├── education.md        ← Pendidikan, kursus, sertifikasi
    ├── achievements.md     ← Award, kompetisi, open source contribution
    ├── applications/
    │   ├── _tracker.md     ← Dashboard semua lamaran kerja
    │   └── APP-XXX.md      ← Detail per lamaran (JD, match, interview notes)
    ├── cv-versions/        ← Snapshot CV yang pernah dikirim
    └── sessions/
        └── YYYY-MM-DD.md
```

**Cocok untuk:**
- Fresh graduate yang sedang mencari kerja pertama
- Professional yang ingin pindah kerja
- Freelancer yang mau membangun portofolio
- Siapapun yang mau generate CV tailored berbasis AI

**Career Memory punya dua mode:**

| Mode | Kapan Dipakai | Contoh Prompt |
|---|---|---|
| **Build Mode** | Setelah selesai proyek baru | *"Tambahkan proyek X ke memoryku"* |
| **Application Mode** | Mau melamar kerja | *"Saya mau lamar posisi ini: [paste JD]"* |

---

### 🎥 5. Content Creator Memory
> Untuk YouTuber, TikToker, Blogger, dan kreator konten lainnya untuk membantu ideasi, scripting, dan manajemen konten.

**Struktur yang dihasilkan:**
```
content-creator/
├── AGENTS.md               ← AI entry point (Instruksi persona AI & alur kerja)
└── .memory/
    ├── brand-identity.md   ← Niche, target audiens, brand voice, visual guidelines
    ├── content-pipeline.md ← Kanban board status konten (Ide, Scripting, Produksi, Rilis)
    ├── ideas-backlog.md    ← Tempat menampung ide-ide mentah
    ├── platforms.md        ← Strategi untuk tiap platform
    ├── analytics.md        ← Tracking performa & insight
    ├── scripts/
    │   └── TEMPLATE.md     ← Template standar untuk naskah
    ├── decisions/
    │   └── CDC-XXX.md      ← Content Decision Records
    └── sessions/
        └── YYYY-MM-DD.md   ← Log sesi kerja harian
```

**Cocok untuk:**
- Content Creator di YouTube, TikTok, Instagram
- Penulis Blog atau Newsletter
- Manajemen jadwal produksi konten dengan bantuan AI

---

### 📓 6. Notes Memory
> Untuk Personal Knowledge Management (PKM), Second Brain, dan Zettelkasten/Atomic Notes.

**Struktur yang dihasilkan:**
```
notes-workspace/
├── AGENTS.md                   ← AI entry point (aturan sintesis, taksonomi, peran AI)
└── .memory/
    ├── system-prompt.md        ← Metodologi PKM (Hybrid Zettelkasten/MOC), aturan tagging & linking
    ├── moc-index.md            ← Map of Content utama (peta hub topik & konsep)
    ├── inbox-backlog.md        ← Antrean catatan mentah/ide cepat yang belum diolah
    ├── reading-digest.md       ← Rangkuman buku, artikel, podcast, atau media
    ├── atomic-templates/       ← Template standar untuk catatan
    │   ├── atomic-concept.md   ← Template 1 ide = 1 catatan (Zettelkasten style)
    │   ├── daily-log.md        ← Template catatan harian & refleksi
    │   └── resource-note.md    ← Template catatan sumber bacaan
    ├── decisions/
    │   └── NDC-XXX.md          ← Note Decision Records (perubahan arsitektur catatan)
    └── sessions/
        └── YYYY-MM-DD.md       ← Log sesi kerja harian dengan AI
```

**Cocok untuk:**
- Pengguna Obsidian yang menerapkan Second Brain atau Zettelkasten
- Pengorganisasian catatan belajar, ringkasan buku, dan ide kreatif
- Membantu AI menghubungkan konsep-konsep lintas domain via `[[wiki links]]`

---

## 🔧 Cara Kerja dengan AI Agent

Setelah template berhasil di-generate, cara memakainya sangat sederhana:

### Di Cursor / Windsurf
File `AGENTS.md` di root project **otomatis terbaca** oleh Cursor Rules dan Windsurf Rules. AI agent langsung memahami konteks project kamu tanpa perlu instruksi tambahan.

### Di Claude Code / Gemini CLI
```bash
# Claude Code membaca CLAUDE.md atau AGENTS.md secara otomatis
# Cukup mulai sesi seperti biasa
claude "Lanjutkan pengerjaan fitur auth"
```

### Di Obsidian
```bash
# Buka folder .memory/ sebagai vault
# File-file saling terhubung via [[wiki links]]
# Graph view menampilkan relasi antar node knowledge
```

---

## 📡 Keterkaitan dengan Repository Lain

CLI ini mengambil template dari 4 repository terpisah:

| Template | Repository |
|---|---|
| 🌐 Web | [Web-Project-Memory-With-Obsidian](https://github.com/rohmet/Web-Project-Memory-With-Obsidian) |
| 🔬 Research | [Research-Memory-With-Obsidian](https://github.com/rohmet/Research-Memory-With-Obsidian) |
| 📝 Theory | [Theory-Assignment-Memory-With-Obsidian](https://github.com/rohmet/Theory-Assignment-Memory-With-Obsidian) |
| 💼 Career | [Career-Memory-With-Obsidian](https://github.com/rohmet/Career-Memory-With-Obsidian) |

Ingin melihat detail masing-masing template? Kunjungi repository di atas.

---

## 🛠️ Filosofi Desain

> *"Steal the idea, not the infrastructure."*

Sistem ini terinspirasi dari konsep [obsidian-memory-for-ai](https://github.com/impermanente/obsidian-memory-for-ai) yang menggunakan Obsidian sebagai base memory untuk AI agent. Namun, versi ini dirancang ulang dengan prinsip yang lebih sederhana:

- ✅ **Plain Markdown only** — tidak ada Python scripts, tidak ada schema YAML kompleks, tidak ada lock/claim system
- ✅ **Tool-agnostic** — bekerja di VS Code, Cursor, Obsidian, Neovim, atau text editor manapun
- ✅ **AI-readable** — setiap file dirancang agar bisa dipahami AI agent dalam satu kali baca
- ✅ **Human-friendly** — bisa dibuka dan diedit secara manual tanpa tools tambahan
- ✅ **Obsidian-compatible** — `[[wiki links]]` antar file untuk graph visualization

---

## ⚙️ Lisensi

MIT © [rohmet](https://github.com/rohmet)
