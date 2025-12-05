// --- DATABASE SIS-KEHATI REJOSO ---
// Format Data: GeoJSON & Statistik

const db_kehati = {
    // 1. DATA AREA DELINEASI (POLYGON)
    polygons: {
        "type": "FeatureCollection",
        "features": [
            { 
                "type": "Feature", 
                "properties": { "name": "Taman Kehati Keboncandi", "id": "kehati_aqua", "color": "#26a69a" },
                "geometry": { 
                    "type": "Polygon", 
                    "coordinates": [[
                        [112.932225, -7.724851], [112.932261, -7.724684], [112.932544, -7.724361], 
                        [112.933068, -7.723390], [112.933604, -7.723466], [112.933627, -7.723414], 
                        [112.933390, -7.723351], [112.933615, -7.723016], [112.933578, -7.722898], 
                        [112.933611, -7.722807], [112.933753, -7.722715], [112.933821, -7.722606], 
                        [112.933904, -7.722555], [112.933969, -7.722383], [112.934066, -7.722307], 
                        [112.934265, -7.722266], [112.934357, -7.722214], [112.933152, -7.721928], 
                        [112.933089, -7.722111], [112.933279, -7.722315], [112.933616, -7.722398], 
                        [112.933526, -7.722720], [112.933468, -7.722815], [112.933466, -7.722923], 
                        [112.933495, -7.722979], [112.933500, -7.723067], [112.933460, -7.723258], 
                        [112.933397, -7.723344], [112.933313, -7.723362], [112.933355, -7.723275], 
                        [112.933316, -7.723090], [112.933363, -7.723037], [112.933519, -7.722984], 
                        [112.933984, -7.722771], [112.934058, -7.722703], [112.934035, -7.722575], 
                        [112.934197, -7.722506], [112.934054, -7.721990], [112.933593, -7.721164], 
                        [112.933491, -7.720861], [112.933267, -7.720551], [112.933162, -7.720266], 
                        [112.933094, -7.720160], [112.932968, -7.719928], [112.933282, -7.719694], 
                        [112.933517, -7.719516], [112.932225, -7.724851] 
                    ]]
                }
            }
            // Tambahkan Polygon lain di sini...
        ]
    },

    // 2. DATA DETAIL LOKASI (ANGKA & GRAFIK)
    locations: {
        "kehati_aqua": {
            name: "Taman Kehati AQUA Keboncandi",
            desc: "Area konservasi ex-situ seluas 2,67 Ha. Terbagi menjadi Taman 1, 2, dan 3 (Area Alami).",
            year: "2025",
            status: "Sangat Baik",
            
            // Koordinat Titik Tengah (Untuk Marker Peta)
            lat: -7.723, lng: 112.932,
            hasPolygon: true,

            // INDEKS FLORA (HIJAU)
            indices: { H: 3.99, E: 0.87, R: 16.75, cat: "Sangat Tinggi" },
            
            // INDEKS BURUNG (BIRU - Data 2025)
            birdIndices: { H: 2.91, E: 0.89, R: 4.81 },

            // Grafik Pohon (2020-2025)
            chartLabels: ['2020', '2021', '2022', '2023', '2024', '2025'],
            chartData: [3.41, 3.47, 3.65, 3.74, 3.79, 3.99],

            // Data Burung Statistik
            birdStats: { species: 26, family: 17, dom: "Cipoh Kacat, Walet Linchi", key: "Cekakak Sungai, Raja Udang" },

            // List Dilindungi
            protectedList: [
                { name: "Cemara Norfolk", status: "VU (Rentan)", type: "Flora" },
                { name: "Palem Kuning", status: "NT (Hampir Terancam)", type: "Flora" },
                { name: "Cekakak Sungai", status: "Dilindungi UU", type: "Fauna" },
                { name: "Bubut Jawa", status: "VU / Endemik Jawa", type: "Fauna" }
            ],

            hasTroides: true, // Ada Kupu-kupu?
            
            // DATA KHUSUS PETA DETAIL (POLYGON SATUAN)
            detailPolygon: [
                [-7.724851, 112.932225], [-7.724684, 112.932261], [-7.724361, 112.932544], 
                [-7.723390, 112.933068], [-7.723466, 112.933604], [-7.723016, 112.933615], 
                [-7.722807, 112.933611], [-7.722214, 112.934357], [-7.721928, 112.933152], 
                [-7.722398, 112.933616], [-7.722979, 112.933495], [-7.723517, 112.929516] 
            ]
        },
        
        "galih_pecaton": {
            name: "Desa Galih - Lahan Pecaton",
            desc: "Area recharge mata air dengan vegetasi campuran.",
            year: "2025",
            status: "Baik",
            lat: -7.705, lng: 112.920,
            hasPolygon: false,
            indices: { H: 3.11, E: 0.79, R: 7.93, cat: "Tinggi" },
            birdIndices: { H: 2.50, E: 0.70, R: 3.20 },
            chartLabels: ['2024', '2025'],
            chartData: [2.60, 3.11],
            birdStats: { species: 25, family: 19, dom: "Emprit, Tekukur", key: "Elang Bido" },
            protectedList: [{ name: "Bubut Jawa", status: "Dilindungi / VU", type: "Fauna" }],
            hasTroides: false,
            detailPolygon: null 
        },

        "galih_karyono": {
            name: "Desa Galih - Tegal Pak Karyono",
            year: "2025", status: "Sedang", lat: -7.710, lng: 112.925, hasPolygon: false,
            indices: { H: 2.74, E: 0.99, R: 4.03, cat: "Sedang" },
            // Isi detail lain jika perlu...
            detailPolygon: null
        },
        
        "galih_andari": {
            name: "Desa Galih - Tegal Pak Andari",
            year: "2025", status: "Sedang", lat: -7.715, lng: 112.915, hasPolygon: false,
            indices: { H: 2.75, E: 0.99, R: 4.18, cat: "Sedang" },
            detailPolygon: null
        },

        "umbulan": {
            name: "Kawasan Mata Air Umbulan",
            year: "2024", status: "Sangat Baik", lat: -7.730, lng: 112.950, hasPolygon: false,
            indices: { H: 3.50, E: 0.85, R: 12.10, cat: "Sangat Tinggi" },
            detailPolygon: null
        },

        "nguling": {
            name: "Kawasan Penyangga Nguling",
            year: "2024", status: "Sedang", lat: -7.680, lng: 113.050, hasPolygon: false,
            indices: { H: 2.90, E: 0.70, R: 5.50, cat: "Sedang" },
            detailPolygon: null
        }
    }
};
