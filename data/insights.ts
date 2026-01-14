import { InsightPost, NewsPost, MarketReviewPost } from "@/types";

const createSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const createDriveEmbedLink = (shareLink: string) => {
  return (
    shareLink
      .replace("/view?usp=sharing", "/preview")
      .replace("/file/d/", "/file/d/") +
    (shareLink.includes("/preview") ? "" : "/preview")
  );
};

const posts: (Omit<NewsPost, "slug"> | Omit<MarketReviewPost, "slug">)[] = [
  {
    id: 1,
    category: "berita-saham",
    title: "RLCO ARA 17 Hari Berturut-turut, Emiten Prajogo Pangestu Kalah",
    date: "9 Januari 2026",
    imageSrc: "/berita/1.webp",
    description:
      "Saham PT Abadi Lestari Indonesia Tbk (RLCO) mencatatkan kenaikan fantastis sekitar 1.810% sejak IPO dengan 17 kali Auto Reject Atas (ARA) berturut-turut.",
    body: [
      "Pasar saham Indonesia kembali dihebohkan oleh fenomena kenaikan harga saham yang luar biasa dari emiten pendatang baru. Saham PT Abadi Lestari Indonesia Tbk (RLCO), yang merupakan perusahaan holding dari merek Realfood, berhasil mencatatkan rekor kenaikan fantastis sebesar 1.810% sejak penawaran umum perdana (IPO). Prestasi ini ditandai dengan pencapaian Auto Reject Atas (ARA) selama 17 hari perdagangan berturut-turut.",
      "Kenaikan spektakuler ini bahkan berhasil mematahkan rekor yang sebelumnya dipegang oleh emiten milik konglomerat Prajogo Pangestu, Chandra Daya Investasi (CDIA), yang sebelumnya mencatatkan rekor 11 kali ARA. Sentimen pasar terhadap RLCO tetap sangat tinggi meskipun saham ini sempat terkena suspensi oleh bursa dan masuk ke dalam papan pemantauan khusus (FCA). Antusiasme investor tampaknya tidak surut meskipun ada langkah-langkah pengawasan ketat dari regulator.",
      "Secara fundamental, lonjakan harga saham RLCO didukung oleh kinerja keuangan yang sangat solid. Perusahaan melaporkan lonjakan laba bersih yang impresif sebesar 608% per Mei 2025. Fenomena ini menunjukkan adanya euforia pasar yang sangat tinggi terhadap saham-saham IPO yang memiliki fundamental tumbuh pesat, namun para analis tetap mengingatkan investor untuk waspada terhadap volatilitas yang mungkin terjadi setelah reli panjang ini.",
    ],
  },
  {
    id: 2,
    category: "berita-saham",
    title: "IHSG Cetak All Time High (ATH) Baru, Bersiap Menuju Rp9.000!",
    date: "7 Januari 2026",
    imageSrc: "/berita/2.webp",
    description:
      "IHSG kembali mencetak rekor tertinggi sepanjang masa di awal tahun 2026, bergerak di kisaran 8.940 hingga mendekati level psikologis 9.000.",
    body: [
      "Indeks Harga Saham Gabungan (IHSG) mengawali tahun 2026 dengan kinerja yang sangat gemilang. Indeks acuan pasar modal Indonesia ini kembali mencetak rekor tertinggi sepanjang masa (All Time High/ATH), bergerak nyaman di kisaran level 8.940. [cite_start]Pergerakan positif ini semakin mendekatkan IHSG pada level psikologis baru yang sangat dinantikan oleh para pelaku pasar, yaitu level 9.000[cite: 1163].",
      "Penguatan indeks ini didorong oleh arus modal masuk yang signifikan dari investor asing (net buy). Aksi beli bersih ini terfokus pada saham-saham berkapitalisasi besar atau blue chip yang menjadi penggerak utama indeks, seperti PT Bank Central Asia Tbk (BBCA) dan PT Aneka Tambang Tbk (ANTM). [cite_start]Selain itu, reli harga komoditas global turut memberikan tenaga tambahan bagi emiten-emiten berbasis sumber daya alam di bursa domestik[cite: 1163].",
      "Sentimen pasar saat ini terpantau sangat positif, mencerminkan tingginya kepercayaan investor terhadap fundamental ekonomi Indonesia. [cite_start]Kombinasi antara aliran dana asing yang deras dan kinerja emiten unggulan yang solid menjadi katalis utama yang berpotensi besar membawa IHSG menembus level 9.000 dalam waktu dekat, menandai era baru bagi pasar modal Indonesia[cite: 1163].",
    ],
  },
  {
    id: 3,
    category: "berita-makroekonomi",
    title: "AS tangkap Presiden Venezuela Nicolas Maduro dalam serangan besar",
    date: "5 Januari 2026",
    imageSrc: "/berita/3.webp",
    description:
      "Presiden AS Donald Trump menegaskan bahwa Amerika Serikat akan mengambil kendali Venezuela untuk sementara waktu guna memastikan transisi pemerintahan.",
    body: [
      "Dalam sebuah langkah geopolitik yang mengejutkan dunia, Presiden Amerika Serikat Donald Trump mengeluarkan pernyataan tegas mengenai situasi di Venezuela. Laporan terbaru menyebutkan bahwa Amerika Serikat akan mengambil kendali atas Venezuela untuk sementara waktu. [cite_start]Langkah kontroversial ini diklaim bertujuan untuk memulihkan perdamaian dan kebebasan bagi rakyat Venezuela serta memastikan proses transisi pemerintahan yang aman dan adil[cite: 1161].",
      "Intervensi langsung dari negara adidaya ini seketika meningkatkan risiko ketidakpastian geopolitik di tingkat global. Venezuela, sebagai salah satu negara dengan cadangan minyak terbesar di dunia, memegang peranan krusial dalam pasokan energi global. [cite_start]Tindakan AS ini dikhawatirkan akan memicu volatilitas tajam pada harga minyak mentah dunia akibat potensi gangguan pasokan atau sanksi lanjutan[cite: 1161].",
      "Bagi pasar keuangan global, eskalasi ini menjadi sinyal kuat untuk beralih ke mode waspada atau 'risk-off'. Para investor cenderung akan menarik dana dari aset-aset berisiko dan memindahkannya ke aset aman (safe haven) seperti emas. [cite_start]Hal ini biasanya akan mendorong kenaikan harga emas dan instrumen lindung nilai lainnya seiring dengan meningkatnya ketegangan politik antarnegara[cite: 1161].",
    ],
  },
  {
    id: 4,
    category: "berita-makroekonomi",
    title: "Purbaya: Tahun Ini IHSG 10.000 Bukan Angka yang Mustahil",
    date: "2 Januari 2026",
    imageSrc: "/berita/4.webp",
    description:
      "Menteri Keuangan Purbaya Yudhi Sadewa memproyeksikan IHSG berpotensi menembus level 10.000 pada tahun 2026.",
    body: [
      "Optimisme tinggi menyelimuti prospek pasar modal Indonesia di tahun 2026. Menteri Keuangan Republik Indonesia, Purbaya Yudhi Sadewa, memberikan proyeksi yang sangat positif dengan menyatakan bahwa Indeks Harga Saham Gabungan (IHSG) berpotensi menembus level keramat 10.000 pada tahun ini. [cite_start]Pernyataan ini didasarkan pada keyakinan akan pertumbuhan ekonomi nasional yang jauh lebih baik dibandingkan tahun sebelumnya[cite: 1152].",
      "Keyakinan tersebut bukan tanpa alasan, melainkan didukung oleh sinergi kebijakan yang semakin kuat antara otoritas fiskal dan moneter. Menkeu menyoroti bahwa kebijakan moneter dari Bank Indonesia yang lebih sinkron dengan kebijakan pemerintah akan menjadi pendorong utama stabilitas dan pertumbuhan. [cite_start]Hal ini menciptakan iklim investasi yang kondusif bagi para pelaku pasar untuk menanamkan modalnya di Indonesia[cite: 1152].",
      "Pernyataan optimis dari pemangku kebijakan fiskal tertinggi ini memberikan suntikan kepercayaan diri yang besar bagi investor, baik domestik maupun asing. [cite_start]Target IHSG 10.000 kini dianggap bukan sekadar angka mustahil, melainkan tujuan realistis yang menandakan adanya koordinasi kebijakan ekonomi yang solid dan prospek fundamental makroekonomi Indonesia yang semakin kokoh di tahun 2026[cite: 1152].",
    ],
  },
  {
    id: 5,
    category: "berita-makroekonomi",
    title:
      "Aturan Rampung! 1 Januari 2026 Eksportir Wajib Simpan Dolar di Himbara",
    date: "31 Desember 2025",
    imageSrc: "/berita/5.webp",
    description:
      "Pemerintah resmi mewajibkan eksportir untuk menyimpan Devisa Hasil Ekspor (DHE) mereka di bank-bank Himbara (BUMN) selama minimal satu tahun.",
    body: [
      "Menutup tahun 2025, pemerintah Indonesia meresmikan kebijakan strategis baru terkait pengelolaan devisa negara. Mulai tanggal 1 Januari 2026, seluruh eksportir diwajibkan untuk menyimpan Devisa Hasil Ekspor (DHE) mereka di bank-bank yang tergabung dalam Himpunan Bank Milik Negara (Himbara). [cite_start]Peraturan ini juga menetapkan periode penyimpanan minimum selama satu tahun, sebuah langkah tegas untuk menahan dana asing di dalam negeri[cite: 1143].",
      "Kebijakan ini diproyeksikan memiliki dampak signifikan terhadap stabilitas ekonomi makro Indonesia. Dengan mewajibkan parkir dana di bank BUMN, pemerintah bertujuan untuk memperkuat posisi cadangan devisa negara secara substansial. [cite_start]Hal ini diharapkan akan menjadi benteng yang kuat untuk menstabilkan nilai tukar Rupiah terhadap Dolar AS, mengurangi volatilitas yang sering terjadi akibat arus keluar modal jangka pendek[cite: 1143].",
      "Namun, kebijakan ini juga membawa tantangan tersendiri bagi para pelaku usaha. Kewajiban menahan dana selama satu tahun berpotensi membatasi fleksibilitas arus kas (cash flow) bagi perusahaan eksportir, yang mungkin membutuhkan likuiditas cepat untuk operasional atau ekspansi. [cite_start]Meskipun demikian, langkah ini dinilai vital untuk kedaulatan moneter jangka panjang[cite: 1143].",
    ],
  },
  {
    id: 6,
    category: "berita-saham",
    title: "Rekap Kinerja IHSG Sepanjang 2025",
    date: "31 Desember 2025",
    imageSrc: "/berita/6.webp",
    description:
      "IHSG mencatat pertumbuhan gemilang sebesar 22,13% dan memecahkan rekor tertinggi (ATH) sebanyak 24 kali sepanjang tahun 2025.",
    body: [
      "Indeks Harga Saham Gabungan (IHSG) menutup tahun 2025 dengan kinerja yang sangat memukau. Sepanjang tahun ini, indeks acuan pasar modal Indonesia tersebut berhasil tumbuh sebesar 22,13%, sebuah capaian yang jauh melampaui ekspektasi awal tahun. Momentum positif ini ditandai dengan pemecahan rekor tertinggi sepanjang masa (All Time High/ATH) sebanyak 24 kali, yang sebagian besar didorong oleh lonjakan harga saham di sektor teknologi yang menjadi primadona baru.",
      "Menariknya, reli panjang IHSG ini terjadi di tengah fenomena aksi jual bersih (net sell) oleh investor asing yang mencapai total Rp17,34 triliun. Data ini menunjukkan bahwa kekuatan investor domestik kini semakin dominan dan mampu menopang pasar secara mandiri, mengurangi ketergantungan bursa terhadap aliran dana asing yang selama ini menjadi penggerak utama. Partisipasi ritel dan institusi dalam negeri terbukti menjadi bantalan kuat saat asing keluar.",
      "Meskipun kinerja domestik sangat solid, para analis tetap mengingatkan pelaku pasar untuk waspada memasuki tahun 2026. Besarnya arus keluar dana asing tetap menjadi sinyal peringatan terkait persepsi risiko global terhadap pasar negara berkembang. Ketidakpastian ekonomi global yang masih membayangi dapat memicu volatilitas sewaktu-waktu, sehingga diversifikasi dan strategi investasi yang hati-hati tetap diperlukan.",
    ],
  },
  {
    id: 7,
    category: "berita-makroekonomi",
    title: "Gold Notches Another Record High",
    date: "26 Desember 2025",
    imageSrc: "/berita/7.webp",
    description:
      "Harga emas dunia kembali mencetak rekor tertinggi di level USD 4.530 per ons, melonjak lebih dari 70% sepanjang tahun ini.",
    body: [
      "Harga emas dunia kembali menunjukkan kilauannya sebagai aset lindung nilai (safe haven) utama dengan mencetak rekor tertinggi baru sepanjang masa. Logam mulia ini menyentuh level fantastis USD 4.530 per troy ons, mencatatkan kenaikan akumulatif lebih dari 70% sepanjang tahun 2025. Lonjakan harga ini dipicu oleh kombinasi ketegangan geopolitik global yang belum mereda serta ekspektasi pasar yang kuat terhadap pemangkasan suku bunga lanjutan oleh bank sentral AS.",
      "Permintaan terhadap emas juga didorong oleh aksi borong yang dilakukan oleh berbagai bank sentral dunia sebagai upaya diversifikasi cadangan devisa mereka. Selain itu, arus masuk dana yang deras ke dalam Exchange Traded Fund (ETF) berbasis emas menunjukkan tingginya minat investor institusi maupun ritel untuk mengamankan aset mereka di tengah ketidakpastian ekonomi makro.",
      "Fenomena menarik terlihat di pasar global saat ini, di mana harga emas dan pasar saham (seperti S&P 500) sama-sama berada di level tertinggi. Kondisi ini mengindikasikan tingginya tingkat diversifikasi portofolio investor, di mana aset berisiko (risk-on) dan aset aman (safe haven) sama-sama diminati. Hal ini mencerminkan optimisme pertumbuhan ekonomi yang berjalan beriringan dengan kewaspadaan terhadap risiko sistemik.",
    ],
  },
  {
    id: 8,
    category: "berita-saham",
    title:
      "S&P 500 Sentuh Rekor Penutupan Selasa (23/12) Wall St Menuju Kenaikan Tahunan Ketiga",
    date: "24 Desember 2025",
    imageSrc: "/berita/8.webp",
    description:
      "Indeks S&P 500 kembali ditutup pada rekor tertinggi baru, didorong oleh reli saham teknologi, menandakan tren kenaikan tahunan ketiga berturut-turut.",
    body: [
      "Wall Street kembali berpesta menjelang akhir tahun dengan indeks S&P 500 yang sukses ditutup pada rekor tertinggi baru di level 6.909,79. Kenaikan sebesar 0,46% pada perdagangan hari Selasa (23/12) ini kembali dimotori oleh saham-saham sektor teknologi yang terus menunjukkan performa superior. Pencapaian ini semakin mengukuhkan tren bullish pasar saham AS yang kini sedang menuju kenaikan tahunan ketiga secara berturut-turut.",
      "Reli yang tak terbendung ini menegaskan sentimen pasar yang sangat optimis terhadap prospek ekonomi dan korporasi AS, meskipun bayang-bayang ketidakpastian global masih ada. Bahkan, data lanjutan menunjukkan indeks sempat menyentuh level intraday yang lebih tinggi lagi di kisaran 6.929 pada hari-hari berikutnya. Kepercayaan investor tampaknya bertumpu pada fundamental perusahaan teknologi besar yang terus mencetak laba solid.",
      "Kondisi pasar yang terus mencetak All Time High (ATH) ini memberikan sinyal kuat akan berlanjutnya aliran dana masuk (inflow) ke pasar ekuitas. Namun, valuasi yang semakin tinggi juga membuka ruang koreksi yang wajar jika muncul sentimen makroekonomi negatif yang mengejutkan. Investor disarankan untuk tetap cermat dalam melihat peluang 'buy on dip' di tengah tren kenaikan yang kuat ini.",
    ],
  },
  {
    id: 9,
    category: "berita-saham",
    title:
      "Bank Mandiri (BMRI) Bagi-Bagi Dividen Rp 9,3 Triliun, Catat Jadwalnya",
    date: "22 Desember 2025",
    imageSrc: "/berita/9.webp",
    description:
      "PT Bank Mandiri (Persero) Tbk (BMRI) mengumumkan pembagian dividen interim langka sebesar Rp9,3 triliun atau Rp100 per saham.",
    body: [
      "Kabar gembira datang bagi para pemegang saham perbankan pelat merah, PT Bank Mandiri (Persero) Tbk (BMRI). Manajemen perseroan mengumumkan rencana pembagian dividen interim dengan total nilai mencapai Rp9,3 triliun. Setiap pemegang saham berhak mendapatkan dividen tunai sebesar Rp100 per lembar saham. Jadwal cum date atau batas akhir pembelian saham untuk mendapatkan hak dividen ditetapkan pada tanggal 5 Januari 2026.",
      "Keputusan pembagian dividen interim ini menjadi sorotan khusus karena tergolong peristiwa langka dalam sejarah korporasi Bank Mandiri. Langkah ini dinilai sebagai sinyal kuat mengenai kesehatan likuiditas dan profitabilitas bank yang sangat prima di tahun buku 2025. Dengan estimasi harga saham di level Rp5.050, dividen yield yang ditawarkan berada di kisaran 1,98%, angka yang cukup menarik untuk dividen tengah tahun.",
      "Pembayaran dividen yang dijadwalkan pada 14 Januari 2026 ini diprediksi akan menjadi katalis positif bagi pergerakan harga saham BMRI dalam jangka pendek. Investor merespons positif aksi korporasi ini sebagai bukti komitmen manajemen dalam memberikan nilai tambah (shareholder value), sekaligus mencerminkan optimisme manajemen terhadap keberlanjutan kinerja positif perseroan di masa mendatang.",
    ],
  },
  {
    id: 10,
    category: "berita-makroekonomi",
    title: "Government Prepares to Issue Short-Term SBNs in 2026",
    date: "19 Desember 2025",
    imageSrc: "/berita/10.webp",
    description:
      "Pemerintah Indonesia bersiap menerbitkan Surat Berharga Negara (SBN) tenor pendek secara lebih rutin di tahun 2026 untuk pendalaman pasar uang.",
    body: [
      "Pemerintah Indonesia melalui Kementerian Keuangan mengumumkan strategi pembiayaan baru untuk tahun 2026. Pemerintah berencana untuk menerbitkan Surat Berharga Negara (SBN) dengan tenor pendek (Surat Perbendaharaan Negara/SPN) secara lebih reguler dan terencana. Langkah ini diambil sebagai upaya strategis untuk memperdalam pasar uang domestik serta meningkatkan efisiensi manajemen kas negara (cash management).",
      "Strategi ini sejatinya merupakan kelanjutan dan penyempurnaan dari inisiatif yang telah dimulai pada tahun 2025. Dengan menerbitkan variasi tenor bulanan hingga maksimal 12 bulan, pemerintah berharap dapat menciptakan kurva imbal hasil (yield curve) yang lebih lengkap di tenor pendek. Hal ini akan memberikan acuan yang lebih baik bagi instrumen keuangan jangka pendek lainnya di pasar.",
      "Bagi pasar keuangan, kebijakan ini akan meningkatkan likuiditas di pasar uang dan menyediakan alternatif investasi jangka pendek yang lebih beragam bagi investor, mulai dari perbankan hingga dana pensiun. Namun, perlu dicermati bahwa peningkatan pasokan (supply) SBN di pasar dapat memberikan tekanan pada tingkat imbal hasil (yield) dan berpotensi memicu persaingan likuiditas dengan instrumen perbankan seperti deposito.",
    ],
  },
  {
    id: 11,
    category: "berita-makroekonomi",
    title: "World Bank: Indonesia's Economy Grows 5%, Wages Fall 1.1%",
    date: "18 Desember 2025",
    imageSrc: "/berita/11.webp",
    description:
      "World Bank memproyeksikan ekonomi Indonesia tumbuh stabil di 5% hingga 2026, namun menyoroti penurunan upah riil sebesar 1,1% per tahun sejak 2018.",
    body: [
      "Laporan terbaru dari World Bank (Bank Dunia) memberikan gambaran campuran mengenai kondisi ekonomi Indonesia. Di satu sisi, lembaga keuangan internasional ini memproyeksikan pertumbuhan ekonomi Indonesia akan tetap stabil di kisaran 5% hingga tahun 2026. Pertumbuhan ini terutama ditopang oleh kinerja investasi yang kuat serta ekspor bersih yang positif, menunjukkan ketahanan fundamental ekonomi makro di tengah ketidakpastian global.",
      "Namun, di balik angka pertumbuhan yang solid tersebut, World Bank menyoroti isu krusial terkait kualitas pertumbuhan. Data menunjukkan bahwa realisasi pertumbuhan ekonomi ini belum sepenuhnya berkualitas, ditandai dengan tren upah riil pekerja yang justru mengalami penurunan rata-rata sebesar 1,1% per tahun sejak 2018. Hal ini mengindikasikan bahwa manfaat pertumbuhan ekonomi belum terdistribusi secara merata kepada tenaga kerja dalam bentuk peningkatan kesejahteraan.",
      "Kondisi ini menghadirkan tantangan inklusivitas yang serius bagi pemerintah. Stabilitas makroekonomi yang terjaga perlu diimbangi dengan upaya lebih keras untuk menciptakan lapangan kerja berkualitas tinggi yang menawarkan upah layak. Percepatan transformasi digital dan reformasi struktural di sektor ketenagakerjaan dinilai mendesak untuk membalikkan tren penurunan upah riil ini agar daya beli masyarakat dapat kembali terangkat.",
    ],
  },
  {
    id: 12,
    category: "berita-saham",
    title: "Amazon Eyes Investment, OpenAI Valuation to Exceed USD 500 Billion",
    date: "18 Desember 2025",
    imageSrc: "/berita/12.webp",
    description:
      "Amazon dikabarkan sedang menjajaki investasi strategis hingga USD 10 miliar ke OpenAI, yang berpotensi mengerek valuasi OpenAI melampaui USD 500 miliar.",
    body: [
      "Raksasa teknologi Amazon dilaporkan sedang dalam tahap eksplorasi serius untuk menyuntikkan dana investasi strategis senilai hingga USD 10 miliar ke dalam OpenAI. Langkah agresif ini berpotensi melambungkan valuasi pembuat ChatGPT tersebut hingga menembus angka fantastis USD 500 miliar. Jika terealisasi, kesepakatan ini akan menjadi salah satu tonggak investasi terbesar dalam sejarah industri kecerdasan buatan (AI).",
      "Investasi jumbo ini bukan sekadar suntikan modal, melainkan upaya strategis Amazon untuk memperdalam kolaborasi teknologi dengan OpenAI. Langkah ini juga dilihat sebagai persiapan matang menjelang potensi penawaran umum perdana (IPO) OpenAI yang sangat dinantikan pasar. Bagi Amazon, kemitraan ini akan memperkuat posisinya dalam persaingan sengit teknologi AI generatif melawan rival utamanya seperti Microsoft dan Google.",
      "Berita ini memberikan sentimen bullish yang kuat bagi saham Amazon dan sektor teknologi secara keseluruhan. Aliansi ini diprediksi akan mempercepat integrasi kemampuan AI canggih ke dalam ekosistem layanan Amazon, mulai dari cloud computing (AWS) hingga e-commerce, sekaligus menantang dominasi Nvidia dalam penyediaan infrastruktur AI di masa depan.",
    ],
  },
  {
    id: 13,
    category: "berita-makroekonomi",
    title: "The Fed Pangkas Suku Bunga 25 Bps",
    date: "11 Desember 2025",
    imageSrc: "/berita/13.webp",
    description:
      "The Federal Reserve resmi memangkas suku bunga acuan sebesar 25 basis poin ke kisaran 3,50%-3,75% setelah inflasi AS melandai sesuai target.",
    body: [
      "Bank Sentral Amerika Serikat (The Federal Reserve) akhirnya mengambil langkah pelonggaran moneter yang telah lama dinantikan pasar. Dalam pertemuan bulan Desember 2025, The Fed resmi memutuskan untuk memangkas suku bunga acuan (Fed Funds Rate) sebesar 25 basis poin, membawanya ke kisaran target baru 3,50% - 3,75%. Keputusan ini diambil sebagai respons atas data inflasi AS yang menunjukkan tren penurunan konsisten dan telah bergerak sesuai dengan target jangka panjang bank sentral.",
      "Langkah pemangkasan ini menandai pergeseran fokus kebijakan The Fed dari upaya meredam inflasi ke arah menjaga pertumbuhan ekonomi agar tidak tergelincir ke dalam resesi (soft landing). Kebijakan dovish ini langsung direspons positif oleh pasar keuangan global, karena biaya pinjaman yang lebih rendah diharapkan dapat memacu aktivitas bisnis dan konsumsi.",
      "Dampak dari penurunan suku bunga The Fed ini dirasakan secara luas. Dolar AS (USD) cenderung melemah terhadap mata uang utama lainnya, memberikan ruang napas bagi mata uang pasar berkembang, termasuk Rupiah, untuk menguat. Selain itu, sentimen risk-on kembali mendominasi, mendorong kenaikan harga aset-aset berisiko seperti saham serta komoditas safe haven seperti emas yang menjadi alternatif investasi saat bunga rendah.",
    ],
  },
  {
    id: 14,
    category: "berita-saham",
    title: "OJK Rilis Aturan Baru Penjatahan IPO, Porsi ritel naik jadi 50%",
    date: "9 Desember 2025",
    imageSrc: "/berita/14.webp",
    description:
      "OJK menerbitkan aturan baru IPO yang mewajibkan emiten meningkatkan porsi penjatahan terpusat (pooling allotment) bagi investor ritel menjadi minimal 50%.",
    body: [
      "Otoritas Jasa Keuangan (OJK) kembali melakukan terobosan regulasi untuk meningkatkan keadilan dan partisipasi publik di pasar modal Indonesia. OJK resmi menerbitkan aturan baru terkait mekanisme penjatahan saham perdana (Initial Public Offering/IPO), yang secara spesifik mewajibkan emiten untuk mengalokasikan porsi penjatahan terpusat (pooling allotment) bagi investor ritel minimal sebesar 50%. Angka ini merupakan peningkatan signifikan dari ketentuan sebelumnya.",
      "Kebijakan pro-ritel ini bertujuan untuk mengatasi keluhan yang sering muncul terkait sulitnya investor kecil mendapatkan alokasi saham IPO yang potensial. Dengan memperbesar porsi pooling, OJK berharap distribusi saham perdana akan menjadi lebih merata dan inklusif, tidak lagi didominasi oleh segelintir investor institusi atau pihak bermodal besar. Hal ini diharapkan dapat meningkatkan likuiditas saham di pasar sekunder pasca-listing.",
      "Para analis pasar modal menyambut baik langkah ini, memprediksi bahwa aturan baru tersebut akan memicu antusiasme investor ritel untuk lebih aktif berpartisipasi dalam penawaran umum perdana. Peluang untuk mendapatkan alokasi saham yang lebih besar kini terbuka lebar, yang pada gilirannya dapat memperdalam basis investor domestik dan memperkuat struktur pasar modal Indonesia secara keseluruhan.",
    ],
  },
  {
    id: 15,
    category: "berita-makroekonomi",
    title: "Dana Asing Masuk ke RI Tembus Rp14 Triliun, SRBI Jadi Rebutan",
    date: "8 Desember 2025",
    imageSrc: "/berita/15.webp",
    description:
      "Bank Indonesia mencatat aliran modal asing (capital inflow) sebesar Rp14,08 triliun dalam sepekan, dengan minat tinggi pada instrumen SRBI dan saham.",
    body: [
      "Bank Indonesia melaporkan kabar positif mengenai arus modal internasional yang masuk ke tanah air. Dalam satu pekan perdagangan di awal Desember 2025, tercatat aliran modal asing (capital inflow) yang sangat deras membanjiri pasar keuangan domestik dengan total nilai mencapai Rp14,08 triliun. Angka ini mencerminkan tingginya kepercayaan investor global terhadap prospek ekonomi Indonesia di tengah volatilitas pasar dunia.",
      "Data menunjukkan bahwa dana asing tersebut mengalir deras ke berbagai instrumen keuangan. Selain pasar saham dan Surat Berharga Negara (SBN), instrumen Sekuritas Rupiah Bank Indonesia (SRBI) menjadi primadona baru yang diperebutkan oleh investor asing. Imbal hasil yang menarik dan stabilitas instrumen moneter ini menjadi daya tarik utama di mata pemilik modal global.",
      "Masuknya dana segar dalam jumlah besar ini memiliki dampak ganda yang sangat positif bagi perekonomian nasional. Pertama, hal ini secara langsung mempertebal cadangan devisa negara. Kedua, derasnya inflow membantu menjaga stabilitas nilai tukar Rupiah, yang terpantau menguat di kisaran Rp16.600-an per Dolar AS. Stabilitas kurs ini krusial untuk menjaga daya beli masyarakat dan menekan inflasi barang impor (imported inflation).",
    ],
  },
  {
    id: 16,
    category: "market-review",
    title: "KSEP Market Review #6 (Edisi Desember)",
    description:
      "Optimisme pasar akibat 'Efek Purbaya' dengan target IHSG 10.000 dan reli global serentak, didukung oleh data ekonomi AS dan Indonesia yang solid.",
    pdfEmbedLink:
      "https://drive.google.com/file/d/1bdhif8mhhnfJea7XTKtmaORh_JQ1tmBw/preview",
    coverImage: "/market-review/mr6.webp",
  },
  {
    id: 17,
    category: "market-review",
    title: "KSEP Market Review #5 (Edisi November)",
    description:
      "Laporan ini mencatat rekor baru IHSG yang ditopang oleh rotasi agresif ke sektor infrastruktur dan energi serta optimisme ekonomi 2026, di tengah kejatuhan Nikkei akibat sinyal kebijakan moneter Jepang.",
    pdfEmbedLink:
      "https://drive.google.com/file/d/1GtyWsG1lfEDyfdGVYp5sk1H4r1My-iga/preview",
    coverImage: "/market-review/mr5.webp",
  },
  {
    id: 18,
    category: "market-review",
    title: "KSEP Market Review #4 (Edisi Oktober)",
    description:
      "Dokumen ini menyoroti rekor tertinggi baru IHSG yang dipicu oleh suntikan likuiditas fiskal dan reli sektor properti, sementara pasar global merayakan optimisme pelonggaran moneter meski sektor teknologi terkoreksi.",
    pdfEmbedLink:
      "https://drive.google.com/file/d/1lBGXj0JQqVh9cGfTiMj-7d75G9iOSQG8/preview",
    coverImage: "/market-review/mr4.webp",
  },
  {
    id: 19,
    category: "market-review",
    title: "KSEP Market Review #3 (Edisi September)",
    description:
      "Edisi ini mengulas keputusan mengejutkan BI memangkas suku bunga dan lonjakan sektor perindustrian yang menopang pasar, di tengah ketidakpastian kebijakan The Fed dan divergensi pasar Asia.",
    pdfEmbedLink:
      "https://drive.google.com/file/d/1vHi5aNCgUt2ghCyOL_4u1BFgw6SKRJHE/preview",
    coverImage: "/market-review/mr3.webp",
  },
  {
    id: 20,
    category: "market-review",
    title: "KSEP Market Review #2 (Edisi Agustus)",
    description:
      "Laporan ini membahas paradoks pertumbuhan PDB Indonesia yang kuat (5,12%) namun IHSG terkoreksi tajam akibat demonstrasi politik domestik, serta tekanan global dari sinyal hawkish The Fed.",
    pdfEmbedLink:
      "https://drive.google.com/file/d/1_QCZ1swSj3Bfbmu0szFDglJ5pVTbBe8-/preview",
    coverImage: "/market-review/mr2.webp",
  },
  {
    id: 21,
    category: "market-review",
    title: "KSEP Market Review #1 (Edisi Juli)",
    description:
      "Edisi ini menyoroti penguatan moderat IHSG yang didorong oleh kesepakatan penurunan tarif impor AS menjadi 19% dan euforia IPO emiten baru, meskipun dibayangi arus keluar modal asing.",
    pdfEmbedLink:
      "https://drive.google.com/file/d/1xjE7C3z3OjKar8KIHof8oNav5psSprSM/preview",
    coverImage: "/market-review/mr1.webp",
  },
];

export const allInsightPosts: InsightPost[] = posts.map((p) => {
  const slug = createSlug(p.title);
  if (p.category === "market-review") {
    return {
      ...p,
      slug,
      pdfEmbedLink: createDriveEmbedLink(p.pdfEmbedLink),
    };
  }
  return {
    ...p,
    slug,
  };
});
