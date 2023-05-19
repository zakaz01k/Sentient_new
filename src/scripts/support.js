const btnSupport = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeBtn = modal.querySelector('.close');

// Функция для открытия модального окна
function openModal() {
  modal.style.display = 'block';
}

// Функция для закрытия модального окна
function closeModal() {
  modal.style.display = 'none';
}

// Обработчик клика по кнопке поддержки
btnSupport.addEventListener('click', openModal);

// Обработчик клика по кнопке закрытия
closeBtn.addEventListener('click', closeModal);

// Обработчик клика вне модального окна для его закрытия
window.addEventListener('click', event => {
  if (event.target === modal) {
    closeModal();
  }
});
