const app = document.querySelector('#app');
const nav = document.querySelector('#navigation');
const { departments, coreBoard, programs } = organizationData;
const initials = name => name.split(' ').filter(Boolean).map(part => part[0]).slice(0, 2).join('');
const formatDate = date => new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${date}T00:00:00`));
const escapeHtml = value => String(value).replace(/[&<>'"]/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#039;', '"':'&quot;' }[char]));

function renderNav(active) {
  nav.innerHTML = `<a class="${active === 'beranda' ? 'active' : ''}" href="#beranda">Beranda <span>00</span></a>` + departments.map((department, index) => `<a class="${active === department.id ? 'active' : ''}" href="#${department.id}">${escapeHtml(department.name)}<span>${String(index + 1).padStart(2, '0')}</span></a>`).join('');
}
function programCards(items, emptyText) {
  return items.length ? items.map(program => `<article class="agenda-item"><time datetime="${program.date}">${formatDate(program.date).toUpperCase()}</time><div><h3>${escapeHtml(program.name)}</h3><p>${escapeHtml(program.description)}</p></div><span>${escapeHtml(program.category || 'PROGRAM KERJA')}</span></article>`).join('') : `<p class="empty-state">${emptyText}</p>`;
}
function home() {
  app.innerHTML = document.querySelector('#home-template').innerHTML;
  renderNav('beranda');
  document.querySelector('#leaders').innerHTML = coreBoard.map(person => `<article class="leader"><div class="avatar">${initials(person.name)}</div><div><p>${escapeHtml(person.role)}</p><h3>${escapeHtml(person.name)}</h3></div></article>`).join('');
  document.querySelector('#department-list').innerHTML = departments.map((department, index) => `<a class="department-row" href="#${department.id}"><div class="dept-symbol">${department.icon}</div><h3>${escapeHtml(department.name)}</h3><p>Ketua Departemen: ${escapeHtml(department.leader)}</p><span class="arrow">↗</span></a>`).join('');
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
  document.querySelector('#room-icon').textContent = department.icon;
  document.querySelector('#room-eyebrow').textContent = `RUANG ${String(index).padStart(2, '0')} — DEPARTEMEN`;
  document.querySelector('#room-title').textContent = department.name;
  document.querySelector('#room-description').textContent = `Ruang kerja ${department.name} dalam ${organizationData.cabinet}.`;
  document.querySelector('#team-list').innerHTML = [{ name: department.leader, role: 'Ketua Departemen' }, ...department.members.map(name => ({ name, role: 'Staf Departemen' }))].map(person => `<article class="team-member"><div class="mini-avatar">${initials(person.name)}</div><div><h3>${escapeHtml(person.name)}</h3><p>${person.role}</p></div></article>`).join('');
  document.querySelector('#department-programs').innerHTML = programCards(deptPrograms, 'Program kerja departemen ini akan diperbarui oleh editor.');
  document.querySelector('#documentation').innerHTML = department.documentation.length ? department.documentation.map((item, itemIndex) => `<article class="doc-card"><span>${String(itemIndex + 1).padStart(2, '0')} / ${organizationData.year}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.caption || department.name)}</p></article>`).join('') : `<p class="empty-state">Dokumentasi program kerja akan ditampilkan di ruang ini.</p>`;
}
function route() {
  const id = location.hash.slice(1) || 'beranda';
  const homeSections = ['beranda', 'tentang', 'pengurus', 'departemen', 'program'];
  if (homeSections.includes(id)) { home(); requestAnimationFrame(() => document.querySelector(id === 'beranda' ? '.hero' : `#${id}`)?.scrollIntoView({ block: 'start' })); } else room(id);
  document.querySelector('#sidebar').classList.remove('open');
}
window.addEventListener('hashchange', route);
document.querySelector('.menu-toggle').onclick = () => document.querySelector('#sidebar').classList.toggle('open');
document.querySelector('#live-date').textContent = new Intl.DateTimeFormat('id-ID', { weekday:'short', day:'numeric', month:'short', year:'numeric' }).format(new Date()).toUpperCase();
document.querySelector('#year').textContent = organizationData.year;
route();
