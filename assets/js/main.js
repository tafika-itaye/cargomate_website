/* Cargomate Limited — main.js */

// ── Navbar scroll ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  document.getElementById('backToTop').classList.toggle('visible', window.scrollY > 400);
});

// ── Hamburger menu ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// ── Back to top ──
document.getElementById('backToTop').addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

// ── Counter animation ──
function animateCounter(el, target, suffix) {
  let current = 0;
  const step = Math.ceil(target / 60);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current.toLocaleString();
    if (current >= target) clearInterval(timer);
  }, 25);
}

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.stat-item').forEach((item, i) => {
        const target = parseInt(item.dataset.count);
        animateCounter(document.getElementById('stat' + i), target);
      });
      statsObserver.disconnect();
    }
  });
}, {threshold: 0.4});

const statsBar = document.querySelector('.stats-bar');
if (statsBar) statsObserver.observe(statsBar);

// ── Scroll reveal ──
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity  = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {threshold: 0.1});

document.querySelectorAll('.service-card, .hiw-step, .why-card, .testi-card, .cov-item').forEach(el => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(30px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  revealObserver.observe(el);
});

// ── Quick track ──
function handleTrack() {
  const val = document.getElementById('trackInput').value.trim();
  if (!val) { alert('Please enter a job number or tracking reference.'); return; }
  alert('Tracking functionality is available in the full client portal.\nReference: ' + val + '\n\nPlease contact us at info@cargomatemw.com or call +265 994 094 363.');
}
document.getElementById('trackInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') handleTrack();
});

// ── Contact form ──
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
    document.getElementById('formSuccess').style.display = 'flex';
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Enquiry';
      btn.disabled = false;
      document.getElementById('formSuccess').style.display = 'none';
      e.target.reset();
    }, 5000);
  }, 1800);
}

// ── Active nav link on scroll ──
const sections = document.querySelectorAll('section[id]');
const navAs    = document.querySelectorAll('.nav-links a');
const spy = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAs.forEach(a => {
        a.style.background = '';
        a.style.color = '';
        if (a.getAttribute('href') === '#' + e.target.id) {
          a.style.background = 'var(--blue-50)';
          a.style.color = 'var(--blue-600)';
        }
      });
    }
  });
}, {rootMargin: '-40% 0px -55% 0px'});
sections.forEach(s => spy.observe(s));
