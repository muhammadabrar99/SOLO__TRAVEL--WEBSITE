const navBar = document.getElementById("navbar");
const menuBar = document.getElementById("menu_bars");
let navbarEl = document.getElementById("navbarEl");

menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("fa-times");
  navBar.classList.toggle("active");
});

window.onscroll = () => {
  menuBar.classList.remove("fa-times");
  navBar.classList.remove("active");
};
