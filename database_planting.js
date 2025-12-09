const db_planting = {
    // DATA PER TAHUN (SESUAI REQUEST)
    years: {
        "tanam_2024": {
            id: "tanam_2024",
            year: 2024,
            location: "Kawasan Hutan Lindung & Penyangga",
            desc: "Rehabilitasi masif dengan tanaman kayu keras dan konservasi sipil teknis.",
            // Data: Pohon 20rb, Rorak 1500
            stats: { trees: 20000, rorak: 1500, sumur: 0, biopori: 0 },
            // Data Spesies (Sisa dari 20rb dimasukkan ke 'Lainnya' agar grafik valid)
            species: { 
                "Kayu Manis": 200, "Sintok Putih": 200, "Matoa": 200, 
                "Kluwek": 400, "Kopi Arabika": 600, "Alpukat": 200, "Gondang": 200,
                "Tanaman Rimba Lainnya": 17990 
            },
            points: [ [-7.710, 112.925, "Pohon"], [-7.712, 112.928, "Rorak"] ],
            photos: ["https://via.placeholder.com/400x300?text=Tanam+2024"]
        },
        "tanam_2023": {
            id: "tanam_2023",
            year: 2023,
            location: "Kawasan Mata Air Umbulan",
            desc: "Fokus pada tanaman kopi robusta dan biopori.",
            // Data: Pohon 5rb, Rorak 500, Biopori 110
            stats: { trees: 5000, rorak: 500, sumur: 0, biopori: 110 },
            species: { "Kopi Robusta": 5000 },
            points: [ [-7.730, 112.950, "Pohon"], [-7.731, 112.951, "Biopori"] ],
            photos: ["https://via.placeholder.com/400x300?text=Kopi+2023"]
        },
        "tanam_2022": {
            id: "tanam_2022",
            year: 2022,
            location: "Desa Galih - Area Atas",
            desc: "Agroforestri kopi dan alpukat.",
            // Data: Pohon 10rb, Rorak 750 (Asumsi urutan thn), Sumur 20, Biopori 300
            stats: { trees: 10000, rorak: 750, sumur: 20, biopori: 300 },
            species: { "Kopi Robusta": 7500, "Alpukat": 2500 },
            points: [ [-7.814, 112.913, "Pohon"], [-7.815, 112.914, "Sumur"] ],
            photos: ["https://via.placeholder.com/400x300?text=Alpukat+2022"]
        },
        "tanam_2021": {
            id: "tanam_2021",
            year: 2021,
            location: "Program Konservasi AQUA Keboncandi",
            desc: "Inisiasi program dengan berbagai jenis buah dan tanaman konservasi.",
            // Data: Pohon 5rb, Rorak 250, Sumur 10, Biopori 300
            stats: { trees: 5000, rorak: 250, sumur: 10, biopori: 300 },
            // Jenis: Kepel, Sukun, dll (Dibagi rata utk simulasi grafik)
            species: { 
                "Kepel": 600, "Sukun": 700, "Kelengkeng": 600, "Jambu Air": 600, 
                "Nangka": 700, "Alpukat": 600, "Kluwih": 600, "Genitu": 600 
            },
            points: [ [-7.822, 112.905, "Pohon"], [-7.806, 112.909, "Sumur"] ],
            photos: ["https://via.placeholder.com/400x300?text=Tanam+2021"]
        }
    }
};
