const navBar = document.getElementById("navbar");
const menuBar = document.getElementById("menu_bars");
let navbarEl = document.getElementById("navbarEl");

menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("fa-times");
  navBar.classList.toggle("active");
});

window.onscroll = () => {
  
  
};

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
