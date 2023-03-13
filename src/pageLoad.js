import about from "./about.js";
import home from "./home.js";
import menu from "./menu.js";

const pages = {
  about,
  home,
  menu,
};

export default function pageLoad(page) {
  // Get the wrapper for the contents
  const pageContent = document.getElementById("pageContent");

  // Remove everything from inside
  while (pageContent.firstChild) {
    pageContent.removeChild(pageContent.firstChild);
  }

  // call the function to create the section based on the page
  pageContent.appendChild(pages[page]());
}
