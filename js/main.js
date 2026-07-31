// Global JavaScript for animations and interactions

document.addEventListener('DOMContentLoaded', () => {
  // Navigation Menu Toggle
  const navToggle = document.querySelector('.nav__toggle');
  const navLinks = document.querySelector('.nav__links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('is-open');
      navToggle.classList.toggle('is-active', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        navToggle.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Intersection Observer for Scroll Animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.05
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Select elements to animate
  const animatedElements = document.querySelectorAll('.fade-in-up, .project-card, .about-text, .about-details, .contact-band h2');
  
  animatedElements.forEach(el => {
    // Add base class if not present
    if (!el.classList.contains('fade-in-up')) {
      el.classList.add('fade-in-up');
    }
    observer.observe(el);
  });
});
