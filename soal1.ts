const inputNama = document.getElementById("nama") as HTMLInputElement;
const inputBerat = document.getElementById("berat") as HTMLInputElement;
const inputJarak = document.getElementById("jarak") as HTMLInputElement;
const btnHitung = document.getElementById("btnHitung") as HTMLButtonElement;
const hasilOngkir = document.getElementById("hasilOngkir") as HTMLElement;

function hitungOngkir(): void {
    const nama: string = inputNama.value;
    const berat: number = Number(inputBerat.value);
    const jarak: number = Number(inputJarak.value);

    if (berat <= 0 || jarak <= 0) {
        hasilOngkir.innerHTML = "Error: Data tidak valid.";
        return;
    }

    let zona: string = "";
    let tarifPerKm: number = 0;

    if (jarak >= 1 && jarak <= 10) {
        zona = "Zona 1";
        tarifPerKm = 1000;
    } else if (jarak > 10 && jarak <= 50) {
        zona = "Zona 2";
        tarifPerKm = 1500;
    } else if (jarak > 50 && jarak <= 200) {
        zona = "Zona 3";
        tarifPerKm = 2000;
    } else if (jarak > 200 && jarak <= 500) {
        zona = "Zona 4";
        tarifPerKm = 2500;
    } else if (jarak > 500) {
        zona = "Zona 5";
        tarifPerKm = 3500;
    }

    const totalOngkir: number = (berat * 3000) + (jarak * tarifPerKm);

    
    hasilOngkir.innerHTML = `Pengirim: ${nama}<br>Tujuan: ${zona}<br>Ongkos kirim: Rp${totalOngkir}`;
}


if (btnHitung) {
    btnHitung.addEventListener("click", hitungOngkir);
}       