/**
 * Slideshow functionality for the about page
 * Handles automatic slideshow, navigation, and image preloading
 */

let slideIndex = 1;
let slideTimer;

document.addEventListener('DOMContentLoaded', function() {
  // Only initialize if slideshow exists on the page
  if (document.querySelector('.slideshow-container')) {
    showSlides(slideIndex);
    preloadImages();
    startAutoSlide();
    
    // Add click event listeners to dots
    const dots = document.getElementsByClassName("dot");
    for (let i = 0; i < dots.length; i++) {
      dots[i].addEventListener('click', function() {
        clearTimeout(slideTimer);
        currentSlide(i + 1);
        startAutoSlide();
      });
    }

    // Pause auto-slide on hover
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (slideshowContainer) {
      slideshowContainer.addEventListener('mouseenter', function() {
        clearTimeout(slideTimer);
      });

      slideshowContainer.addEventListener('mouseleave', function() {
        startAutoSlide();
      });
    }
  }
});

function preloadImages() {
  const slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    const img = slides[i].querySelector('img');
    if (img && !img.complete) {
      // Create a new image object to preload
      const preloadImg = new Image();
      preloadImg.src = img.src;
    }
  }
}

function plusSlides(n) {
  clearTimeout(slideTimer);
  showSlides(slideIndex += n);
  startAutoSlide();
}

function currentSlide(n) {
  clearTimeout(slideTimer);
  showSlides(slideIndex = n);
  startAutoSlide();
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  
  // Remove active class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  
  // Show current slide and activate dot
  if (slides[slideIndex-1]) {
    slides[slideIndex-1].classList.add("active");
  }
  if (dots[slideIndex-1]) {
    dots[slideIndex-1].classList.add("active");
  }
}

function startAutoSlide() {
  slideTimer = setTimeout(function() {
    slideIndex++;
    if (slideIndex > document.getElementsByClassName("mySlides").length) {
      slideIndex = 1;
    }
    showSlides(slideIndex);
    startAutoSlide();
  }, 5000);
}

// Make functions available globally for onclick handlers
window.plusSlides = plusSlides;
window.currentSlide = currentSlide;
