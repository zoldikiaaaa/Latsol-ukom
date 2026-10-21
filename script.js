// ================================
// DATA SOAL
// ================================

const questions = [

    {
        category: "Keperawatan Dasar",

        question:
            "Pasien datang ke IGD dengan keluhan tidak sadarkan diri. Hasil pemeriksaan menunjukkan TD 80/50 mmHg, nadi 110x/menit, RR 26x/menit, suhu 37,6 °C. Pasien tampak lemas, keluar keringat banyak. Hasil pemeriksaan GDS (Gula Darah Sewaktu) 50 mg/dl. Apakah tindakan segera yang harus dilakukan?",

        options: [
            "Pasang infus",
            "Monitor tanda-tanda vital",
            "Memberikan injeksi glukosa 40% bolus intravena",
            "Memberikan injeksi paracetamol",
            "Memberikan cairan RL"
        ],

        answer: 2,

        explanation:
            "GDS 50 mg/dL disertai penurunan kesadaran menunjukkan hipoglikemia berat. Perawat perlu segera menilai dan menjaga jalan napas, pernapasan, dan sirkulasi, memeriksa glukosa, serta memberikan glukosa intravena sesuai protokol dan instruksi klinis. Pantau ulang GDS dan respons pasien. Dari pilihan yang tersedia, C merupakan jawaban yang dimaksud.Identifikasi pasien menggunakan minimal dua identitas yang sesuai kebijakan fasilitas. Nomor kamar bukan identitas pasien."
    },


    {
        category: "Keperawatan Gawat Darurat",

        question:
            "Seorang perempuan berusia 60 tahun dibawa ke rumah sakit karena saat di rumah tiba-tiba tidak sadarkan diri dan mengalami kelemahan anggota gerak sebelah kanan. Pasien didiagnosis stroke. Apakah pemeriksaan penunjang yang paling tepat dilakukan?",
        options: [
            "Darah rutin",
            "CT scan",
            "EKG",
            "Thorax",
            "USG"
        ],

        answer: 1,

        explanation:
            "CT scan kepala tanpa kontras merupakan pemeriksaan awal penting pada dugaan stroke akut untuk membedakan stroke perdarahan dari stroke iskemik. Pembedaan ini diperlukan karena tata laksana keduanya berbeda. Pemeriksaan dilakukan segera sesuai alur penanganan stroke."
    },


    {
        category: "Keperawatan Anak",

        question:
            "Terjadi sebuah kecelakaan bus, di mana terdapat sejumlah korban. Kemudian tim emergency yang telah berada di tempat kejadian melakukan triase. Pada salah satu korban yang ditangani, terdapat korban henti napas. Setelah dilakukan pengkajian dini dan tindakan chin lift, korban masih tidak bernapas. Kemudian dilakukan pembukaan jalan napas, korban masih tidak bernapas. Berdasarkan kasus tersebut, warna label apakah yang diberikan pada korban tersebut?",

        options: [
            "Putih",
            "Hijau",
            "Kuning",
            "Merah",
            "Hitam"
        ],

        answer: 4,

        explanation:
            "Pada algoritma triase bencana START, korban yang tetap tidak bernapas setelah jalan napas dibuka dikategorikan label hitam, yang menunjukkan meninggal atau tidak dapat diselamatkan dalam konteks prioritas triase bencana. Ini berbeda dari penanganan individual di fasilitas kesehatan, yang mengikuti protokol resusitasi."
    },


    {
        category: "Keperawatan Maternitas",

        question:
            "Bapak Ali seorang kepala rumah tangga di keluarganya. Bapak Ali memiliki seorang istri dan seorang anak yang masih dalam proses menyusui. Sebagai pengambil keputusan, Bapak Ali selalu memutuskan masalah dalam keluarganya dengan cara diam dan tanpa komunikasi dengan anggota keluarganya. Bapak Ali terlalu cuek dengan istrinya yang mengurus rutinitas rumah tangganya hanya seorang diri. Sehingga masalah yang ada dalam keluarga tidak dibicarakan secara terbuka. Apakah struktur keluarga yang dikaji pada kasus di atas?",

        options: [
            "Struktur kekuatan keluarga",
            "Struktur peran keluarga",
            "Pola komunikasi",
            "Fungsi keluarga",
            "Nilai dan norma"
        ],

        answer: 2,

        explanation:
            "Kasus menekankan bahwa masalah keluarga tidak dibicarakan secara terbuka dan keputusan diambil tanpa komunikasi. Oleh karena itu, aspek yang sedang dikaji adalah pola komunikasi keluarga, bukan terutama pembagian peran atau nilai keluarga."
    },


    {
        category: "Keperawatan Medikal Bedah",

        question:
            "Berdasarkan data, di Desa Makmur terdapat 250 balita. 80% balita berada di garis hijau, 20% balita berada di garis kuning, dan tidak ada satu balita pun yang berada di garis merah. Dalam suatu perkumpulan para ibu yang memiliki balita, perawat menjelaskan tentang makanan tambahan yang bergizi untuk balita. Apakah upaya kesehatan yang dilakukan perawat tersebut?",

        options: [
            "Rehabilitatif",
            "Preventif",
            "Promotif",
            "Kognitif",
            "Kuratif"
        ],

        answer: 2,

        explanation:
            "Pendidikan tentang makanan tambahan bergizi bertujuan meningkatkan pengetahuan ibu dan memelihara atau meningkatkan status kesehatan balita. Karena fokusnya meningkatkan kesehatan, upaya tersebut termasuk promotif."
    },


    {
        category: "Keperawatan Dasar",

        question:
            "Di Desa Mulur terjadi wabah diare karena masyarakat mempunyai kebiasaan menggunakan air sungai untuk kebutuhan mandi, sedangkan warganya 30% masih membuang sampah di sungai. Sebagai pertolongan pertama pada kasus diare, perawat memberikan penyuluhan dan demonstrasi tentang pembuatan oralit yang benar. Apakah upaya kesehatan yang dilakukan oleh perawat tersebut?",

        options: [
            "Rehabilitatif",
            "Preventif",
            "Promotif",
            "Kognitif",
            "Kuratif"
        ],

        answer: 4,

        explanation:
            "Oralit digunakan untuk mengganti cairan dan elektrolit yang hilang akibat diare yang sudah terjadi, sehingga dalam konteks pertolongan kasus diare soal ini mengarah ke kuratif. Namun, penyuluhan cara membuat oralit juga bersifat edukatif dan dapat mencegah komplikasi dehidrasi; klasifikasi dapat bergantung pada tujuan utama intervensi."
    },


    {
        category: "Keperawatan Anak",

        question:
            "Di Kelurahan Makmur Sejati terdapat lima orang balita menderita muntaber. Diketahui sebanyak 150 keluarga di daerah tersebut menggunakan air sungai sebagai sumber air minum. Perawat komunitas melakukan wawancara kepada salah satu ketua RT di Kelurahan Makmur Sejati dan diperoleh data sekitar 75% masyarakat membuang sampah dan buang air besar di sungai tersebut. Apa tindakan keperawatan yang tepat untuk mengatasi permasalahan di atas?",

        options: [
            "Membuat tempat sampah dekat aliran sungai",
            "Melaksanakan kerja bakti dengan masyarakat",
            "Penyuluhan tentang perilaku1 hidup bersih dan sehat",
            "Pemantauan dari dinas kesehatan setiap sebulan sekali",
            "Setiap tiga bulan sekali mengadakan lomba lingkungan2 bersih"
        ],

        answer: 2,

        explanation:
            "Perilaku menggunakan air sungai untuk minum dan membuang sampah serta tinja ke sungai meningkatkan risiko penularan penyakit saluran cerna. Penyuluhan PHBS dapat memperbaiki perilaku terkait air minum aman, cuci tangan, pengelolaan sampah, dan penggunaan jamban. Penyuluhan perlu disertai upaya penyediaan air bersih dan sanitasi yang memadai."
    },


    {
        category: "Keperawatan Gawat Darurat",

        question:
            "Di sebuah desa nelayan, terdapat kelompok nelayan yang tidak mempunyai perahu untuk melaut sehingga mereka menjadi penyewa perahu setiap hari. Desa tersebut dihuni oleh 59 kepala keluarga yang terdiri dari 400 jiwa dengan 1 buah Puskesmas. Puskesmas hanya memiliki 2 orang dokter, yaitu dokter gigi dan dokter umum, perawat 1 orang dan bidan pun 1 orang. Penduduk tidak ber-KB, kurang olahraga, dan kurang konsumsi makanan bergizi. Pada musim kemarau, sumber air bersih minim sekali dan banyak yang menderita diare, anak-anak pun tidak melanjutkan pendidikan ke jenjang SMP karena terpaksa membantu orang tua. Apa prioritas masalah pada kasus tersebut?",

        options: [
            "Defisit pengetahuan",
            "Ketidakefektifan pemeliharaan kesehatan komunitas",
            "Perilaku cenderung berisiko",
            "Ketidakefektifan regimen terapeutik",
            "Ketidakefektifan koping"
        ],

        answer: 1,

        explanation:
            "Masalah terjadi pada tingkat komunitas dan mencakup akses layanan kesehatan yang terbatas, kurangnya air bersih, diare, pola hidup yang kurang sehat, serta masalah sosial ekonomi. Diagnosis ini paling luas mencakup data kesehatan komunitas yang tersedia."
    },


    {
        category: "Keperawatan Medikal Bedah",

        question:
            "Di sebuah ruang bedah diketahui jumlah tenaga keperawatan sebanyak 18 orang, terdiri dari lulusan Sarjana Keperawatan 4 orang, D3 Keperawatan 14 orang, dengan kapasitas tempat tidur 22 buah. BOR (Bed Occupancy Rate) 60%. Tingkat ketergantungan pasien yaitu: total care 4 orang, intermediate 2 orang, parsial 4 orang. Apakah metode asuhan keperawatan yang tepat digunakan pada ruangan tersebut?",

        options: [
            "Metode tim",
            "Metode primer",
            "Metode kasus",
            "Metode fungsional",
            "Metode modifikasi"
        ],

        answer: 0,

        explanation:
            "Metode tim mengorganisasi perawat dalam kelompok yang dipimpin ketua tim untuk memberikan asuhan kepada sekelompok pasien. Metode ini memungkinkan pembagian tugas berdasarkan kompetensi, koordinasi, dan tingkat ketergantungan pasien. Data jumlah perawat saja tidak cukup untuk menentukan metode secara mutlak, tetapi dari opsi yang ada metode tim paling sesuai."
    },


    {
        category: "Keperawatan Dasar",

        question:
            "Diketahui angka kejadian gizi buruk tahun 2012 di Dinas Kesehatan sebanyak 6%. Berdasarkan hasil survei di sebuah desa, ditemukan angka gizi buruk 7% dalam 3 bulan terakhir. Selain itu, 80% balita pernah mengalami diare. Keadaan lingkungan tampak kotor dan kebiasaan anak balita bermain di tanah, serta ketersediaan air bersih yang minim. Berdasarkan data tersebut, apakah faktor presipitasi timbulnya masalah pada kasus di atas?",

        options: [
            "Tingginya kejadian diare di desa",
            "Tingginya kejadian gizi buruk di desa",
            "Rendahnya sanitasi lingkungan di desa",
            "Risiko meningkatnya kasus gizi buruk di desa",
            "Tingkat imunitas penduduk yang rendah"
        ],

        answer: 2,

        explanation:
            "Lingkungan kotor dan keterbatasan air bersih meningkatkan risiko infeksi, termasuk diare. Diare berulang dapat mengganggu penyerapan zat gizi dan memperburuk status gizi balita. Karena itu, sanitasi lingkungan merupakan faktor pencetus penting dalam kasus ini."
    },


    {
        category: "Keperawatan Dasar",

        question: 
            "Hasil pengkajian yang dilakukan oleh perawat Puskesmas ditemukan data bahwa belum terdapat pengelolaan sampah yang benar. Sampah dibakar dan dibuang di pekarangan sehingga berserakan di area pekarangan warga. Perawat bersama tokoh masyarakat membentuk kader peduli sampah yang dibentuk dari remaja karang taruna. Apakah strategi intervensi keperawatan komunitas yang dilakukan oleh perawat?",
        
        options: [
            "Kerja sama",
            "Pendidikan kesehatan",
            "Kerja sama dan penkes",
            "Pemberdayaan masyarakat",
            "Pemberdayaan kader"
        ],

        answer: 3,

        explanation: 
            "Pembentukan kader dari anggota karang taruna bertujuan melibatkan masyarakat agar mampu mengorganisasi dan menjalankan solusi terhadap masalah sampah secara berkelanjutan. Ini merupakan strategi pemberdayaan masyarakat; kader menjadi penggerak perubahan di lingkungannya."
    },


    {
        category: "Keperawatan Dasar",

        question:
            "Ny. A berusia 35 tahun G2P1A0 hamil 39 minggu, datang ke poliklinik bersalin pada pukul 09.00 WIB. Perawat sedang melakukan pemeriksaan, didapatkan hasil pembukaan 2 cm, ketuban utuh, kepala sudah masuk PAP (Pintu Atas Panggul), his datang 10 menit sekali. Sesuai tahapan persalinan, termasuk apakah kondisi pasien tersebut?",
        
        options: [
            "Kala I fase laten",
            "Kala I fase aktif",
            "Kala II",
            "Kala III",
            "Kala IV"
        ],

        answer: 0,

        explanation:
            "Kala I dimulai sejak kontraksi persalinan menyebabkan perubahan serviks sampai pembukaan lengkap. Pembukaan 2 cm dengan kontraksi yang masih jarang sesuai gambaran fase laten menurut klasifikasi yang lazim digunakan pada soal."
    },


    {
        category: "Keperawatan Dasar",
        
        question: 'Pada intervensi keperawatan, perawat melatih Tn. A untuk mengatakan, "Saya tidak mau dengar! Kamu tidak ada!". Hal tersebut merupakan salah satu cara mengontrol halusinasi dengan cara?',

        options: [
            "Menghardik halusinasi",
            "Bercakap-cakap dengan orang lain",
            "Melakukan aktivitas yang terarah",
            "Menggunakan obat secara teratur",
            "Meningkatkan kontak dengan realita"
        ],

        answer: 0,

        explanation: 
            "Menghardik adalah teknik yang dilakukan pasien dengan tegas menolak atau menyuruh halusinasi pergi, misalnya mengatakan bahwa ia tidak mau mendengarkan suara tersebut. Teknik ini biasanya dilatih bersama strategi lain, seperti bercakap-cakap, melakukan aktivitas, dan minum obat sesuai resep."
    },


    {
        category: "Keperawatan Medikal Bedah",
        
        question: "Pada pasien dengan stroke, apabila tidak mendapatkan penanganan maka dapat menyebabkan terjadinya dekubitus. Apakah intervensi utama yang harus dilakukan untuk mencegah terjadinya dekubitus pada pasien dengan stroke? ",

        options: [
            "Memberikan pendidikan kesehatan",
            "Memotivasi keluarga untuk membantu pasien",
            "Mengubah posisi setiap 2 jam sekali",
            "Memberikan makan TKTP (Tinggi Kalori Tinggi Protein)",
            "Kolaborasi pemberian obat"
        ],

        answer: 2,

        explanation: 
            "Reposisi berkala mengurangi tekanan yang menetap pada area tulang menonjol. Pada praktiknya, jadwal reposisi disesuaikan dengan risiko pasien, kondisi kulit, toleransi, dan permukaan penyangga; kulit juga perlu diperiksa dan dijaga tetap bersih serta kering."
    },


    {
        category: "Keperawatan Medikal Bedah",

        question: "Pada saat Anda sedang merawat luka, ditemukan kondisi jaringan luka berwarna merah, bengkak, dan mudah berdarah. Berdasarkan fase penyembuhan luka, termasuk dalam kategori apakah kondisi pasien tersebut?",

        options: [
            "Inflamasi",
            "Koagulasi",
            "Proliferasi",
            "Maturasi",
            "Remodeling"
        ],

        answer: 0,

        explanation: 
            "Fase inflamasi merupakan respons awal setelah cedera. Tanda seperti kemerahan dan pembengkakan dapat muncul akibat peningkatan aliran darah dan respons peradangan. Luka yang mudah berdarah juga perlu dinilai sesuai jenis luka dan tahap penyembuhannya."
    },


    {
        category: "Keperawatan Medikal Bedah",

        question: "Pada saat melakukan pemeriksaan fisik pada pasien dengan gagal jantung kongestif, pasien tampak dispnea. Pada auskultasi terdengar ronkhi pada kedua basal paru. Manakah yang harus segera dilakukan oleh perawat?",

        options: [
            "Memberikan oksigen dengan nasal kanul 3 liter per menit",
            "Mengukur frekuensi napas",
            "Mengukur tekanan darah",
            "Mengatur posisi semi fowler",
            "Kolaborasi pemeriksaan rontgen thorax"
        ],

        answer: 3,

        explanation: 
            "Posisi semi-Fowler membantu ekspansi paru dan dapat mengurangi sesak pada pasien gagal jantung dengan kongesti paru. Perawat juga segera menilai jalan napas, frekuensi napas, saturasi oksigen, dan tanda vital; oksigen diberikan bila ada hipoksemia atau sesuai protokol."
    },


    {
        category: "Keperawatan Medikal Bedah",

        question: "Pasien datang ke IGD dengan keluhan nyeri dada, lemas, dan keluar keringat dingin. Hasil pemeriksaan fisik didapatkan frekuensi napas 30x/menit, suhu 37,5 °C, tekanan darah 100/60 mmHg. Untuk mengetahui diagnosis pasien, pemeriksaan penunjang apakah yang harus segera dilakukan?",

        options: [
            "Foto rontgen",
            "EKG",
            "Pemeriksaan laboratorium darah",
            "Kateterisasi jantung dengan angiografi",
            "Enzim atau isoenzim jantung"
        ],

        answer: 1,

        explanation: 
            "Pada dugaan sindrom koroner akut, EKG 12 sadapan harus dilakukan secepatnya, idealnya dalam 10 menit sejak kontak medis pertama. Pemeriksaan troponin jantung juga diperlukan, tetapi tidak boleh menunda EKG awal."
    },


    {
        category: "Keperawatan Medikal Bedah",

        question: "Pasien datang ke IGD dengan keluhan tidak sadarkan diri di rumah. Hasil pemeriksaan TD 80/50 mmHg, nadi 110x/menit, RR 26x/menit, suhu 37,6 °C. Pasien tampak lemas, keluar keringat banyak, gemetar, dan jantung berdebar. Pemeriksaan penunjang yang direkomendasikan adalah?",

        options: [
            "Darah lengkap",
            "Urine lengkap",
            "Tes fungsi ginjal",
            "Tes fungsi hati",
            "Gula darah sewaktu"
        ],

        answer: 4,

        explanation: 
            "Penurunan kesadaran yang disertai keringat banyak, gemetar, dan palpitasi dapat terjadi pada hipoglikemia. GDS perlu diperiksa segera karena hasilnya dapat mengarahkan pada terapi yang harus diberikan cepat."
    },


    {
        category: "Keperawatan Medikal Bedah",

        question: "Pasien datang ke IGD dengan keluhan tidak sadarkan diri karena jatuh dari sepeda motor. Hasil pemeriksaan fisik didapatkan TD 70/40 mmHg, nadi 70x/menit, RR 28x/menit, suhu 36,3 °C. Pasien tampak lemas dan pucat, keluar keringat banyak, dan memar di bagian abdomen. Pasien didiagnosis syok hipovolemik. Apakah intervensi yang harus segera dilakukan?",

        options: [
            "Memosisikan kepala lebih rendah daripada kaki",
            "Kolaborasi pemberian obat",
            "Resusitasi cairan",
            "Kompres hangat",
            "Monitor tanda-tanda vital"
        ],

        answer: 2,

        explanation: 
            "Syok hipovolemik adalah kegawatdaruratan akibat volume sirkulasi yang tidak mencukupi, sering karena perdarahan. Penanganan mencakup ABC, kontrol perdarahan, akses IV/IO, resusitasi cairan atau produk darah sesuai protokol trauma, serta evaluasi sumber perdarahan. Posisi saja tidak mengatasi penyebab syok."
    },


    {
        category: "Keperawatan Medikal Bedah",

        question: "Pasien datang ke IGD dengan keluhan tidak sadarkan diri karena jatuh dari sepeda motor. Hasil pemeriksaan fisik didapatkan TD 70/40 mmHg, nadi 70x/menit, RR 28x/menit, suhu 36,3 °C. Pasien tampak lemas dan pucat, keluar keringat banyak, dan memar di bagian abdomen. Pasien didiagnosis syok hipovolemik. Apakah tanda gejala yang muncul pada pasien syok?",

        options: [
            "Demam, sesak napas",
            "Pucat, keringat dingin",
            "Hipotensi",
            "Hipertermi",
            "Sianosis"
        ],

        answer: 1,

        explanation: 
            "Pucat dan keringat dingin menunjukkan respons kompensasi tubuh dan perfusi perifer yang buruk. Hipotensi juga merupakan tanda syok, tetapi pada soal kombinasi pucat dan keringat dingin merupakan pilihan yang paling menggambarkan tanda klinis khas."
    },


    {
        category: "Keperawatan Medikal Bedah",

        question: "Pasien dengan gagal jantung tampak edema dan asites. Hasil pemeriksaan fisik didapatkan tekanan darah 120/90 mmHg, pernapasan 32x/menit, nadi 110x/menit, suhu 37 °C. Mengeluh sesak jika banyak bergerak, hasil auskultasi terdengar suara ronkhi di kedua basal paru. Apa sumber masalah pada klien di atas?",

        options: [
            "Gangguan pertukaran gas berhubungan dengan penumpukan sekret",
            "Kelebihan volume cairan berhubungan dengan penurunan curah jantung",
            "Penurunan curah jantung berhubungan dengan penurunan kontraktilitas otot jantung",
            "Pola napas tidak efektif berhubungan dengan penurunan ekspansi paru",
            "Intoleransi aktivitas berhubungan dengan penurunan curah jantung"
        ],

        answer: 1,

        explanation: 
            "Edema, asites, dan ronki basal mengarah pada kongesti akibat retensi cairan pada gagal jantung. Penurunan fungsi pompa jantung dapat meningkatkan tekanan vena dan menyebabkan cairan menumpuk di jaringan serta paru."
    },


    {
        category: "Keperawatan Gawat Darurat",

        question: "Pasien dibawa ke IGD setelah terjatuh dari sepeda motor. Hasil pemeriksaan didapatkan pasien tidak sadarkan diri, TD 70/40 mmHg, nadi 70x/menit, RR 28x/menit, suhu 36,3°C. Pasien tampak lemas, pucat, berkeringat, dan tampak memar di bagian abdomen. Pasien didiagnosis mengalami syok hipovolemik. Apakah penyebab syok yang mungkin terjadi pada kasus di atas?",

        options: [
            "Terjatuh dari sepeda motor",
            "Terkejut",
            "Cedera thorax",
            "Cedera abdomen",
            "Sianosis"
        ],

        answer: 3,

        explanation: 
            "Memar pada abdomen setelah trauma dapat menunjukkan perdarahan internal, misalnya akibat cedera organ intraabdomen. Kehilangan darah menurunkan volume sirkulasi dan dapat menimbulkan syok hipovolemik. Pasien memerlukan penanganan trauma segera."
    },


    {
        category: "Keperawatan Gawat Darurat",

        question: "Pasien dibawa ke rumah sakit karena mengalami luka bakar, akibat dari ledakan kompor gas saat pasien akan memasak makanan. Luka bakar terletak pada wajah, leher, tangan, dan dada. Dengan menggunakan rumus rule of nine, berapa luas luka bakar yang dialami oleh pasien tersebut?",

        options: [
            "15%",
            "20%",
            "35%",
            "45%",
            "50%"
        ],

        answer: 1,

        explanation: 
            "Perkiraan soal tampaknya menjumlahkan kepala dan leher 9%, dada bagian depan sekitar 9%, serta kedua tangan sekitar 1% tiap tangan sehingga mendekati 20%. Namun, rule of nines dewasa menghitung seluruh lengan sebagai 9% per lengan, sedangkan tangan saja jauh lebih kecil; luas sebenarnya tidak dapat dipastikan tanpa mengetahui bagian mana yang terbakar. Wajah/leher, dada, dan tangan juga memerlukan penilaian khusus karena berisiko tinggi."
    },


    {
        category: "Keperawatan Medikal Bedah",

        question: "Pasien laki-laki berusia 36 tahun, dirawat di rumah sakit dengan keluhan mual muntah sejak 4 hari yang lalu, pasien mengatakan nyeri ulu hati. Sklera mata dan kulit pasien tampak kuning. Hasil pemeriksaan ada pembesaran hati. Pasien didiagnosis hepatitis. Apakah pemeriksaan fisik yang paling menunjang diagnosis tersebut?",

        options: [
            "Sklera dan kulit kuning",
            "Pucat",
            "Leukosit",
            "Mual muntah",
            "SGPT, SGOT"
        ],

        answer: 0,

        explanation: 
            "Ikterus pada sklera dan kulit merupakan temuan pemeriksaan fisik yang mendukung gangguan metabolisme bilirubin, termasuk pada hepatitis. SGPT dan SGOT merupakan pemeriksaan laboratorium, bukan pemeriksaan fisik."
    },


    {
        category: "Keperawatan Medikal Bedah",

        question: "Pasien laki-laki berusia 50 tahun datang ke rumah sakit dengan keluhan sesak napas disertai keringat dingin. Hasil pemeriksaan fisik didapatkan frekuensi napas 30x/menit, keluar keringat dingin, aktivitas pasien hanya di tempat tidur dengan bantuan penuh, dan pasien selalu merasa sesak bahkan saat melakukan aktivitas ringan. Menurut NYHA, pasien tersebut termasuk dalam klasifikasi sesak napas derajat berapa?",

        options: [
            "I",
            "II",
            "III",
            "IV",
            "V"
        ],

        answer: 3,

        explanation: 
            "NYHA kelas IV menggambarkan pasien yang mengalami gejala gagal jantung saat istirahat dan tidak mampu melakukan aktivitas fisik tanpa rasa tidak nyaman. Deskripsi pasien yang sesak bahkan dengan aktivitas sangat ringan paling mendekati kelas IV."
    },


    {
        category: "Keperawatan Medikal Bedah",

        question: "Pasien laki-laki berusia 55 tahun didiagnosis gagal jantung kongestif. Saat ini mengeluh sesak napas, kepala pusing, dan lelah. Kedua tungkai teraba dingin dan tampak edema. Tekanan darah 90/60 mmHg, nadi 100x/menit, frekuensi napas 30x/menit. Pasien merasa cemas dengan keadaannya. Apa penyebab timbulnya keluhan pada pasien tersebut?",

        options: [
            "Adanya penumpukan cairan di paru-paru",
            "Adanya pembengkakan pada laring",
            "Adanya penyempitan spasme",
            "Adanya pembengkakan jantung",
            "Adanya alergi"
        ],

        answer: 0,

        explanation: 
            "Pada gagal jantung, penumpukan cairan di paru dapat menyebabkan sesak napas. Namun, tungkai dingin, pusing, dan tekanan darah rendah juga mengarah pada curah jantung/perfusi yang menurun. Karena pilihan menanyakan penyebab keluhan sesak, A paling mungkin dimaksud."
    },


    {
        category: "Keperawatan Medikal Bedah",

        question: "Pasien laki-laki berusia 55 tahun didiagnosis gagal jantung kongestif. Saat ini mengeluh sesak napas, kepala pusing, dan lelah. Kedua tungkai teraba dingin dan tampak edema. Tekanan darah 90/60 mmHg, nadi 100x/menit, frekuensi napas 30x/menit. Pasien merasa cemas dengan keadaannya. Apakah masalah keperawatan utama pada pasien di atas?",

        options: [
            "Intoleransi aktivitas",
            "Penurunan curah jantung",
            "Nyeri",
            "Kelebihan volume cairan",
            "Pola napas tidak teratur"
        ],

        answer: 1,

        explanation: 
            "Tekanan darah rendah, pusing, kelelahan, dan ekstremitas dingin menunjukkan perfusi yang menurun dan mengarah pada penurunan curah jantung. Sesak serta edema juga penting, tetapi tanda hipoperfusi membuat masalah curah jantung menjadi prioritas."
    },


    {
        category: "Keperawatan Medikal Bedah",

        question: "Pasien laki-laki dirawat di bangsal penyakit dalam dengan keluhan batuk berdahak yang tidak sembuh-sembuh. Hasil BTA sputum positif dan pasien diberi obat rutin yang memiliki efek samping dapat menyebabkan gangguan penglihatan. Apakah obat tersebut?",

        options: [
            "Isoniazid",
            "Rifampisin",
            "Pirazinamid",
            "Etambutol",
            "Streptomisin"
        ],

        answer: 3,

        explanation: 
            "Etambutol dapat menyebabkan neuritis optik, gangguan ketajaman penglihatan, dan gangguan membedakan warna. Pasien perlu diberi edukasi untuk segera melaporkan perubahan penglihatan dan menjalani pemantauan sesuai protokol."
    },


    {
        category: "Keperawatan Medikal Bedah",

        question: "Pasien perempuan dirawat di bangsal penyakit dalam dengan keluhan nyeri dan panas di daerah anus, apalagi saat BAB (Buang Air Besar). Saat dilakukan pemeriksaan, didapatkan terdapat benjolan pada anus. Pasien tampak meringis ketika disentuh daerah anus. Apakah masalah keperawatan utama pada pasien tersebut?",

        options: [
            "Gangguan pola eliminasi BAB",
            "Konstipasi",
            "Nyeri",
            "Risiko infeksi",
            "Risiko perdarahan"
        ],

        answer: 2,

        explanation: 
            "Keluhan nyeri dan ekspresi meringis saat area disentuh menunjukkan masalah nyeri yang aktual. Benjolan anus dapat berkaitan dengan hemoroid atau kondisi lain, tetapi perlu pemeriksaan untuk menentukan diagnosis medis."
    },


    {
        category: "Keperawatan Gawat Darurat",

        question: "Pasien seorang perempuan datang ke IGD dengan keluhan diare sejak semalam, muntah, dan tidak nafsu makan. Hari ini sudah BAB cair 6x. Hasil pemeriksaan fisik: TD 100/70 mmHg, nadi 80x/menit, RR 21x/menit, suhu 37,3 °C. Pasien tampak lemas, turgor kulit kurang baik. Berdasarkan triase, pasien tersebut dalam kondisi?",

        options: [
            "Gawat darurat",
            "Gawat tidak darurat",
            "Tidak gawat tidak darurat",
            "Darurat tidak gawat",
            "Kecelakaan"
        ],

        answer: 1,

        explanation: 
            "Pasien menunjukkan tanda kehilangan cairan dan perlu dinilai serta ditangani segera. Namun, tanda vital yang dicantumkan belum menunjukkan syok. Istilah kategori triase berbeda antar sistem; penentuan sesungguhnya perlu mempertimbangkan kesadaran, perfusi, derajat dehidrasi, dan sistem triase yang digunakan."
    },


    {
        category: "Keperawatan Keluarga",

        question: "Perawat berkunjung di sebuah keluarga. Dalam keluarga tersebut terdapat Tn. X berumur 35 tahun dan Ny. Y berumur 30 tahun, serta dua orang anak perempuan. Tn. X menceritakan bahwa seminggu yang lalu diukur tekanan darah 150/90 mmHg. Selanjutnya, perawat memberikan edukasi pada keluarga Tn. X terkait diet rendah garam untuk mencegah terjadinya tekanan darah tinggi. Apakah pencegahan yang saat ini dilakukan perawat?",

        options: [
            "Pencegahan primer",
            "Pencegahan sekunder",
            "Melakukan skrining",
            "Pencegahan tersier",
            "Rehabilitasi"
        ],

        answer: 1,

        explanation: 
            "Karena sudah ada hasil pengukuran tekanan darah tinggi, edukasi dapat dipandang sebagai bagian dari tindak lanjut dini untuk mencegah perkembangan masalah. Namun, satu pengukuran 150/90 mmHg belum cukup untuk menetapkan hipertensi; perlu pengukuran ulang. Bila soal menekankan pencegahan sebelum penyakit terjadi, pencegahan primer juga dapat dipertimbangkan."
    },


    {
        category: "Keperawatan Komunitas",

        question: "Perawat komunitas melakukan kunjungan di sebuah Sekolah Dasar dan didapatkan data 50% siswa SD kelas satu mengalami sakit gigi, dan diketahui sebagian besar gigi siswa kotor, serta mengalami karies gigi. Apakah intervensi utama yang perlu dilakukan perawat pada siswa SD tersebut?",

        options: [
            "Pendidikan kesehatan",
            "Pemeriksaan gigi secara rutin",
            "Pemberian tablet kalsium",
            "Ajarkan oral hygiene",
            "Merujuk ke Puskesmas"
        ],

        answer: 3,

        explanation: 
            "Kebersihan mulut yang buruk dan karies yang sudah ditemukan menunjukkan perlunya pendidikan dan demonstrasi menyikat gigi dengan benar. Pemeriksaan dan perawatan gigi juga perlu dilakukan melalui kerja sama dengan tenaga kesehatan gigi."
    },


    {
        category: "Keperawatan Keluarga",

        question: "Perawat komunitas mengunjungi keluarga Tn. A. Tn. A berusia 35 tahun dan istrinya berusia 33 tahun. Mereka dikaruniai dua orang anak. Anak yang pertama berusia 12 tahun dan anak kedua 10 tahun. Apakah tahapan keluarga yang sedang berjalan di keluarga tersebut?",

        options: [
            "Keluarga dengan anak pra sekolah",
            "Keluarga dengan anak usia sekolah",
            "Keluarga dengan anak usia remaja",
            "Keluarga dengan pasangan baru",
            "Keluarga dengan usia pertengahan"
        ],

        answer: 1,

        explanation: 
            "Anak berusia 10 dan 12 tahun umumnya berada pada tahap usia sekolah. Karena belum ada anak yang disebut remaja, pilihan keluarga dengan anak usia sekolah paling sesuai."
    },


    {
        category: "Keperawatan Gerontik",

        question: "Perawat melakukan kunjungan rumah pada seorang nenek berusia 75 tahun. Keluarga mengatakan nenek tidak bisa tidur dan tidak mau makan sejak kemarin, jika ditawari untuk makan marah-marah. Berdasarkan hasil pengkajian dengan keluarga, didapatkan perubahan kondisi nenek tersebut terjadi karena kakek meninggal seminggu yang lalu. Apa masalah yang dialami nenek?",

        options: [
            "Demensia",
            "Depresi",
            "nsomnia",
            "Gangguan komunikasi",
            "Gangguan pola makan"
        ],

        answer: 1,

        explanation: 
            "Perubahan tidur dan nafsu makan setelah kehilangan pasangan dapat terjadi pada proses berduka dan tidak otomatis berarti depresi. Dari opsi yang tersedia, depresi mungkin dimaksud oleh soal. Perawat perlu mengkaji suasana hati, durasi gejala, fungsi sehari-hari, dukungan sosial, dan risiko menyakiti diri sebelum menyimpulkan diagnosis."
    },


    {
        category: "Keperawatan Keluarga",

        question: "Perawat melakukan pengkajian pada keluarga dan didapatkan data, keluarga memiliki kemampuan menjaga kebersihan lingkungan rumah, secara objektif rumahnya tampak bersih. Apakah fungsi yang telah dicapai oleh keluarga tersebut?",

        options: [
            "Fungsi afektif",
            "Fungsi sosial",
            "Fungsi ekonomi",
            "Fungsi reproduksi",
            "Fungsi perawatan keluarga"
        ],

        answer: 4,

        explanation: 
            "Kemampuan menjaga kebersihan lingkungan rumah mendukung pemeliharaan kesehatan keluarga. Dari pilihan yang ada, hal ini paling dekat dengan fungsi perawatan keluarga."
    },


    {
        category: "Keperawatan Keluarga",

        question: "Perawat melakukan pengkajian pada sebuah keluarga dan didapatkan data keluarga memiliki kemampuan berinteraksi atau berhubungan antarkeluarga maupun masyarakat.",

        options: [
            "Fungsi afektif",
            "Fungsi sosial",
            "Fungsi ekonomi",
            "Fungsi reproduksi",
            "Fungsi perawatan keluarga"
        ],

        answer: 1,

        explanation: 
            "Fungsi sosial keluarga berkaitan dengan sosialisasi, interaksi antaranggota keluarga, dan hubungan keluarga dengan lingkungan masyarakat."
    },


    {
        category: "Keperawatan Keluarga",

        question: "Perawat sedang melakukan kunjungan rumah pada keluarga Tn. A yang memiliki istri Ny. B (40 tahun). Ny. B mengeluh berat badannya turun padahal sering makan serta sering buang air kencing pada malam hari. Klien mengatakan menyukai teh panas yang manis, klien tidak bisa minum jika tidak menggunakan gula. Keluarga merasa bingung dan tidak mengetahui apa yang harus dilakukan. Apakah yang harus dilakukan perawat pada situasi tersebut?",

        options: [
            "Menjelaskan penyakit DM",
            "Menganjurkan untuk kontrol",
            "Menjelaskan mengenai diet DM",
            "Melakukan pengecekan GDS",
            "Mengukur tanda-tanda vital"
        ],

        answer: 3,

        explanation: 
            "Berat badan turun meski sering makan dan sering berkemih merupakan gejala yang dapat mengarah pada diabetes melitus. Pemeriksaan gula darah sewaktu merupakan langkah awal yang tepat, kemudian hasil abnormal harus ditindaklanjuti dengan pemeriksaan konfirmasi dan evaluasi tenaga medis."
    },


    {
        category: "Keperawatan Keluarga",

        question: "Perawat sedang melakukan kunjungan rumah pasien dengan TB paru. Hasil pengkajian didapatkan pasien batuk-batuk dan berdahak. Klien tidak menutup mulut ketika batuk. Apakah yang harus dilakukan perawat pada situasi tersebut?",

        options: [
            "Anjurkan keluarga untuk melakukan skrining test",
            "Menganjurkan klien untuk menjaga kebersihan rumah dengan membuka jendela setiap pagi hari",
            "Mengajarkan cara menutup mulut saat batuk dan cara membuang dahak yang tepat",
            "Memberikan nutrisi yang baik",
            "Melaporkan pada pihak Puskesmas"
        ],

        answer: 2,

        explanation: 
            "Etika batuk, penggunaan masker, pembuangan dahak yang aman, ventilasi ruangan, dan kepatuhan minum obat merupakan langkah penting untuk mengurangi penularan TB. Edukasi perlu dilakukan secara praktis dan memastikan pasien memahami cara melakukannya."
    },


    {
        category: "Keperawatan Medikal Bedah",

        question: "Perawat sedang melihat hasil analisis gas darah yang menunjukkan pH 7,40, PCO2 35 mmHg, PO2 80 mmHg, dan HCO3 26 mEq/L. Apakah interpretasi dari hasil AGD di atas?",

        options: [
            "Asidosis respiratorik",
            "Asidosis metabolik",
            "Alkalosis respiratorik terkompensasi",
            "Alkalosis metabolik",
            "Alkalosis respiratorik"
        ],

        answer: 0,

        explanation: 
            "Bonussss. Rentang rujukan umum pH 7,35–7,45, PaCO2 35–45 mmHg, dan HCO3 22–26 mEq/L. Nilai yang diberikan berada dalam rentang normal atau di batas normal, sehingga tidak menunjukkan asidosis maupun alkalosis yang jelas. PO2 80 mmHg perlu ditafsirkan berdasarkan usia dan kondisi klinis. Kemungkinan ada kesalahan pada opsi soal."
    },


    {
        category: "Keperawatan Maternitas",

        question: "Perempuan berusia 22 tahun G1P0A0 usia gestasi 40 minggu datang ke Puskesmas dengan keluhan adanya rasa nyeri pada perut tembus ke belakang, keluar lendir dan darah melalui jalan lahir. Hasil pemeriksaan fisik ditemukan TFU 35 cm, punggung kiri, kepala masuk PAP dan penurunan kepala 1/5, DJJ 144 x/menit, kontraksi 4x setiap 10 menit dan lamanya 45 detik. Hasil pemeriksaan VT ditemukan perineum elastis, tulang panggul tidak menonjol, pembukaan serviks 10 cm, ketuban belum pecah, ubun-ubun kecil kanan depan, tidak teraba bagian kecil janin. Apakah kategori kehamilan tersebut berdasarkan usia kehamilan?",

        options: [
            "Dismature",
            "Premature",
            "Post mature",
            "Serotinus",
            "Mature"
        ],

        answer: 4,

        explanation: 
            "Usia kehamilan 40 minggu termasuk kehamilan cukup bulan atau term. Secara umum, term adalah 37 minggu sampai 41 minggu 6 hari; post-term/postmatur biasanya dimulai pada 42 minggu."
    },


    {
        category: "Keperawatan Maternitas",

        question: "Perempuan usia 30 tahun datang ke poliklinik kebidanan dengan keluhan gatal di alat kelaminnya disertai nyeri saat berkemih sejak 2 bulan yang lalu. Hasil pemeriksaan didapatkan area genetalia memerah, mengeluarkan cairan kuning keruh dan terdapat lesi pada bagian serviks. Apakah pemeriksaan lain yang tepat dilakukan pada kasus tersebut?",

        options: [
            "Foto rontgen",
            "USG transvaginal",
            "USG abdominal",
            "Papsmear",
            "Darah lengkap"
        ],

        answer: 3,

        explanation: 
            "Pap smear digunakan untuk skrining kelainan prakanker/kanker serviks, bukan untuk memastikan sebagian besar infeksi genital akut. Gejala ini membutuhkan pemeriksaan ginekologis dan tes infeksi yang sesuai, misalnya pemeriksaan sekret atau tes molekuler untuk infeksi menular seksual. Dari pilihan yang tersedia, Pap smear mungkin jawaban yang diharapkan, tetapi secara klinis pilihan pemeriksaannya kurang ideal."
    }

];


