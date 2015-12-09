(function() {

	// GLOBAL VARIABLES -------

	"use strict"

	var images = ['images/gallery_1.jpeg', 'images/gallery_2.jpeg', 'images/gallery_3.jpeg', 'images/gallery_4.jpeg', 'images/gallery_5.jpeg', 'images/gallery_6.jpeg'];

	var currentPosition = 0;


	// EVENTS ---------

	// Listen for click events on the next and previous buttons
	$('#next').on('click', nextImage);
	$('#prev').on('click', previousImage);


	// FUNCTIONS ---------

	function nextImage(e){
		e.preventDefault();

		// If the currentPosition is at the last image
	 	if (currentPosition === images.length - 1) {
	 		// Disable the next button
			currentPosition = 0;
			// Calculate votes
		} else {
			// Update the current position
			currentPosition += 1;
		}

		// Update source
		changeImage();
	}

	function previousImage(e){
		e.preventDefault();

		// If the currentPosition is at the first item (the zero index), disable the previous button
		if (currentPosition === 0 ) {
			currentPosition = images.length - 1;
		} else {
			// Update the current position
			currentPosition -= 1;
		}

		// Update the source
		changeImage();
	}

	function changeImage(){
		// Update the src attribute to the urls that's stored at the currentPosition in the array
		$('#galleryImage').attr('src', images[currentPosition]);

	}

})();