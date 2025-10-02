# CAK3BAB3 – IMPLEMENTASI DAN PENGUJIAN PERANGKAT LUNAK – IF-47-08 – Kelompok3

## Deskripsi
Repository ini digunakan untuk simulasi kolaborasi GitHub dalam mata kuliah **RPL – Implementasi dan Pengujian Perangkat Lunak (CAK3BAB3)**.  
Project: Website sederhana **“Hall of Fame Mahasiswa”**, berisi daftar nama kelompok, hobi, foto/logo, dan fitur tambahan sederhana.  

---

## Tujuan
1. Melatih penggunaan GitHub untuk kolaborasi tim.  
2. Memahami workflow **Issue → Branch → Pull Request → Review → Merge**.  
3. Menerapkan prinsip dasar **Source Version Control** dan **Software Configuration Management (SCM)**.  

---

## Role
- **Configuration Manager (CM):** Mengatur repo, review PR, dan merge.  
- **Customer:** Membuat Issue sebagai permintaan fitur atau bug.  
- **Programmer:** Mengambil Issue, coding di branch baru, commit, dan submit PR.  
- **Auditor:** Mengecek log GitHub, memastikan prosedur dipatuhi, membuat laporan audit.  

---

## Workflow Wajib
1. Semua perubahan harus lewat alur: **Issue → Branch → Pull Request → Review → Merge**.  
2. Programmer dilarang commit langsung ke `main`.  
3. Issue hanya boleh dibuat oleh **Customer**.  
4. Merge hanya boleh dilakukan oleh **Configuration Manager**.  
5. Auditor mencatat pelanggaran dan membuat laporan.  

---

## Format Issue (Customer)
### Judul
[FEATURE] Tambahkan nama kelompok 3 di halaman utama

### Deskripsi
User ingin halaman utama menampilkan nama kelompok 3.  

### Acceptance Criteria
- Nama kelompok 3 ditampilkan di halaman utama
- Format huruf tebal
- Berada di bawah judul utama

---

## Format Pull Request (Programmer)
### Deskripsi Perubahan
- Menambahkan nama kelompok 3 di index.html

### Issue Terkait
Closes #3

### Checklist
- [x] Code diuji di local
- [x] Tidak ada conflict dengan main
- [ ] Sudah dicek oleh teman sekelompok

---

## Aturan Penamaan Repo
Setiap kelompok harus membuat repo dengan format nama:  
CAK3BAB3 - IMPLEMENTASI DAN PENGUJIAN PERANGKAT LUNAK - IF-47-08 - KelompokX

Contoh:  
CAK3BAB3 - IMPLEMENTASI DAN PENGUJIAN PERANGKAT LUNAK - IF-47-08 - Kelompok3

---

## Format Laporan Audit (Auditor)
# Laporan Audit Simulasi GitHub
CAK3BAB3 – IMPLEMENTASI DAN PENGUJIAN PERANGKAT LUNAK – IF-47-08 – Kelompok3

## Informasi Audit
-Tanggal Audit: 25/09/2025

-Auditor: 
1. Muhammad Nayubi Adiva Ramadhan / 103012300469 / Kelompok 3

-Programmer: 
1. Yolanda Rahma Chrysti / 103012300150 / Kelompok 3
2. Nevan Nabiil Firmansyah Har / 103012300273 / Kelompok 3
3. Nabila Putri Azhari / 10301230316 / Kelompok 3

-Customer:
1. Dzaky Alfaris / 103012300391 / Kelompok 3
2. Bill Stephen / 103012330197 / Kelompok 3

-CM: 

1.Fathan Arya Maulana / 103012300083 / Kelompok 3



Repo: https://github.com/nabila-azhari/CAK3BAB3-IMPLEMENTASI-DAN-PENGUJIAN-PERANGKAT-LUNAK-IF-47-08-Kelompok3.git

## Ringkasan
Audit dilakukan terhadap Issue, Pull Request, dan Commit yang dibuat oleh Programmer, serta proses review oleh Configuration Manager.

## Tabel Hasil Audit
| No | Issue ID | PR ID | Programmer | Configuration Manager | Status     | Catatan                       |
|----|----------|-------|------------|-----------------------|------------|-------------------------------|
| 1  | #1       |   #6 | Yolanda Rahma Chrysti | Fathan Arya Maulana                   | Tolak | Tidak ada format pull request, tidak ada summary tentang penjelasana apa yang dilakukan |
| 2  | #1       |   #7 | Yolanda Rahma Chrysti | Fathan Arya Maulana                   | Sesuai | Pull sudah sesuai dengan format, 3 Issue sudah di selesaikan dalam 1 kali pull request. syarat permintaan (Issue) yang diberikan pada kodingan sudah sesuai dengan issue yang ada. |
| 3  | #2       |    #8 | Nabila Putri Azhari | Fathan Arya Maulana                   | Sesuai | Tidak ada conflict, issue 2 sudah diselesaikan. | 
| 4  | #3       |    #7 | Yolanda Rahma Chrysti | Fathan Arya Maulana                   | Sesuai | Commit rapi dan terkait dengan Issue. | 
| 5  | #4       |    #9 | Nabila Putri Azhari | Fathan Arya Maulana                   | Sesuai | Commit rapi dan terkait dengan Issue |
| 6  | #5       |   #7 | Nevan Nabiil Firmansyah Har | Fathan Arya Maulana                   | Sesuai | Commit rapi dan terkait dengan Issue |
| 7  | #12, #13, #14      |   #15 | Nabila Putri Azhari | Fathan Arya Maulana                   | Sesuai | 3 issue tambahan sudah diselesaikan dan sudah tidak ada conflict |

