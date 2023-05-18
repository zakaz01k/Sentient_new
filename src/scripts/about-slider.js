document.addEventListener('DOMContentLoaded', function () {
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const slides = document.querySelector('.slides');
  const prevArrow = document.querySelector('.prev-arrow');
  const nextArrow = document.querySelector('.next-arrow');
  const slideWidth = 402;
  const totalSlides = 5;
  let currentSlide = 0;

  function updateSlider() {
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    if (currentSlide === 0) {
      prevArrow.classList.add('disabled');
    } else {
      prevArrow.classList.remove('disabled');
    }

    if (currentSlide === totalSlides - 1) {
      nextArrow.classList.add('disabled');
    } else {
      nextArrow.classList.remove('disabled');
    }
  }

  prevArrow.addEventListener('click', function () {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlider();
    }
  });

  nextArrow.addEventListener('click', function () {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      updateSlider();
    }
  });

  updateSlider();
});
