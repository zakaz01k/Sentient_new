// Отримуємо посилання на кнопку меню та випадаюче меню
var menuButton = document.querySelector('.menu');
var dropdownMenu = document.querySelector('.dropdown-menu');

// Додаємо подію кліку на кнопку меню
menuButton.addEventListener('click', function (event) {
  event.stopPropagation(); // Зупиняємо подальше поширення події кліку
  dropdownMenu.style.display =
    dropdownMenu.style.display === 'none' ? 'block' : 'none';
});

// Додаємо подію кліку до всього документу
document.addEventListener('click', function (event) {
  // Перевіряємо, чи клікнуто не на меню або його елементи
  if (
    !dropdownMenu.contains(event.target) &&
    dropdownMenu.style.display === 'block'
  ) {
    dropdownMenu.style.display = 'none'; // Закриваємо меню
  }
});