// ================================
// VARIABEL
// ================================

let currentQuestion = 0;

let userAnswers = [];


// ================================
// AMBIL ELEMENT HTML
// ================================

const questionText =
    document.getElementById("questionText");

const optionsBox =
    document.getElementById("options");

const questionCount =
    document.getElementById("questionCount");

const categoryTag =
    document.getElementById("categoryTag");

const feedback =
    document.getElementById("feedback");

const nextBtn =
    document.getElementById("nextBtn");

const prevBtn =
    document.getElementById("prevBtn");

const answeredStat =
    document.getElementById("answeredStat");

const correctStat =
    document.getElementById("correctStat");

const accuracyStat =
    document.getElementById("accuracyStat");

const questionMap =
    document.getElementById("questionMap");

const mapCaption =
    document.getElementById("mapCaption");

const resultView =
    document.getElementById("resultView");

const finalScore =
    document.getElementById("finalScore");

const resultText =
    document.getElementById("resultText");

const resultEmoji =
    document.getElementById("resultEmoji");


// ================================
// MENAMPILKAN SOAL
// ================================

function showQuestion() {

    const q = questions[currentQuestion];

    questionText.textContent = q.question;

    categoryTag.textContent = q.category;

    questionCount.textContent =
        `Soal ${currentQuestion + 1} dari ${questions.length}`;


    optionsBox.innerHTML = "";

    feedback.className = "feedback hidden";

    feedback.innerHTML = "";


    // membuat pilihan A-E

    q.options.forEach(function(option, index) {

        const button =
            document.createElement("button");

        button.className = "option";

        const letter =
            String.fromCharCode(65 + index);

        button.innerHTML =
            `<span class="letter">${letter}</span>
             <span>${option}</span>`;


        button.onclick = function() {

            chooseAnswer(index);

        };


        optionsBox.appendChild(button);

    });


    prevBtn.disabled =
        currentQuestion === 0;

    nextBtn.disabled =
        userAnswers[currentQuestion] === undefined;


    if (
        currentQuestion === questions.length - 1
    ) {

        nextBtn.textContent =
            "Lihat Hasil →";

    } else {

        nextBtn.textContent =
            "Berikutnya →";

    }


    updateMap();

    updateStats();

}


