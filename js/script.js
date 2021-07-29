// Slideshow
var slideIndex = [1,1,1,1,1];
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5"];
showDivs(1, 0);
showDivs(1, 1);
showDivs(1, 2);
showDivs(1, 3);
showDivs(1, 4);

function plusDivs(n, no) {
  showDivs(slideIndex[no] += n, no);
}

function currentDiv(n) {
  showDivs(slideIndex[0] = n, 0);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  var dots = document.getElementsByClassName("dots");
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex[no]-1].style.display = "block";
  dots[slideIndex[0]-1].className += " w3-white";
}

// Clicar para fechar
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}