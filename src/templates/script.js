const button = document.getElementById('action-button');
const container = document.getElementById('container');
const modal = document.getElementById('modal');
const modalMessage = modal.querySelector('.modal-body');
const modalInst = new bootstrap.Modal(modal);

modal.addEventListener('hide.bs.modal', () => {
  modalMessage.removeChild(modalMessage.firstChild);
});

button.addEventListener('click', () => {
  const item = container.querySelector('div.hidden');
  const message = item.querySelector('li.popup');

  item.classList.remove('hidden');

  if (message) {
    modalMessage.appendChild(item.cloneNode(true));
    modalInst.show();
  }
});

container.addEventListener('click', (e) => {
  let total = 0;
  const target = e.target;

  if (target.hasAttribute('type')) {
    container.querySelectorAll('input[type=checkbox]:checked').forEach((item) => {
      total += parseInt(item.previousSibling.querySelector('.points').textContent, 10);
    });
  }

  localStorage.setItem('totalPoints', total);
});
