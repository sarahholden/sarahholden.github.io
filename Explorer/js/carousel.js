(function() {

	// GLOBAL VARIABLES -------

	"use strict"

	$('#prev').prop('disabled', true);

	var images = ['images/gallery_1.jpeg', 'images/gallery_2.jpeg', 'images/gallery_3.jpeg', 'images/gallery_4.jpeg', 'images/gallery_5.jpeg', 'images/gallery_6.jpeg'];

	var currentPosition = 0;

	$('#next').on('click', nextImage);
	$('#prev').on('click', previousImage);


	// FUNCTIONS ---------

	function nextImage(e){
		e.preventDefault();

		currentPosition += 1;

		$('#prev').prop('disabled', false);

		// ___________________________________ (blank here)
		$('#galleryImage').attr('src', images[currentPosition]);

	 	if (currentPosition === images.length - 1) {

			$('#next').prop('disabled', true);

		}
	}

	function previousImage(e){
		e.preventDefault();

		currentPosition -= 1;

		$('#next').prop('disabled', false);

		$('#galleryImage').attr('src', images[currentPosition]);

		if (currentPosition === 0 ) {
			$('#prev').prop('disabled', true);
		}
	}



})();