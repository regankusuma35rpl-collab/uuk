"use strict";
// 1. Hubungkan semua elemen HTML ke TypeScript
const inputKendaraan = document.getElementById("kendaraan");
const inputLamaSewa = document.getElementById("lamaSewa");
const inputTarifHari = document.getElementById("tarifHari");
const btnSimpan = document.getElementById("btnSimpan");
const hasil = document.getElementById("hasil");
// 2. Empat array kosong di luar function
const daftarKendaraan = [];
const daftarLama = [];
const daftarTarif = [];
const daftarBiaya = [];
// 3. Function yang disarankan
function hitungBiayaSewa(lama, tarif) {
    return lama * tarif;
}
function hitungTotalPendapatan() {
    let total = 0;
    for (let i = 0; i < daftarBiaya.length; i++) {
        total += daftarBiaya[i];
    }
    return total;
}
function tampilkanData() {
    // Kosongkan terlebih dahulu isi hasil
    hasil.innerHTML = "";
    // Tampilkan data satu per satu dengan perulangan for
    for (let i = 0; i < daftarKendaraan.length; i++) {
        hasil.innerHTML += `
            Kendaraan: ${daftarKendaraan[i]}<br>
            Lama Sewa: ${daftarLama[i]} hari<br>
            Tarif per Hari: ${daftarTarif[i]}<br>
            Biaya Sewa: ${daftarBiaya[i]}<br><br>
        `;
    }
    // Setelah perulangan selesai, tampilkan total pendapatan
    const totalPendapatan = hitungTotalPendapatan();
    hasil.innerHTML += `<strong>Total Pendapatan: Rp${totalPendapatan}</strong>`;
}
function resetInput() {
    inputKendaraan.value = "";
    inputLamaSewa.value = "";
    inputTarifHari.value = "";
}
// 4. Alur simpanData
function simpanData() {
    const namaKendaraan = inputKendaraan.value;
    const lama = Number(inputLamaSewa.value);
    const tarif = Number(inputTarifHari.value);
    // Masukkan nilai ke tiga array pertama
    daftarKendaraan.push(namaKendaraan);
    daftarLama.push(lama);
    daftarTarif.push(tarif);
    // Indeks data yang baru dimasukkan
    const indeksTerakhir = daftarKendaraan.length - 1;
    // Hitung biaya sewa dan masukkan ke array keempat
    const biaya = hitungBiayaSewa(daftarLama[indeksTerakhir], daftarTarif[indeksTerakhir]);
    daftarBiaya.push(biaya);
    // Panggil tampilkanData dan resetInput
    tampilkanData();
    resetInput();
}
// 6. Jalankan simpanData saat tombol btnSimpan diklik
btnSimpan.addEventListener("click", simpanData);
