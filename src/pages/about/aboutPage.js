import "./styles.css";
import aboutImage from "../../resources/about.jpg"

export const AboutPage = (() => {
  const root = document.querySelector("#content");
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="tab-header">
      <img src="${aboutImage}" alt="hero-img" />
      <h1>About Us</h1>
      <div class="tab-overlay"></div>
    </div>
    <div class="container">
      <div class="story">
        <h2>Our Story</h2>
        <p>
          At LUMINARA, we believe in the art of fine dining. 
          With a passion for exceptional flavors and a commitment to quality, 
          our chefs craft each dish to perfection. Join us for an unforgettable dining experience.
        </p>
      </div>
      <div class="services">
        <div>
          <i class="fa-solid fa-utensils"></i>
          <h2>Attention to Detail</h2>
          <p>We ensure every detail, from dish presentation to ambiance, is handled with precision to exceed your expectations.</p>
        </div>
        <div>
          <i class="fa-solid fa-hotel"></i>
          <h2>Elegant Atmosphere</h2>
          <p>Enjoy your meal in a warm, inviting environment created by our friendly and attentive staff.</p>
        </div>
        <div>
          <i class="fa-solid fa-seedling"></i>
          <h2>Prompt Service</h2>
          <p>We provide swift, efficient service with a smile, ensuring your needs are met without delay.</p>
        </div>
      </div>
    </div>
  `

  const render = () => {
    root.innerHTML = '';
    root.appendChild(div);
  };

  return {
    render,
  };
})();
