const navBar = document.getElementById("navbar");
const menuBar = document.getElementById("menu_bars");

menuBar.addEventListener("click", () => {
    menuBar.classList.toggle("fa-times");
    navBar.classList.toggle("active");
  });