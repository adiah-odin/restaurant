const menuItems = [
  {
    name: "Taste on wood",
    description: "",
  },
  {
    name: "Roast squash flower salad",
    description: "",
  },
  {
    name: "Pickled herring on rye with onions, onions & onions",
    description: "",
  },
  {
    name: "Beetroot steak with wild mushrooms and chard",
    description: "",
  },
  {
    name: "Munk fish, Pumpkin jus, peas, and winter leaves",
    description: "",
  },
  {
    name: "Jerusalem artichoke bake, carrots & garlic with thyme",
    description: "",
  },
  {
    name: "Pigeon, berries, nuts, and chevil",
    description: "",
  },
  {
    name: "Textures of sea buckthorn",
    description: "",
  },
];

export default function menu() {
  const pageSection = document.createElement("section");
  pageSection.id = "menu";
  pageSection.className = "menu";

  const sectionTitle = document.createElement("h1");
  sectionTitle.textContent = "Sample Winter Menu";
  sectionTitle.classList.add("menu__title");

  pageSection.appendChild(sectionTitle);

  const sectionSubtitle = document.createElement("h2");
  sectionSubtitle.textContent = "Delicious Norse Food";

  pageSection.appendChild(sectionSubtitle);

  const menuList = document.createElement("ul");
  menuList.classList.add("menu__wrapper");

  pageSection.appendChild(menuList);

  menuItems.forEach((item) => {
    const menuItem = document.createElement("li");
    const menuItemName = document.createElement("h3");
    menuItemName.textContent = item.name;

    menuItem.appendChild(menuItemName);

    menuList.appendChild(menuItem);
  });

  return pageSection;
}
