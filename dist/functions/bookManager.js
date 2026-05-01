"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = addBook;
exports.listBooks = listBooks;
exports.searchBook = searchBook;
const books_1 = require("../data/books");
// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan
function addBook(book) {
    books_1.books.push(book);
    console.log(`[Sukses] Buku "${book.title}" berhasil ditambahkan ke koleksi.`);
}
// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca
function listBooks() {
    console.log('\n--- Daftar Buku ---');
    if (books_1.books.length === 0) {
        console.log('belum ada buku di dalam koleksi.');
        return;
    }
    books_1.books.forEach((book, index) => {
        console.log(`${index + 1}. ${book.title} - ${book.author} (${book.publicationYear})`);
    });
}
// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
// jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai
function searchBook(title) {
    if (!title) {
        console.log('\n[INFO] keyword pencarian kosong. Menampilkan semua buku:');
        listBooks();
        return;
    }
    console.log(`\n--- hasil pencarian untuk: "${title}" ---`);
    const results = books_1.books.filter((b) => b.title.toLowerCase().includes(title.toLowerCase()));
    if (results.length === 0) {
        console.log('Buku tidak ditemukan.');
    }
    else {
        results.forEach((book, index) => {
            console.log(`${index + 1}. ${book.title} - ${book.author} (${book.publicationYear})`);
        });
    }
}