// ================================
// MEMILIH JAWABAN
// ================================

function chooseAnswer(selected) {

    // jangan bisa jawab dua kali

    if (
        userAnswers[currentQuestion] !== undefined
    ) {

        return;

    }


    userAnswers[currentQuestion] =
        selected;


    const q =
        questions[currentQuestion];


    const buttons =
        document.querySelectorAll(".option");


    buttons.forEach(function(button, index) {

        button.disabled = true;


        if (index === q.answer) {

            button.classList.add("correct");

        }


        if (
            index === selected &&
            selected !== q.answer
        ) {

            button.classList.add("wrong");

        }

    });


    const benar =
        selected === q.answer;


    feedback.className =
        benar
            ? "feedback good"
            : "feedback bad";


    feedback.innerHTML = `

        <strong>
            ${benar
                ? "✓ Jawaban kamu benar!"
                : "✕ Belum tepat, nggak apa-apa ♡"
            }
        </strong>

        <div>
            <b>Jawaban benar:</b>
            ${String.fromCharCode(65 + q.answer)}.
            ${q.options[q.answer]}
        </div>

        <div style="margin-top:8px;">
            <b>Pembahasan:</b>
            ${q.explanation}
        </div>

    `;


    nextBtn.disabled = false;

    updateStats();

    updateMap();

}


