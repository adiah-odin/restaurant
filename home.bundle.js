"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["home"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
function home() {
  const pageSection = document.createElement("section");
  pageSection.id = "home";

  const hero = document.createElement("div");
  hero.className = "hero";

  pageSection.appendChild(hero);

  const heroImage = document.createElement("div");
  heroImage.className = "hero__img";

  hero.appendChild(heroImage);

  const heroBody = document.createElement("div");
  heroBody.className = "hero__body";

  hero.appendChild(heroBody);

  const heroTitle = document.createElement("h1");
  heroTitle.className = "hero__title";
  heroTitle.innerHTML = "Come in and eat like a berserker.";

  heroBody.appendChild(heroTitle);

  const heroText = document.createElement("p");
  heroText.className = "hero__text";
  heroText.innerHTML =
    "This delicious Nordic food will leave you with the energy to raid a small village. But there won't be any need, since all the treasure you need is the food you would have eaten.";

  heroBody.appendChild(heroText);

  const cta = document.createElement("a");
  cta.classList.add("btn", "btn--cta", "hover-btn");
  cta.setAttribute("href", "#");
  cta.innerHTML = "Learn more";

  heroBody.appendChild(cta);

  return pageSection;
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCkge1xuICBjb25zdCBwYWdlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBwYWdlU2VjdGlvbi5pZCA9IFwiaG9tZVwiO1xuXG4gIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZXJvLmNsYXNzTmFtZSA9IFwiaGVyb1wiO1xuXG4gIHBhZ2VTZWN0aW9uLmFwcGVuZENoaWxkKGhlcm8pO1xuXG4gIGNvbnN0IGhlcm9JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlcm9JbWFnZS5jbGFzc05hbWUgPSBcImhlcm9fX2ltZ1wiO1xuXG4gIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb0ltYWdlKTtcblxuICBjb25zdCBoZXJvQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlcm9Cb2R5LmNsYXNzTmFtZSA9IFwiaGVyb19fYm9keVwiO1xuXG4gIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb0JvZHkpO1xuXG4gIGNvbnN0IGhlcm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVyb1RpdGxlLmNsYXNzTmFtZSA9IFwiaGVyb19fdGl0bGVcIjtcbiAgaGVyb1RpdGxlLmlubmVySFRNTCA9IFwiQ29tZSBpbiBhbmQgZWF0IGxpa2UgYSBiZXJzZXJrZXIuXCI7XG5cbiAgaGVyb0JvZHkuYXBwZW5kQ2hpbGQoaGVyb1RpdGxlKTtcblxuICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBoZXJvVGV4dC5jbGFzc05hbWUgPSBcImhlcm9fX3RleHRcIjtcbiAgaGVyb1RleHQuaW5uZXJIVE1MID1cbiAgICBcIlRoaXMgZGVsaWNpb3VzIE5vcmRpYyBmb29kIHdpbGwgbGVhdmUgeW91IHdpdGggdGhlIGVuZXJneSB0byByYWlkIGEgc21hbGwgdmlsbGFnZS4gQnV0IHRoZXJlIHdvbid0IGJlIGFueSBuZWVkLCBzaW5jZSBhbGwgdGhlIHRyZWFzdXJlIHlvdSBuZWVkIGlzIHRoZSBmb29kIHlvdSB3b3VsZCBoYXZlIGVhdGVuLlwiO1xuXG4gIGhlcm9Cb2R5LmFwcGVuZENoaWxkKGhlcm9UZXh0KTtcblxuICBjb25zdCBjdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgY3RhLmNsYXNzTGlzdC5hZGQoXCJidG5cIiwgXCJidG4tLWN0YVwiLCBcImhvdmVyLWJ0blwiKTtcbiAgY3RhLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjXCIpO1xuICBjdGEuaW5uZXJIVE1MID0gXCJMZWFybiBtb3JlXCI7XG5cbiAgaGVyb0JvZHkuYXBwZW5kQ2hpbGQoY3RhKTtcblxuICByZXR1cm4gcGFnZVNlY3Rpb247XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=