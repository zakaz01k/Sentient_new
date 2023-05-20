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

// Feedback
(() => {
  const refs = {
    openFeedbackBtn: document.querySelector('[feedback-open]'),
    closeFeedbackBtn: document.querySelector('[feedback-close]'),
    modalFeedback: document.querySelector('[data-modal-feedback]'),
    inputFields: document.querySelectorAll('[data-modal-feedback] input'), // Добавлено
    textAreas: document.querySelectorAll('[data-modal-feedback] textarea'), // Добавлено
  };

  if (refs.openFeedbackBtn) {
    refs.openFeedbackBtn.addEventListener('click', () => {
      toggleModal();
      closeDropdownMenu();
    });
  }
  if (refs.closeFeedbackBtn) {
    refs.closeFeedbackBtn.addEventListener('click', () => {
      toggleModal();
      clearInputFields(); // Добавлено
      clearTextAreas(); // Добавлено
    });
  }

  function toggleModal() {
    if (refs.modalFeedback) {
      refs.modalFeedback.classList.toggle('is_hidden');
    }
  }

  function closeDropdownMenu() {
    dropdownMenu.classList.remove('show');
  }

  function clearInputFields() {
    refs.inputFields.forEach(input => {
      input.value = ''; // Очищаем значение каждого input
    });
  }

  function clearTextAreas() {
    refs.textAreas.forEach(textarea => {
      textarea.value = ''; // Очищаем значение каждой textarea
    });
  }
})();

//Give up
// (() => {
//   const refs = {
//     openGiveUpBtn: document.querySelector('[give-up-open]'),
//     closeGiveUpBtn: document.querySelector('[give-up-close]'),
//     modalGiveUp: document.querySelector('[data-give-up]'),
//   };

//   if (refs.openGiveUpBtn) {
//     refs.openGiveUpBtn.addEventListener('click', () => {
//       toggleModal();
//       closeDropdownMenu();
//     });
//   }
//   if (refs.closeGiveUpBtn) {
//     refs.closeGiveUpBtn.addEventListener('click', toggleModal);
//   }

//   function toggleModal() {
//     if (refs.modalGiveUp) {
//       refs.modalGiveUp.classList.toggle('is_hidden');
//     }
//   }

//   function closeDropdownMenu() {
//     dropdownMenu.classList.remove('show');
//   }

//   document.addEventListener('click', event => {
//     const targetElement = event.target;
//     if (
//       !targetElement.closest('[data-give-up]') &&
//       !targetElement.closest('[give-up-open]')
//     ) {
//       if (
//         refs.modalGiveUp &&
//         !refs.modalGiveUp.classList.contains('is_hidden')
//       ) {
//         toggleModal();
//       }
//       if (dropdownMenu.classList.contains('show')) {
//         closeDropdownMenu();
//       }
//     }
//   });
// })();

(() => {
  const refs = {
    openGiveUpBtn: document.querySelector('[give-up-open]'),
    closeGiveUpBtn: document.querySelector('[give-up-close]'),
    modalGiveUp: document.querySelector('[data-give-up]'),
  };

  if (refs.openGiveUpBtn) {
    refs.openGiveUpBtn.addEventListener('click', () => {
      toggleModal();
      closeDropdownMenu();
    });
  }
  if (refs.closeGiveUpBtn) {
    refs.closeGiveUpBtn.addEventListener('click', () => {
      toggleModal();
    });
  }

  function toggleModal() {
    if (refs.modalGiveUp) {
      refs.modalGiveUp.classList.toggle('is_hidden');
    }
  }

  function closeDropdownMenu() {
    dropdownMenu.classList.remove('show');
  }
})();
