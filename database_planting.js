const db_planting = {
    // 1. DATA POLYGON (UNTUK PETA DASHBOARD)
    // Format GeoJSON Wajib: [Longitude (112), Latitude (-7)]
    polygons: {
        "type": "FeatureCollection",
        "features": [
            // TAMAN KEHATI
            { 
                "type": "Feature", "properties": { "name": "Taman Kehati", "id": "taman_kehati", "color": "#29b6f6" },
                "geometry": { "type": "Polygon", "coordinates": [[ [112.933906, -7.722551], [112.934018, -7.722334], [112.934140, -7.722282], [112.934357, -7.722215], [112.933150, -7.721930], [112.933316, -7.722165], [112.933620, -7.722398], [112.933796, -7.722477], [112.933906, -7.722551] ]] }
            },
            // TEGAL PAK ANDARI (DATA JSON ASLI ANDA)
            {
                "type": "Feature", "properties": { "name": "Tegal Pak Andari", "id": "tanam_2024", "color": "#8e44ad" },
                "geometry": { "type": "Polygon", "coordinates": [[ 
                    [112.905288, -7.815048], [112.905335, -7.814989], [112.905334, -7.814978], [112.905318, -7.814965], 
                    [112.905303, -7.814954], [112.905283, -7.814951], [112.905259, -7.814961], [112.905225, -7.814953], 
                    [112.905206, -7.814945], [112.905188, -7.814937], [112.905167, -7.814931], [112.905144, -7.814927], 
                    [112.905119, -7.814933], [112.905104, -7.814932], [112.905082, -7.814928], [112.905058, -7.814940], 
                    [112.905042, -7.814922], [112.905028, -7.814915], [112.905022, -7.814930], [112.905008, -7.814942], 
                    [112.904990, -7.814947], [112.904955, -7.814936], [112.904717, -7.815100], [112.904479, -7.815462], 
                    [112.904588, -7.815972], [112.904767, -7.816181], [112.905305, -7.816111], [112.905295, -7.815588], 
                    [112.905251, -7.815100], [112.905280, -7.815111], [112.905270, -7.815075], [112.905288, -7.815048]
                ]] }
            }
        ]
    },

    // 2. DATA TAHUNAN (STATISTIK)
    years: {
        "tanam_2025": {
            id: "tanam_2025",
            year: 2025,
            location: "Pemeliharaan & Monitoring",
            desc: "Fokus pada pemeliharaan tanaman (Tidak ada penanaman baru).",
            // POHON 0, RORAK 0 (DATA SAYA NOL-KAN AGAR TIDAK MUNCUL DI GRAFIK RORAK)
            stats: { trees: 0, rorak: 0, sumur: 5, biopori: 0 },
            species: { "Tanaman Eksisting": 0 }, 
            points: [ [-7.705, 112.920, "Rorak"], [-7.708, 112.923, "Sumur"] ],
            photos: ["https://via.placeholder.com/400x300?text=Monitoring+2025"]
        },
        "tanam_2024": {
            id: "tanam_2024",
            year: 2024,
            location: "Area Pecaton & Tegal Karyono",
            desc: "Rehabilitasi lahan kritis dengan tanaman kayu keras.",
            // REVISI: POHON 2000, RORAK 1500
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
            stats: { trees: 5000, rorak: 250, sumur: 10, biopori: 300 },
            species: { "Kepel": 600, "Sukun": 700, "Kelengkeng": 600, "Jambu": 600, "Nangka": 700, "Alpukat": 600, "Lainnya": 1200 },
            points: [ [-7.822, 112.905, "Pohon"], [-7.806, 112.909, "Sumur"] ],
            photos: ["https://via.placeholder.com/400x300?text=Tanam+2021"]
        }
    }
};
