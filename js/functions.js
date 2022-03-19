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
  autoplayHoverPause: true,
  smartSpeed: 1200,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 1,
      nav: true,
    },
  },
});

/*  Iniciar OWL Carousel Projects*/
$(".owl-carousel").owlCarousel({
  loop: true,

  nav: false,
  slideBy: 2,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

/* INICIAR AOS ANIMATION */

AOS.init({
  duration: 1000,
  offset: 120,
  easing: "ease-in-out",
});

/* ANIMATION WELCOME */

function typeWriter(e) {
  const txtArray = e.innerHTML.split("");
  e.innerHTML = "";
  txtArray.forEach((letter, i) => {
    setTimeout(function () {
      e.innerHTML += letter;
    }, 80 * i);
  });
}

const welcome = document.querySelector(".animation-welcome");

typeWriter(welcome);

/* FLIPCARD SERVICES */
function flipCard(id) {
  const front = document.querySelector(`#${id}`);
  const card = document.querySelector(`#${id}`).parentNode;

  card.classList.toggle("flip");
  front.classList.toggle("show");
}

//SUBMIT FORM

$("#phonenumber").mask("(00) 00000-0000");

function submitForm(id_form) {
  let frm = $("#" + id_form);

  frm.submit(function (e) {
    e.preventDefault();
    //console.log("OK");

    $("#btn-enviar").prop("disabled", true).text("Enviando...");

    //Submissao via AJAX
    $.ajax({
      type: frm.attr("method"),
      url: frm.attr("action"),
      data: frm.serialize(),
      //Sucesso
      success: function (i) {
        frm.each(function () {
          this.reset();
        });
        $('button[type="submit"]').prop("disabled", false).text("Enviado");

        $("#info-msg")
          .html("Mensagem enviada com Sucesso! Em breve entraremos em contato")
          .css("background", "#1952b0");
        setTimeout(() => {
          $("#staticBackdrop").modal("hide");
          $('button[type="submit"]').prop("disabled", false).text("Enviar");
          $("#info-msg").html("").css("background", "none");
        }, 3000);
        //console.log("Dados submetidos com sucesso.");
        //console.log(i);
      },
      //Erro
      error: function () {
        $("#info-msg")
          .html("Aconteceu um erro ao tentar enviar!")
          .css("background", "red");
        //console.log("Aconteceu um erro!");
      },
    });
  });
}
