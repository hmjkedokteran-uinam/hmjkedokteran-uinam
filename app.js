const app = document.querySelector('#app');
const nav = document.querySelector('#navigation');
const { departments, coreBoard, programs } = organizationData;
const initials = name => name.split(' ').filter(Boolean).map(part => part[0]).slice(0, 2).join('');
const formatDate = date => new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${date}T00:00:00`));
const escapeHtml = value => String(value).replace(/[&<>'"]/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#039;', '"':'&quot;' }[char]));
const image = (src, alt, className) => `<img class="${className}" src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" />`;

function populateOrganizationIdentity() {
  document.title = `${organizationData.name} — Kabinet ${organizationData.cabinet}`;
  document.querySelector('meta[name="description"]').content = `Portal ${organizationData.name}.`;
  document.querySelector('#header-logo').src = organizationData.logo.src;
  document.querySelector('#header-logo').alt = organizationData.logo.alt;
  document.querySelector('#header-name').textContent = organizationData.shortName;
  document.querySelector('#sidebar-name').textContent = organizationData.name;
  document.querySelector('#sidebar-email').href = `mailto:${organizationData.email}`;
  document.querySelector('#sidebar-email').textContent = organizationData.email;
  document.querySelector('#footer-logo').src = organizationData.logo.src;
  document.querySelector('#footer-logo').alt = organizationData.logo.alt;
  document.querySelector('#footer-name').textContent = organizationData.shortName;
  document.querySelector('#footer-org-name').textContent = organizationData.name;
  document.querySelector('#footer-instagram').href = organizationData.socialMedia.instagram.url;
  document.querySelector('#footer-instagram').textContent = `Instagram @${organizationData.socialMedia.instagram.username} ↗`;
  document.querySelector('#footer-tiktok').href = organizationData.socialMedia.tiktok.url;
  document.querySelector('#footer-tiktok').textContent = `TikTok @${organizationData.socialMedia.tiktok.username} ↗`;
  document.querySelector('#footer-email').href = `mailto:${organizationData.email}`;
}
function renderNav(active) {
  nav.innerHTML = `<a class="${active === 'beranda' ? 'active' : ''}" href="#beranda">Beranda <span>00</span></a>` + departments.map((department, index) => `<a class="${active === department.id ? 'active' : ''}" href="#${department.id}">${escapeHtml(department.name)}<span>${String(index + 1).padStart(2, '0')}</span></a>`).join('');
}
function programCards(items, emptyText) {
  return items.length ? items.map(program => {
    const programName = program.link
      ? `<a class="program-link" href="${escapeHtml(program.link)}" target="_blank" rel="noreferrer">${escapeHtml(program.name)} ↗</a>`
      : escapeHtml(program.name);
    return `<article class="agenda-item"><time datetime="${program.date}">${formatDate(program.date).toUpperCase()}</time><div><h3>${programName}</h3><p>${escapeHtml(program.description)}</p></div><span>${escapeHtml(program.category || 'PROGRAM KERJA')}</span></article>`;
  }).join('') : `<p class="empty-state">${emptyText}</p>`;
}
function home() {
  app.innerHTML = document.querySelector('#home-template').innerHTML;
  renderNav('beranda');
  document.querySelector('#hero-cabinet').textContent = `KABINET ${organizationData.cabinet.toUpperCase()} / ${organizationData.year}`;
  document.querySelector('#hero-name').textContent = organizationData.name;
  document.querySelector('#hero-jargon').textContent = organizationData.jargon;
  document.querySelector('#hero-logo').src = organizationData.logo.src;
  document.querySelector('#hero-logo').alt = organizationData.logo.alt;
  document.querySelector('#hero-logo-name').textContent = organizationData.name.toUpperCase();
  document.querySelector('#ticker').innerHTML = [organizationData.jargon.split(',')[0], organizationData.jargon.split(',')[1], `KABINET ${organizationData.cabinet.toUpperCase()}`, `TAHUN ${organizationData.year}`].filter(Boolean).map(text => `<span>${escapeHtml(text.trim().toUpperCase())}</span><i></i>`).join('');
  document.querySelector('#vision').textContent = organizationData.vision;
  document.querySelector('#missions').innerHTML = organizationData.missions.map(mission => `<li>${escapeHtml(mission)}</li>`).join('');
  document.querySelector('#core-board-caption').textContent = `Pengurus inti Kabinet ${organizationData.cabinet} tahun kepengurusan ${organizationData.year}.`;
  document.querySelector('#leaders').innerHTML = coreBoard.map(person => `<article class="leader"><div class="avatar">${initials(person.name)}</div><div><p>${escapeHtml(person.role)}</p><h3>${escapeHtml(person.name)}</h3></div></article>`).join('');
  document.querySelector('#department-list').innerHTML = departments.map(department => `<a class="department-row" href="#${department.id}">${image(department.logo, `Logo ${department.name}`, 'dept-symbol')}<h3>${escapeHtml(department.name)}</h3><p>Ketua Departemen: ${escapeHtml(department.leader)}</p><span class="arrow">↗</span></a>`).join('');
  const upcoming = [...programs].filter(program => new Date(`${program.date}T23:59:59`) >= new Date()).sort((a, b) => a.date.localeCompare(b.date)).slice(0, 4);
  document.querySelector('#agenda-list').innerHTML = programCards(upcoming, 'Belum ada agenda mendatang yang dipublikasikan.');
}
function room(id) {
  const department = departments.find(item => item.id === id);
  if (!department) return home();
  const deptPrograms = programs.filter(program => program.departmentId === id).sort((a, b) => a.date.localeCompare(b.date));
  app.innerHTML = document.querySelector('#department-template').innerHTML;
  renderNav(id);
  const index = departments.indexOf(department) + 1;
  document.querySelector('#room-number').textContent = String(index).padStart(2, '0');
  const roomLogo = document.querySelector('#room-logo'); roomLogo.src = department.logo; roomLogo.alt = `Logo ${department.name}`;
  document.querySelector('#room-eyebrow').textContent = `RUANG ${String(index).padStart(2, '0')} — DEPARTEMEN`;
  document.querySelector('#room-title').textContent = department.name;
  document.querySelector('#room-description').textContent = `Ruang kerja ${department.name} dalam Kabinet ${organizationData.cabinet}.`;
  const socialLinks = [['Instagram', department.instagram], ['TikTok', department.tiktok], ['Email', department.email ? `mailto:${department.email}` : '']].filter(([, url]) => url);
  document.querySelector('#department-socials').innerHTML = socialLinks.map(([label, url]) => `<a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${label} ↗</a>`).join('');
  document.querySelector('#team-list').innerHTML = [{ name: department.leader, role: 'Ketua Departemen' }, ...department.members.map(name => ({ name, role: 'Staf Departemen' }))].map(person => `<article class="team-member"><div class="mini-avatar">${initials(person.name)}</div><div><h3>${escapeHtml(person.name)}</h3><p>${person.role}</p></div></article>`).join('');
  document.querySelector('#department-programs').innerHTML = programCards(deptPrograms, 'Program kerja departemen ini dapat ditambahkan di org-data.js.');
  const documentation = [...department.documentation, ...deptPrograms.filter(program => program.documentation).map(program => ({ title: program.name, caption: `${formatDate(program.date)} — ${program.description}`, image: program.documentation }))];
  document.querySelector('#documentation').innerHTML = documentation.length ? documentation.map(item => `<article class="doc-card">${image(item.image, item.title, 'doc-image')}<div class="doc-copy"><span>${organizationData.year}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.caption || department.name)}</p></div></article>`).join('') : `<p class="empty-state">Tambahkan URL/path foto dokumentasi di org-data.js.</p>`;
}
function route() {
  const id = location.hash.slice(1) || 'beranda';
  const homeSections = ['beranda', 'tentang', 'pengurus', 'departemen', 'program'];
  if (homeSections.includes(id)) { home(); requestAnimationFrame(() => document.querySelector(id === 'beranda' ? '.hero' : `#${id}`)?.scrollIntoView({ block: 'start' })); } else room(id);
  if (typeof setSidebarOpen === 'function') setSidebarOpen(false);
}
populateOrganizationIdentity();
window.addEventListener('hashchange', route);
const sidebar = document.querySelector('#sidebar');
const sidebarOverlay = document.querySelector('#sidebar-overlay');
const menuToggle = document.querySelector('.menu-toggle');
const setSidebarOpen = isOpen => {
  sidebar.classList.toggle('open', isOpen);
  sidebarOverlay.hidden = !isOpen;
  menuToggle.setAttribute('aria-expanded', String(isOpen));
};
menuToggle.onclick = () => setSidebarOpen(!sidebar.classList.contains('open'));
document.querySelector('.sidebar-close').onclick = () => setSidebarOpen(false);
sidebarOverlay.onclick = () => setSidebarOpen(false);
document.addEventListener('keydown', event => { if (event.key === 'Escape') setSidebarOpen(false); });
nav.addEventListener('click', event => { if (event.target.closest('a')) setSidebarOpen(false); });
document.querySelector('#live-date').textContent = new Intl.DateTimeFormat('id-ID', { weekday:'short', day:'numeric', month:'short', year:'numeric' }).format(new Date()).toUpperCase();
document.querySelector('#year').textContent = organizationData.year;
route();
