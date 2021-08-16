const button = document.getElementById('action-button');
const container = document.getElementById('container');

button.addEventListener('click', () => {
  container.querySelector('ul.hidden').classList.remove('hidden');
});
