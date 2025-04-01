// Navegació suau
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Efecte fade-in
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  section.classList.add('fade-in');
  observer.observe(section);
});

// Botó scroll top
const scrollTopBtn = document.createElement('button');
scrollTopBtn.id = 'scrollTop';
scrollTopBtn.innerText = '↑';
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Tips aleatoris
const tips = [
  "Pots generar tots els menús setmanals amb només una petició POST.",
  "Només els gestors poden crear, editar o eliminar plats.",
  "L’API valida automàticament l’autenticació amb token JWT.",
  "Els usuaris només poden veure les seves pròpies comandes.",
  "Cada plat té un ID únic... com tu!",
];

document.addEventListener('DOMContentLoaded', () => {
  const tip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById('random-tip').innerText = tip;
});
