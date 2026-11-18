"use strict";
// 1. Hubungkan elemen HTML dengan casting tipe yang sesuai
const inputNama = document.getElementById("nama");
const inputBerat = document.getElementById("berat");
const inputJarak = document.getElementById("jarak");
const btnHitung = document.getElementById("btnHitung");
const hasilOngkir = document.getElementById("hasilOngkir");
// 2. Buat function hitungOngkir bertipe void
function hitungOngkir() {
    // 3. Ambil nilai dan ubah menjadi number
    const nama = inputNama.value;
    const berat = Number(inputBerat.value);
    const jarak = Number(inputJarak.value);
    // 4. Validasi data: jika berat atau jarak <= 0, hentikan program
    if (berat <= 0 || jarak <= 0) {
        hasilOngkir.innerHTML = "Error: Data tidak valid.";
        return;
    }
    // 5. Tentukan zona dan tarif per km menggunakan percabangan if - else if - else
    let zona = "";
    let tarifPerKm = 0;
    if (jarak >= 1 && jarak <= 10) {
        zona = "Zona 1";
        tarifPerKm = 1000;
    }
    else if (jarak > 10 && jarak <= 50) {
        zona = "Zona 2";
        tarifPerKm = 1500;
    }
    else if (jarak > 50 && jarak <= 200) {
        zona = "Zona 3";
        tarifPerKm = 2000;
    }
    else if (jarak > 200 && jarak <= 500) {
        zona = "Zona 4";
        tarifPerKm = 2500;
    }
    else if (jarak > 500) {
        zona = "Zona 5";
        tarifPerKm = 3500;
    }
    // 6. Hitung ongkos kirim sesuai rumus
    const totalOngkir = (berat * 3000) + (jarak * tarifPerKm);
    // 7. Tampilkan hasil ke elemen hasilOngkir
    hasilOngkir.innerHTML = `Pengirim: ${nama}<br>Tujuan: ${zona}<br>Ongkos kirim: Rp${totalOngkir}`;
}
// 8. Tambahkan event listener pada tombol
if (btnHitung) {
    btnHitung.addEventListener("click", hitungOngkir);
}
