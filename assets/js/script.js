// ---- Efecto Smooth scroll----

$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

//------ Efecto Tooltip------

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

//---- Efecto menu negro transparente----

$(window).scroll(function () {
  if ($("#menu").offset().top > 70) {
    $("#menu").addClass("menu1");
  } else {
    $("#menu").removeClass("menu1");
  }
});
