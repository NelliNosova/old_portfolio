(function () {
  var certificatePopupOne = document.querySelector(".js-one");
  var close = document.querySelector(".js-close");
  var openOne = document.querySelector(".js-certificate-one");

  openOne.addEventListener("click", function (evt) {
    evt.preventDefault();
    certificatePopupOne.classList.remove("none");
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    certificatePopupOne.classList.add("none");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (!certificatePopupOne.classList.contains("none")) {
        evt.preventDefault();
        certificatePopupOne.classList.add("none");
      }
    }
  });

})()
