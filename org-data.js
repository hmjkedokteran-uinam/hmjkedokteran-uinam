/*
 * Sumber konten tunggal situs publik. Ubah data di berkas ini tanpa mengubah
 * struktur HTML. Masukkan path/URL gambar asli hanya setelah berkas tersedia.
 */
const organizationData = {
  name: 'HMJ Kedokteran Fakultas Kedokteran dan Ilmu Kesehatan UIN Alauddin Makassar',
  shortName: 'HMJ Kedokteran UIN Alauddin Makassar',
  year: 2026,
  cabinet: 'Simfoni',
  jargon: 'Hangat Bersua, Cerdas Berkarya',
  logo: { src: 'assets/logo-hmj.svg', alt: 'Logo HMJ Kedokteran UIN Alauddin Makassar' },
  profile: {
    title: 'Rumah kolaborasi bagi mahasiswa kedokteran.',
    description: 'Himpunan Mahasiswa Jurusan Kedokteran Fakultas Kedokteran dan Ilmu Kesehatan UIN Alauddin Makassar adalah ruang bertumbuh, belajar, serta berkarya bersama bagi mahasiswa Kedokteran.',
    highlights: ['Berlandaskan integritas dan uswatun hasanah', 'Menguatkan kolaborasi internal dan eksternal', 'Menghadirkan karya yang bermanfaat bagi kampus dan masyarakat']
  },
  vision: 'Transformasi HMJK UINAM sebagai rumah yang harmonis, ruang kolaborasi yang progresif, dan regenerasi yang strategis.',
  missions: ['Membentuk HMJK yang berintegritas dan uswatun hasanah.', 'Merevitalisasi lingkungan kampus yang nyaman sebagai wadah bertumbuh.', 'Menguatkan sinergi HMJK secara internal maupun eksternal.', 'Mengintegrasikan bonding dalam setiap proses kerja dengan spirit kebersamaan.', 'Memaksimalkan realisasi program kerja yang berkualitas.'],
  contact: {
    email: 'hmjkedokteran@uin-alauddin.ac.id',
    instagram: { label: 'Instagram', username: 'hmjkuinam', url: 'https://www.instagram.com/hmjkuinam' },
    tiktok: { label: 'TikTok', username: 'hmjkuinam', url: 'https://www.tiktok.com/@hmjkuinam' }
  },
  coreBoard: [
    { name: 'Ara Azzahra Ramadhani', role: 'Ketua Umum' }, { name: 'Ayesha Azzahra Parsa', role: 'Sekretaris Umum' }, { name: 'Siti Nailah Fadhilah', role: 'Wakil Sekretaris' }, { name: 'Safira Safar', role: 'Bendahara Umum' }, { name: 'Andi Sri Rahmi Putri', role: 'Wakil Bendahara' }
  ],
  departments: [
    { id: 'administrasi', name: 'Administrasi', logo: '', leader: 'Nur Khalisah Rafiuddin', members: ['A. Rifqatul Azizah Makmur', 'Besse Aminah Longi', 'A. Humaerah Maharani', 'Muthiah Salma Khatima'], description: 'Mengelola administrasi, arsip, dan tata kelola internal organisasi.', instagram: '', tiktok: '', email: '', documentation: [] },
    { id: 'hubungan-luar', name: 'Hubungan Luar', logo: '', leader: 'Najwa Nabilah Hasan', members: ['Sitti Asiilah Maitsha A', 'Nayla Aulika Mutmainnah', 'Anisa Amiruddin', 'Ahmad Mushlih Syahputra'], description: 'Membangun relasi, kemitraan, dan kolaborasi dengan pihak eksternal.', instagram: '', tiktok: '', email: '', documentation: [] },
    { id: 'dana-dan-usaha', name: 'Dana dan Usaha', logo: '', leader: 'Nayla Jazila Anwar', members: ['Shinta Ramadhani', 'Maryam Melany', 'Andi Diara Nurfadhilah', 'Riska Ananda Naswa Multazam', 'A. Khaerunnisa Umar'], description: 'Mengembangkan kemandirian organisasi melalui program dana dan usaha.', instagram: '', tiktok: '', email: '', documentation: [] },
    { id: 'jaringan-dan-komunikasi', name: 'Jaringan dan Komunikasi', logo: '', leader: 'Arsyi Aulia Az Zahra', members: ['Aisyah Nafhah Ariqoh Kahar Bakti', 'Arini Aulia Ma’rifah', 'Mutmainnah Azzahra', 'Busriyanti Basri', 'Annisa Azka', 'Fathiyyah Zahra Jaya'], description: 'Mengelola komunikasi, jaringan, dan penyebaran informasi organisasi.', instagram: '', tiktok: '', email: '', documentation: [] },
    { id: 'pengembangan-minat-dan-bakat', name: 'Pengembangan Minat dan Bakat', logo: '', leader: 'Achmad Giffary Riyadh', members: ['Nabila Tasya Shafirah', "Irzi Naezthezya Asr'laa Hutasuhut", 'Andi Nabila Shafira Nur', 'Tiara Agustirani', 'Elrica Evelyna Annisa Purnomo'], description: 'Memfasilitasi pengembangan potensi, minat, dan bakat mahasiswa.', instagram: '', tiktok: '', email: '', documentation: [] },
    { id: 'pengabdian-masyarakat', name: 'Pengabdian Masyarakat', logo: '', leader: 'Ahmad Afif Ulhaq', members: ['Nurul Fidyah Asnawir', 'Andina Nur Maharani', 'Nikmatul Fauziah', 'Sita Mardatillah', 'Kinanti Rohma Aulia'], description: 'Menghadirkan aksi sosial dan edukasi kesehatan bersama masyarakat.', instagram: '', tiktok: '', email: '', documentation: [] },
    { id: 'kajian-strategi-dan-advokasi', name: 'Kajian Strategi dan Advokasi', logo: '', leader: 'Salsabila Eka Sabrina S', members: ['Andi Nirma Febriyani Nur Akbar', 'Afifah Amrin', 'Khaeri Safitrah Alimin', 'Qonita Amirah', 'Syatirah Nur Ramadhani Hamzah'], description: 'Mengembangkan kajian kritis, strategi, dan advokasi mahasiswa.', instagram: '', tiktok: '', email: '', documentation: [] },
    { id: 'pendidikan-dan-penelitian', name: 'Pendidikan dan Penelitian', logo: '', leader: 'Muh. Farid Apriansyah Naim', members: ['Naylah Amaliah Muslimin', 'Nibras Zaka Ramadhan Tawainella', 'Aisah Annisa Arrahimu', 'Andi Salsabila Zulfa', 'Al’zena Nurul Zahra', 'Besse Sakina'], description: 'Mendorong pengembangan pendidikan, keilmuan, dan penelitian.', instagram: '', tiktok: '', email: '', documentation: [] },
    { id: 'pengembangan-sdm', name: 'Pengembangan Sumber Daya Manusia', logo: '', leader: 'Adinda Nurul Azzahra', members: ['Aqilah Nabila Syach RM', 'Andi Auliani Astrid', 'Naurah Salsabila Aiqa', 'Salman Alfarisi M', 'Andi Syafwan Khairan', 'Firta Rezky Utami'], description: 'Mendampingi pengembangan kapasitas dan kualitas sumber daya manusia.', instagram: '', tiktok: '', email: '', documentation: [] },
    { id: 'pengembangan-ilmu-dan-karakter-islam', name: 'Pengembangan Ilmu dan Karakter Islam', logo: '', leader: 'A. Rifat Rezha Mayorga', members: ['Khairani Mafaza', 'Naurah Fadhilah Asikin', 'Huriyah Putri Irdianty', 'Ahmad Zaki', 'Siti Uswatun Hasanah'], description: 'Menguatkan keilmuan dan karakter Islam dalam proses berorganisasi.', instagram: '', tiktok: '', email: '', documentation: [] }
  ],
  programs: [
    { id: 'rapat-kerja-2026', name: 'Rapat Kerja Kabinet Simfoni', date: '2026-10-10', description: 'Penyelarasan arah kerja, kalender kegiatan, dan kolaborasi seluruh departemen.', departmentId: 'administrasi', category: 'Internal', documentation: [] },
    { id: 'orientasi-anggota', name: 'Orientasi Pengurus HMJ Kedokteran', date: '2026-11-07', description: 'Penguatan kebersamaan dan pemahaman peran bagi seluruh pengurus Kabinet Simfoni.', departmentId: 'pengembangan-sdm', category: 'Pengembangan SDM', documentation: [] },
    { id: 'bakti-masyarakat', name: 'Bakti Sosial Kesehatan', date: '2026-12-12', description: 'Kegiatan pengabdian dan edukasi kesehatan bersama masyarakat.', departmentId: 'pengabdian-masyarakat', category: 'Pengabdian', documentation: [] }
  ]
};
