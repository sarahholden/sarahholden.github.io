(function() {

	"use strict"

	var images = ['images/gallery_1.jpeg', 'images/gallery_2.jpeg', 'images/gallery_3.jpeg', 'images/gallery_4.jpeg', 'images/gallery_5.jpeg', 'images/gallery_6.jpeg'];

	var currentPosition = 0;

	$('#next').on('click', nextImage);
	$('#prev').on('click', previousImage);


	function nextImage(e){
		e.preventDefault();

		currentPosition += 1;

		$('#galleryImage').attr('src', images[currentPosition]);

	}

	function previousImage(e){
		e.preventDefault();

		currentPosition -= 1;

		$('#galleryImage').attr('src', images[currentPosition]);

	}



})();