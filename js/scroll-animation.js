window.addEventListener("scroll", function () {
  let scroll = this.document.querySelector(".scrollTop");
  scroll.classList.toggle("show-button", window.scrollY > 450);
});
