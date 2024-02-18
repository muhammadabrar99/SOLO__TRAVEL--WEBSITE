const navBar = document.getElementById("navbar");
const menuBar = document.getElementById("menu_bars");
let navbarEl = document.getElementById("navbarEl");

menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("fa-times");
  navBar.classList.toggle("active");
});

window.onscroll = () => {};

// hide navbar on scroll
let prevScrollpos = window.scrollY;

window.onscroll = () => {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    menuBar.classList.remove("fa-times");
    navBar.classList.remove("active");
    navbarEl.style.top = "0";
  } else {
    menuBar.classList.remove("fa-times");
    navBar.classList.remove("active");
    navbarEl.style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
};

// show navbar when scroll stop
let timer;
window.addEventListener("scroll", () => {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    navbarEl.style.top = "0";
  }, 500);
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("destinationCard");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  for (i = slideIndex; i < slideIndex + 3; i++) {
    slides[i % slides.length].style.display = "block";
  }
  dots[slideIndex % dots.length].className += " active";
  setTimeout(showSlides, 3000); // Change slide every 2 seconds
}
