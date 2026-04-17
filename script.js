/* ================================================================
   SOMOS HISPANIDAD — script.js
   Funciones: Nav móvil, Fade-in scroll, Scroll-top, Form mailto
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ===== NAV MÓVIL ===== */
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks  = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ===== NAV SOMBRA AL HACER SCROLL ===== */
  const mainNav = document.getElementById('main-nav');
  if (mainNav) {
    window.addEventListener('scroll', () => {
      mainNav.style.boxShadow = window.scrollY > 60
        ? '0 4px 24px rgba(44,26,14,0.35)'
        : 'none';
    }, { passive: true });
  }

  /* ===== FADE-IN CON INTERSECTION OBSERVER ===== */
  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 90);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    fadeEls.forEach(el => observer.observe(el));
  }

  /* ===== SCROLL TOP BUTTON ===== */
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 450);
    }, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ===== FORMULARIO CONTACTO (mailto) ===== */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nombre  = (document.getElementById('form-nombre')?.value || '').trim();
      const email   = (document.getElementById('form-email')?.value  || '').trim();
      const asunto  = (document.getElementById('form-asunto')?.value || 'Consulta desde somoshispanidad.es').trim();
      const mensaje = (document.getElementById('form-mensaje')?.value || '').trim();

      if (!nombre || !email || !mensaje) {
        alert('Por favor, rellena todos los campos obligatorios.');
        return;
      }

      const body = [
        `Nombre: ${nombre}`,
        `Email de contacto: ${email}`,
        '',
        'Mensaje:',
        mensaje,
        '',
        '---',
        'Enviado desde el formulario web de Somos Hispanidad.'
      ].join('\n');

      const mailtoUrl = `mailto:contacto@somoshispanidad.es`
        + `?subject=${encodeURIComponent(asunto)}`
        + `&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoUrl;
    });
  }

});
