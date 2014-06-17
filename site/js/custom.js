$(document).ready(function(){

	// Hide Barley tab
	$('#barley-bar').hide();

	// Clone nav links to mobile menu & footer nav
	$('.site-header .main-nav ul li').clone().appendTo("#mobile-nav ul");
	$('.site-header .main-nav ul li').clone().appendTo(".footer-nav ul");

	// Clone logo to mobile nav-bar
	$('.site-header .main-strip h1').clone().appendTo(".mobile-navbar");

	// Initiate Bootstrap carousel
	$('.carousel').carousel();

	// Scroll to top
	$('.scrollup').click(function(){
	    $("html, body").animate({ scrollTop: 0 }, 600);
	    return false;
	});

	// Replace SVG images with PNG versions if SVG is not supported
	if(!Modernizr.svg) {
	    $('img[src*="svg"]').attr('src', function() {
	        return $(this).attr('src').replace('.svg', '.png');
	    });
	}

});