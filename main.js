const barIcon = document.getElementById("bar");
const closeIcon = document.getElementById("close");
const mobileNav = document.querySelector(".mobile-nav");

barIcon.addEventListener("click", () => {
  mobileNav.classList.add("is-active");
  barIcon.style.display = "none";
  closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  mobileNav.classList.remove("is-active");
  closeIcon.style.display = "none";
  barIcon.style.display = "block";
});
