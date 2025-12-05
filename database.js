// --- DATABASE SIS-KEHATI REJOSO (FIXED GEOJSON) ---

const db_kehati = {
    // 1. DATA PETA (DIGUNAKAN DI DASHBOARD & DETAIL)
    // Format: GeoJSON Standar [Longitude, Latitude]
    polygons: {
        "type": "FeatureCollection",
        "features": [
            // TAMAN 1 (BIRU)
            { 
                "type": "Feature", 
                "properties": { "name": "Taman 1 (Depan)", "id_lokasi": "kehati_aqua", "color": "#29b6f6" },
                "geometry": { 
                    "type": "Polygon", 
                    "coordinates": [[
                        [-7.722551, 112.933906], [-7.722501, 112.933928], [-7.722455, 112.933941], [-7.722384, 112.933969], 
                        [-7.722334, 112.934018], [-7.722309, 112.934063], [-7.722282, 112.934140], [-7.722265, 112.934264], 
                        [-7.722245, 112.934315], [-7.722215, 112.934357], [-7.721930, 112.933150], [-7.722112, 112.933087], 
                        [-7.722165, 112.933316], [-7.722316, 112.933280], [-7.722398, 112.933620], [-7.722419, 112.933680], 
                        [-7.722450, 112.933747], [-7.722477, 112.933796], [-7.722508, 112.933838]
                    ]]
                }
            },
            // TAMAN 2 (MERAH)
            { 
                "type": "Feature", 
                "properties": { "name": "Taman 2 (Tengah)", "id_lokasi": "kehati_aqua", "color": "#ef5350" },
                "geometry": { 
                    "type": "Polygon", 
                    "coordinates": [[
                        [-7.722396, 112.933616], [-7.722466, 112.933597], [-7.722538, 112.933577], [-7.722723, 112.933524], 
            [-7.722778, 112.933490], [-7.722814, 112.933468], [-7.722851, 112.933462], [-7.722897, 112.933460], 
            [-7.722924, 112.933467], [-7.722947, 112.933475], [-7.722980, 112.933495], [-7.723064, 112.933501], 
            [-7.723156, 112.933484], [-7.723209, 112.933480], [-7.723258, 112.933460], [-7.723299, 112.933433], 
            [-7.723345, 112.933396], [-7.723364, 112.933373], [-7.723365, 112.933372], [-7.723364, 112.933324], 
            [-7.723355, 112.933275], [-7.723327, 112.933175], [-7.723316, 112.933090], [-7.723326, 112.933055], 
            [-7.723363, 112.933037], [-7.723483, 112.933006], [-7.723520, 112.932982], [-7.723645, 112.932930], 
            [-7.723833, 112.932852], [-7.723931, 112.932800], [-7.723984, 112.932772], [-7.724020, 112.932739], 
            [-7.724032, 112.932721], [-7.724059, 112.932703], [-7.724057, 112.932646], [-7.724035, 112.932575], 
            [-7.724095, 112.932553], [-7.724150, 112.932535], [-7.724154, 112.932533], [-7.724196, 112.932507], 
            [-7.724196, 112.932502], [-7.724261, 112.932690], [-7.724134, 112.932746], [-7.724054, 112.932781], 
            [-7.723973, 112.932815], [-7.723813, 112.932885], [-7.723599, 112.932977], [-7.723393, 112.933068], 
            [-7.723353, 112.933103], [-7.723355, 112.933131], [-7.723364, 112.933168], [-7.723362, 112.933172], 
            [-7.723403, 112.933325], [-7.723402, 112.933327], [-7.723412, 112.933377], [-7.723434, 112.933469], 
            [-7.723467, 112.933605], [-7.723412, 112.933628], [-7.723380, 112.933629], [-7.723353, 112.933631], 
            [-7.723291, 112.933621], [-7.723257, 112.933606], [-7.723224, 112.933607], [-7.723132, 112.933610], 
            [-7.723015, 112.933615], [-7.723000, 112.933609], [-7.722965, 112.933598], [-7.722965, 112.933598], 
            [-7.722948, 112.933593], [-7.722930, 112.933587], [-7.722897, 112.933578], [-7.722883, 112.933584], 
            [-7.722883, 112.933584], [-7.722840, 112.933599], [-7.722807, 112.933611], [-7.722799, 112.933619], 
            [-7.722792, 112.933626], [-7.722800, 112.933696], [-7.722766, 112.933727], [-7.722717, 112.933753], 
            [-7.722631, 112.933778], [-7.722606, 112.933822], [-7.722581, 112.933837], [-7.722555, 112.933905], 
            [-7.722478, 112.933793], [-7.722426, 112.933691]
                    ]]
                }
            },
            // TAMAN 3 (KUNING - AREA ALAMI)
            { 
                "type": "Feature", 
                "properties": { "name": "Taman 3 (Area Alami)", "id_lokasi": "kehati_aqua", "color": "#fbc02d" },
                "geometry": { 
                    "type": "Polygon", 
                    "coordinates": [[
                        [-7.723085, 112.929750], [-7.723283, 112.929694], [-7.723348, 112.929607], [-7.723519, 112.929518], 
            [-7.724852, 112.932225], [-7.724690, 112.932261], [-7.724634, 112.932281], [-7.724578, 112.932312], 
            [-7.724521, 112.932353], [-7.724483, 112.932403], [-7.724478, 112.932410], [-7.724470, 112.932420], 
            [-7.724422, 112.932471], [-7.724378, 112.932524], [-7.724362, 112.932543], [-7.724344, 112.932584], 
            [-7.724332, 112.932603], [-7.724317, 112.932628], [-7.724261, 112.932688], [-7.724190, 112.932478], 
            [-7.724143, 112.932303], [-7.724055, 112.931995], [-7.723595, 112.931166], [-7.723535, 112.931004], 
            [-7.723491, 112.930860], [-7.723413, 112.930537], [-7.723267, 112.930551], [-7.723227, 112.930383], 
            [-7.723156, 112.930256], [-7.723094, 112.930159], [-7.723055, 112.929998], [-7.722969, 112.929928], 
            [-7.722945, 112.929787], [-7.723085, 112.929750]
                    ]]
                }
            }
        ]
    },

    // 2. DATA DETAIL STATISTIK
    locations: {
        "kehati_aqua": {
            name: "Taman Kehati AQUA Keboncandi",
            desc: "Area konservasi ex-situ seluas 2,67 Ha. Terbagi menjadi Taman 1, 2, dan 3 (Area Alami).",
            year: "2025",
            status: "Sangat Baik",
            lat: -7.723, lng: 112.932,
            hasPolygon: true, // Akan mengambil dari 'polygons' di atas

            indices: { H: 3.99, E: 0.87, R: 16.75, cat: "Sangat Tinggi" },
            birdIndices: { H: 2.91, E: 0.89, R: 4.81 },

            chartLabels: ['2020', '2021', '2022', '2023', '2024', '2025'],
            chartData: [3.41, 3.47, 3.65, 3.74, 3.79, 3.99],

            floraStats: { total: 203, famili: 75, years: ['2020', '2021', '2022', '2023', '2024', '2025'], values: [136, 156, 172, 201, 223, 203] },
            birdStats: { species: 26, family: 17, dom: "Cipoh Kacat, Walet Linchi", key: "Cekakak Sungai" },

            protectedList: [
                { name: "Cemara Norfolk", status: "VU (Rentan)", type: "Flora" },
                { name: "Palem Kuning", status: "NT (Hampir Terancam)", type: "Flora" },
                { name: "Cekakak Sungai", status: "Dilindungi UU", type: "Fauna" },
                { name: "Bubut Jawa", status: "VU / Endemik Jawa", type: "Fauna" }
            ],
            hasTroides: true
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
            hasTroides: false
        },

        "galih_karyono": {
            name: "Desa Galih - Tegal Pak Karyono",
            year: "2025", status: "Sedang", lat: -7.710, lng: 112.925, hasPolygon: false,
            indices: { H: 2.74, E: 0.99, R: 4.03, cat: "Sedang" },
            birdIndices: { H: 2.1, E: 0.6, R: 2.5 },
            chartLabels: ['2025'], chartData: [2.74],
            floraStats: { total: 80, famili: 20, years: ['2025'], values: [80] },
            birdStats: { species: 15, family: 10, dom: "-", key: "-" },
            protectedList: [], hasTroides: false
        },
        
        "galih_andari": {
            name: "Desa Galih - Tegal Pak Andari",
            year: "2025", status: "Sedang", lat: -7.715, lng: 112.915, hasPolygon: false,
            indices: { H: 2.75, E: 0.99, R: 4.18, cat: "Sedang" },
            birdIndices: { H: 2.2, E: 0.65, R: 2.8 },
            chartLabels: ['2025'], chartData: [2.75],
            floraStats: { total: 85, famili: 22, years: ['2025'], values: [85] },
            birdStats: { species: 16, family: 11, dom: "-", key: "-" },
            protectedList: [], hasTroides: false
        },

        "umbulan": {
            name: "Kawasan Mata Air Umbulan",
            year: "2024", status: "Sangat Baik", lat: -7.730, lng: 112.950, hasPolygon: false,
            indices: { H: 3.50, E: 0.85, R: 12.10, cat: "Sangat Tinggi" },
            birdIndices: { H: 3.1, E: 0.8, R: 5.0 },
            chartLabels: ['2024'], chartData: [3.50],
            floraStats: { total: 180, famili: 60, years: ['2024'], values: [180] },
            birdStats: { species: 30, family: 15, dom: "-", key: "-" },
            protectedList: [], hasTroides: false
        },

        "nguling": {
            name: "Kawasan Penyangga Nguling",
            year: "2024", status: "Sedang", lat: -7.680, lng: 113.050, hasPolygon: false,
            indices: { H: 2.90, E: 0.70, R: 5.50, cat: "Sedang" },
            birdIndices: { H: 2.0, E: 0.5, R: 2.0 },
            chartLabels: ['2024'], chartData: [2.90],
            floraStats: { total: 90, famili: 25, years: ['2024'], values: [90] },
            birdStats: { species: 10, family: 5, dom: "-", key: "-" },
            protectedList: [], hasTroides: false
        }
    }
};
