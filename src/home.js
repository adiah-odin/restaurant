export default function home() {
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
