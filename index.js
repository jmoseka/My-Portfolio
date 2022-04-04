const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector("#id-menu-bar");

navToggle.addEventListener("click", () => {
  primaryNav.classList.toggle("active");
});
