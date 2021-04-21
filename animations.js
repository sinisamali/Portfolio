window.addEventListener("load", function () {
  let textWrapper = document.querySelector(".ml3");
  textWrapper.innerHTML = "Portfolio".replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
  anime.timeline({ loop: false }).add({
    targets: ".ml3 .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 500,
    delay: function (el, i) {
      return 107 * (i + 1);
    }
  });
  // ........................................................
  function _(className) {
    return document.querySelector(className);
  }

  _("body").style.display = "block";

  setTimeout(function () {
    document.getElementById("gmap_canvas").src =
      "https://maps.google.com/maps?q=Belgrade&t=&z=13&ie=UTF8&iwloc=&output=embed";
  }, 2000);

  let body = _("body");

  function Theme() {
    body.classList.toggle("light");
    body.classList.toggle("dark");
  }

  _(".theme-btn").addEventListener("click", Theme);

  let container = _(".container");
  let bar = _("#bar");

  function Bar() {
    container.classList.toggle("container-show");
    bar.classList.toggle("bar-open");
    bar.classList.toggle("bar-close");
  }

  bar.addEventListener("click", Bar);
});


// pull-request