;(function($){

  $(function () {

    $('.owl-carousel').owlCarousel({
      items:1,
      loop:true,
      dots: true,
      margin:10,
      autoplay:false,
      autoplayTimeout:10000,
      autoplayHoverPause:true,
      nav: true
    });

    $( ".header__cross" ).hide();

    function windowSize(){
      if ($(window).width() < '1200'){
          $( ".page-nav" ).hide();
          $( ".header__hamburger" ).show();
          if ($(".header__wrap").hasClass('header__wrap--toggle-color')) {
            $(".header__wrap").removeClass('header__wrap--toggle-color');
          }
      } else {
          $( ".page-nav" ).show();
          $( ".header__hamburger" ).hide();
          $( ".header__cross" ).hide();
          $(".header__wrap").removeClass("header__wrap--toggle-color");
      }
    }

    $(window).on('load resize',windowSize);

    $( ".header__hamburger" ).click(function() {
      $(".header__wrap").addClass("header__wrap--toggle-color");
      $( ".page-nav" ).slideToggle( "slow", function() {
        $( ".header__hamburger" ).hide();
        $( ".header__cross" ).show();
      });
    });

    $( ".header__cross" ).click(function() {
      $(".header__wrap").removeClass("header__wrap--toggle-color");
      $( ".page-nav" ).slideToggle( "slow", function() {
        $( ".header__cross" ).hide();
        $( ".header__hamburger" ).show();
      });
    });

    $(document).keydown(function(e) {
      if (e.keyCode == 27) {
        $(".header__wrap").removeClass("header__wrap--toggle-color");
        $( ".page-nav" ).slideUp( "slow", function() {
          $( ".header__cross" ).hide();
          $( ".header__hamburger" ).show();
        });
      }
    });

  });

})(jQuery);
