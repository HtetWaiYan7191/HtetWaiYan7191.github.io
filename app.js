const input = document.querySelector('input[type="text"]');

input.addEventListener('focus', (e) => {
  e.target.style.backgroundColor = 'black';
  e.target.style.color = '#FFFFFF';
});

input.addEventListener('blur', (e) => {
  e.target.style.backgroundColor = '';
  e.target.style.color = '';
});