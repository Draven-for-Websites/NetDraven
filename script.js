var slideIndex = 1;

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  console.log("slides ===>", slides[0]);
  // console.log("legth", slides.length);
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}
// <!-- -----------------------------------------------------slide show in the index page----------------------------------------------------- -->
function go() {
  $(".mail-adress").val();
  location.replace("sign-in.html");
}
function goback() {
  location.replace("index.html");
}
