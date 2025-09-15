
const btn = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

btn?.addEventListener('click', () => {
  const isOpen = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('open', !isOpen);
});

// Cierra el menú al navegar
nav?.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    btn.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  }
});
