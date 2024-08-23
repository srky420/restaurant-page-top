import "./styles.css";
import heroImage from "../../resources/hero.jpg";
import breakfastImage from "../../resources/breakfast.jpg";
import dinnerImage from "../../resources/dinner.jpg";
import lunchImage from "../../resources/lunch.jpg";

export const IndexPage = (() => {
  const root = document.querySelector("#content");
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="hero">
      <img src="${heroImage}" alt="hero-img" />
      <div class="hero-inner">
        <h1>Luminara</h1>
        <button>Book a Table</button>
      </div>
      <div class="hero-overlay"></div>
    </div>
    <div class="main-section">
      <div class="container">
        <h1>Order Delicious Food</h1>
        <div class="main-grid">
          <img src="${breakfastImage}" alt="food-image" />
          <div>
            <h1>Two-Egg Breakfast</h1>
            <p>
              Two eggs any style, served with crispy bacon or sausage, hash browns, and toast.
            </p>
            <a href="">ORDER NOW</a>
          </div>
          <img src="${lunchImage}" alt="food-image" />
          <div>
            <h1>Caesar Salad</h1>
            <p>
              Romaine lettuce, Parmesan, and croutons tossed in our house-made Caesar dressing.
            </p>
            <a href="">ORDER NOW</a>
          </div>
          <img src="${dinnerImage}" alt="food-image" />
          <div>
            <h1>Grilled Ribeye Steak</h1>
            <p>
              12 oz. ribeye, seasoned and grilled to perfection, served with roasted garlic mashed potatoes.
            </p>
            <a href="">ORDER NOW</a>
          </div>
        </div>
      </div>
    </div>`;

  const render = () => {
    root.innerHTML = '';
    root.appendChild(div);
  }

  return {
    render,
  };
})();
