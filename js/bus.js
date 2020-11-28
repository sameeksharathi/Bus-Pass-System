
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


AOS.init({
    offset: 200,
    duration: 200,
    easing: 'ease-in-quad',
    delay: 200,
  });