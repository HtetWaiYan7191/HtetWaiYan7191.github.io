const input = document.querySelector('input[type="text"]');
const navbar = document.getElementById('nav-bar');
const menuNavbar = document.getElementById('menu-navbar');
const crossBtn = document.getElementById('cross-btn');
const lists = document.querySelectorAll('#menu-navbar li');
const openPopButtons = document.querySelectorAll('[data-modal-target]');
const closePopButtons = document.querySelectorAll('[data-close-button');
const overlay = document.getElementById('overlay');

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

openPopButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closePopButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

lists.forEach((list) => {
  list.addEventListener('click', () => {
    menuNavbar.style.display = 'none';
  });
});

input.addEventListener('focus', (e) => {
  e.target.style.backgroundColor = 'black';
  e.target.style.color = '#FFFFFF';
});

input.addEventListener('blur', (e) => {
  e.target.style.backgroundColor = '';
  e.target.style.color = '';
});

navbar.addEventListener('click', () => {
  if (menuNavbar.style.display === 'none') {
    menuNavbar.style.display = 'block';
  } else {
    menuNavbar.style.display = 'none';
  }
});

crossBtn.addEventListener('click', () => {
  menuNavbar.style.display = 'none';
});