# Short Answer Questions

## Question 1
The client would like to add a social links tab that fades in after the user has scrolled past the lead story (.lead-story) and sticks to the side of the page. You have created a class "scrolled" in your CSS that you want to add to the .social-link-tab after you have scrolled past the lead story that will change the opacity from 0 to 1.

Add the necessary logic to achieve this functionality.

	// Sticky social link tab
	var $socialLinkTab = $(".social-link-tab"),
	    leadStoryHeight = $('.lead-story').outerHeight();

	$(window).on('scroll', function() {
		var scrollTop = $(this).scrollTop();
	  if( __________________________ ) {
	    $socialLinkTab.addClass('scrolled');
	  } else {
	    $socialLinkTab.removeClass('scrolled');
	  }
	});


## Question 2
What does the keyword "this" on line # refer to within this context? 

	// Sticky social link tab

	$(window).on('scroll', function() {
	var $socialLinkTab = $(".social-link-tab"),
	    leadStoryHeight = $('.lead-story').outerHeight();

		var scrollTop = $(this).scrollTop();
	  if( __________________________ ) {
	    $socialLinkTab.addClass('scrolled');
	  } else {
	    $socialLinkTab.removeClass('scrolled');
	  }
	});

	(multiple choice)

## Question 2
Rearrange the lines of code below to optimize the performance of the scroll function without breaking the functionality of the code.

	// Sticky social link tab

	$(window).on('scroll', function() {
	var $socialLinkTab = $(".social-link-tab"),
	    leadStoryHeight = $('.lead-story').outerHeight();

		var scrollTop = $(this).scrollTop();
	  if( __________________________ ) {
	    $socialLinkTab.addClass('scrolled');
	  } else {
	    $socialLinkTab.removeClass('scrolled');
	  }
	});

	(multiple choice)



## Question 4
Your client has requested that you add an image carousel to the home page featuring popular images from this years "Shoot for the Stars" photo competition. One of your teammates has made some headway on the carousel but needs your help finishing it up.

You take a glance through your teammate's code to gain an understanding of the code that has already been written. Assuming that the page has just loaded and the user clicks "next", what will the statement images[currentPosition] on line # evaluate to after the nextImage function is complete?

(short answer)


## Question 5
You would like to update the code so that the next button is disabled when the user has reached the last image and the previous button is disabled when the user has reached the first image. Which pieces of logic should be added to lines # and #?

currentPosition === images.length - 1
currentPosition === 0

