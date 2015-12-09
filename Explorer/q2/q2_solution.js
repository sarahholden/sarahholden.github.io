var $socialLinkTab = $('.social-link-tab');
var articleListOffset = $('#article-list').offset().top;

$(window).on('scroll', function() {
	var scrollTop = $(this).scrollTop();

  if( _____________________ ) {
    $socialLinkTab.addClass('scrolled');
  } else {
    $socialLinkTab.removeClass('scrolled');
  }
});