## Temuan Utama
- Jumlah Issue dibuat: 8
- Jumlah PR di-merge: 8
- Jumlah pelanggaran: 2
- Kualitas commit message: Cukup Baik

## Rekomendasi
- Pastikan setiap PR selalu terkait Issue.
- Semua merge wajib melalui review Configuration Manager.
- Commit message harus lebih deskriptif.

---

## Format Output Akhir
# Output Akhir Simulasi GitHub
CAK3BAB3 – IMPLEMENTASI DAN PENGUJIAN PERANGKAT LUNAK – IF-47-08 – Kelompok3

## 1. Link Issue (Customer)
- [#1 Tambahkan nama kelompok 3 di halaman utama](https://github.com/nabila-azhari/CAK3BAB3-IMPLEMENTASI-DAN-PENGUJIAN-PERANGKAT-LUNAK-IF-47-08-Kelompok3/issues/1)
- [#2 Menampilkan foto tiap anggota di halaman utama](https://github.com/nabila-azhari/CAK3BAB3-IMPLEMENTASI-DAN-PENGUJIAN-PERANGKAT-LUNAK-IF-47-08-Kelompok3/issues/2)
- [#3 Membuat daftar Hobi Anggota Halaman Utama](https://github.com/nabila-azhari/CAK3BAB3-IMPLEMENTASI-DAN-PENGUJIAN-PERANGKAT-LUNAK-IF-47-08-Kelompok3/issues/3)
- [#4 Menambahkan anggota baru](https://github.com/nabila-azhari/CAK3BAB3-IMPLEMENTASI-DAN-PENGUJIAN-PERANGKAT-LUNAK-IF-47-08-Kelompok3/issues/4)
- [#5 Menampilkan NIM dan Prodi dari Anggota di Halaman Utama](https://github.com/nabila-azhari/CAK3BAB3-IMPLEMENTASI-DAN-PENGUJIAN-PERANGKAT-LUNAK-IF-47-08-Kelompok3/issues/5)
- [#14 Fitur Tambah Anggota yang Lebih Optimal dengan Memasukkan Foto Anggota](https://github.com/nabila-azhari/CAK3BAB3-IMPLEMENTASI-DAN-PENGUJIAN-PERANGKAT-LUNAK-IF-47-08-Kelompok3/issues/14)
- [#13 Tampilan Desain Lebih Interaktif](https://github.com/nabila-azhari/CAK3BAB3-IMPLEMENTASI-DAN-PENGUJIAN-PERANGKAT-LUNAK-IF-47-08-Kelompok3/issues/13)
- [#12 Merancang Fitur Light/Dark Mode](https://github.com/nabila-azhari/CAK3BAB3-IMPLEMENTASI-DAN-PENGUJIAN-PERANGKAT-LUNAK-IF-47-08-Kelompok3/issues/12)

## 2. Link Pull Request (Programmer)
- [PR #7 – Menambahkan nama kelompok 3 di index.html, Menambahkan daftar hobi halaman utama, dan ](https://github.com/nabila-azhari/CAK3BAB3-IMPLEMENTASI-DAN-PENGUJIAN-PERANGKAT-LUNAK-IF-47-08-Kelompok3/pull/7)

## 3. Screenshot Merge (Configuration Manager)
- [Screenshot Merge PR #7](https://github.com/nabila-azhari/CAK3BAB3-IMPLEMENTASI-DAN-PENGUJIAN-PERANGKAT-LUNAK-IF-47-08-Kelompok3/blob/Nayubi/Merge%20PR%20%237.png)
- [Screenshot Merge PR #8](https://github.com/nabila-azhari/CAK3BAB3-IMPLEMENTASI-DAN-PENGUJIAN-PERANGKAT-LUNAK-IF-47-08-Kelompok3/blob/Nayubi/Merge%20PR%20%238.png)
- [Screenshot Merge PR #9](https://github.com/nabila-azhari/CAK3BAB3-IMPLEMENTASI-DAN-PENGUJIAN-PERANGKAT-LUNAK-IF-47-08-Kelompok3/blob/Nayubi/Merge%20PR%20%239.png)
- [Screenshot Merge PR #15](https://github.com/nabila-azhari/CAK3BAB3-IMPLEMENTASI-DAN-PENGUJIAN-PERANGKAT-LUNAK-IF-47-08-Kelompok3/blob/Nayubi/Fiksasi%20desain%20dan%20pengoptimalan%20fitur.jpeg)

## 4. Laporan Audit (Auditor)
- [Audit Report Kelompok 3](https://github.com/nabila-azhari/CAK3BAB3-IMPLEMENTASI-DAN-PENGUJIAN-PERANGKAT-LUNAK-IF-47-08-Kelompok3/blob/Nayubi/ReadMe.md)

---

## Ringkasan Akhir
- Total Issue dibuat: 8
- Total PR diajukan: 0
- Total PR di-merge: 8
- Pelanggaran prosedur: 2
- Rekomendasi Auditor: 1 PR lebih baik fokus ke 1 Issue, Semuanya baik dan mantap.
