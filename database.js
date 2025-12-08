// --- DATABASE SIS-KEHATI REJOSO (REVISI TIM + PETA FIX) ---

const db_kehati = {
    // ============================================================
    // 1. DATA PETA (POLYGON GEOJSON)
    // ============================================================
    polygons: {
        "type": "FeatureCollection",
        "features": [
            // --- TAMAN KEHATI (3 ZONA) - URUTAN TITIK SUDAH DIPERBAIKI ---
            { 
                "type": "Feature", "properties": { "name": "Taman 1 (Depan)", "id_lokasi": "kehati_aqua", "color": "#29b6f6" },
                "geometry": { "type": "Polygon", "coordinates": [[ 
                    [112.933906, -7.722551], [112.934140, -7.722282], [112.934357, -7.722215], 
                    [112.933150, -7.721930], [112.933316, -7.722165], [112.933620, -7.722398], 
                    [112.933796, -7.722477], [112.933906, -7.722551] 
                ]] }
            },
            { 
                "type": "Feature", "properties": { "name": "Taman 2 (Tengah)", "id_lokasi": "kehati_aqua", "color": "#ef5350" },
                "geometry": { "type": "Polygon", "coordinates": [[ 
                    [112.933616, -7.722396], [112.933524, -7.722723], [112.933468, -7.722814], 
                    [112.933484, -7.723156], [112.933396, -7.723345], [112.933090, -7.723316], 
                    [112.932930, -7.723645], [112.932646, -7.724057], [112.932507, -7.724196], 
                    [112.932885, -7.723813], [112.933325, -7.723403], [112.933605, -7.723467], 
                    [112.933616, -7.722396] 
                ]] }
            },
            { 
                "type": "Feature", "properties": { "name": "Taman 3 (Area Alami)", "id_lokasi": "kehati_aqua", "color": "#fbc02d" },
                "geometry": { "type": "Polygon", "coordinates": [[ 
                    [112.929750, -7.723085], [112.929518, -7.723519], [112.932225, -7.724852], 
                    [112.932281, -7.724634], [112.932410, -7.724478], [112.932543, -7.724362], 
                    [112.932688, -7.724261], [112.932303, -7.724143], [112.931166, -7.723595], 
                    [112.930551, -7.723267], [112.930256, -7.723156], [112.929750, -7.723085] 
                ]] }
            },

            // --- TEGAL PAK ANDARI ---
            {
                "type": "Feature", "properties": { "name": "Andari 01", "id_lokasi": "galih_andari", "color": "#8e44ad" },
                "geometry": { "type": "Polygon", "coordinates": [[ 
                    [112.905288, -7.815048], [112.905335, -7.814989], [112.905167, -7.814931], 
                    [112.905058, -7.814940], [112.904479, -7.815462], [112.904767, -7.816181], 
                    [112.905305, -7.816111], [112.905251, -7.815100], [112.905288, -7.815048] 
                ]] }
            },
            {
                "type": "Feature", "properties": { "name": "Andari 02", "id_lokasi": "galih_andari", "color": "#8e44ad" },
                "geometry": { "type": "Polygon", "coordinates": [[ 
                    [112.899808, -7.805912], [112.899836, -7.805968], [112.900245, -7.805830], 
                    [112.900114, -7.805377], [112.899499, -7.805404], [112.899384, -7.805741], 
                    [112.899477, -7.805882], [112.899808, -7.805912] 
                ]] }
            },

            // --- LAHAN PECATON ---
            {
                "type": "Feature", "properties": { "name": "Lahan Pecaton", "id_lokasi": "galih_pecaton", "color": "#2ecc71" },
                "geometry": { "type": "Polygon", "coordinates": [[ 
                    [112.904844, -7.821934], [112.904906, -7.822271], [112.904954, -7.822509], 
                    [112.905150, -7.823218], [112.905662, -7.823271], [112.905860, -7.822443], 
                    [112.905925, -7.822057], [112.905389, -7.821823], [112.904844, -7.821934] 
                ]] }
            },

            // --- TEGAL KARYONO ---
            {
                "type": "Feature", "properties": { "name": "Tegal Karyono", "id_lokasi": "galih_karyono", "color": "#f39c12" },
                "geometry": { "type": "Polygon", "coordinates": [[ 
                    [112.913096, -7.814480], [112.912977, -7.814377], [112.912688, -7.814222], 
                    [112.912398, -7.814262], [112.912361, -7.814456], [112.912585, -7.814598], 
                    [112.913096, -7.814480] 
                ]] }
            }
        ]
    },

    // 2. DATA DETAIL STATISTIK
    locations: {
        "kehati_aqua": {
            name: "Taman Kehati AQUA Keboncandi",
            desc: "Area konservasi in-situ seluas 2,67 Ha. Terbagi menjadi Taman 1, 2, dan 3 (Area Alami).",
            year: "2025", status: "Sangat Baik",
            lat: -7.723, lng: 112.932,
            hasPolygon: true,
            // Header Image: Upload foto beri nama 'header_kehati.jpg'
            headerImage: "header_kehati.jpg", 

            indices: { H: 3.99, E: 0.87, R: 15.72, cat: "Sangat Tinggi" },
            birdIndices: { H: 2.91, E: 0.89, R: 4.81 },
            chartLabels: ['2020', '2021', '2022', '2023', '2024', '2025'],
            chartData: [3.41, 3.47, 3.65, 3.74, 3.79, 3.99],
            
            floraStats: { total: 203, famili: 75, years: ['2020','2025'], values: [136, 203] },
            birdStats: { species: 26, family: 17, dom: "Cucak Kutilang, Bondol Peking", key: "Bubut Jawa" },
            
            // LIST DILINDUNGI (LENGKAP DENGAN FOTO)
            // Upload foto burung beri nama sesuai di bawah
            protectedList: [
                { name: "Cemara Norfolk (Araucaria heterophylla)", status: "IUCN: VU (Rentan) | P106", type: "Flora", img: "cemara_norfolk.jpg" },
                { name: "Palem Kuning (Dypsis lutescens)", status: "IUCN: NT (Hampir Terancam) | CITES App II", type: "Flora", img: "palem_kuning.jpg" },
                { name: "Bubut Jawa (Centropus nigrorufus)", status: "IUCN: VU (Rentan) | P106 | Endemik", type: "Fauna", img: "bubut_jawa.jpg" },
                { name: "Biawak Air Asia (Varanus salvator)", status: "IUCN: LC | CITES App II", type: "Fauna", img: "biawak_air.jpg" }
            ],
            
            flagshipSpecies: { // Dulu Kupu-kupu
                name: "Kupu-kupu Raja (Genus Troides)",
                desc: "Spesies indikator kualitas lingkungan. Dilindungi PERMENLHK & CITES.",
                status: "DILINDUNGI",
                img: "kupu_troides.jpg"
            },
            
            // Detail Polygon (Disamakan dengan dashboard agar tidak kotak)
            detailPolygon: [
                [[-7.722551, 112.933906], [-7.722215, 112.934357], [-7.721930, 112.933150], [-7.722398, 112.933620], [-7.722551, 112.933906]], // T1
                [[-7.722396, 112.933616], [-7.722723, 112.933524], [-7.723345, 112.933396], [-7.724057, 112.932646], [-7.722396, 112.933616]], // T2
                [[-7.723085, 112.929750], [-7.723519, 112.929518], [-7.724852, 112.932225], [-7.724261, 112.932688], [-7.723085, 112.929750]]  // T3
            ]
        },
        
        "galih_pecaton": {
            name: "Desa Galih - Lahan Pecaton",
            desc: "Area recharge mata air dengan vegetasi campuran.",
            year: "2025", status: "Baik", lat: -7.822, lng: 112.905, hasPolygon: true,
            headerImage: "header_pecaton.jpg", // Ganti foto lokasi pecaton

            indices: { H: 3.11, E: 0.79, R: 7.93, cat: "Tinggi" },
            // REVISI DATA BURUNG (PDF Hal 4)
            birdIndices: { H: 3.07, E: 0.95, R: 5.33 },
            
            chartLabels: ['2024', '2025'], chartData: [2.60, 3.11],
            
            // REVISI FLORA: 50 Jenis
            floraStats: { total: 50, famili: 25, years: ['2024','2025'], values: [35, 50] },
            
            // REVISI DOMINASI BURUNG
            birdStats: { species: 25, family: 19, dom: "Tepekong Jambul (Hemiprocne longipennis)", key: "Bubut Jawa (Centropus nigrorufus)" },
            
            protectedList: [
                { name: "Bubut Jawa (Centropus nigrorufus)", status: "IUCN: VU | P106 | Endemik", type: "Fauna", img: "bubut_jawa.jpg" },
                { name: "Tupai Kekes (Tupaia javanica)", status: "IUCN: LC | CITES App II", type: "Fauna", img: "tupai_kekes.jpg" }
            ],
            
            // Flagship Species Pecaton (Burung Bubut)
            flagshipSpecies: {
                name: "Bubut Jawa (Centropus nigrorufus)",
                desc: "Burung endemik Jawa yang statusnya Rentan (Vulnerable).",
                status: "DILINDUNGI / ENDEMIK",
                img: "bubut_jawa.jpg"
            },

            detailPolygon: [
                [[ -7.821934, 112.904844 ], [ -7.822091, 112.904874 ], [ -7.822509, 112.904954 ], [ -7.823218, 112.905150 ], [ -7.823271, 112.905662 ], [ -7.822238, 112.905875 ], [ -7.821881, 112.905548 ], [ -7.821827, 112.905051 ], [ -7.821934, 112.904844 ]]
            ]
        },

        "galih_karyono": {
            name: "Desa Galih - Tegal Pak Karyono",
            year: "2025", status: "Sedang", lat: -7.814, lng: 112.913, hasPolygon: true,
            headerImage: "header_karyono.jpg",
            indices: { H: 2.74, E: 0.99, R: 4.03, cat: "Sedang" },
            birdIndices: { H: 2.1, E: 0.6, R: 2.5 },
            chartLabels: ['2025'], chartData: [2.74],
            floraStats: { total: 80, famili: 20, years:['2025'], values:[80] },
            birdStats: { species: 15, family: 10, dom: "-", key: "-" },
            protectedList: [], flagshipSpecies: null, detailPolygon: null
        },
        
        "galih_andari": {
            name: "Desa Galih - Tegal Pak Andari",
            year: "2025", status: "Sedang", lat: -7.815, lng: 112.905, hasPolygon: true,
            headerImage: "header_andari.jpg",
            indices: { H: 2.75, E: 0.99, R: 4.18, cat: "Sedang" },
            birdIndices: { H: 2.2, E: 0.65, R: 2.8 },
            chartLabels: ['2024', '2025'], chartData: [2.72, 2.75],
            floraStats: { total: 85, famili: 22, years: ['2024', '2025'], values: [70, 85] },
            birdStats: { species: 16, family: 11, dom: "Maducita", key: "Elang Bido" },
            protectedList: [{ name: "Elang Ular Bido", status: "Dilindungi", type: "Fauna", img: "elang_bido.jpg" }],
            flagshipSpecies: null, detailPolygon: null
        },

        "umbulan": {
            name: "Kawasan Mata Air Umbulan",
            year: "2024", status: "Sangat Baik", lat: -7.730, lng: 112.950, hasPolygon: false,
            headerImage: "header_umbulan.jpg",
            indices: { H: 3.50, E: 0.85, R: 12.10, cat: "Sangat Tinggi" },
            birdIndices: { H: 3.1, E: 0.8, R: 5.0 },
            chartLabels: ['2024'], chartData: [3.50],
            floraStats: { total: 180, famili: 60, years:['2024'], values:[180] },
            birdStats: { species: 30, family: 15, dom: "-", key: "-" },
            protectedList: [], flagshipSpecies: null, detailPolygon: null
        },

        "nguling": {
            name: "Kawasan Penyangga Nguling",
            year: "2024", status: "Sedang", lat: -7.680, lng: 113.050, hasPolygon: false,
            headerImage: "header_nguling.jpg",
            indices: { H: 2.90, E: 0.70, R: 5.50, cat: "Sedang" },
            birdIndices: { H: 2.0, E: 0.5, R: 2.0 },
            chartLabels: ['2024'], chartData: [2.90],
            floraStats: { total: 90, famili: 25, years:['2024'], values:[90] },
            birdStats: { species: 10, family: 5, dom: "-", key: "-" },
            protectedList: [], flagshipSpecies: null, detailPolygon: null
        }
    }
};
