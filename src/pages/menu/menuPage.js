import "./styles.css";
import menuImage from "../../resources/menu.jpg";

export const MenuPage = () => {
  return `
    <div class="hero-secondary">
      <img src="${menuImage}" alt="hero-img" />
      <div class="hero-inner">
        <h1>Explore Menu</h1>
      </div>
      <div class="hero-overlay"></div>
    </div>
  `;
};
