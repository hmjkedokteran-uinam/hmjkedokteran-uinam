/*
 * Satu-satunya sumber konten situs publik.
 * Ganti nilai `logo`, `image`, atau `documentation` dengan URL/path gambar Anda
 * (misalnya "assets/logo-hmj.png" atau "https://.../foto-kegiatan.jpg").
 */
const svgImage = (label, background = '#14532d', foreground = '#ffffff') =>
  `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="${background}"/><circle cx="200" cy="200" r="150" fill="none" stroke="#d7f59e" stroke-width="10"/><text x="200" y="222" text-anchor="middle" font-family="Arial, sans-serif" font-size="72" font-weight="700" fill="${foreground}">${label}</text></svg>`)}`;
const departmentLogo = (initials, color) => svgImage(initials, color);
const documentationImage = (title, color) => svgImage(title.slice(0, 2).toUpperCase(), color, '#112419');

const organizationData = {
  name: 'HMJ Kedokteran UIN Alauddin Makassar',
  shortName: 'HMJ Kedokteran UIN Alauddin Makassar',
  year: 2026,
  jargon: 'Hangat Bersua, Cerdas Berkarya',
  cabinet: 'Simfoni',
  logo: 'assets/logo-hmj.svg',
  email: 'hmjkedokteran@uin-alauddin.ac.id',
  instagram: 'https://www.instagram.com/',
  tiktok: 'https://www.tiktok.com/',
  vision: 'Menjadi ruang bertumbuh bagi mahasiswa kedokteran yang hangat dalam bersua, cerdas dalam berkarya, dan berlandaskan nilai keislaman.',
  missions: ['Menguatkan kapasitas akademik, organisasi, dan karakter mahasiswa.', 'Membangun kolaborasi yang responsif terhadap kebutuhan mahasiswa dan masyarakat.', 'Mendorong karya, pengabdian, dan inovasi yang bermanfaat.'],
  coreBoard: [
    { name: 'Ara Azzahra Ramadhani', role: 'Ketua Umum' }, { name: 'Ayesha Azzahra Parsa', role: 'Sekretaris Umum' }, { name: 'Siti Nailah Fadhilah', role: 'Wakil Sekretaris' }, { name: 'Safira Safar', role: 'Bendahara Umum' }, { name: 'Andi Sri Rahmi Putri', role: 'Wakil Bendahara' }
  ],
  departments: [
    { id:'administrasi', name:'Administrasi', logo:departmentLogo('AD','#14532d'), leader:'Nur Khalisah Rafiuddin', members:['A.Rifqatul Azizah Makmur','Besse Aminah Longi','A.Humaerah Maharani','Muthiah Salma Khatima'], documentation:[{ title:'Arsip Administrasi', caption:'Dokumentasi kegiatan administrasi.', image:documentationImage('Administrasi','#d7f59e') }], instagram:'', tiktok:'', email:'' },
    { id:'hubungan-luar', name:'Hubungan Luar', logo:departmentLogo('HL','#1e3a8a'), leader:'Najwa Nabilah Hasan', members:['Sitti Asiilah maitsha A','Nayla Aulika Mutmainnah','Anisa Amiruddin','Ahmad Mushlih Syahputra'], documentation:[{ title:'Kemitraan dan Relasi', caption:'Dokumentasi kolaborasi eksternal.', image:documentationImage('Hubungan Luar','#ffc107') }], instagram:'', tiktok:'', email:'' },
    { id:'dana-dan-usaha', name:'Dana dan Usaha', logo:departmentLogo('DU','#8a4b14'), leader:'Nayla Jazila Anwar', members:['Shinta Ramadhani','Maryam Melany','Andi Diara Nurfadhilah','Riska Ananda Naswa Multazam','A.Khaerunnisa Umar'], documentation:[{ title:'Kegiatan Dana dan Usaha', caption:'Dokumentasi program kewirausahaan.', image:documentationImage('Dana dan Usaha','#ffc107') }], instagram:'', tiktok:'', email:'' },
    { id:'jaringan-dan-komunikasi', name:'Jaringan & Komunikasi', logo:departmentLogo('JK','#0f766e'), leader:'Arsyi Aulia Az Zahra', members:['Aisyah Nafhah Ariqoh Kahar Bakti','Arini Aulia Ma’rifah','Mutmainnah Azzahra','Busriyanti Basri','Annisa Azka','Fathiyyah Zahra Jaya'], documentation:[{ title:'Publikasi Kegiatan', caption:'Dokumentasi jaringan dan komunikasi.', image:documentationImage('Jaringan','#d7f59e') }], instagram:'', tiktok:'', email:'' },
    { id:'pengembangan-minat-dan-bakat', name:'Pengembangan Minat & Bakat', logo:departmentLogo('MB','#7c3aed'), leader:'Achmad Giffary Riyadh', members:['Nabila Tasya Shafirah',"Irzi Naezthezya Asr'laa Hutasuhut",'Andi Nabila Shafira Nur','Tiara Agustirani','Elrica Evelyna Annisa Purnomo'], documentation:[{ title:'Panggung Minat dan Bakat', caption:'Dokumentasi pengembangan potensi.', image:documentationImage('Minat Bakat','#d7f59e') }], instagram:'', tiktok:'', email:'' },
    { id:'pengabdian-masyarakat', name:'Pengabdian Masyarakat', logo:departmentLogo('PM','#b91c1c'), leader:'Ahmad Afif Ulhaq', members:['Nurul Fidyah Asnawir','Andina Nur Maharani','Nikmatul Fauziah','Sita Mardatillah','Kinanti Rohma Aulia'], documentation:[{ title:'Aksi Pengabdian', caption:'Dokumentasi kegiatan bersama masyarakat.', image:documentationImage('Pengabdian','#ffc107') }], instagram:'', tiktok:'', email:'' },
    { id:'kajian-strategi-dan-advokasi', name:'Kajian Strategi & Advokasi', logo:departmentLogo('KA','#334155'), leader:'Salsabila Eka Sabrina S', members:['Andi Nirma Febriyani Nur Akbar','Afifah Amrin','Khaeri Safitrah Alimin','Qonita Amirah','Syatirah Nur Ramadhani Hamzah'], documentation:[{ title:'Forum Kajian', caption:'Dokumentasi kajian dan advokasi.', image:documentationImage('Kajian','#d7f59e') }], instagram:'', tiktok:'', email:'' },
    { id:'pendidikan-dan-penelitian', name:'Pendidikan & Penelitian', logo:departmentLogo('PP','#0369a1'), leader:'Muh. Farid Apriansyah Naim', members:['Naylah Amaliah Muslimin','Nibras Zaka Ramadhan Tawainella','Aisah Annisa Arrahimu','Andi Salsabila Zulfa','Al’zena Nurul Zahra','Besse Sakina'], documentation:[{ title:'Ruang Penelitian', caption:'Dokumentasi program pendidikan.', image:documentationImage('Penelitian','#d7f59e') }], instagram:'', tiktok:'', email:'' },
    { id:'pengembangan-sdm', name:'Pengembangan SDM', logo:departmentLogo('SDM','#4d7c0f'), leader:'Adinda Nurul Azzahra', members:['Aqilah Nabila Syach RM','Andi Auliani Astrid','Naurah Salsabila Aiqa','Salman Alfarisi M','Andi Syafwan Khairan','Firta Rezky Utami'], documentation:[{ title:'Pengembangan Pengurus', caption:'Dokumentasi peningkatan kapasitas.', image:documentationImage('SDM','#d7f59e') }], instagram:'', tiktok:'', email:'' },
    { id:'pengembangan-ilmu-dan-karakter-islam', name:'Pengembangan Ilmu & Karakter Islam', logo:departmentLogo('IKI','#166534'), leader:'A. Rifat Rezha Mayorga', members:['Khairani Mafaza','Naurah Fadhilah Asikin','Huriyah Putri Irdianty','Ahmad Zaki','Siti Uswatun Hasanah'], documentation:[{ title:'Kajian Keislaman', caption:'Dokumentasi pengembangan nilai Islam.', image:documentationImage('Karakter Islam','#d7f59e') }], instagram:'', tiktok:'', email:'' }
  ],
  // Tambahkan, ubah, atau hapus objek program di bawah ini. `documentation` menerima URL/path gambar.
  programs: [
    { id:'rapat-kerja-2026', name:'Rapat Kerja Kabinet Simfoni', date:'2026-10-10', description:'Penyelarasan arah kerja, kalender kegiatan, dan kolaborasi seluruh departemen.', departmentId:'administrasi', category:'Internal', documentation:documentationImage('Rapat Kerja','#d7f59e'), link:'' },
    { id:'orientasi-anggota', name:'Orientasi Pengurus HMJ Kedokteran', date:'2026-11-07', description:'Penguatan kebersamaan dan pemahaman peran bagi seluruh pengurus Kabinet Simfoni.', departmentId:'pengembangan-sdm', category:'Pengembangan SDM', documentation:documentationImage('Orientasi','#ffc107'), link:'' },
    { id:'bakti-masyarakat', name:'Bakti Sosial Kesehatan', date:'2026-12-12', description:'Kegiatan pengabdian dan edukasi kesehatan bersama masyarakat.', departmentId:'pengabdian-masyarakat', category:'Pengabdian', documentation:documentationImage('Bakti Sosial','#d7f59e'), link:'' }
  ]
};
