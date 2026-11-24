/* ============================================================
   main.js — estrelas, corações flutuantes, reveal e interações
   ============================================================ */

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Estrelas cintilantes ---------- */
const starsContainer = document.getElementById('stars');

for (let i = 0; i < 90; i++) {
  const star = document.createElement('span');
  const size = 1 + Math.random() * 2;
  star.className = 'star';
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.animationDelay = `${Math.random() * 5}s`;
  star.style.animationDuration = `${2 + Math.random() * 3}s`;
  starsContainer.appendChild(star);
}

/* ---------- Corações subindo ---------- */
const heartsContainer = document.getElementById('hearts');

function createFloatingHeart() {
  const heart = document.createElement('span');
  heart.className = 'floating-heart';
  heart.textContent = Math.random() > 0.3 ? '♥' : '♡';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${10 + Math.random() * 20}px`;
  heart.style.animationDuration = `${9 + Math.random() * 9}s`;
  heart.style.animationDelay = `${-Math.random() * 6}s`;
  heart.style.setProperty('--sway', `${(Math.random() - 0.5) * 120}px`);
  heart.style.setProperty('--rot', `${(Math.random() - 0.5) * 90}deg`);
  heart.addEventListener('animationend', () => heart.remove());
  heartsContainer.appendChild(heart);
}

if (!reducedMotion) {
  for (let i = 0; i < 14; i++) createFloatingHeart();
  setInterval(createFloatingHeart, 700);
}

/* ---------- Reveal das seções ao rolar ---------- */
const reveals = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  reveals.forEach((el) => observer.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('visible'));
}

/* ---------- Explosão de corações ao clicar/teclar ---------- */
function burstHearts(x, y) {
  for (let i = 0; i < 14; i++) {
    const heart = document.createElement('span');
    const angle = (Math.PI * 2 * i) / 14;
    const distance = 60 + Math.random() * 80;

    heart.className = 'burst-heart';
    heart.textContent = '♥';
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.fontSize = `${12 + Math.random() * 14}px`;
    heart.style.setProperty('--tx', `${Math.cos(angle) * distance}px`);
    heart.style.setProperty('--ty', `${Math.sin(angle) * distance}px`);
    heart.style.animationDelay = `${Math.random() * 0.12}s`;
    heart.addEventListener('animationend', () => heart.remove());
    document.body.appendChild(heart);
  }
}

document.querySelectorAll('.heart-beat').forEach((heart) => {
  heart.addEventListener('click', (event) => {
    event.preventDefault();
    const rect = heart.getBoundingClientRect();
    burstHearts(rect.left + rect.width / 2, rect.top + rect.height / 2);
  });

  heart.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const rect = heart.getBoundingClientRect();
      burstHearts(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }
  });
});
