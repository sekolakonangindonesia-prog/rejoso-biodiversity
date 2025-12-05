// --- DATABASE SIS-KEHATI REJOSO (FINAL) ---

const db_kehati = {
    // 1. DATA PETA (POLYGON) - SUDAH DIRAPIKAN AGAR TIDAK MENYILANG
    polygons: {
        "type": "FeatureCollection",
        "features": [
            // TAMAN 1 (BIRU)
            { 
                "type": "Feature", 
                "properties": { "name": "Taman 1 (Depan)", "color": "#29b6f6" },
                "geometry": { 
                    "type": "Polygon", 
                    "coordinates": [[
                        [-7.722215, 112.934357], [-7.722551, 112.933906], 
                        [-7.722419, 112.933680], [-7.722165, 112.933316], 
                        [-7.721930, 112.933150]
                    ]]
                }
            },
            // TAMAN 2 (MERAH)
            { 
                "type": "Feature", 
                "properties": { "name": "Taman 2 (Tengah)", "color": "#ef5350" },
                "geometry": { 
                    "type": "Polygon", 
                    "coordinates": [[
                        [-7.722396, 112.933616], [-7.722723, 112.933524], 
                        [-7.723156, 112.933484], [-7.723364, 112.933373], 
                        [-7.723645, 112.932930], [-7.722965, 112.933598]
                    ]]
                }
            },
            // TAMAN 3 (KUNING - AREA ALAMI)
            { 
                "type": "Feature", 
                "properties": { "name": "Taman 3 (Area Alami)", "color": "#ffee58" },
                "geometry": { 
                    "type": "Polygon", 
                    "coordinates": [[
                        [-7.723085, 112.929750], [-7.724852, 112.932225], 
                        [-7.724362, 112.932543], [-7.723348, 112.929607]
                    ]]
                }
            }
        ]
    },

    // 2. DATA DETAIL LOKASI
    locations: {
        "kehati_aqua": {
            name: "Taman Kehati AQUA Keboncandi",
            desc: "Area konservasi ex-situ seluas 2,67 Ha. Terbagi menjadi Taman 1, 2, dan 3 (Area Alami).",
            year: "2025",
            status: "Sangat Baik",
            lat: -7.723, lng: 112.932,
            hasPolygon: true,

            // INDEKS FLORA (HIJAU)
            indices: { H: 3.99, E: 0.87, R: 16.75, cat: "Sangat Tinggi" },
            
            // INDEKS BURUNG (BIRU)
            birdIndices: { H: 2.91, E: 0.89, R: 4.81 },

            // GRAFIK FLORA (POHON)
            chartLabels: ['2020', '2021', '2022', '2023', '2024', '2025'],
            chartData: [3.41, 3.47, 3.65, 3.74, 3.79, 3.99],

            // DATA SPESIES FLORA (Untuk Grafik Batang Hijau Cerah)
            floraStats: { 
                total: 203, 
                famili: 75,
                years: ['2020', '2021', '2022', '2023', '2024', '2025'],
                values: [136, 156, 172, 201, 223, 203] 
            },

            // DATA BURUNG
            birdStats: { species: 26, family: 17, dom: "Cipoh Kacat, Walet Linchi", key: "Cekakak Sungai" },

            // LIST DILINDUNGI
            protectedList: [
                { name: "Cemara Norfolk", status: "VU (Rentan)", type: "Flora" },
                { name: "Palem Kuning", status: "NT (Hampir Terancam)", type: "Flora" },
                { name: "Cekakak Sungai", status: "Dilindungi UU", type: "Fauna" },
                { name: "Bubut Jawa", status: "VU / Endemik Jawa", type: "Fauna" }
            ],

            hasTroides: true, // Ada Kupu-kupu Raja

            // POLYGON DETAIL (GABUNGAN RAPI)
            detailPolygon: [
                [-7.721930, 112.933150], [-7.722215, 112.934357], 
                [-7.724362, 112.932543], [-7.724852, 112.932225], 
                [-7.723085, 112.929750]
            ]
        },
        
        "galih_pecaton": {
            name: "Desa Galih - Lahan Pecaton",
            desc: "Area recharge mata air dengan vegetasi campuran.",
            year: "2025", status: "Baik", lat: -7.705, lng: 112.920, hasPolygon: false,
            indices: { H: 3.11, E: 0.79, R: 7.93, cat: "Tinggi" },
            birdIndices: { H: 2.50, E: 0.70, R: 3.20 },
            chartLabels: ['2024', '2025'], chartData: [2.60, 3.11],
            floraStats: { total: 150, famili: 40, years: ['2024','2025'], values: [120, 150] },
            birdStats: { species: 25, family: 19, dom: "Emprit", key: "Elang Bido" },
            protectedList: [{ name: "Bubut Jawa", status: "Dilindungi / VU", type: "Fauna" }],
            hasTroides: false,
            detailPolygon: null 
        },

        "galih_karyono": {
            name: "Desa Galih - Tegal Pak Karyono",
            year: "2025", status: "Sedang", lat: -7.710, lng: 112.925, hasPolygon: false,
            indices: { H: 2.74, E: 0.99, R: 4.03, cat: "Sedang" },
            birdIndices: { H: 2.1, E: 0.6, R: 2.5 },
            chartLabels: ['2025'], chartData: [2.74],
            floraStats: { total: 80, famili: 20, years: ['2025'], values: [80] },
            birdStats: { species: 15, family: 10, dom: "-", key: "-" },
            protectedList: [], hasTroides: false, detailPolygon: null
        },
        
        "galih_andari": {
            name: "Desa Galih - Tegal Pak Andari",
            year: "2025", status: "Sedang", lat: -7.715, lng: 112.915, hasPolygon: false,
            indices: { H: 2.75, E: 0.99, R: 4.18, cat: "Sedang" },
            birdIndices: { H: 2.2, E: 0.65, R: 2.8 },
            chartLabels: ['2025'], chartData: [2.75],
            floraStats: { total: 85, famili: 22, years: ['2025'], values: [85] },
            birdStats: { species: 16, family: 11, dom: "-", key: "-" },
            protectedList: [], hasTroides: false, detailPolygon: null
        },

        "umbulan": {
            name: "Kawasan Mata Air Umbulan",
            year: "2024", status: "Sangat Baik", lat: -7.730, lng: 112.950, hasPolygon: false,
            indices: { H: 3.50, E: 0.85, R: 12.10, cat: "Sangat Tinggi" },
            birdIndices: { H: 3.1, E: 0.8, R: 5.0 },
            chartLabels: ['2024'], chartData: [3.50],
            floraStats: { total: 180, famili: 60, years: ['2024'], values: [180] },
            birdStats: { species: 30, family: 15, dom: "-", key: "-" },
            protectedList: [], hasTroides: false, detailPolygon: null
        },

        "nguling": {
            name: "Kawasan Penyangga Nguling",
            year: "2024", status: "Sedang", lat: -7.680, lng: 113.050, hasPolygon: false,
            indices: { H: 2.90, E: 0.70, R: 5.50, cat: "Sedang" },
            birdIndices: { H: 2.0, E: 0.5, R: 2.0 },
            chartLabels: ['2024'], chartData: [2.90],
            floraStats: { total: 90, famili: 25, years: ['2024'], values: [90] },
            birdStats: { species: 10, family: 5, dom: "-", key: "-" },
            protectedList: [], hasTroides: false, detailPolygon: null
        }
    }
};
