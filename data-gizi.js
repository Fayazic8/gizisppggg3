/* =========================================================================
   DATABASE SISTEM MENU BERGIZI - GULUK GULUK 03
   Update data secara rutin di sini tanpa takut merusak Tampilan.
   ========================================================================= */

// URL/Lokasi Foto Sementara (Agar Web Anti Blank)
const fotoDefaultKotakAman = "https://lh3.googleusercontent.com/d/1bBxTJzvKVElGjczh4rro-I0ppe9l4O9B";


// KUMPULAN DATA HARI DEMI HARI (Silahkan tambah koma setelah kurung tutup } untuk buat tgl baru)
const databaseGizi = {

    // --- TANGGAL 2 : 18 AGUSTUS (Nasi Ayam Geprek Sambal Bawang) ---
    "2026-08-18": {
        jumlahTotalPorsiKertas: 2790, 
        targetKecil: 413,            
        targetBesar: 708,            
        
        fotoKecil: "https://lh3.googleusercontent.com/d/1TAYmJ2iHCoxgwCZCRZL46KjFDqcSI1m0",
        fotoBesar: "https://lh3.googleusercontent.com/d/1A7rO9aNyQXLdqrL1Bin3kKZvHRxSpPFW",
        
        itemsKecil: [
            { nama: "Nasi putih", berat: 125, energi: 225.0, prot: 3.75, lemak: 0.375, karb: 49.75, serat: 0.25 },
            { nama: "Ayam geprek", berat: 70, energi: 244.9, prot: 9.99, lemak: 16.45, karb: 15.44, serat: 0.06 },
            { nama: "Sambal bawang", berat: 25, energi: 49.15, prot: 0.25, lemak: 5.045, karb: 0.985, serat: 0.26 },
            { nama: "Tahu goreng", berat: 60, energi: 88.2, prot: 5.99, lemak: 5.11, karb: 0.44, serat: 0.04 },
            { nama: "Timun dan Selada", berat: 18, energi: 2.24, prot: 0.116, lemak: 0.036, karb: 0.372, serat: 0.03 },
            { nama: "Kelengkeng", berat: 50, energi: 30.0, prot: 0.66, lemak: 0.05, karb: 7.57, serat: 0.00 }
        ],

        itemsBesar: [
            { nama: "Nasi putih", berat: 180, energi: 324.0, prot: 6.75, lemak: 0.54, karb: 71.64, serat: 0.36 },
            { nama: "Ayam geprek", berat: 70, energi: 244.9, prot: 9.99, lemak: 16.45, karb: 15.44, serat: 0.06 },
            { nama: "Sambal bawang", berat: 25, energi: 49.15, prot: 0.25, lemak: 5.045, karb: 0.985, serat: 0.26 },
            { nama: "Tahu goreng", berat: 60, energi: 88.2, prot: 5.99, lemak: 5.11, karb: 0.44, serat: 0.04 },
            { nama: "Timun dan Selada", berat: 18, energi: 2.24, prot: 0.116, lemak: 0.036, karb: 0.372, serat: 0.03 },
            { nama: "Kelengkeng", berat: 50, energi: 30.0, prot: 0.66, lemak: 0.05, karb: 7.57, serat: 0.00 }
        ]
    },
    
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
    }

    
};


// JANGAN HAPUS KODE PALING BAWAH INI (SEBAGAI ANTI-BLANK LAYAR SAAT TANGGAL TIDAK KETEMU DI ATAS)
const defaultMenuFallbackKosong = {
    jumlahTotalPorsiKertas: 0,
    fotoKecil: fotoDefaultKotakAman, fotoBesar: fotoDefaultKotakAman,
    targetKecil: 0, targetBesar: 0,
    itemsKecil: [{ nama: "TIDAK ADA DATA DIHARI INI", berat: 0, energi: 0, prot: 0, lemak: 0, karb: 0, serat: 0 }],
    itemsBesar: [{ nama: "TIDAK ADA DATA DIHARI INI", berat: 0, energi: 0, prot: 0, lemak: 0, karb: 0, serat: 0 }]
};
