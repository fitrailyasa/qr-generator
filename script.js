const kotak = document.querySelector(".kotak"),
inputan = kotak.querySelector(".form input"),
tombol = kotak.querySelector(".form button"),
gambar = kotak.querySelector(".kode-qr img");
let teks_awal;

tombol.addEventListener("click", () => {
    let teks = inputan.value.trim();
    if(!teks || teks_awal === teks) return;
    teks_awal = teks;
    tombol.innerText = "Sedang memproses...";
    gambar.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${teks}`;
    gambar.addEventListener("load", () => {
        kotak.classList.add("active");
        tombol.innerText = "Hasil Kode QR";
    });
});

inputan.addEventListener("keyup", () => {
    if(!inputan.value.trim()) {
        kotak.classList.remove("active");
        teks_awal = "";
    }
});