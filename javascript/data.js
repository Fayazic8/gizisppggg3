// ========================= FOTO DEFAULT (GOOGLE DRIVE) =========================
const fotoDriveMenuA = "https://lh3.googleusercontent.com/d/1FHP5j4gwqmDbF8DHjIfXj4PFn61t9Bq2";
const fotoDriveMenuB = "https://lh3.googleusercontent.com/d/1FHP5j4gwqmDbF8DHjIfXj4PFn61t9Bq2";

// ========================= DATABASE HARIAN SPJ MBG =========================
// Tambahkan/ubah data per tanggal di sini. Format tanggal: "YYYY-MM-DD"
const dataSpjHarian = {
  "2026-08-15": {
    reguler: {
      sekolah: [
        { nama: "TK Al Anwar", kecil: 45, besar: 0 },
        { nama: "MI 3 Annuqayah", kecil: 65, besar: 64 },
        { nama: "MTs 1 Annuqayah", kecil: 0, besar: 838 },
        { nama: "MTs 2 Annuqayah", kecil: 0, besar: 100 },
        { nama: "MTs 3 Annuqayah", kecil: 0, besar: 97 },
        { nama: "MA 1 Annuqayah", kecil: 0, besar: 430 },
        { nama: "MA 2 Annuqayah", kecil: 0, besar: 98 },
        { nama: "MA Tahfidh", kecil: 0, besar: 210 },
        { nama: "SMA Annuqayah", kecil: 0, besar: 499 },
        { nama: "SMA 3 Annuqayah", kecil: 0, besar: 149 }
      ],
      targetKecil: 105, targetBesar: 2485,
      fotoKecil: fotoDriveMenuA, fotoBesar: fotoDriveMenuB,
      menuKecil: [
        { nama: "Nasi Putih",         berat: 125, energi: 225.0, prot: 3.75, lemak: 0.38,  karb: 49.75, serat: 0.25 },
        { nama: "Ayam Palekko",       berat: 50,  energi: 178.3, prot: 8.19, lemak: 16.25, karb: 0.00,  serat: 0.00 },
        { nama: "Tempe Goreng",       berat: 30,  energi: 81.7,  prot: 3.50, lemak: 6.93,  karb: 2.27,  serat: 0.35 },
        { nama: "Mix Sayur Asem",     berat: 40,  energi: 44.0,  prot: 1.42, lemak: 0.77,  karb: 8.36,  serat: 1.23 },
        { nama: "Anggur Merah", berat: 50, energi: 15.0, prot: 0.25, lemak: 0.10,  karb: 3.40,  serat: 0.60 }
      ],
      menuBesar: [
        { nama: "Nasi Putih XXL",     berat: 180, energi: 324.0, prot: 6.75, lemak: 0.54,  karb: 71.64, serat: 0.36 },
        { nama: "Ayam Palekko",       berat: 50,  energi: 178.3, prot: 8.19, lemak: 16.25, karb: 0.00,  serat: 0.00 },
        { nama: "Tempe Bumbu Goreng", berat: 30,  energi: 81.7,  prot: 3.50, lemak: 6.93,  karb: 2.27,  serat: 0.35 },
        { nama: "Mix Sayur Asem",     berat: 40,  energi: 44.0,  prot: 1.42, lemak: 0.77,  karb: 8.36,  serat: 1.23 },
        { nama: "Pencuci Mulut Anggur", berat: 50, energi: 15.0, prot: 0.25, lemak: 0.10,  karb: 3.40,  serat: 0.60 }
      ]
    },
  },

  "2026-08-16": {
    reguler: {
      sekolah: [
        { nama: "SDN 2 Kebangsaan",     kecil: 150, besar: 60 },
        { nama: "SMP Darul Faqih Cnt.", kecil: 0,   besar: 200 }
      ],
      targetKecil: 413, targetBesar: 708,
      fotoKecil: fotoDriveMenuA, fotoBesar: fotoDriveMenuB,
      menuKecil: [
        { nama: "Nasi Campur T.S. Sari", berat: 130, energi: 240.0, prot: 4.10, lemak: 0.40, karb: 52.00, serat: 0.30 },
        { nama: "Semur Daging Putih",    berat: 45,  energi: 190.5, prot: 10.2, lemak: 14.5, karb: 1.00,  serat: 0.10 },
        { nama: "Perkedel Tahu Crispy",  berat: 25,  energi: 70.0,  prot: 4.00, lemak: 5.50, karb: 3.20,  serat: 0.45 },
        { nama: "Sayur Bayam Jagung",    berat: 40,  energi: 30.0,  prot: 1.80, lemak: 0.50, karb: 6.30,  serat: 2.10 },
        { nama: "Pepaya Bulan Manis",    berat: 50,  energi: 30.0,  prot: 0.40, lemak: 0.20, karb: 7.40,  serat: 1.50 }
      ],
      menuBesar: [
        { nama: "Nasi Campur Banyak",  berat: 200, energi: 360.0, prot: 8.20, lemak: 0.80, karb: 84.00, serat: 0.60 },
        { nama: "Semur Daging XL",     berat: 60,  energi: 230.1, prot: 14.2, lemak: 18.2, karb: 2.00,  serat: 0.20 },
        { nama: "Perkedel Tahu 2x",    berat: 40,  energi: 105.0, prot: 6.50, lemak: 8.20, karb: 5.10,  serat: 0.80 },
        { nama: "Sayur Bayam Jagung",  berat: 50,  energi: 38.0,  prot: 2.10, lemak: 0.65, karb: 8.30,  serat: 2.90 },
        { nama: "Buah Pepaya Segar",   berat: 50,  energi: 30.0,  prot: 0.40, lemak: 0.20, karb: 7.40,  serat: 1.50 }
      ]
    },
    khusus3b: {
      titik: [ { nama: "Rumah Ibu Rina", jumlah: 2 } ],
      target3b: 550, foto3b: fotoDriveMenuA,
      menu3b: [
        { nama: "Nasi Tim Balita",      berat: 180, energi: 210.0, prot: 3.50, lemak: 1.00, karb: 40.00, serat: 1.00 },
        { nama: "Ikan Dori Halus",      berat: 55,  energi: 140.0, prot: 15.00, lemak: 7.50, karb: 0.00, serat: 0.00 },
        { nama: "Brokoli Kukus",        berat: 40,  energi: 30.0,  prot: 1.80, lemak: 0.50, karb: 6.30,  serat: 2.10 }
      ]
    }
  },

  "2026-08-17": {
    reguler: {
      sekolah: [ { nama: "Seluruh Pos Program TK Lebel 1", kecil: 400, besar: 120 } ],
      targetKecil: 413, targetBesar: 708,
      fotoKecil: fotoDriveMenuB, fotoBesar: fotoDriveMenuA,
      menuKecil: [
        { nama: "Nasi Uduk Special Kmpd", berat: 125, energi: 240.0, prot: 4.10, lemak: 3.50, karb: 48.00, serat: 0.50 },
        { nama: "Tongkol Ayam Goreng",    berat: 45,  energi: 150.0, prot: 7.00, lemak: 10.2, karb: 0.00,  serat: 0.00 },
        { nama: "Tahu Bumbu Cabai",       berat: 30,  energi: 85.0,  prot: 4.50, lemak: 6.00,  karb: 3.00,  serat: 0.50 }
      ],
      menuBesar: [
        { nama: "Nasi Uduk Level Besar",  berat: 180, energi: 350.0, prot: 6.50, lemak: 5.50, karb: 70.00, serat: 1.00 },
        { nama: "Lauk Ayam Original",     berat: 55,  energi: 190.0, prot: 10.0, lemak: 12.0, karb: 0.00,  serat: 0.00 },
        { nama: "Tahu Bumbu Besar",       berat: 35,  energi: 90.0,  prot: 5.00, lemak: 6.50, karb: 4.00,  serat: 0.80 }
      ]
    },
    khusus3b: {
      titik: [ { nama: "Posyandu Desa Melati", jumlah: 35 } ],
      target3b: 550, foto3b: fotoDriveMenuA,
      menu3b: [
        { nama: "Bubur Beras Merah",  berat: 150, energi: 200.0, prot: 4.50, lemak: 1.50, karb: 40.00, serat: 2.00 },
        { nama: "Otak-otak Ikan",     berat: 50,  energi: 130.0, prot: 10.0, lemak: 6.00, karb: 5.00,  serat: 0.50 }
      ]
    }
  },

  "2026-08-18": {
    reguler: {
      sekolah: [ { nama: "MI Al-Miftahunnajah 05", kecil: 250, besar: 320 } ],
      targetKecil: 413, targetBesar: 708,
      fotoKecil: fotoDriveMenuA, fotoBesar: fotoDriveMenuA,
      menuKecil: [
        { nama: "Nasi Putih Bakar",  berat: 125, energi: 220.0, prot: 4.00, lemak: 0.40, karb: 48.00, serat: 0.30 },
        { nama: "Omelet Telur",      berat: 45,  energi: 120.0, prot: 8.50, lemak: 9.00, karb: 1.00,  serat: 0.10 },
        { nama: "Tempe Bacem",       berat: 20,  energi: 60.0,  prot: 3.50, lemak: 4.50, karb: 2.00,  serat: 0.20 },
        { nama: "Sayur Kangkung",    berat: 45,  energi: 25.0,  prot: 1.00, lemak: 0.50, karb: 5.00,  serat: 1.50 },
        { nama: "Jeruk Manis",       berat: 60,  energi: 35.0,  prot: 0.50, lemak: 0.10, karb: 8.00,  serat: 2.00 }
      ],
      menuBesar: [
        { nama: "Nasi Putih Porsi Besar", berat: 180, energi: 310.0, prot: 6.00, lemak: 0.80, karb: 65.00, serat: 0.50 },
        { nama: "Omelet Telur Jumbo",     berat: 65,  energi: 160.0, prot: 11.5, lemak: 11.5, karb: 1.50,  serat: 0.20 },
        { nama: "Tempe Bacem Besar",      berat: 30,  energi: 85.0,  prot: 5.00, lemak: 6.50, karb: 3.50,  serat: 0.30 },
        { nama: "Sayur Kangkung",         berat: 60,  energi: 35.0,  prot: 1.50, lemak: 0.80, karb: 6.50,  serat: 2.20 },
        { nama: "Jeruk Manis",            berat: 80,  energi: 45.0,  prot: 0.80, lemak: 0.20, karb: 10.0,  serat: 2.50 }
      ]
    },
    khusus3b: {
      titik: [ { nama: "SDN 5 Lokasi Terpadu", jumlah: 30 } ],
      target3b: 550, foto3b: fotoDriveMenuA,
      menu3b: [
        { nama: "Bubur Ayam Halus",  berat: 120, energi: 150.0, prot: 2.00, lemak: 0.50, karb: 30.00, serat: 1.00 },
        { nama: "Kaas Telur",        berat: 65,  energi: 160.0, prot: 11.0, lemak: 11.0, karb: 1.50,  serat: 0.20 },
        { nama: "Sayur Bening",      berat: 40,  energi: 20.0,  prot: 1.00, lemak: 0.50, karb: 4.00,  serat: 1.50 }
      ]
    }
  }
};

const dataKosong = {
  reguler: { sekolah: [{ nama: "Kosong", kecil: 0, besar: 0 }], targetKecil: 0, targetBesar: 0,
    fotoKecil: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500",
    fotoBesar: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500",
    menuKecil: [{ nama: "-", berat: 0, energi: 0, prot: 0, lemak: 0, karb: 0, serat: 0 }],
    menuBesar: [{ nama: "-", berat: 0, energi: 0, prot: 0, lemak: 0, karb: 0, serat: 0 }] },
  khusus3b: { titik: [{ nama: "-", jumlah: 0 }], target3b: 0,
    foto3b: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500",
    menu3b: [{ nama: "-", berat: 0, energi: 0, prot: 0, lemak: 0, karb: 0, serat: 0 }] }
};
