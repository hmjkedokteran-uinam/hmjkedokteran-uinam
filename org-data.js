/* Data organisasi publik. Siap dipindahkan ke API/database tanpa mengubah tampilan. */
const organizationData = {
  name: 'HMJ Kedokteran Fakultas Kedokteran dan Ilmu Kesehatan UIN Alauddin Makassar',
  shortName: 'HMJ KEDOKTERAN UINAM',
  year: 2026,
  slogan: 'Hangat Bersua, Cerdas Berkarya',
  cabinet: 'Kabinet Simfoni',
  logo: '✦',
  email: 'hmjkedokteran@uin-alauddin.ac.id',
  instagram: 'https://www.instagram.com/',
  tiktok: 'https://www.tiktok.com/',
  vision: 'Menjadi ruang bertumbuh bagi mahasiswa kedokteran yang hangat dalam bersua, cerdas dalam berkarya, dan berlandaskan nilai keislaman.',
  missions: ['Menguatkan kapasitas akademik, organisasi, dan karakter mahasiswa.', 'Membangun kolaborasi yang responsif terhadap kebutuhan mahasiswa dan masyarakat.', 'Mendorong karya, pengabdian, dan inovasi yang bermanfaat.'],
  coreBoard: [
    { name: 'Ara Azzahra Ramadhani', role: 'Ketua Umum' },
    { name: 'Ayesha Azzahra Parsa', role: 'Sekretaris Umum' },
    { name: 'Siti Nailah Fadhilah', role: 'Wakil Sekretaris' },
    { name: 'Safira Safar', role: 'Bendahara Umum' },
    { name: 'Andi Sri Rahmi Putri', role: 'Wakil Bendahara' }
  ],
  departments: [
    { id:'administrasi', name:'Administrasi', icon:'✎', leader:'Nur Khalisah Rafiuddin', members:['A.Rifqatul Azizah Makmur','Besse Aminah Longi','A.Humaerah Maharani','Muthiah Salma Khatima'], programs:[], documentation:[], instagram:'', tiktok:'', email:'' },
    { id:'hubungan-luar', name:'Hubungan Luar', icon:'↗', leader:'Najwa Nabilah Hasan', members:['Sitti Asiilah maitsha A','Nayla Aulika Mutmainnah','Anisa Amiruddin','Ahmad Mushlih Syahputra'], programs:[], documentation:[], instagram:'', tiktok:'', email:'' },
    { id:'dana-dan-usaha', name:'Dana dan Usaha', icon:'₊', leader:'Nayla Jazila Anwar', members:['Shinta Ramadhani','Maryam Melany','Andi Diara Nurfadhilah','Riska Ananda Naswa Multazam','A.Khaerunnisa Umar'], programs:[], documentation:[], instagram:'', tiktok:'', email:'' },
    { id:'jaringan-dan-komunikasi', name:'Jaringan dan Komunikasi', icon:'◌', leader:'Arsyi Aulia Az Zahra', members:['Aisyah Nafhah Ariqoh Kahar Bakti','Arini Aulia Ma’rifah','Mutmainnah Azzahra','Busriyanti Basri','Annisa Azka','Fathiyyah Zahra Jaya'], programs:[], documentation:[], instagram:'', tiktok:'', email:'' },
    { id:'pengembangan-minat-dan-bakat', name:'Pengembangan Minat dan Bakat', icon:'✺', leader:'Achmad Giffary Riyadh', members:['Nabila Tasya Shafirah',"Irzi Naezthezya Asr'laa Hutasuhut",'Andi Nabila Shafira Nur','Tiara Agustirani','Elrica Evelyna Annisa Purnomo'], programs:[], documentation:[], instagram:'', tiktok:'', email:'' },
    { id:'pengabdian-masyarakat', name:'Pengabdian Masyarakat', icon:'♡', leader:'Ahmad Afif Ulhaq', members:['Nurul Fidyah Asnawir','Andina Nur Maharani','Nikmatul Fauziah','Sita Mardatillah','Kinanti Rohma Aulia'], programs:[], documentation:[], instagram:'', tiktok:'', email:'' },
    { id:'kajian-strategi-dan-advokasi', name:'Kajian Strategi dan Advokasi', icon:'⚖', leader:'Salsabila Eka Sabrina S', members:['Andi Nirma Febriyani Nur Akbar','Afifah Amrin','Khaeri Safitrah Alimin','Qonita Amirah','Syatirah Nur Ramadhani Hamzah'], programs:[], documentation:[], instagram:'', tiktok:'', email:'' },
    { id:'pendidikan-dan-penelitian', name:'Pendidikan dan Penelitian', icon:'◈', leader:'Muh. Farid Apriansyah Naim', members:['Naylah Amaliah Muslimin','Nibras Zaka Ramadhan Tawainella','Aisah Annisa Arrahimu','Andi Salsabila Zulfa','Al’zena Nurul Zahra','Besse Sakina'], programs:[], documentation:[], instagram:'', tiktok:'', email:'' },
    { id:'pengembangan-sumber-daya-manusia', name:'Pengembangan Sumber Daya Manusia', icon:'⌁', leader:'Adinda Nurul Azzahra', members:['Aqilah Nabila Syach RM','Andi Auliani Astrid','Naurah Salsabila Aiqa','Salman Alfarisi M','Andi Syafwan Khairan','Firta Rezky Utami'], programs:[], documentation:[], instagram:'', tiktok:'', email:'' },
    { id:'pengembangan-ilmu-dan-karakter-islam', name:'Pengembangan Ilmu dan Karakter Islam', icon:'☾', leader:'A. Rifat Rezha Mayorga', members:['Khairani Mafaza','Naurah Fadhilah Asikin','Huriyah Putri Irdianty','Ahmad Zaki','Siti Uswatun Hasanah'], programs:[], documentation:[], instagram:'', tiktok:'', email:'' }
  ],
  programs: [
    { id:'rapat-kerja-2026', name:'Rapat Kerja Kabinet Simfoni', date:'2026-10-10', description:'Penyelarasan arah kerja, kalender kegiatan, dan kolaborasi seluruh departemen.', departmentId:'administrasi', category:'Internal', documentation:'', link:'' },
    { id:'orientasi-anggota', name:'Orientasi Pengurus HMJ Kedokteran', date:'2026-11-07', description:'Penguatan kebersamaan dan pemahaman peran bagi seluruh pengurus Kabinet Simfoni.', departmentId:'pengembangan-sumber-daya-manusia', category:'Pengembangan SDM', documentation:'', link:'' },
    { id:'bakti-masyarakat', name:'Bakti Sosial Kesehatan', date:'2026-12-12', description:'Kegiatan pengabdian dan edukasi kesehatan bersama masyarakat.', departmentId:'pengabdian-masyarakat', category:'Pengabdian', documentation:'', link:'' }
  ]
};
