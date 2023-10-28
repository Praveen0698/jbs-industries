var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".nav-links");
const openNavbar = document.querySelector(".open-nav-links");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-plus");
  //navbar.classList.toggle("slide");
  openNavbar.classList.toggle("slide");
});
