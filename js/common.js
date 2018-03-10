$(document).ready(function() {

	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});
	
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");
	$(".animation_1").animated("flipInX", "flipOutX");
	$(".animation_2").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_3").animated("fadeInRight", "fadeOutRight");

	$(".left .resume_item").animated("fadeInLeft", "fadeOutLeft");
	$(".right .resume_item").animated("fadeInRight", "fadeOutRight");

	$(".contact_box").animated("fadeInLeft", "fadeOutLeft");


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

	$('.skillbar').each(function(){
		$(this).find('.skillbar_bar').animate({
			width:$(this).attr('data-percent')
		}, 6000);
	});

});



$(window).load(function() { 
		$(".loader_inner").fadeOut(); 
		$(".loader").delay(400).fadeOut("slow"); 
});