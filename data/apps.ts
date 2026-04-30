export type AppStatus = "AKTIF" | "MAINTENANCE" | "NON-AKTIF";

export type AppOwner =
  | "DISKOMINFO"
  | "BAG ORGANISASI"
  | "BAPENDA"
  | "BAPPEDA"
  | "SETDA";

export type SpbeApp = {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
  owner: AppOwner;
  status: AppStatus;
  subServices: string[];
  websiteUrl: string;
  lastUpdate: string;
};

export const apps: SpbeApp[] = [
  {
    id: 1,
    name: "SiTaNDE",
    description: "Sistem Tata Naskah Dinas Elektronik untuk administrasi persuratan pemerintahan yang tertib dan terintegrasi.",
    fullDescription:
      "SiTaNDE dirancang untuk mendukung proses tata naskah dinas secara digital, mulai dari surat masuk, surat keluar, disposisi pimpinan, tanda tangan elektronik, hingga pengarsipan dokumen. Aplikasi ini membantu mempercepat alur kerja administrasi sekaligus menjaga akuntabilitas dan kerapihan dokumen resmi antar unit kerja.",
    owner: "DISKOMINFO",
    status: "AKTIF",
    subServices: ["Pengelolaan Surat", "Disposisi", "Tanda Tangan Elektronik", "Arsip Digital"],
    websiteUrl: "https://sitande.example.go.id",
    lastUpdate: "30 April 2026"
  },
  {
    id: 2,
    name: "Sistawan",
    description: "Sistem informasi pendataan wartawan untuk pengelolaan identitas, media, dan kebutuhan verifikasi liputan resmi.",
    fullDescription:
      "Sistawan membantu pemerintah daerah melakukan pendataan wartawan dan media secara lebih tertib. Melalui sistem ini, informasi keanggotaan, asal media, riwayat verifikasi, dan kebutuhan koordinasi peliputan dapat dikelola dalam satu dashboard yang ringkas dan mudah diakses.",
    owner: "DISKOMINFO",
    status: "AKTIF",
    subServices: ["Pendataan Wartawan", "Verifikasi Media", "Riwayat Registrasi", "Manajemen Profil"],
    websiteUrl: "https://sistawan.example.go.id",
    lastUpdate: "28 April 2026"
  },
  {
    id: 3,
    name: "Opentiket",
    description: "Platform pelaporan aduan siber untuk menerima insiden, memantau respons, dan mendokumentasikan tindak lanjut teknis.",
    fullDescription:
      "Opentiket menjadi kanal koordinasi pelaporan aduan siber dan gangguan keamanan informasi. Sistem ini memudahkan pencatatan tiket, kategorisasi insiden, pelacakan progres penyelesaian, dan dokumentasi tindak lanjut agar respons insiden lebih terukur dan terdokumentasi.",
    owner: "DISKOMINFO",
    status: "AKTIF",
    subServices: ["Lapor Aduan Siber", "Pelacakan Tiket", "Klasifikasi Insiden", "Riwayat Penanganan"],
    websiteUrl: "https://opentiket.example.go.id",
    lastUpdate: "27 April 2026"
  },
  {
    id: 4,
    name: "Bangakip",
    description: "Aplikasi pendukung akuntabilitas kinerja instansi pemerintah untuk perencanaan, monitoring, dan evaluasi capaian.",
    fullDescription:
      "Bangakip mendukung unit organisasi dalam menyusun sasaran, indikator, serta evaluasi kinerja instansi pemerintah. Dashboard ini dirancang untuk membantu pemantauan capaian secara berkala dan mempermudah penyajian informasi yang dibutuhkan dalam penguatan akuntabilitas organisasi.",
    owner: "BAG ORGANISASI",
    status: "AKTIF",
    subServices: ["Akuntabilitas Kinerja", "Pemantauan Indikator", "Evaluasi Capaian", "Rekap Laporan"],
    websiteUrl: "https://bangakip.example.go.id",
    lastUpdate: "24 April 2026"
  },
  {
    id: 5,
    name: "Simda",
    description: "Sistem Informasi Manajemen Daerah untuk mendukung pengelolaan pajak dan pelaporan pendapatan secara terstruktur.",
    fullDescription:
      "Simda dimanfaatkan untuk mendukung proses pengelolaan target pajak, billing, dan pelaporan penerimaan daerah. Aplikasi ini memusatkan informasi operasional yang dibutuhkan BAPENDA agar proses administrasi dan kontrol data pajak berjalan lebih efisien dan akurat.",
    owner: "BAPENDA",
    status: "AKTIF",
    subServices: ["Target Pajak", "Billing Pajak", "Laporan Pajak", "Monitoring Penerimaan"],
    websiteUrl: "https://simda.example.go.id",
    lastUpdate: "29 April 2026"
  },
  {
    id: 6,
    name: "Sipenting",
    description: "Layanan pendataan dan pemetaan informasi penting internal untuk kebutuhan koordinasi dan penyiapan bahan kebijakan.",
    fullDescription:
      "Sipenting membantu perangkat daerah menyusun informasi prioritas yang dibutuhkan dalam koordinasi pimpinan. Sistem ini dirancang untuk mempermudah pengelolaan data penting, pelacakan sumber informasi, dan penyajian ringkasan yang siap digunakan untuk forum koordinasi atau bahan kebijakan.",
    owner: "SETDA",
    status: "AKTIF",
    subServices: ["Pendataan Informasi", "Ringkasan Bahan Pimpinan", "Monitoring Tindak Lanjut"],
    websiteUrl: "https://sipenting.example.go.id",
    lastUpdate: "20 April 2026"
  },
  {
    id: 7,
    name: "Acabisban",
    description: "Sistem koordinasi agenda dan aktivitas strategis lintas bidang untuk menjaga sinkronisasi kegiatan internal.",
    fullDescription:
      "Acabisban digunakan untuk menyusun agenda, mengelola catatan kegiatan, dan menyelaraskan tindak lanjut antar bidang. Kehadiran aplikasi ini membantu organisasi menjaga ritme koordinasi serta memastikan setiap agenda strategis terdokumentasi dengan lebih baik.",
    owner: "SETDA",
    status: "MAINTENANCE",
    subServices: ["Agenda Kegiatan", "Catatan Rapat", "Monitoring Tindak Lanjut"],
    websiteUrl: "https://acabisban.example.go.id",
    lastUpdate: "16 April 2026"
  },
  {
    id: 8,
    name: "Open Data",
    description: "Portal publikasi data terbuka pemerintah daerah untuk transparansi informasi dan pemanfaatan data oleh masyarakat.",
    fullDescription:
      "Open Data disiapkan sebagai ruang publikasi dataset strategis pemerintah daerah agar dapat dimanfaatkan secara lebih luas. Portal ini memudahkan publik mengakses data, metadata, dan pembaruan dataset yang relevan untuk transparansi pemerintahan serta pemanfaatan data oleh masyarakat.",
    owner: "DISKOMINFO",
    status: "AKTIF",
    subServices: ["Katalog Dataset", "Metadata Data", "Unduh Data", "Publikasi Statistik"],
    websiteUrl: "https://opendata.example.go.id",
    lastUpdate: "30 April 2026"
  },
  {
    id: 9,
    name: "Parjhuaga",
    description: "Aplikasi dukungan layanan internal untuk koordinasi administrasi dan pengelolaan agenda kerja unit terkait.",
    fullDescription:
      "Parjhuaga mendukung pengelolaan administrasi internal yang membutuhkan keteraturan agenda, pencatatan aktivitas, dan dokumentasi tindak lanjut. Aplikasi ini membantu unit pengelola menyederhanakan koordinasi kerja dengan pendekatan yang lebih tertib dan terdokumentasi.",
    owner: "BAPPEDA",
    status: "MAINTENANCE",
    subServices: ["Koordinasi Agenda", "Administrasi Internal", "Dokumentasi Kegiatan"],
    websiteUrl: "https://parjhuaga.example.go.id",
    lastUpdate: "14 April 2026"
  },
  {
    id: 10,
    name: "E-BPHTB",
    description: "Layanan digital pendukung BPHTB untuk pelaporan, verifikasi, dan pemantauan dokumen perpajakan daerah.",
    fullDescription:
      "E-BPHTB memfasilitasi proses administrasi BPHTB yang sebelumnya lebih banyak dilakukan secara manual. Sistem ini mendukung pelaporan, validasi, dan pengelolaan dokumen agar proses layanan perpajakan daerah berjalan lebih cepat, tertib, dan mudah ditelusuri.",
    owner: "BAPENDA",
    status: "NON-AKTIF",
    subServices: ["Pelaporan BPHTB", "Validasi Dokumen", "Monitoring Permohonan"],
    websiteUrl: "https://ebphtb.example.go.id",
    lastUpdate: "9 April 2026"
  }
];

export const appOwners = ["Semua", "DISKOMINFO", "BAG ORGANISASI", "BAPENDA", "BAPPEDA", "SETDA"] as const;
