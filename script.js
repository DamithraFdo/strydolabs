// Smooth animation for the title
window.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector('.animated-title');
  title.style.opacity = 0;
  setTimeout(() => {
      title.style.opacity = 1;
      title.style.transition = "opacity 2s ease-in-out";
  }, 500);
});

// Responsive navbar
const nav = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
      nav.classList.add('sticky');
  } else {
      nav.classList.remove('sticky');
});

// Mobile menu toggle
const navLinks = document.querySelector('.nav-links');
document.querySelector('.navbar').addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
});
