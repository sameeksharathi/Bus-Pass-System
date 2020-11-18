
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