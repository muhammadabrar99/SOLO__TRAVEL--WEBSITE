const navBar = document.getElementById("navbar");
const menuBar = document.getElementById("menu_bars");

menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("fa-times");
  navBar.classList.toggle("active");
});

window.onscroll = () => {
  menuBar.classList.remove("fa-times");
  navBar.classList.remove("active");
};

const slides = document.getElementsByClassName("crousel_item");
let slidePosition = 0;
const totalSlides = slides.length;

function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove("crousel_item_visible");
    slide.classList.add("crousel_item-hidden");
  }
}

setInterval(function () {
    hideAllSlides();
    if (slidePosition === totalSlides - 1) {
      slidePosition = 0;
    } else {