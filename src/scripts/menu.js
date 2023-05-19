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

(() => {
  const refs = {
    openModalLeaveReviewBtn: document.querySelector('[feedback-open]'),
    closeModalLeaveReviewBtn: document.querySelector('[feedback-close]'),
    modalLeaveReview: document.querySelector('[data-modal-feedback]'),
  };

  if (refs.openModalLeaveReviewBtn) {
    refs.openModalLeaveReviewBtn.addEventListener('click', toggleModal);
  }
  if (refs.closeModalLeaveReviewBtn) {
    refs.closeModalLeaveReviewBtn.addEventListener('click', toggleModal);
  }

  function toggleModal() {
    if (refs.modalLeaveReview) {
      refs.modalLeaveReview.classList.toggle('is_hidden');
    }
  }
})();
