const app = document.querySelector('#app');
const nav = document.querySelector('#site-nav');
const { departments, coreBoard, programs } = organizationData;
const navigationItems = [['beranda', 'Beranda'], ['profil', 'Profil'], ['visi-misi', 'Visi & Misi'], ['pengurus', 'Pengurus'], ['departemen', 'Departemen'], ['program', 'Program Kerja'], ['kalender', 'Kalender'], ['dokumentasi', 'Dokumentasi'], ['kontak', 'Kontak']];
const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[character]));
const initials = name => name.split(' ').filter(Boolean).map(part => part[0]).slice(0, 2).join('');
const formatDate = date => new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${date}T00:00:00`));
const formatMonth = date => new Intl.DateTimeFormat('id-ID', { month: 'long', year: 'numeric' }).format(new Date(`${date}T00:00:00`));
const image = (src, alt, className) => src ? `<img class="${className}" src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" />` : `<div class="${className} media-placeholder" role="img" aria-label="${escapeHtml(alt)} belum tersedia">${escapeHtml(initials(alt.replace('Logo ', '')))}</div>`;
const sortedPrograms = () => [...programs].sort((a, b) => a.date.localeCompare(b.date));

function setIdentity() {
  document.title = `${organizationData.shortName} — Kabinet ${organizationData.cabinet}`;
  document.querySelector('meta[name="description"]').content = `Website publik ${organizationData.name}, Kabinet ${organizationData.cabinet} ${organizationData.year}.`;
  for (const selector of ['#header-logo', '#footer-logo']) { const node = document.querySelector(selector); node.src = organizationData.logo.src; node.alt = organizationData.logo.alt; }
  document.querySelector('#header-name').textContent = organizationData.shortName;
  document.querySelector('#footer-name').textContent = organizationData.shortName;
  document.querySelector('#footer-org-name').textContent = organizationData.name;
  document.querySelector('#year').textContent = organizationData.year;
  document.querySelector('#footer-socials').innerHTML = socialLinks(organizationData.contact);
}

function socialLinks({ instagram, tiktok, email }) {
  const links = [
    instagram?.url && ['Instagram', instagram.url, '_blank'],
    tiktok?.url && ['TikTok', tiktok.url, '_blank'],
    email && ['Email', `mailto:${email}`, '']
  ].filter(Boolean);
  return links.map(([label, url, target]) => `<a href="${escapeHtml(url)}"${target ? ' target="_blank" rel="noreferrer"' : ''}>${label} <span aria-hidden="true">↗</span></a>`).join('');
}

function renderNav(active = '') {
  nav.innerHTML = navigationItems.map(([id, label]) => `<a class="${active === id ? 'active' : ''}" href="#${id}">${label}</a>`).join('');
}

function programCards(items, emptyText) {
  if (!items.length) return `<p class="empty-state">${escapeHtml(emptyText)}</p>`;
  return items.map(program => `<article class="program-card"><time datetime="${program.date}"><b>${new Date(`${program.date}T00:00:00`).getDate()}</b><span>${formatMonth(program.date)}</span></time><div><p class="program-category">${escapeHtml(program.category || 'Program Kerja')}</p><h3>${escapeHtml(program.name)}</h3><p>${escapeHtml(program.description)}</p></div><a href="#${escapeHtml(program.departmentId)}" aria-label="Lihat departemen ${escapeHtml(departments.find(department => department.id === program.departmentId)?.name || '')}">↗</a></article>`).join('');
}

function documentationCards(items, emptyText) {
  if (!items.length) return `<p class="empty-state">${escapeHtml(emptyText)}</p>`;
  return items.map(item => `<article class="documentation-card">${image(item.image, item.title, 'documentation-image')}<div><p>${escapeHtml(item.date ? formatDate(item.date) : organizationData.year)}</p><h3>${escapeHtml(item.title)}</h3><span>${escapeHtml(item.caption || '')}</span></div></article>`).join('');
}

function allDocumentation() {
  const departmentItems = departments.flatMap(department => (department.documentation || []).map(item => ({ ...item, caption: item.caption || department.name })));
  const programItems = programs.flatMap(program => (program.documentation || []).map(item => ({ ...item, title: item.title || program.name, caption: item.caption || program.description, date: item.date || program.date })));
  return [...programItems, ...departmentItems];
}

function renderCalendar() {
  const grouped = sortedPrograms().reduce((result, program) => { const key = program.date.slice(0, 7); (result[key] ||= []).push(program); return result; }, {});
  const entries = Object.entries(grouped);
  return entries.length ? entries.map(([, events]) => `<article class="calendar-month"><h3>${formatMonth(events[0].date)}</h3>${events.map(event => `<a href="#${escapeHtml(event.departmentId)}"><time datetime="${event.date}">${new Date(`${event.date}T00:00:00`).getDate()}</time><span><b>${escapeHtml(event.name)}</b><small>${escapeHtml(event.category || 'Program Kerja')}</small></span></a>`).join('')}</article>`).join('') : '<p class="empty-state">Kalender akan terisi ketika kegiatan dipublikasikan di org-data.js.</p>';
}

