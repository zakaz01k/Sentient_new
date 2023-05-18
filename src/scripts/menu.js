const menuButton = document.querySelector('.menu');
const dropdownMenu = document.querySelector('.dropdown-menu');

menuButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});

document.addEventListener('click', event => {
  const targetElement = event.target;
  if (
    !targetElement.closest('.dropdown-menu') &&
    !targetElement.closest('.menu')
  ) {
    dropdownMenu.classList.remove('show');
  }
});
