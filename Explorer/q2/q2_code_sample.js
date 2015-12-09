$(window).on('scroll', function() {
	var $socialLinkTab = $('.social-link-tab');
	var articleListOffset = $('#article-list').offset().top;
	var scrollTop = $(this).scrollTop();

  if( _____________________ ) {
    $socialLinkTab.addClass('scrolled');
  } else {
    $socialLinkTab.removeClass('scrolled');
  }
});