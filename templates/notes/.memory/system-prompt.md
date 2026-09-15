# Sistem & Aturan Personal Knowledge Management (PKM)

Dokumen ini mendefinisikan prinsip, taksonomi, dan konvensi penamaan yang digunakan dalam Obsidian Vault ini. AI Agent harus mematuhi aturan ini ketika mengusulkan pembuatan atau modifikasi catatan.

---

## 🧭 Metodologi Dasar: Hybrid Zettelkasten & MOC

1. **Fleeting Notes (Catatan Kilat)**:
   - Disimpan di `inbox-backlog.md` atau folder harian.
   - Bersifat sementara, perlu direview dan diubah menjadi *permanent notes* atau dihapus.
2. **Literature Notes (Catatan Literatur)**:
   - Rangkuman dari sumber eksternal (buku, podcast, artikel, video) yang ditulis ulang dengan pemahaman sendiri di `reading-digest.md` atau `resource-note.md`.
3. **Atomic / Permanent Notes (Catatan Permanen)**:
   - Satu catatan untuk satu konsep mandiri.
   - Menggunakan bahasa jelas, dapat dipahami di masa depan tanpa harus membuka referensi aslinya.
4. **Maps of Content (MOC)**:
   - Catatan hub yang menghubungkan berbagai catatan permanen dalam satu topik besar (misal: `[[MOC - Artificial Intelligence]]`, `[[MOC - Philosophy]]`).

---

## 🏷️ Taksonomi Tag Standar

Gunakan hierarki tag berikut untuk memudahkan filtering dan dataview:

- `#status/inbox` : Catatan mentah yang belum diolah.
- `#status/seed` : Catatan yang baru mulai ditulis / butuh dielaborasi.
- `#status/evergreen` : Catatan yang sudah matang dan terverifikasi.
- `#type/concept` : Catatan konsep atau ide abstrak.
- `#type/source` : Catatan rangkuman buku/artikel/video.
- `#type/log` : Catatan jurnal harian atau refleksi.

---

## 📝 Konvensi Penamaan File & Tautan

- **Nama File**: Gunakan judul yang deskriptif dan menyatakan proposisi atau ide (contoh: `Compound Interest in Knowledge.md` lebih baik daripada `Note 1.md`).
- **Tautan Dua Arah**: Gunakan `[[Nama Catatan]]` untuk menautkan konsep.
- **Alias**: Gunakan alias pada frontmatter jika sebuah konsep memiliki sinonim atau istilah asing/Indonesia.
