$(document).ready(function(){

	// Hide Barley tab
	$('#barley-bar').hide();

	// Clone nav links to mobile menu & footer nav
	$('.site-header .main-nav ul li').clone().appendTo("#mobile-nav ul");
	$('.site-header .main-nav ul li').clone().appendTo(".footer-nav ul");

	// Initiate Bootstrap carousel
	$('.carousel').carousel();

	// Scroll to top
	$('.scrollup').click(function(){
	    $("html, body").animate({ scrollTop: 0 }, 600);
	    return false;
	});

	if(!Modernizr.svg) {
	    $('img[src*="svg"]').attr('src', function() {
	        return $(this).attr('src').replace('.svg', '.png');
	    });
	}

});