function home() {
  app.innerHTML = document.querySelector('#home-template').innerHTML;
  renderNav();
  document.querySelector('#hero-cabinet').textContent = `KABINET ${organizationData.cabinet.toUpperCase()} / ${organizationData.year}`;
  document.querySelector('#hero-name').textContent = organizationData.name;
  document.querySelector('#hero-jargon').textContent = `“${organizationData.jargon}”`;
  const heroLogo = document.querySelector('#hero-logo'); heroLogo.src = organizationData.logo.src; heroLogo.alt = organizationData.logo.alt;
  document.querySelector('#hero-short-name').textContent = organizationData.shortName.toUpperCase();
  document.querySelector('#profile-title').textContent = organizationData.profile.title;
  document.querySelector('#profile-content').innerHTML = `<p>${escapeHtml(organizationData.profile.description)}</p><ul>${organizationData.profile.highlights.map(highlight => `<li>${escapeHtml(highlight)}</li>`).join('')}</ul>`;
  document.querySelector('#vision').textContent = organizationData.vision;
  document.querySelector('#missions').innerHTML = organizationData.missions.map(mission => `<li>${escapeHtml(mission)}</li>`).join('');
  document.querySelector('#core-board-caption').textContent = `Pengurus inti Kabinet ${organizationData.cabinet} tahun kepengurusan ${organizationData.year}.`;
  document.querySelector('#leaders').innerHTML = coreBoard.map(person => `<article class="leader-card"><div class="avatar">${initials(person.name)}</div><p>${escapeHtml(person.role)}</p><h3>${escapeHtml(person.name)}</h3></article>`).join('');
  document.querySelector('#department-list').innerHTML = departments.map((department, index) => `<a class="department-row" href="#${department.id}"><span class="department-number">${String(index + 1).padStart(2, '0')}</span>${image(department.logo, `Logo ${department.name}`, 'department-mark')}<span><h3>${escapeHtml(department.name)}</h3><p>Ketua Departemen: ${escapeHtml(department.leader)}</p></span><b aria-hidden="true">↗</b></a>`).join('');
  document.querySelector('#program-list').innerHTML = programCards(sortedPrograms(), 'Belum ada program kerja yang dipublikasikan.');
  document.querySelector('#calendar').innerHTML = renderCalendar();
  document.querySelector('#documentation-list').innerHTML = documentationCards(allDocumentation(), 'Dokumentasi kegiatan akan tampil setelah pengurus menambahkan foto resmi ke data organisasi.');
  document.querySelector('#contact-content').innerHTML = `<p>Untuk kolaborasi, pertanyaan, atau informasi lebih lanjut, hubungi HMJ Kedokteran melalui kanal berikut.</p><a class="contact-email" href="mailto:${escapeHtml(organizationData.contact.email)}">${escapeHtml(organizationData.contact.email)}</a><div class="social-links">${socialLinks(organizationData.contact)}</div>`;
}

function departmentRoom(id) {
  const department = departments.find(item => item.id === id);
  if (!department) return home();
  const index = departments.indexOf(department) + 1;
  const deptPrograms = sortedPrograms().filter(program => program.departmentId === id);
  const programDocumentation = deptPrograms.flatMap(program => (program.documentation || []).map(item => ({ ...item, title: item.title || program.name, caption: item.caption || program.description, date: item.date || program.date })));
  app.innerHTML = document.querySelector('#department-template').innerHTML;
  renderNav('departemen');
  document.querySelector('#department-number').textContent = String(index).padStart(2, '0');
  document.querySelector('#department-logo').replaceWith(document.querySelector('#department-logo').cloneNode());
  const logo = document.querySelector('#department-logo'); logo.outerHTML = image(department.logo, `Logo ${department.name}`, 'department-logo');
  document.querySelector('#department-eyebrow').textContent = `DEPARTEMEN ${String(index).padStart(2, '0')} / KABINET ${organizationData.cabinet.toUpperCase()}`;
  document.querySelector('#department-name').textContent = department.name;
  document.querySelector('#department-description').textContent = department.description;
  document.querySelector('#department-socials').innerHTML = socialLinks({ instagram: department.instagram ? { url: department.instagram } : null, tiktok: department.tiktok ? { url: department.tiktok } : null, email: department.email });
  document.querySelector('#team-list').innerHTML = [{ name: department.leader, role: 'Ketua Departemen' }, ...department.members.map(name => ({ name, role: 'Anggota Departemen' }))].map(person => `<article class="team-member"><div class="avatar">${initials(person.name)}</div><div><p>${person.role}</p><h3>${escapeHtml(person.name)}</h3></div></article>`).join('');
  document.querySelector('#department-programs').innerHTML = programCards(deptPrograms, 'Program kerja departemen ini belum dipublikasikan.');
  document.querySelector('#department-documentation').innerHTML = documentationCards([...(department.documentation || []), ...programDocumentation], 'Dokumentasi departemen ini akan tampil setelah foto resmi ditambahkan.');
}

function route() {
  const id = location.hash.slice(1) || 'beranda';
  if (departments.some(department => department.id === id)) { departmentRoom(id); window.scrollTo(0, 0); } else { home(); requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: 'start' })); }
  setMenu(false);
}

const menuToggle = document.querySelector('.menu-toggle');
const setMenu = open => { nav.classList.toggle('open', open); menuToggle.setAttribute('aria-expanded', String(open)); };
menuToggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.addEventListener('click', () => setMenu(false));
document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });
setIdentity();
window.addEventListener('hashchange', route);
route();
