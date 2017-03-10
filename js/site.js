$(function() {
    var $menu = $('#menu');
    var $menuIcon = $('#nav-icon')
    var $navItems = $('#menu li')

    var $menuShowHide = function() {
        if ($(window).width() < 767) {
            $menu.hide();
        } else {
            $menu.show();
        };
    };

    $menuShowHide();

    $(window).resize(function() {
        $menuShowHide();
    });

    $menuIcon.on('click', function() {
        $menu.slideToggle(200);
        $navItems.hide().fadeIn(1000);
    });

});


$('.fl').on('click', function() {
  var $content = '<h2>Artist name</h2>';
  $content += $(this).html();
  $.featherlight($content);
});
