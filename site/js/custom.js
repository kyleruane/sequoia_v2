$(document).ready(function(){

	// Hide Barley tab
	//$('#barley-bar').hide();

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

	// Masthead background images
	$('.background').css('background-image', function(){ 
	   return 'url(' + $('.bg-target').find('img').attr("src") + ')';
	});

	// Index thumbs background
	$('.item figure ').css('background-image', function(){ 
	   return 'url(' + $(this).find('img').attr("src") + ')';
	});

	// Lightbox source
	var src = $(this).closest('figure').children('.image-placeholder').find('img').attr('src');
	$('.thumbnails .item figure a.thumbnail').attr('href', src);

	// Open Color Picker
	$('.color-target').on( 'click', function() { 
	    if ( !$('.color-picker').is(":visible") ) {
	        $('.color-picker').fadeIn();
	    }
	    return;
	} );

	// Close Color Picker
	$('.color-picker .close').on('click', function() {
	    $('.color-picker').fadeOut();
	    return;
	} );

	$('.color-picker .color-option').click(function() {
		
		$('.masthead-color').text( $(this).css('background-color') );	
		$(this).parent().parent().css( 'background-color', $('.masthead-color').text() );

	    $('.masthead-color').addClass('isModified');
	    $('.masthead-color').focus();
	    $('.masthead-color').blur();
	    
	    barley.editor.save( $('.masthead-color') );

		$('.color-option').removeClass('active');
		$(this).addClass('active');

	});

	var $bgcolorvalue = $('.masthead-color').text();
	$('.masthead').css('background-color', $bgcolorvalue);

	if ($('.masthead').css('background-color').length != 0) {
		$('.masthead .background').addClass('grayscale');
	}


});