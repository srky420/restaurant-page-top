import "./styles.css";
import { IndexPage } from "./pages/index/indexPage";
import { MenuPage } from "./pages/menu/menuPage";
import { AboutPage } from "./pages/about/aboutPage";

(function () {
  let html = "";
  let root = document.querySelector("#content");
  let navBtns;

  const init = () => {
    cacheDom();
    addEventListeners();
    IndexPage.render();
  };
  const cacheDom = () => {
    navBtns = document.querySelectorAll("nav button");
  };
  const addEventListeners = () => {
    navBtns.forEach((btn) => btn.addEventListener("click", handleClick));
  };

  // Event handlers
  const handleClick = (e) => {
    const page = e.currentTarget.dataset.page;
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
