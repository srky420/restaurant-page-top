import "./index.css";
import { IndexPage } from "./pages/index/indexPage";
import { MenuPage } from "./pages/menu/menuPage";
import { AboutPage } from "./pages/about/aboutPage";

(function () {
  let navBtns = document.querySelectorAll("nav button");;

  const init = () => {
    addEventListeners();
    navBtns[0].classList.add('nav-active');
    IndexPage.render();
  };
  const addEventListeners = () => {
    navBtns.forEach((btn) => btn.addEventListener("click", handleClick));
  };

  // Event handlers
  const handleClick = (e) => {
    const page = e.currentTarget.dataset.page;
    navBtns.forEach(btn => btn.classList.remove('nav-active'));
    e.currentTarget.classList.add('nav-active');
    switch (page) {
      case "home":
        IndexPage.render();
        break;
      case "menu":
        MenuPage.render();
        break;
      case "about":
        AboutPage.render();
        break;
    }
  };

  // Initialize app
  init();
})();
