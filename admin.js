// Halaman editor membaca identitas dari sumber data yang sama dengan situs publik.
document.title = `Editor — ${organizationData.shortName}`;
document.querySelector('#admin-logo').src = organizationData.logo.src;
document.querySelector('#admin-logo').alt = organizationData.logo.alt;
document.querySelector('#admin-name').textContent = organizationData.shortName;
document.querySelector('#admin-cabinet').textContent = `Kabinet ${organizationData.cabinet}.`;
document.querySelector('#admin-year').textContent = organizationData.year;
