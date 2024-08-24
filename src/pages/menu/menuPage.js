import "./styles.css";
import menuImage from "../../resources/menu.jpg";
import { breakfast, lunch, dinner } from "./data";

export const MenuPage = (() => {
  const root = document.querySelector("#content");

  let breakfastHtml = "";
  breakfast.forEach(
    (item) =>
      (breakfastHtml += `
    <div class="menu-item">
      <img src="${item.image}" alt="">
      <div class="menu-text">
        <h2>${item.name} <span class="price">$${item.price}</span></h2>
        <p>${item.description}</p>
      </div>
    </div>
  `)
  );
  let lunchHtml = "";
  lunch.forEach(
    (item) =>
      (lunchHtml += `
    <div class="menu-item">
      <img src="${item.image}" alt="">
      <div class="menu-text">
        <h2>${item.name} <span class="price">$${item.price}</span></h2>
        <p>${item.description}</p>
      </div>
    </div>
  `)
  );
  let dinnerHtml = "";
  dinner.forEach(
    (item) =>
      (dinnerHtml += `
    <div class="menu-item">
      <img src="${item.image}" alt="">
      <div class="menu-text">
        <h2>${item.name} <span class="price">$${item.price}</span></h2>
        <p>${item.description}</p>
      </div>
    </div>
  `)
  );

  const div = document.createElement("div");
  div.innerHTML = `
    <div class="tab-header">
      <img src="${menuImage}" alt="hero-img" />
      <h1>Explore Menu</h1>
      <div class="tab-overlay"></div>
    </div>
    <div class="container">
      <h1 class="menu-header">Breakfast Items</h1>
      <div class="menu">
        ${breakfastHtml}
      </div>
      <h1 class="menu-header">Lunch Items</h1>
      <div class="menu">
        ${lunchHtml}
      </div>
      <h1 class="menu-header">Dinner Items</h1>
      <div class="menu">
        ${dinnerHtml}
      </div>
    </div>
  `;

  const render = () => {
    root.innerHTML = '';
    root.appendChild(div);
  }

  return {
    render,
  }
})();
