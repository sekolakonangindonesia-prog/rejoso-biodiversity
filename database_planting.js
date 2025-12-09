const db_planting = {
    years: {
        "tanam_2025": {
            id: "tanam_2025",
            year: 2025,
            location: "Pemeliharaan & Monitoring",
            desc: "Tahun ini fokus pada pemeliharaan tanaman tahun sebelumnya dan monitoring, tidak ada penanaman baru.",
            // REVISI: Pohon 0
            stats: { trees: 0, rorak: 150, sumur: 5, biopori: 0 }, 
            species: { "Tanaman Eksisting": 0 }, 
            points: [ [-7.705, 112.920, "Rorak"], [-7.708, 112.923, "Sumur"] ], 
            photos: ["https://via.placeholder.com/400x300?text=Monitoring+2025"]
        },
        "tanam_2024": {
            id: "tanam_2024",
            year: 2024,
            location: "Area Pecaton & Tegal Karyono",
            desc: "Rehabilitasi lahan kritis dengan tanaman kayu keras.",
            // REVISI: Pohon 2000 (Bukan 20rb), Rorak 1500
            stats: { trees: 2000, rorak: 1500, sumur: 30, biopori: 0 }, 
            species: { "Kayu Manis": 200, "Sintok": 200, "Matoa": 200, "Kluwek": 400, "Kopi": 600, "Alpukat": 200, "Gondang": 200 },
            points: [ [-7.710, 112.925, "Pohon"], [-7.712, 112.928, "Pohon"], [-7.711, 112.926, "Rorak"] ],
            photos: ["https://via.placeholder.com/400x300?text=Tanam+2024"]
        },
        "tanam_2023": {
            id: "tanam_2023",
            year: 2023,
            location: "Kawasan Mata Air Umbulan",
            desc: "Fokus tanaman kopi dan sipil teknis biopori.",
            // Data: Pohon 5000, Rorak 500, Biopori 110
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
            // Data: Pohon 10rb, Rorak 750, Sumur 20, Biopori 300
            stats: { trees: 10000, rorak: 750, sumur: 20, biopori: 300 },
            species: { "Kopi Robusta": 7500, "Alpukat": 2500 },
            points: [ [-7.814, 112.913, "Pohon"], [-7.815, 112.914, "Sumur"] ],
            photos: ["https://via.placeholder.com/400x300?text=Alpukat+2022"]
        },
        "tanam_2021": {
            id: "tanam_2021",
            year: 2021,
            location: "Program Konservasi AQUA Keboncandi",
            desc: "Inisiasi program dengan berbagai jenis buah.",
            // Data: Pohon 5000, Rorak 250, Sumur 10, Biopori 300
            stats: { trees: 5000, rorak: 250, sumur: 10, biopori: 300 },
            species: { "Kepel": 600, "Sukun": 700, "Kelengkeng": 600, "Jambu": 600, "Nangka": 700, "Alpukat": 600, "Lainnya": 1200 },
            // Titik sampling (sebagian)
            points: [ [-7.822, 112.905, "Pohon"], [-7.806, 112.909, "Sumur"] ],
            areaPolygon: [
                [-7.788098, 112.907606], [-7.791464, 112.896062], [-7.802277, 112.894327], 
                [-7.812721, 112.895811], [-7.824176, 112.905589], [-7.823288, 112.910948], 
                [-7.816762, 112.917521], [-7.807345, 112.918872], [-7.792361, 112.916971]
            ],
            photos: ["https://via.placeholder.com/400x300?text=Tanam+2021"]
        }
    }
};
