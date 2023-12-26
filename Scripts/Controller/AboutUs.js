const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev-slide');
const nextButton = document.querySelector('.next-slide');
const slideWidth = document.querySelector('.slide').offsetWidth;

let slideIndex = 0;

prevButton.addEventListener('click', () => {
  slideIndex = slideIndex > 0 ? slideIndex - 1 : 0;
  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
});

nextButton.addEventListener('click', () => {
  slideIndex = slideIndex < slides.children.length - 1 ? slideIndex + 1 : slideIndex;
  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
});