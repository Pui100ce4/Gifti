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

window.onscroll = function(ev) {
    var moveup = document.querySelector('.moveup');
    var header = document.querySelector('header');
    if ((Math.ceil(window.pageYOffset)) > header.offsetHeight) {
        moveup.style.display = 'block';
    } else  {
        moveup.style.display = 'none';
    }
};

function topFunction() {
   // document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
