# Weather Dashboard

Proyek sederhana untuk mempelajari pembuatan Website, aplikasi yang dibuat merupakan Weather Dashboard yang akan menampilkan informasi cuaca secara real-time.
## Fitur

1. **Pencarian cuaca berdasarkan kota**
2. **Menampilkan suhu, Kelembapan, dan Kondisi Cuaca**
3. **Prakiraan cuaca 7 hari**
4. **Mendukung dark mode**

## Teknologi

1. **React**: Untuk membuat antarmuka pengguna yang dinamis dan responsif.
2. **OpenWeatherMap API**: Untuk mendapatkan data cuaca secara real-time.
3. **Tailwind CSS**: Untuk styling komponen secara efisien.

## Fokus Pembelajaran

1. **Permintaan API dengan Axios**: Mengambil data dari server menggunakan library Axios
2. **Manajemen State Dasar**: Mengelola data yang diterima API dan menampilkannya di komponen.
3. **Struktur komponen**: Membuat komponen yang terorganisir dan reusable. 

## Struktur Branch

Saya menggunakan struktur branch yang membantu menjaga kode tetap terorganisir dan memudahkan pengembangan serta kolaborasi. Berikut adalah struktur branch yang saya gunakan:

### Branch Utama
- `main`: Branch utama yang selalu dalam keadaan stabil dan siap untuk produksi.

### Branch Pengembangan
- `development`: Branch pengembangan utama di mana semua fitur baru diintegrasikan dan diuji sebelum digabungkan de `main`.

### Branch Fitur 
Setiap fitur baru dikembangkan dalam branch terpisah yang dibuat dari `development`. Berikut adalah branch fitur yang kami gunakan: 
- `feature/api-integration`: Untuk integrasi API dengan OpenWeatherMap. 
- `feature/search`: Untuk fitur pencarian cuaca berdasarkan kota. 
- `feature/current-weather`: Untuk menampilkan cuaca saat ini. 
- `feature/forecast`: Untuk menampilkan ramalan cuaca 7 hari ke depan. 
- `feature/dark-mode`: Untuk dukungan mode gelap. 
- `feature/state-management`: Untuk manajemen state aplikasi. 
- `feature/layout`: Untuk tata letak dan penampilan aplikasi.

### Alur Kerja Pengembangan
1. **Membuat Branch Fitur**: Branch fitur baru dibuat dari `development`.
```bash
git checkout development
git pull origin development
git checkout feature/nama-fitur
```
2. **Mengembangkan Fitur di Branch Fitur**: melakukan pengembangan fitur dan commit perubahan di branch fitur tersebut.
```bash
git add .
git commit -m "Implement [nama fitur]"
git push origin feature/nama-fitur
```
3. **Pull Request ke development**: setelah fitur selesai, buat pull request dari branch fitur ke development untuk review dan pengujian.
4. **Review dan Merge ke development**: setelah review selesai, merge pull request ke branch development
```bash
git checkout development
git merge feature/nama-fitur
git push origin development
```
5. **Pengujian di development**: lakukan pengujian menyeluruh di branch development.
6. **Pull request ke main**: setelah semua fitur diuji dan branch development stabil, buat pull request dari development ke main.
7. **Reviewn dan Merge ke main**: lakukan review akhir dan merge pull request ke branch main
```bash
git checkout main
git merge development
git push origin main
```

## Kontak

Jika anda memiliki pertanyaan, silahkan hubungi:
- **Email**: tegarputus@gmail.com
- **GitHub**: tgarputustr
