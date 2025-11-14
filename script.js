const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-list a');

const toggleNav = () => {
  nav?.classList.toggle('open');
};

const closeNav = () => {
  nav?.classList.remove('open');
};

toggle?.addEventListener('click', () => {
  toggleNav();
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeNav();
  });
});

const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = link.getAttribute('href');

    if (target === '#') {
      return;
    }

    const anchor = document.querySelector(target);

    if (anchor) {
      event.preventDefault();
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeNav();
    }
  });
});

const revealItems = document.querySelectorAll('.reveal');

const handleScrollReveal = () => {
  const windowHeight = window.innerHeight;

  revealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();

    if (rect.top < windowHeight - 80) {
      item.classList.add('visible');
    }
  });
};

window.addEventListener('load', handleScrollReveal);
window.addEventListener('scroll', handleScrollReveal);
