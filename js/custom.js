jQuery(document).ready(function() {
    "use strict";


/* ------- Preloader ------ */
jQuery(window).load(function() { // makes sure the whole site is loaded
	jQuery('#loading-center').fadeOut(); // will first fade out the loading animation
	jQuery('#loading').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	jQuery('body').delay(350).css({'overflow':'visible'});
});

//Check to see if the window is top if not then display button
	jQuery(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			jQuery('.scrollToTop').fadeIn();
		} else {
			jQuery('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	jQuery('.scrollToTop').click(function(){
		jQuery('html, body').animate({scrollTop : 0},800);
		return false;
	});


/* -------- Appears Menu ------ */
	$(window).on('ready , scroll', function() {
	    if ($(window).scrollTop() > 30) {
	        $('.goll-main-menu').addClass('minified');
	    } else {
	        $('.goll-main-menu').removeClass('minified');
	    }
	});

/* ---------- Hide Menu-------- */
  jQuery(".nav a").on("click", function () {
      jQuery("#nav-menu").removeClass("in").addClass("collapse");
  });

/* --------- One Page Navigation -------- */
    
	/*$('#nav-menu').onePageNav({
	    currentClass: 'active',
	    scrollSpeed: 500,
	    easing: 'linear'
	});*/
    

/* ---------- Wow Js ---------- */
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       250,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    }
  }
);
wow.init();


/* --------- Scroll Up --------- */
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		scrollDistance: 300, // Distance from top/bottom before showing element (px)
		scrollFrom: 'top', // 'top' or 'bottom'
		scrollSpeed: 5000, // Speed back to top (ms)
		easingType: 'linear', // Scroll to top easing (see http://easings.net/)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: 'Scroll to top', // Text for element, can contain HTML
		scrollTitle: false, // Set a custom <a> title if required. Defaults to scrollText
		scrollImg: true, // Set true to use image
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
		zIndex: 99998 // Z-Index for the overlay
	});

/* ---------- lightbox ---------- */
	$('.goll-featured-work-img').magnificPopup({
	  type: 'image',
	  gallery:{
	    enabled:true
	  }
	});

	$('.flickr-gallery-img').magnificPopup({
	  type: 'image',
	  gallery:{
	    enabled:true
	  }
	});


/* --------- Carousel Slider ---------- */

	// Feature Works
	$("#featured-work-slider").owlCarousel({
		items : 4,
		itemsDesktop: [1199,3],
		itemsTablet: [860,2],
		itemsMobile : [480,1],
		autoPlay: 4000,
		navigation : false
	});

	// Related Works
	$("#related-works-slider").owlCarousel({
		items : 4,
		itemsDesktop: [1199,3],
		itemsTablet: [860,2],
		itemsMobile : [480,1],
		autoPlay: 4000,
		navigation : false
	});

	// Feature Works
	$("#goll-testimonial").owlCarousel({
		items : 1,
		itemsDesktop: [1199,1],
		itemsDesktopSmall: [979,1],
		itemsTablet: [768,1],
		itemsMobile : [520,1],
		autoPlay: 5000
	});

/* ------------ Stellar ----------- */
$(window).stellar({
	responsive: true,
    positionProperty: 'position'
});

/* ---------- ISoptope --------- */
  var $container = $('.goll-portfolio-items');

  // filter items on button click
   $container.isotope({
          filter: '*',
          itemSelector: '.item',
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
          }
      });


  $('#goll-portfolio-filter ul li a').on('click',function(){
      var selector = $(this).attr('data-filter');
      $container.isotope({
          filter: selector,
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
          }
      });
    return false;
  });

  var $optionSets = $('#goll-portfolio-filter ul'),
         $optionLinks = $optionSets.find('a');

         $optionLinks.on('click',function(){
            var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
            return false;
        }
     var $optionSet = $this.parents('#goll-portfolio-filter ul');
     $optionSet.find('.selected').removeClass('selected');
     $this.addClass('selected');
  });

/* ------------ Home Slider ------------- */
$( '#goll-slider' ).sliderPro({
	width: '100%',
    height: 768,
    fade: true,
    arrows: true,
    waitForLayers: true,
    buttons: true,
    autoplay: true,
    autoScaleLayers: false,
    slideAnimationDuration: 1500,
    breakpoints: {
        600: {
            height: 480
        }
	}
});
});


