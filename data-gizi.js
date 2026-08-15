/* =========================================================================
   DATABASE SISTEM MENU BERGIZI - GULUK GULUK 03
   Update data secara rutin di sini tanpa takut merusak Tampilan.
   ========================================================================= */

// URL/Lokasi Foto Sementara (Agar Web Anti Blank)
const fotoDefaultKotakAman = "https://lh3.googleusercontent.com/d/1bBxTJzvKVElGjczh4rro-I0ppe9l4O9B";


// KUMPULAN DATA HARI DEMI HARI (Silahkan tambah koma setelah kurung tutup } untuk buat tgl baru)
const databaseGizi = {
    
    // --- CONTOH TANGGAL 1 : 15 AGUSTUS ---
    "2026-08-15": {
        jumlahTotalPorsiKertas: 2790, 
        targetKecil: 413,            
        targetBesar: 708,            
        
        fotoKecil: "https://lh3.googleusercontent.com/d/1Ap0owESD7pJhIigLEF2ACE-s04poMZI3",
        fotoBesar: "https://lh3.googleusercontent.com/d/1z22G6LHGG2VTb2OPB9l92c6cT-DsPY3H",
        
        itemsKecil: [
            { nama: "Nasi Putih", berat: 125, energi: 225.0, prot: 3.75, lemak: 0.38, karb: 49.75, serat: 0.25 },
            { nama: "Ayam Palekko",berat: 50,  energi: 178.3, prot: 8.19, lemak: 16.25, karb: 0.00, serat: 0.00 },
            { nama: "Tempe Goreng",berat: 30,  energi: 81.7,  prot: 3.50, lemak: 6.93,  karb: 2.27, serat: 0.35 },
            { nama: "Sayur Asem",  berat: 40,  energi: 44.0,  prot: 1.42, lemak: 0.77,  karb: 8.36, serat: 1.23 },
            { nama: "Anggur Merah",berat: 50,  energi: 15.0,  prot: 0.25, lemak: 0.10,  karb: 3.40, serat: 0.60 }
        ],

        itemsBesar: [
            { nama: "Nasi Putih",  berat: 180, energi: 324.0, prot: 6.75, lemak: 0.54, karb: 71.64, serat: 0.36 },
            { nama: "Ayam Palekko",berat: 50,  energi: 178.3, prot: 8.19, lemak: 16.25, karb: 0.00, serat: 0.00 },
            { nama: "Tempe Goreng",berat: 30,  energi: 81.7,  prot: 3.50, lemak: 6.93, karb: 2.27, serat: 0.35 },
            { nama: "Sayur Asem",  berat: 40,  energi: 44.0,  prot: 1.42, lemak: 0.77, karb: 8.36, serat: 1.23 },
            { nama: "Anggur Merah",berat: 50,  energi: 15.0,  prot: 0.25, lemak: 0.10, karb: 3.40, serat: 0.60 }
        ]
    },  // <========= PERHATIKAN: Tanda Koma inilah yg mengizinkan Anda mengisi hari yang ada di Bawah!
    
    

};


// JANGAN HAPUS KODE PALING BAWAH INI (SEBAGAI ANTI-BLANK LAYAR SAAT TANGGAL TIDAK KETEMU DI ATAS)
const defaultMenuFallbackKosong = {
    jumlahTotalPorsiKertas: 0,
    fotoKecil: fotoDefaultKotakAman, fotoBesar: fotoDefaultKotakAman,
    targetKecil: 0, targetBesar: 0,
    itemsKecil: [{ nama: "TIDAK ADA DATA DIHARI INI", berat: 0, energi: 0, prot: 0, lemak: 0, karb: 0, serat: 0 }],
    itemsBesar: [{ nama: "TIDAK ADA DATA DIHARI INI", berat: 0, energi: 0, prot: 0, lemak: 0, karb: 0, serat: 0 }]
};