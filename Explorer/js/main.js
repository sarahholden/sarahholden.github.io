(function() {

	"use strict";

	// INTERACTIVE NAV BAR

	// When the user clicks on a link in the main nav
	$('#main-nav a').on('click', function (e) {

		// Prevent the default action
		e.preventDefault();

		// If the item the user clicked already has the active class
		if ($(this).hasClass('active')) {

			// Remove the active class
			$(this).removeClass('active');

			// Slide up the dropdown wrapper
			$('#dropdown').slideUp(500);

		} else {
			// Find out what section the user wants to show
			var sectionToShow = $(this).data('related-panel');

			// Remove active class from all other nav items
			$('.active').removeClass('active');

			// Add the active class to the current item
			$(this).addClass('active');

			// Slide down the dropdown wrapper
			$('#dropdown').slideDown(400);

			// Hide all other nav panels
			$('.nav-panel').hide();

			// Show the related nav panel
			$('#' + sectionToShow).fadeIn(400);
		}

	});



$(window).on('scroll', function() {
	var $socialLinkTab = $(".social-link-tab");
	var articleListOffset = $('#article-list').offset().top;
	var scrollTop = $(this).scrollTop();

  if( scrollTop > articleListOffset ) {
    $socialLinkTab.addClass('scrolled');
  } else {
    $socialLinkTab.removeClass('scrolled');
  }
});


})();