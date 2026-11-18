const inputKendaraan = document.getElementById("kendaraan") as HTMLInputElement;
const inputLamaSewa = document.getElementById("lamaSewa") as HTMLInputElement;
const inputTarifHari = document.getElementById("tarifHari") as HTMLInputElement;
const btnSimpan = document.getElementById("btnSimpan") as HTMLButtonElement;
const hasil = document.getElementById("hasil") as HTMLParagraphElement;

const daftarKendaraan: string[] = [];
const daftarLama: number[] = [];
const daftarTarif: number[] = [];
const daftarBiaya: number[] = [];

function hitungBiayaSewa(lama: number, tarif: number): number {
    return lama * tarif;
}

function hitungTotalPendapatan(): number {
    let total: number = 0;
    for (let i = 0; i < daftarBiaya.length; i++) {
        total += daftarBiaya[i];
    }
    return total;
}

function tampilkanData(): void {

    hasil.innerHTML = "";

    for (let i = 0; i < daftarKendaraan.length; i++) {
        hasil.innerHTML += `
            Kendaraan: ${daftarKendaraan[i]}<br>
            Lama Sewa: ${daftarLama[i]} hari<br>
            Tarif per Hari: ${daftarTarif[i]}<br>
            Biaya Sewa: ${daftarBiaya[i]}<br><br>
        `;
    }

    const totalPendapatan: number = hitungTotalPendapatan();
    hasil.innerHTML += `<strong>Total Pendapatan: Rp${totalPendapatan}</strong>`;
}

function resetInput(): void {
    inputKendaraan.value = "";  
    inputLamaSewa.value = "";
    inputTarifHari.value = "";
}

function simpanData(): void {
    const namaKendaraan: string = inputKendaraan.value;
    const lama: number = Number(inputLamaSewa.value);
    const tarif: number = Number(inputTarifHari.value);


    daftarKendaraan.push(namaKendaraan);
    daftarLama.push(lama);
    daftarTarif.push(tarif);


    const indeksTerakhir: number = daftarKendaraan.length - 1;


    const biaya: number = hitungBiayaSewa(daftarLama[indeksTerakhir], daftarTarif[indeksTerakhir]);
    daftarBiaya.push(biaya);


    tampilkanData();
    resetInput();
}


btnSimpan.addEventListener("click", simpanData);