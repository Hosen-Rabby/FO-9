
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

// preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

// scrop to top
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $(".to_top").fadeIn(250);
    } else {
      $(".to_top").fadeOut(250);
    }
  });
  $(".to_top").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 400);
  });
});