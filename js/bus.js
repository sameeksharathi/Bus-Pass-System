
$(function () {
    $(document).scroll(function () {
        var $nav = $(".nav-link");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

$(function () {
    $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

$(document).ready(function() {
    // Check if element is scrolled into view
    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
  
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
  
      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    $(window).scroll(function() {
      $('.scroll-animations .animated').each(function() {
        if (isScrolledIntoView(this) === true) {
          $(this).addClass('fadeInLeft');
        }
      });
    });
  });