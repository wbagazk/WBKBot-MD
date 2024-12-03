

<p align="center">
  <a href="https://wbagazk.github.io">
    <img src="https://readme-typing-svg.herokuapp.com?size=15&width=350&lines=WBKBot+Multi+Device+Created+By+WBagaZK+🌐" alt="wbagazk"/>
  </a>
</p>

<p align="center">
  <a href="https://wbagazk.github.io">
    <img title="Bot-Whatsapp" src="https://img.shields.io/badge/Bot-Whatsapp-green?colorA=%23ff0000&colorB=%23017e40&style=for-the-badge">
  </a>
</p>

<p align="center">
  <a href="https://github.com/wbagazk/followers">
    <img title="Followers" src="https://img.shields.io/github/followers/wbagazk?color=red&style=flat-square">
  </a>
  <a href="https://github.com/wbagazk/WBKBot-MD/stargazers/">
    <img title="Stars" src="https://img.shields.io/github/stars/wbagazk/WBKBot-MD?color=blue&style=flat-square">
  </a>
  <a href="https://github.com/wbagazk/WBKBot-MD/network/members/">
    <img title="Forks" src="https://img.shields.io/github/forks/wbagazk/WBKBot-MD?color=red&style=flat-square">
  </a>
  <a href="https://github.com/wbagazk/WBKBot-MD/watchers/">
    <img title="Watching" src="https://img.shields.io/github/watchers/wbagazk/WBKBot-MD?label=Watchers&color=blue&style=flat-square">
  </a>
  <a href="https://github.com/wbagazk/WBKBot-MD/">
    <img title="Open Source" src="https://badges.frapsoft.com/os/v2/open-source.svg?v=103">
  </a>
  <a href="https://github.com/wbagazk/WBKBot-MD/">
    <img title="Size" src="https://img.shields.io/github/repo-size/wbagazk/WBKBot-MD?style=flat-square&color=green">
  </a>
  <a href="https://hits.seeyoufarm.com">
    <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fwbagazk%2FWBKBot-MD&count_bg=%2379C83D&title_bg=%23555555&icon=probot.svg&icon_color=%2300FF6D&title=hits&edge_flat=false"/>
  </a>
  <a href="https://github.com/wbagazk/WBKBot-MD/graphs/commit-activity">
    <img height="20" src="https://img.shields.io/badge/Maintained%3F-no-green.svg">
  </a>
</p>

---

# 🧑🏽‍💻 INSTALASI

1. Update package

```bash
apt update && apt upgrade
```

2. Install nodejs

```bash
apt install nodejs -y
```

3. Install ffmpeg (ini diperlukan untuk mengkonversi ke format webp terutama pada "stiker")

```bash
apt install ffmpeg -y
```

4. Install git

```bash
apt install git
```

5. Cloning repo

```bash
git clone https://github.com/wbagazk/WBKBot-MD.git
```

6. Saat Anda mendapatkan kode sumber ini, pastikan untuk menginstal semua modul yang diperlukan dengan menjalankan perintah ini di terminal atau command prompt:

```bash
cd WBKBot-MD
```
```bash
npm install
```

7. Setelah selesai menginstal, jalankan bot dengan perintah:

```bash
npm start
```

---

# 📲 CONNECT TO WHATSAPP

1. Setelah bot dijalankan, akan ada opsi untuk menghubungkan ke nomor WhatsApp Anda melalui QR atau pairing.

2. Jika Anda memilih QR, Anda memerlukan perangkat tambahan. Disarankan untuk menggunakan opsi pairing.

3. Jika Anda memilih pairing:
   - Masukkan nomor WhatsApp Anda, contoh: 6285183XXXXXX.
   - Salin kode yang ditampilkan.
   - Buka WhatsApp Anda dan ikuti langkah-langkah berikut:
     - Klik titik tiga di kanan atas.
     - Pilih "Perangkat tertaut" > "Masuk dengan nomor telepon".
     - Masukkan kode yang Anda salin tadi.
     - Tunggu proses koneksi, ini bisa memakan waktu.

Jika mengalami kesulitan, coba hapus folder `lib/connection/session` dan jalankan ulang bot.

---

# IMPOR MODUL

```javascript
const fs = "fs".import(); 
// Atau bisa gunakan await untuk mengatasi promise
//const fs = await "fs".import()
```

---

# IMPOR FUNGSI

Impor fungsi selalu dimulai dari awal, jadi tidak perlu kembali mundur dengan cara `../../`. Semua dimulai dari awal!

Misalnya, jika kita ingin mengimpor `events.js` yang terletak di `./tolkit/events.js` dari `./helpers/client.js`, maka cara pengambilannya adalah:

```javascript
const events = await "./tolkit/events.js".r()
```

---

# PENGGUNAAN EVENT EMITTER

Menambahkan atau mengubah file di dalam folder `./helpers/Events` secara otomatis terdeteksi.

Berikut adalah bagian-bagian yang tersedia dalam events ini:

```javascript
ev.on({
    cmd: [''], // Ini adalah cmd fitur yang digunakan sebagai pemanggil event, Anda bisa meletakkan banyak cmd
    listmenu: [''], // Bagian ini akan terlihat dalam menu
    tag: "", // Tag ini menentukan di menu bagian mana list menu akan ditempatkan
    energy: 7, // Harga penggunaan energi pada event ini
    premium: false, //Mengharuskan premium/tidak untuk menggunakan fitur ini
    args: "Masukkan teks!", // Mengharuskan input teks/quoted teks
    badword: false, //Memblokir badword pada args
    media: { // Membutuhkan media
        type: ["audio"], // Membutuhkan media bertipe audio (tipe terdiri dari audio, document, video, image, sticker) bisa digunakn bersama did alam array
        msg: "Reply audionya?", // Respon jika tidak ada audio yang di-reply
        etc: { // Lain-lain
            seconds: 360, // Maksimal audio 360 detik
            msg: "Audio tidak boleh lebih dari 360 detik!" // Respon jika lebih dari 360 detik
        },
        save: false // Jika true maka media akan disimpan dalam bentuk file audio.mp3
    }
}, ({ media }) => {
    // media adalah kembalian dari media yang di-download, 
    // jika save false maka media adalah buffer,
    // jika save true maka media adalah nama file yang tersimpan
});
```

---

## 💖 Donate
- [Saweria](https://saweria.co/wbagazk)
- [Trakteer](https://trakteer.id/wbagazk)

---

## 🙏 Thanks to
<a href="https://github.com/wbagazk"><img src="https://github.com/wbagazk.png?size=100" width="100" height="100"></a> | <a href="https://github.com/Rifza123"><img src="https://github.com/Rifza123.png?size=100" width="100" height="100"></a> | <a href="https://ai.xterm.codes/"><img src="https://telegra.ph/file/35b9ec32bf79b8694ff82.jpg?size=100" width="100" height="100"></a>
---|---|---
[WBagaZK](https://github.com/wbagazk)  | [Rifza](https://github.com/Rifza123) | [Termai](https://ai.xterm.codes/) 
Developer | Creator | Web API |

---
