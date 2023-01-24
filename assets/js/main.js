
$('.gallery-slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  centerMode: true,
  centerPadding: "0",
  arrows: true,
  prevArrow: '<i class="fas fa-angle-left left"></i>',
  nextArrow: '<i class="fas fa-angle-right right"></i>',
  responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  // {
  //   breakpoint: 800,
  //   settings: "unslick"
  // }

  ]
});