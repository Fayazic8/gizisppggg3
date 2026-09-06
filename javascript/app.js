// ========================= JAM & TAHUN FOOTER =========================
document.getElementById('tahun-aktif').innerText = new Date().getFullYear();
function perbaruiJam(){
  document.getElementById('jam-realtime').innerText = new Date().toLocaleTimeString('id-ID');
}
perbaruiJam();
setInterval(perbaruiJam, 1000);

// ========================= TOGGLE TABEL DAFTAR PENERIMA =========================
function toggleTabel(kunci){
  document.getElementById('area-tabel-' + kunci).classList.toggle('tabel-area-hilang');
  document.getElementById('panah-' + kunci).classList.toggle('lipat-aktif');
}

// ========================= FUNGSI BANTUAN KALKULATOR & RENDER =========================
function renderTabelMenu(idTbody, daftarItem) {
  const el = document.getElementById(idTbody);
  el.innerHTML = '';
  daftarItem.forEach(item => {
    el.innerHTML += `<tr>
      <td data-label="Bahan">${item.nama}</td>
      <td data-label="Takaran" style="text-align:center; font-weight:800;">${item.berat}g</td>
      <td data-label="Energi" style="text-align:center;">${item.energi.toFixed(2)}</td>
      <td data-label="Protein" style="text-align:center;">${item.prot.toFixed(2)}</td>
      <td data-label="Lemak" style="text-align:center;">${item.lemak.toFixed(2)}</td>
      <td data-label="Karbo" style="text-align:center;">${item.karb.toFixed(2)}</td>
      <td data-label="Serat" style="text-align:center; color:#059669; font-weight:800;">${item.serat.toFixed(2)}</td>
    </tr>`;
  });
}

function jumlahkanGizi(daftarItem) {
  return daftarItem.reduce((tot, x) => {
    tot.energi += x.energi; tot.prot += x.prot; tot.lemak += x.lemak; tot.karb += x.karb; tot.serat += x.serat;
    return tot;
  }, { energi: 0, prot: 0, lemak: 0, karb: 0, serat: 0 });
}

function isiRingkasanGizi(prefix, total) {
  document.getElementById('tot-' + prefix + '-en').innerText = total.energi.toFixed(2);
  document.getElementById('tot-' + prefix + '-pr').innerText = total.prot.toFixed(2) + "g";
  document.getElementById('tot-' + prefix + '-lm').innerText = total.lemak.toFixed(2) + "g";
  document.getElementById('tot-' + prefix + '-kb').innerText = total.karb.toFixed(2) + "g";
  document.getElementById('tot-' + prefix + '-sr').innerText = total.serat.toFixed(2) + "g";

  document.getElementById('hl-' + prefix + '-en').innerText = total.energi.toFixed(2) + "kkal";
  document.getElementById('hl-' + prefix + '-kb').innerText = total.karb.toFixed(2) + "g";
  document.getElementById('hl-' + prefix + '-pr').innerText = total.prot.toFixed(2) + "g";
  document.getElementById('hl-' + prefix + '-lm').innerText = total.lemak.toFixed(2) + "g";
  document.getElementById('hl-' + prefix + '-sr').innerText = total.serat.toFixed(2) + "g";
}

function isiProgress(prefix, energiTerkumpul, target) {
  const persen = target > 0 ? Math.round((energiTerkumpul / target) * 100) : 0;
  document.getElementById('perc-' + prefix).innerText = persen + "%";
  document.getElementById('bar-' + prefix).style.width = Math.min(persen, 100) + "%";
}

