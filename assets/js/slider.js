(function() {
  "use strict";

  var slideIndex = [1,1];
  /* Class the members of each slideshow group with different CSS classes */
  var slideId = ["mySlides1", "mySlides2"]
  var dotId = ["dot1", "dot2"]
  showSlides(1, 0);
  showSlides(1, 1);

  function plusSlides(n, no) {
  	showSlides(slideIndex[no] += n, no);
  }

  function currentSlide(n, no) {
  	showSlides(slideIndex[no] = n, no);
  }

  function showSlides(n, no) {
  	var i;
  	var x = document.getElementsByClassName(slideId[no]);
  	console.log(n)
  	console.log(no)
  	var dots = document.getElementsByClassName(dotId[no]);
  	if (n > x.length) {
  		slideIndex[no] = 1;
  		console.log("here")
  	}
  	if (n < 1) {
  		slideIndex[no] = x.length
  	}
  	for (i = 0; i < x.length; i++) {
  		x[i].style.display = "none";
  	}
  	x[slideIndex[no]-1].style.display = "block";
  	for (i = 0; i < dots.length; i++) {
  			dots[i].className = dots[i].className.replace(" activedot", "");
  	}
  	dots[slideIndex[no]-1].className += " activedot";
  }
})();
