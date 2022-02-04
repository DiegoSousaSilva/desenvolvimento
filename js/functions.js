/* Fixed NavBar */
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
      document.getElementById("navbar-top").classList.add("fixed-top");
    } else {
      document.getElementById("navbar-top").classList.remove("fixed-top");
    }
  });
});

/*  Iniciar OWL Carousel Slide*/
$(".slider .owl-carousel").owlCarousel({
  loop: true,
  nav: true,
  dots: true,
  items: 1,
  autoplay: true,
  smartSpeed: 1200,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1,
      nav: true,
    },
    1000: {
      items: 1,
      nav: true,
    },
  },
});

/*  Iniciar OWL Carousel Services*/
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