// ================================
// NEXT
// ================================

nextBtn.onclick = function() {

    if (
        currentQuestion === questions.length - 1
    ) {

        showResult();

        return;

    }


    currentQuestion++;

    showQuestion();

};


// ================================
// PREVIOUS
// ================================

prevBtn.onclick = function() {

    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion();

    }

};


// ================================
// STATISTIK
// ================================

function updateStats() {

    const answered =
        userAnswers.filter(
            answer => answer !== undefined
        ).length;


    const correct =
        userAnswers.filter(
            (answer, index) =>
                answer === questions[index].answer
        ).length;


    const accuracy =
        answered === 0
            ? 0
            : Math.round(
                correct / answered * 100
            );


    answeredStat.textContent =
        `${answered} / ${questions.length}`;


    correctStat.textContent =
        correct;


    accuracyStat.textContent =
        `${accuracy}%`;

}


// ================================
// PETA SOAL
// ================================

function updateMap() {

    questionMap.innerHTML = "";


    questions.forEach(function(q, index) {

        const button =
            document.createElement("button");


        button.className = "qdot";


        button.textContent =
            index + 1;


        if (
            index === currentQuestion
        ) {

            button.classList.add("current");

        }


        if (
            userAnswers[index] !== undefined
        ) {

            if (
                userAnswers[index] === q.answer
            ) {

                button.classList.add("done");

            } else {

                button.classList.add("wrongdot");

            }

        }


        button.onclick = function() {

            currentQuestion = index;

            showQuestion();

        };


        questionMap.appendChild(button);

    });


    const selesai =
        userAnswers.filter(
            answer => answer !== undefined
        ).length;


    mapCaption.textContent =
        `${selesai} selesai`;

}


