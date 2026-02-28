/* ===================================================
   FlutterCraft Portfolio — JavaScript
   =================================================== */

// ── Navbar scroll effect ──────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  updateActiveNav();
}, { passive: true });

// ── Active nav highlight ──────────────────────────
const navLinks = document.getElementById('navLinks');
const sections = document.querySelectorAll('section[id]');
function updateActiveNav() {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

// ── Reveal on scroll (only elements BELOW the fold) ──
function addRevealClass() {
  const selectors = '.skill-card, .project-card, .project-card-v2, .timeline-item, .highlight, .stat-card, .edu-card, .lang-card, .contact-info-card, .contact-form, .about-right, .about-left';
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
    const response = await fetch("https://formspree.io/f/mlgwvvaw", {
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
      const data = await response.json();
      if (data.errors) {
        alert(data.errors.map(error => error.message).join(", "));
      } else {
        alert("Oops! There was a problem submitting your form. Please ensure your Formspree ID is correct.");
      }
    }
  } catch (error) {
    console.error("Form submission error:", error);
    alert("Oops! Connection error. Please check your internet or Formspree setup.");
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

  // ── Project Modal Logic ─────────────────────────
  const modal = document.getElementById('projectModal');
  const modalContent = modal.querySelector('.modal-container');
  const modalClose = document.getElementById('modalClose');
  const modalOverlay = modal.querySelector('.modal-overlay');

  const modalImg = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalDesc = document.getElementById('modalDescription');
  const modalStack = document.getElementById('modalStack');
  const modalActions = document.getElementById('modalActions');

  function openModal(data) {
    modalImg.src = data.image;
    modalImg.alt = data.title;
    modalTitle.textContent = data.title;
    modalCategory.textContent = data.category;
    modalDesc.textContent = data.description;

    // Build stack tags
    modalStack.innerHTML = '';
    data.stack.split(',').forEach(tech => {
      const span = document.createElement('span');
      span.className = 'stack-tag';
      span.textContent = tech.trim();
      modalStack.appendChild(span);
    });

    // Build actions
    modalActions.innerHTML = '';
    if (data.playstore) {
      const a = document.createElement('a');
      a.href = data.playstore;
      a.target = '_blank';
      a.rel = 'noopener';
      a.className = 'btn-playstore';
      a.innerHTML = `
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.65,14.12C20.45,13.14 20.45,10.86 18.65,9.88L16.81,8.88L14.4,11.29L16.81,15.12M4.6,1.41L14.44,11.25L17.55,8.14L5.6,1.41C5.3,1.24 4.93,1.24 4.6,1.41M4.6,22.59C4.93,22.76 5.3,22.76 5.6,22.59L17.55,15.86L14.44,12.75L4.6,22.59Z" />
        </svg>
        View on Play Store`;
      modalActions.appendChild(a);
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scroll
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.project-card-v2').forEach(card => {
    card.addEventListener('click', () => {
      openModal(card.dataset);
    });
  });

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);


  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // ── Theme Toggle Logic ────────────────────────────
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  // Check for saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-theme');
  }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const isLight = body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
});
