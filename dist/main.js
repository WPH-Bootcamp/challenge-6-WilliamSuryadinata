"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// File ini adalah entry point aplikasi
// Gunakan file ini untuk menguji implementasi yang sudah dibuat
// Contoh yang bisa dilakukan:
//   1. Import fungsi-fungsi yang sudah dibuat
//   2. Tambahkan beberapa data buku untuk testing
//   3. Uji fungsi listBooks untuk melihat semua data
//   4. Uji fungsi searchBook dengan dan tanpa parameter
// Silakan bereksplorasi untuk memastikan semua fungsi berjalan dengan baik
const bookManager_1 = require("./functions/bookManager");
console.log('Book Management Application - Week 6');
console.log('=====================================');
// Mulai pengujian di bawah ini
(0, bookManager_1.addBook)({
    title: 'Habis Gelap Terbitlah Terang',
    author: 'R.A. Kartini',
    publicationYear: 1944,
});
(0, bookManager_1.addBook)({
    title: 'jujutsu Kaisen',
    author: 'Gege Akutami',
    publicationYear: 2020,
});
(0, bookManager_1.addBook)({
    title: 'Rental Girlfriend',
    author: 'Reiji Miyajima',
    publicationYear: 2019,
});
(0, bookManager_1.addBook)({
    title: 'Cara Menjadi Orang Sukses',
    author: 'Willy Salim',
    publicationYear: 2024,
});
(0, bookManager_1.addBook)({
    title: 'Uma Musume: Cinderella Gray',
    author: 'Itou Junnosuke & Sugiura Masafumi',
    publicationYear: 2020,
});
(0, bookManager_1.listBooks)();
(0, bookManager_1.searchBook)('uma');
(0, bookManager_1.searchBook)('Rental');
(0, bookManager_1.searchBook)('belum ditulis');
(0, bookManager_1.searchBook)();
