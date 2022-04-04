const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector("#id-menu-bar");
const logoText = document.querySelector(".logo-text");
const menuBar = document.querySelector(".menu-bar");


navToggle.addEventListener("click", () => {
  primaryNav.classList.toggle("active");
  logoText.classList.toggle("active");
  menuBar.classList.toggle("active");
});
