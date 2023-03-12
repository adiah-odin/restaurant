import "./sass/style.scss";

import pageLoad from "./pageLoad.js";

const navLinks = [
  {
    name: "home",
    display: "Home",
  },
  {
    name: "about",
    display: "About",
  },
  {
    name: "menu",
    display: "Menu",
  },
];

function content() {
  const body = document.querySelector("body");
  const wrapper = document.createElement("div");
  //   wrapper.classList.add("
  wrapper.id = "content";

  // header section with nav
  const header = document.createElement("header");
  header.id = "main-header";
  header.dataset.overlay = "false";

  wrapper.appendChild(header);

  const logoWrapper = document.createElement("div");
  header.appendChild(logoWrapper);

  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.innerHTML = "Odin's Rest";

  logoWrapper.appendChild(logo);

  const navButton = document.createElement("button");
  navButton.id = "nav-toggle";
  navButton.classList.add("mobile-nav-toggle");
  navButton.setAttribute("aria-controls", "mobile-nav");
  navButton.setAttribute("aria-expanded", "false");

  header.appendChild(navButton);

  const buttonText = document.createElement("span");
  buttonText.classList.add("sr-only");
  buttonText.innerHTML = "Menu";

  navButton.appendChild(buttonText);

  const mobileNav = document.createElement("nav");
  mobileNav.id = "mobile-nav";
  mobileNav.classList.add("mobile-nav");
  mobileNav.dataset.visible = "false";

  header.appendChild(mobileNav);

  // toggle mobile navigation
  navButton.onclick = () => {
    const visibility = mobileNav.dataset.visible;

    if (visibility === "false") {
      mobileNav.dataset.visible = "true";
      navButton.setAttribute("aria-expanded", true);
      header.dataset.overlay = "true";
      body.classList.add("noscroll");
    } else {
      header.dataset.overlay = "false";
      mobileNav.dataset.visible = "false";
      navButton.setAttribute("aria-expanded", false);
      body.classList.remove("noscroll");
    }
  };

  navLinks.forEach((link) => {
    const navItem = document.createElement("div");
    navItem.classList.add("nav-item");

    mobileNav.appendChild(navItem);

    const navLink = document.createElement("a");
    navLink.classList.add("nav-link");
    navLink.innerHTML = link.display;
    navLink.setAttribute("href", "#");

    navItem.appendChild(navLink);
  });

  const desktopNav = document.createElement("nav");
  desktopNav.classList.add("desktop");

  header.appendChild(desktopNav);

  const desktopNavList = document.createElement("ul");
  desktopNavList.classList.add("desktop-nav");
  desktopNavList.id = "desktop-nav";

  desktopNav.appendChild(desktopNavList);

  navLinks.forEach((link) => {
    const navItem = document.createElement("li");
    desktopNavList.appendChild(navItem);

    const navLink = document.createElement("a");
    navLink.classList.add("nav-link");
    navLink.innerHTML = link.display;
    navLink.setAttribute("href", "#");

    navItem.appendChild(navLink);
  });

  // Where the page specific code goes:
  const pageContent = document.createElement("main");
  pageContent.id = "pageContent";
  wrapper.appendChild(pageContent);

  return wrapper;
}

document.body.appendChild(content());

// Once the page loads, add the home page to pageContent

// A function to change the contents of pageContent

console.log("Hello to me");

// document.addEventListener("DOMContentLoaded", pageLoad("home"));
document.addEventListener("load", pageLoad("home"));
