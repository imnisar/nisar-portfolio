/* ===================================================
   FlutterCraft Portfolio — JavaScript
   =================================================== */

// ── Navbar scroll effect ──────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
  updateActiveNav();
}, { passive: true });

// ── Mobile hamburger ──────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ── Active nav highlight ──────────────────────────
const sections = document.querySelectorAll('section[id]');
function updateActiveNav() {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 90) current = s.id;
  });
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

// ── Reveal on scroll (only elements BELOW the fold) ──
function addRevealClass() {
  const selectors = '.skill-card, .project-card, .timeline-item, .highlight, .stat-card, .edu-card, .lang-card, .contact-info-card, .contact-form, .about-right, .about-left';
  document.querySelectorAll(selectors).forEach(el => {
    if (!el.closest('#hero')) {
      el.classList.add('reveal');
    }
  });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, idx * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

function observeReveal() {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// ── Animated stat counters ────────────────────────
function animateCounters() {
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    const target = +el.dataset.target;
    const duration = 1500;
    const step = (target / duration) * 16;
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current);
      if (current >= target) clearInterval(timer);
    }, 16);
  });
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.3 });

// ── Animate skill bars ────────────────────────────
const barsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar[data-width]').forEach((bar, i) => {
        setTimeout(() => {
          bar.style.width = bar.dataset.width + '%';
        }, i * 100);
      });
      barsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

// ── Contact form ──────────────────────────────────
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const submitBtn = document.getElementById('submitBtn');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  submitBtn.disabled = true;
  const originalBtnText = submitBtn.innerHTML;
  submitBtn.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    </svg>Sending…`;

  try {
    const formData = new FormData(contactForm);
    const response = await fetch("https://formspree.io/f/mqakpnvb", { // Placeholder - user should replace with their own
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      contactForm.reset();
      formSuccess.classList.add('visible');
      setTimeout(() => formSuccess.classList.remove('visible'), 5000);
    } else {
      alert("Oops! There was a problem submitting your form");
    }
  } catch (error) {
    alert("Oops! There was a problem submitting your form");
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;
  }
});

// ── Smooth scroll ─────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── Cursor blink effect on hero title ────────────
function heroBlinkCursor() {
  const gradText = document.querySelector('.hero-title .gradient-text');
  if (!gradText) return;
  // just add a pulsing class — text stays visible
  gradText.classList.add('hero-typing-done');
}

// ── Init ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  addRevealClass();
  observeReveal();

  const aboutSection = document.querySelector('#about .about-stats');
  if (aboutSection) statsObserver.observe(aboutSection);

  const skillsSection = document.querySelector('.skills-grid');
  if (skillsSection) barsObserver.observe(skillsSection);

  // Short delay then mark hero text as animated (no blanking)
  setTimeout(heroBlinkCursor, 800);

  updateActiveNav();

  // Floating code parallax
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    document.querySelectorAll('.floating-code').forEach((el, i) => {
      const dir = i % 2 === 0 ? 1 : -1;
      el.style.transform = `translateY(${y * 0.04 * dir}px)`;
    });
  }, { passive: true });
});
