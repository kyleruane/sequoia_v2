$(document).ready(function(){

	// hide logo text
	$('#site-header .logo h1').hide();

	// show logo text for a time, then fade it out
	$('#site-header .logo h1').delay(800).fadeIn(400).delay(2600).fadeOut(600);
	
	// after a time, allow logo text to fade in upon hover (without the delay it flickers)
	setTimeout(function(){
	    $('#site-header .logo h1').addClass('hoverable');
	}, 4000);
	   
	// fade logo text in on hover   
	$('#site-header .logo a').hover(function() {
	  $('#site-header .logo h1.hoverable').fadeIn( 200 );
	  },function(){
	  $('#site-header .logo h1.hoverable').fadeOut( 500 );
	});

	// change style for active nav link 
	var loc = window.location.pathname;
	$('nav ul.nav li').find('a').each(function() {
		$(this).toggleClass('active', $(this).attr('href') == loc);
		$(this).parent().toggleClass('active', $(this).attr('href') == loc);
	});
	if(document.location.href.indexOf('/blog') > -1 ) {
		$('nav ul.nav li a[href$="/latest"]').addClass('active');
		$('nav ul.nav li a[href$="/latest"]').parent().addClass('active');
	}

	$('#barley-bar').hide();

});

$( document ).on( 'keydown', function ( e ) {

	if(!Modernizr.svg) {
	    $('img[src*="svg"]').attr('src', function() {
	        return $(this).attr('src').replace('.svg', '.png');
	    });
	}

    if ( e.keyCode === 27 ) {
        $('#barley-bar').slideToggle();
    }

});