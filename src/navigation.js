const nav = document.getElementById("mobile-nav");
const navToggle = document.getElementById("nav-toggle");
const header = document.getElementById("main-header");
const body = document.querySelector("body");

navToggle.onclick = () => {
  const visibility = nav.dataset.visible;

  if (visibility === "false") {
    nav.dataset.visible = "true";
    navToggle.setAttribute("aria-expanded", true);
    header.dataset.overlay = "true";
    body.classList.add("noscroll");
  } else {
    header.dataset.overlay = "false";
    nav.dataset.visible = "false";
    navToggle.setAttribute("aria-expanded", false);
    body.classList.remove("noscroll");
  }
};