// ================================
// HASIL
// ================================

function showResult() {

    document.querySelector(".main-layout")
        .classList.add("hidden");


    resultView.classList.remove("hidden");


    const correct =
        userAnswers.filter(
            (answer, index) =>
                answer === questions[index].answer
        ).length;


    const score =
        Math.round(
            correct / questions.length * 100
        );


    finalScore.textContent =
        `${score}%`;


    if (score >= 80) {

        resultEmoji.textContent = "🏆";

        resultText.textContent =
            `Kamu menjawab benar ${correct} dari ${questions.length} soal. Keren banget!`;

    }

    else if (score >= 60) {

        resultEmoji.textContent = "🌟";

        resultText.textContent =
            `Kamu menjawab benar ${correct} dari ${questions.length} soal. Bagus! Tinggal review beberapa soal lagi.`;

    }

    else {

        resultEmoji.textContent = "🌱";

        resultText.textContent =
            `Kamu menjawab benar ${correct} dari ${questions.length} soal. Jangan menyerah, yuk belajar lagi pelan-pelan.`;

    }

}


// ================================
// MULAI / RESET
// ================================

function resetQuiz() {

    currentQuestion = 0;

    userAnswers = [];

    document.querySelector(".main-layout")
        .classList.remove("hidden");


    resultView.classList.add("hidden");


    showQuestion();

}


document.getElementById("startBtn")
    .onclick = function() {

        document.querySelector(".main-layout")
            .scrollIntoView({
                behavior: "smooth"
            });

    };


document.getElementById("resetBtn")
    .onclick = function() {

        resetQuiz();

    };


document.getElementById("againBtn")
    .onclick = function() {

        resetQuiz();

    };


// ================================
// MULAI
// ================================

showQuestion();