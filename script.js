const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Web Developer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Backend Developer";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Software Engineer";
  }, 8000);
};

textLoad();
setInterval(textLoad, 12000);

document.querySelector(".navbar-toggler").addEventListener("click", function () {
  document.querySelector(".navbar-collapse").classList.toggle("show");
});

$(document).ready(function () {
  var prevScrollPos = $(window).scrollTop();

  $(window).scroll(function () {
    var currentScrollPos = $(window).scrollTop();

    if (prevScrollPos > currentScrollPos) {
      // Scrolling up
      $(".navbar").removeClass("navbar-scrolled");
    } else {
      // Scrolling down
      $(".navbar").addClass("navbar-scrolled");
    }

    prevScrollPos = currentScrollPos;
  });
});

$(document).ready(function () {
  // Smooth scrolling
  $("#myNavbar .navbar-nav a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        10000, // Durasi animasi dalam milidetik
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
