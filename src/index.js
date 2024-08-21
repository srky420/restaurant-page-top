import "./styles.css";
import { IndexPage } from "./pages/index/indexPage";
import { MenuPage } from "./pages/menu/menuPage";

(function() {
  let html = '';
  let root = document.querySelector('#content');
  let navBtns;

  const init = () => {
    cacheDom();
    addEventListeners();
    html = IndexPage();
  }
  const cacheDom = () => {
    navBtns = document.querySelectorAll("nav button");
  }
  const addEventListeners = () => {
    navBtns.forEach(btn => btn.addEventListener("click", handleClick))
  }

  // Event handlers
  const handleClick = (e) => {
    const page = e.currentTarget.dataset.page;
    switch (page) {
      case "home":
        html = IndexPage();
        render();
        break;
      case "menu":
        html = MenuPage();
        render();
        break;
      case "about":
        break;
    }
  }

  // Initialize app
  init();

  const render = () => {
    root.innerHTML = html;
  }
  render();
})();