const year = document.getElementById('copyright-year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const toggle = document.querySelector('.mobile-menu-toggle');
const navbar = document.querySelector('.navbar');

if (toggle && navbar) {
  toggle.addEventListener('click', () => {
    const open = navbar.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}
