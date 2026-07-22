---
name: "[NAMA LENGKAP]"
current_role: "[POSISI SAAT INI atau 'Open to Work']"
target_role: "[POSISI YANG INGIN DICAPAI]"
location: "[KOTA, NEGARA]"
work_preference: "[Remote | Hybrid | On-site]"
last_updated: YYYY-MM-DD
memory_vault: .memory/
spec: career-memory v1.0
---

# [NAMA] — AI Agent Entry Point

> **📍 File ini ada di ROOT folder karier.** Semua AI tools otomatis membaca ini.
> **📂 Detail lengkap ada di `.memory/`** — buka sebagai Obsidian vault.

## Siapa Saya?
[2-3 kalimat career summary. Contoh: "Saya adalah Full Stack Developer dengan 3 tahun pengalaman membangun web apps berbasis React dan Node.js. Saya passionate di bidang AI integration dan pernah memimpin tim kecil untuk deliverable production-grade."]

## Target Role
- **Posisi incaran:** [Misal: Full Stack Developer | Backend Engineer | ML Engineer]
- **Industri:** [Misal: Tech startup, fintech, e-commerce]
- **Level:** [Junior | Mid | Senior]

## Tech Stack Utama
`[Bahasa 1]` `[Framework]` `[Database]` `[Cloud]` `[Tool lain]`

## Tautan Penting
- 🌐 **Portfolio:** [URL atau "belum ada"]
- 💼 **LinkedIn:** [URL]
- 🐙 **GitHub:** [URL]
- 📄 **CV terbaru:** `.memory/cv-versions/CV-[YYYY-MM].md`

---

## Instruksi untuk AI Agent

### BUILD MODE — Update Profil
Gunakan ini saat saya selesai proyek baru / dapat sertifikat / ganti kerja.
1. Tanya detail yang dibutuhkan (tech stack, durasi, impact, link)
2. Update file yang relevan di `.memory/`
3. Konfirmasi apa yang diupdate

### APPLICATION MODE — Generate CV & Lamaran
Gunakan ini saat saya mau melamar kerja.
1. Baca **seluruh** `.memory/` untuk pahami background saya
2. Analisis job description yang saya berikan
3. Identifikasi skill/experience mana yang paling relevan
4. Identifikasi skill gap (apa yang JD minta tapi tidak ada di memory saya)
5. Generate CV tailored dalam format Markdown (ATS-friendly)
6. Generate cover letter yang personal dan spesifik ke perusahaan tersebut
7. Buat entry baru di `.memory/applications/APP-XXX-company-role.md`

### Hal yang TIDAK boleh dilakukan:
- ❌ Jangan mengarang pengalaman atau skill yang tidak ada di memory
- ❌ Jangan generate CV dengan data yang belum dikonfirmasi
- ❌ Jangan ubah `cv-versions/` — hanya tambah file baru, tidak edit yang lama

---

## Memory Vault Index

| File | Isi |
|---|---|
| `.memory/profile.md` | Detail kontak, bio lengkap, target karier |
| `.memory/experience.md` | Riwayat kerja (full-time, freelance, magang) |
| `.memory/projects.md` | Semua proyek — personal, profesional, kompetisi |
| `.memory/skills.md` | Inventaris skill teknikal + soft skills |
| `.memory/education.md` | Pendidikan formal + kursus + sertifikasi |
| `.memory/achievements.md` | Award, kompetisi, pencapaian notable |
| `.memory/applications/_tracker.md` | Dashboard semua lamaran kerja |
| `.memory/applications/APP-XXX-*.md` | Detail per lamaran |
| `.memory/cv-versions/` | Snapshot CV yang pernah dikirim (read-only) |
| `.memory/sessions/` | Log sesi update karier |
