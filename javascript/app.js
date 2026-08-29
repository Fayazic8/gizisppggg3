// ==========================================
// 1. FUNGSI JAM REALTIME & TAHUN OTOMATIS
// ==========================================
function jalankanJam() {
    const waktu = new Date();
    const jam = waktu.getHours().toString().padStart(2, '0');
    const menit = waktu.getMinutes().toString().padStart(2, '0');
    const detik = waktu.getSeconds().toString().padStart(2, '0');
    
    // Memasukkan ke id="jam-realtime" di HTML
    document.getElementById("jam-realtime").innerText = `${jam}:${menit}:${detik}`;
}
setInterval(jalankanJam, 1000); // Update setiap 1 detik
jalankanJam(); 

// Update tahun footer otomatis
document.getElementById("tahun-aktif").innerText = new Date().getFullYear();


// ==========================================
// 2. FUNGSI BUKA-TUTUP TABEL (ACCORDION)
// ==========================================
// Fungsi ini dipanggil dari HTML: onclick="toggleTabel('umum')"
function toggleTabel(kategori) {
    const areaTabel = document.getElementById(`area-tabel-${kategori}`);
    const ikonPanah = document.getElementById(`panah-${kategori}`);

    // Cek apakah tabel sedang sembunyi (punya class tabel-area-hilang)
    if (areaTabel.classList.contains("tabel-area-hilang")) {
        areaTabel.classList.remove("tabel-area-hilang"); // Munculkan tabel
        ikonPanah.classList.add("lipat-aktif");          // Putar panah ke atas
    } else {
        areaTabel.classList.add("tabel-area-hilang");    // Sembunyikan tabel
        ikonPanah.classList.remove("lipat-aktif");       // Putar panah ke bawah
    }
}


// ==========================================
// 3. FUNGSI INPUT TANGGAL (DATE PICKER)
// ==========================================
const inputTanggal = document.getElementById("dateSelector");
const labelTanggalAtas = document.getElementById("label-tgl-atas");

// Saat user memilih tanggal baru
inputTanggal.addEventListener("change", function(event) {
    const tanggalDipilih = event.target.value; // Format: YYYY-MM-DD
    labelTanggalAtas.innerText = tanggalDipilih;
    
    // Di sini nanti tempat memanggil fungsi dari data.js
    // contoh: muatDataGiziBerdasarkanTanggal(tanggalDipilih);
});

// Set tanggal hari ini sebagai default saat web dibuka
const hariIni = new Date().toISOString().split('T')[0];
inputTanggal.value = hariIni;
labelTanggalAtas.innerText = hariIni;


// ==========================================
// 4. CONTOH CARA MENGISI DATA KE TABEL & GIZI
// ==========================================
// Ini contoh agar kamu tahu cara mengisi tabel dan nilai gizinya

function contohIsiDataBoksKecil() {
    // 1. Mengubah Highlight Gizi Boks Kecil
    document.getElementById("hl-kcl-kb").innerText = "45g"; // Karbo
    document.getElementById("hl-kcl-pr").innerText = "15g"; // Protein
    document.getElementById("hl-kcl-lm").innerText = "10g"; // Lemak
    document.getElementById("hl-kcl-sr").innerText = "5g";  // Serat
    document.getElementById("hl-kcl-en").innerText = "400kkal"; // Energi Total
    
    // 2. Mengubah Target dan Persentase
    document.getElementById("target-kecil").innerText = "400";
    document.getElementById("perc-kecil").innerText = "100%";
    document.getElementById("bar-kecil").style.width = "100%"; // Memanjangkan bar warna

    // 3. Menambahkan baris ke dalam Tabel Menu Boks Kecil
    const tbodyKecil = document.getElementById("tbody-kecil");
    tbodyKecil.innerHTML = `
        <tr>
            <td data-label="Nama Lauk">Nasi Putih</td>
            <td data-label="Takaran(g)">100</td>
            <td data-label="Energi(kal)">130</td>
            <td data-label="Prot(g)">3</td>
            <td data-label="Lemak(g)">0.3</td>
            <td data-label="Karbo(g)">28</td>
            <td data-label="Serat(g)">0.4</td>
        </tr>
        <tr>
            <td data-label="Nama Lauk">Ayam Goreng</td>
            <td data-label="Takaran(g)">50</td>
            <td data-label="Energi(kal)">120</td>
            <td data-label="Prot(g)">10</td>
            <td data-label="Lemak(g)">8</td>
            <td data-label="Karbo(g)">0</td>
            <td data-label="Serat(g)">0</td>
        </tr>
    `;
    
    // 4. Mengubah Angka Total Porsi (di bagian paling atas)
    document.getElementById("label-total-porsi").innerText = "1.250";
}

// Jalankan fungsi contoh agar muncul di web
contohIsiDataBoksKecil();