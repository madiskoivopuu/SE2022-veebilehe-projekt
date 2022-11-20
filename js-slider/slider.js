// Koodi autor: w3schools
// Asukoht: https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 1;
window.addEventListener('load', function () {
  showSlides(slideIndex);
});

// Ühendab HTMLis < ja > nupud piltide vahetamisega
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Ühendab HTMLis punktikujulised nupud iga pildiga, ntx 3. nupp = 3. pilt
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Muudab piltidega slideris aktiivseks n-inda pildi.
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}