// ========================= FUNGSI UTAMA: TAMPILKAN DATA 1 HARI =========================
function tampilkanData(tanggal) {
  const data = dataSpjHarian[tanggal] || dataKosong;

  // --- Bagian Reguler (Sekolah) ---
  const reg = data.reguler;
  let totalSekolahKecil = 0, totalSekolahBesar = 0, totalSekolahGabungan = 0;
  const tbodySekolah = document.getElementById('tbody-penerima-sekolah');
  tbodySekolah.innerHTML = '';
  reg.sekolah.forEach(s => {
    const subtotal = s.kecil + s.besar;
    totalSekolahKecil += s.kecil; totalSekolahBesar += s.besar; totalSekolahGabungan += subtotal;
    tbodySekolah.innerHTML += `<tr>
      <td data-label="Sekolah">${s.nama}</td>
      <td data-label="Kecil" style="text-align:center;">${s.kecil}</td>
      <td data-label="Besar" style="text-align:center;">${s.besar}</td>
      <td data-label="Total" style="text-align:center; font-weight:800; color:#2563eb;">${subtotal}</td>
    </tr>`;
  });
  document.getElementById('tfoot-penerima-sekolah').innerHTML =
    `<tr class="tot-dist-col"><td data-label="Total Sekolah">TOTAL SELURUH SEKOLAH</td>
      <td data-label="T. Kecil" style="text-align:center;">${totalSekolahKecil}</td>
      <td data-label="T. Besar" style="text-align:center;">${totalSekolahBesar}</td>
      <td data-label="Grand Total" style="text-align:center; color:#3b82f6 !important;">${totalSekolahGabungan} Pack</td>
    </tr>`;

  document.getElementById('target-kecil').innerText = reg.targetKecil;
  document.getElementById('target-besar').innerText = reg.targetBesar;
  document.getElementById('gambar-kecil').src = reg.fotoKecil;
  document.getElementById('gambar-besar').src = reg.fotoBesar;

  renderTabelMenu('tbody-kecil', reg.menuKecil);
  renderTabelMenu('tbody-besar', reg.menuBesar);

  const totalKecil = jumlahkanGizi(reg.menuKecil);
  const totalBesar = jumlahkanGizi(reg.menuBesar);
  isiRingkasanGizi('kcl', totalKecil);
  isiRingkasanGizi('bsr', totalBesar);
  isiProgress('kecil', totalKecil.energi, reg.targetKecil);
  isiProgress('besar', totalBesar.energi, reg.targetBesar);

  // --- Bagian Khusus 3B ---
  const k3b = data.khusus3b || dataKosong.khusus3b; // PERBAIKAN: cegah error jika data 3B tanggal ini belum diisi
  let totalPaket3b = 0;
  const tbody3b = document.getElementById('tbody-penerima-3b');
  tbody3b.innerHTML = '';
  k3b.titik.forEach(t => {
    totalPaket3b += t.jumlah;
    tbody3b.innerHTML += `<tr>
      <td data-label="Titik/Posko" style="text-align:left;">${t.nama}</td>
      <td data-label="Jumlah Paket" style="text-align:center; font-weight:800; color:#7c3aed;">${t.jumlah} Paket</td>
    </tr>`;
  });
  document.getElementById('tfoot-penerima-3b').innerHTML =
    `<tr class="tot-dist-col"><td data-label="Total 3B" style="text-align:left;">TOTAL SELURUH POSKO 3B</td>
      <td data-label="Total Paket" style="text-align:center; font-size:1.1rem; color:#a855f7 !important;">${totalPaket3b} Paket</td>
    </tr>`;

  document.getElementById('target-3b').innerText = k3b.target3b;
  document.getElementById('gambar-3b').src = k3b.foto3b;
  renderTabelMenu('tbody-3b', k3b.menu3b);
  const total3b = jumlahkanGizi(k3b.menu3b);
  isiRingkasanGizi('3b', total3b);
  isiProgress('3b', total3b.energi, k3b.target3b);

  // --- Badge Total Porsi (header) ---
  document.getElementById('label-total-porsi').innerText = totalSekolahGabungan + totalPaket3b;
}

// ========================= PEMILIH TANGGAL & INISIALISASI =========================
const namaBulanPendek = ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agt","Sep","Okt","Nov","Des"];
const namaBulanPanjang = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];

function formatTanggalTampil(tanggalIso, daftarBulan) {
  const d = new Date(tanggalIso);
  return isNaN(d) ? "--" : `${d.getDate()} ${daftarBulan[d.getMonth()]} ${d.getFullYear()}`;
}

const daftarTanggalUrut = Object.keys(dataSpjHarian).sort((a, b) => new Date(b) - new Date(a));
const inputTanggal = document.getElementById('dateSelector');

if (daftarTanggalUrut.length > 0) {
  const tanggalTerbaru = daftarTanggalUrut[0];
  inputTanggal.value = tanggalTerbaru;
  document.getElementById('label-tgl-atas').innerText = formatTanggalTampil(tanggalTerbaru, namaBulanPendek);
  tampilkanData(tanggalTerbaru);
}

inputTanggal.addEventListener('change', (e) => {
  const tanggalDipilih = e.target.value;
  document.getElementById('label-tgl-atas').innerText = formatTanggalTampil(tanggalDipilih, namaBulanPanjang);
  tampilkanData(tanggalDipilih);
});
