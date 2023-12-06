/* ARCHIVE */


console.log('Just a little test.');

let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-images img');

function changeSlide(n) {
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  updateSlideDisplay();
}

function updateSlideDisplay() {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  });
}


/* Animation
============================================================ */

function checkScroll() {
  const elementsToShow = document.querySelectorAll('.fade-in:not(.show)');
  elementsToShow.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('show');
    }
  });
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener('scroll', checkScroll);
checkScroll(); // Check on page load/refresh