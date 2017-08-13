;(function ($) {
    // Scripts that will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.
    $(document).ready(function () {
    	$('.accordion__title').on( "click", function() {
    		var $this = $(this); 
  			$($this).next('.accordion__content').toggleClass('accordion__content--active');
		});

    });

    // Scripts that will run after the whole page is loaded (images, videos, iframes. etc)
    $(window).on('load', function () {

    });

    // Scripts that will run on window resize
    $(window).on('resize', function () {

    });
})(jQuery); // Fully reference jQuery after this point.