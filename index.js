const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector("#id-menu-bar");
const logoText = document.querySelector(".logo-text");
const menuBar = document.querySelector(".menu-bar");

navToggle.addEventListener("click", () => {
  primaryNav.classList.toggle("active");
  logoText.classList.toggle("active");
  menuBar.classList.toggle("active");
});

document.onclick = function (e) {
  if (e.target.id !== "id-menu-bar") {
    primaryNav.classList.remove("active");
    logoText.classList.remove("active");
    menuBar.classList.remove("active");
  }
};
