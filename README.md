# Assalam.Ai Portal

Portal navigasi internal untuk **Direktorat DPK & Wellbeing Products** dengan nuansa islami dan tampilan yang lebih cerah.

## Deskripsi

Aplikasi ini menampilkan:
- Sidebar navigasi bertingkat dari data Markdown/JSON-like
- Landing page dengan branding Assalam.Ai
- Ringkasan dashboard untuk unit-unit utama
- Metadata sidebar dan badge status

## Teknologi

- HTML
- CSS
- JavaScript vanilla
- Python `http.server` untuk development lokal

## Struktur Proyek

- `index.html` — struktur halaman utama
- `styles.css` — styling UI
- `app.js` — render sidebar dan metadata
- `sidebar-data.js` — sumber data navigasi
- `favicon.ico` — ikon aplikasi

## Menjalankan Aplikasi

Jalankan server lokal:

```bash
python -m http.server 5173
```

Lalu buka:

```bash
http://localhost:5173
```

## Fitur

- Sidebar menu bertingkat
- Badge status seperti `Live`, `Agentic AI`, `AI Auto`, `Review Needed`
- Hero section dengan branding Assalam.Ai
- Dashboard ringkas untuk beberapa area utama
- Layout responsif untuk desktop dan mobile

## Sumber Data

Seluruh menu navigasi didefinisikan di `sidebar-data.js` dan dirender oleh `app.js`.

## Repository

GitHub: https://github.com/rachmat165/assalam.ai.git
