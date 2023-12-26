let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
let intervalId;

function showSlides() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  const slideWidth = slides[0].clientWidth;
  slider.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}

function startSlider() {
  intervalId = setInterval(showSlides, 3000);
}

function stopSlider() {
  clearInterval(intervalId);
}

// Start slider initially
startSlider();



