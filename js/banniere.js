var slideIndex = 1;

window.addEventListener('load', function(event) {
    showSlides(slideIndex);
})

//Appel function showSlides avec slide + 1
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//Appel function showSlides avec slide - 1
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll(".mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length;}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function defilimage(){
    slideIndex += 1;
    showSlides(slideIndex);
}
