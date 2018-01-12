
$(document).ready(function() {
  //Enabling Pagescroll2id
  $(".main_mnu ul a").mPageScroll2id();

});

// Here I have set the upcoming New Year Date
var countDownDate = new Date("Dec 31, 2017 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById("countdown_days").innerHTML = days + "d";
  document.getElementById("countdown_hours").innerHTML = hours + "h";
  document.getElementById("countdown_minutes").innerHTML = minutes + "m";
  document.getElementById("countdown_seconds").innerHTML = seconds + "s";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Happy New Year!";
  }
}, 1000);

//Get Modal Element
var modal = document.getElementById('modal_video');
//Get open modal button
var modalBtn = document.getElementById('modalBtn');
//Get close button
var closeBtn = document.getElementsByClassName('closebtn')[0];
//Setting the link
var src = 'https://www.youtube.com/embed/0wCC3aLXdOw';

//Listen for opening
modalBtn.addEventListener('click', openModal);

//Listen for closing
closeBtn.addEventListener('click', closeModal);

//Listen for closing by clicking outside of the block
window.addEventListener('click', outsideClick);

//Function to open modal
function openModal() {
  modal.style.display = 'block';
  $('.modal_content iframe').attr('src', src);
  $('.team').css("z-index", "-1"); //function which forces the "team" div to be under the modal
}

//Function to close modal
function closeModal() {
  modal.style.display = 'none';
}

//Function to close by clicking outside of the block
function outsideClick(e) {
  if(e.target == modal){
  modal.style.display = 'none';
  $('.modal_content iframe').removeAttr('src');
  $('.team').css("z-index", "0"); //function which forces the "team" div to get his position back when the modal closed
  }
}

//Function to stop the video when it is closed
$('.closebtn').click(function(){
  $('.modal_content iframe').removeAttr('src');
  $('.team').css("z-index", "0"); //function which forces the "team" div to get his position back when the modal closed
});

//Slider
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//function to set the current slide by clicking on specific dot
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
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

