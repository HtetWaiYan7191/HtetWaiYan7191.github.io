const navbar = document.getElementById('nav-bar');
const menuNavbar = document.getElementById('menu-navbar');
const crossBtn = document.getElementById('cross-btn');
const lists = document.querySelectorAll('#menu-navbar li');
const email = document.querySelector('input[type="email"]');
const form = document.getElementById('contact-me-form');
const span = document.getElementById('error-msg');
const errorMessage = 'The email should be written in lower case';

menuNavbar.style.display = 'none';
lists.forEach((list) => {
  list.addEventListener('click', () => {
    navbar.style.display = 'block';
    menuNavbar.style.display = 'none';
  });
});

navbar.addEventListener('click', () => {
  navbar.style.display = 'none';
  if (menuNavbar.style.display === 'none') {
    menuNavbar.style.display = 'block';
  } else {
    menuNavbar.style.display = 'none';
  }
});

crossBtn.addEventListener('click', () => {
  navbar.style.display = 'block';
  menuNavbar.style.display = 'none';
});

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    span.textContent = errorMessage;
    span.style.display = 'block';
    e.preventDefault();
  } else {
    span.style.display = 'none';
  }
});
