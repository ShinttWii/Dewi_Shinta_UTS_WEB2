# 👜 BagVerse Store - Premium Bag Collection

BagVerse adalah platform e-commerce modern yang dirancang untuk penjualan tas premium. Proyek ini dibangun dengan fokus pada estetika UI/UX, performa responsif, dan alur kerja manajemen data yang efisien menggunakan teknologi web terkini.

---

## 📝 Deskripsi Proyek
BagVerse Store merupakan aplikasi web berbasis *Client-Side* yang mengintegrasikan berbagai fitur belanja online mulai dari katalog produk hingga dashboard analisis penjualan. Proyek ini menggunakan **Local Storage** untuk mensimulasikan sistem database, sehingga memungkinkan data pengguna, keranjang, dan transaksi tetap tersimpan di dalam browser.

---

## ✨ Fitur Utama

### 1. Sistem Autentikasi (Auth)
- **Register**: Pendaftaran akun dengan validasi keamanan password minimal **6 karakter**.
- **Smart Login**: 
  - Login sebagai **User** akan diarahkan ke halaman belanja utama.
  - Login sebagai **Admin** (admin@mail.com) akan diarahkan secara otomatis langsung ke halaman **Sales Insights (Dashboard)**.

### 2. Pengalaman Belanja (Shopping Experience)
- **Katalog Dinamis**: Produk ditampilkan secara otomatis dari data JSON.
- **Search & Filter**: Pencarian produk secara *real-time* dan filter berdasarkan kategori (Pria, Wanita, Unisex).
- **Pagination**: Navigasi halaman produk untuk kenyamanan pengguna.
- **Wishlist**: Fitur simpan produk favorit untuk dilihat kembali nanti.
- **Keranjang Belanja**: Manajemen item belanja, update jumlah, dan kalkulasi total harga otomatis.

### 3. Dashboard Admin (Sales Insights)
- **Statistik Penjualan**: Ringkasan Revenue, Total Pesanan, Rata-rata transaksi, dan Unit terjual.
- **Grafik Trend**: Visualisasi data menggunakan **Chart.js** untuk melihat tren penjualan.
- **Transaction Log**: Laporan riwayat transaksi lengkap dengan status pembayaran.

### 4. UI/UX Modern
- **Dark Mode Support**: Mendukung mode gelap untuk kenyamanan mata.
- **Responsive Navbar**: Menggunakan sistem **Burger Menu** di tampilan mobile agar navigasi tetap rapi.
- **Toast Notifications**: Notifikasi estetik untuk setiap aksi pengguna (Tambah keranjang, Login sukses, dll).

---

## 🛠️ Teknologi yang Digunakan
- **Struktur**: HTML5
- **Styling**: Tailwind CSS (via CDN)
- **Logika**: JavaScript Modern (ES6+ Modules)
- **Visualisasi**: Chart.js
- **Database**: Browser Local Storage (Simulasi)
- **Komponen**: Fetch API untuk Modular Footer

---

## 🚀 Cara Menjalankan Proyek

1. **Clone atau Download**:
   Unduh semua file dari repository ini ke laptop Anda.
   ```bash
   git clone [https://github.com/ShinttWii/Dewi_Shinta_UTS_WEB2.git](https://github.com/ShinttWii/Dewi_Shinta_UTS_WEB2.git)

2.  Gunakan Live Server (Penting):
    Karena proyek ini menggunakan fitur Modular Footer (Fetch), Anda tidak bisa membukanya hanya dengan klik kanan file HTML. Anda wajib menggunakan ekstensi Live Server di VS Code.

    Klik kanan pada index.html.

    Pilih "Open with Live Server".

3.  Akses Web:
    Buka browser di alamat http://127.0.0.1:5500.

    🔑 Akun Demo Admin:
    Email: admin@mail.com

    Password: admin123
    (Gunakan akun ini untuk masuk langsung ke Dashboard Sales Insights)

## Link Demo

https://shinttwii.github.io/Dewi_Shinta_UTS_WEB2/

Dibuat oleh: Dewi Shinta
Tugas: UTS Pemrograman Web 2