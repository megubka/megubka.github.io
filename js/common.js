$(document).ready(function() {


	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});
	
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();

	$(window).resize(function() {
		heightDetect();
	});

	$(".toggle_mnu, .menu_item").click(function() {
		$(".sandwich").toggleClass("active");
	});
	
	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").removeClass("h_opacify");
	});

	$(".toggle_mnu").click(function(){
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").removeClass("h_opacify");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("slideInUp animated");
		} else {
			$(".top_text").addClass("h_opacify");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("slideInUp animated");
		};
	});
	$(".portfolio_item").each(function(i) {
		$(this).find("a[href*='#']").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});

	$(".top_mnu a[href*='#']").mPageScroll2id();

	$("input, select, textarea").jqBootstrapValidation();
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

$(window).load(function() { 
		$(".loader_inner").fadeOut(); 
		$(".loader").delay(400).fadeOut("slow"); 
});