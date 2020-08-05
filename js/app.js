$(function () {
  $(".slider").slick({
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 10000,
    fade: true,
    // responsive: [
    //   {
    //     breakpoint: 601,
    //     settings: {
    //       // arrows: false,
    //       // slidesToShow: 3,
    //       dots: false,
    //     },
    //   },
    // ],
  });
  //player
  new GreenAudioPlayer("#player-wrap");
  //mobile nav
    //header menu media
    $(".nav-mobile").click(function () {
      $(".header__inner-nav ul").slideToggle();
    });
});
