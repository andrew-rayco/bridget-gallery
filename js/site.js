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

    // Price hover menu on Search page
    $priceMenu = $('.price-menu');
    $priceMenu.hide();

    $('.price').on('click', function() {
      $priceMenu.slideToggle(200);
    })


    // Catalogues bio slideToggle
    // // Hide html modal content from loading on page
    var $bio = $('#nick-botting');
    $bio.hide();

    $('.bio').on('click', function() {
      $bio.slideToggle(300);

    });

    // == Custom lightbox ==
    // Catalogues image modal
    $('.lightbox').on('click', function() {
      // Hardcoded artist name to be replaced
      var $content = '<h2>Artist name</h2>';
      // Takes all HTML within anchor tag and shows in lightbox with full size image
      $content += $(this).html();
      $.featherlight($content);
    });

});
