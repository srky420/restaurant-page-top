import breakfastImage from "../../resources/breakfast.jpg";
import dinnerImage from "../../resources/dinner.jpg";
import lunchImage from "../../resources/lunch.jpg";
import eggCheese from "../../resources/egg-cheese.jpg";
import avocadoToast from "../../resources/avocado-toast.jpg";
import sandwich from "../../resources/sandwich.jpg";
import pizza from "../../resources/pizza.jpg";
import salmon from "../../resources/salmon.jpg";
import risotto from "../../resources/risotto.jpg";

export const breakfast = [
  {
    name: "Traditional Pancakes",
    description:
      "Fluffy pancakes served with maple syrup and a side of butter. Add fresh berries or chocolate chips.",
    price: 8.99,
    image: breakfastImage,
  },
  {
    name: "Avocado Toast",
    description:
      "Smashed avocado on toasted whole grain bread, topped with cherry tomatoes, radishes, and a sprinkle of sea salt.",
    price: 10.99,
    image: avocadoToast,
  },
  {
    name: "Egg & Cheese Croissant",
    description:
      "Fluffy scrambled eggs and melted cheddar on a warm, buttery croissant.",
    price: 7.99,
    image: eggCheese,
  },
];
export const lunch = [
  {
    name: "Caesar Salad",
    description:
      "Romaine lettuce, Parmesan, and croutons tossed in our house-made Caesar dressing.",
    price: 9.99,
    image: lunchImage,
  },
  {
    name: "Grilled Chicken Sandwich",
    description:
      "Juicy grilled chicken breast with lettuce, tomato, and aioli on a toasted bun.",
    price: 11.99,
    image: sandwich,
  },
  {
    name: "Margherita Pizza",
    description:
      "Classic pizza topped with fresh mozzarella, tomatoes, and basil.",
    price: 12.99,
    image: pizza,
  },
];
export const dinner = [
  {
    name: "Grilled Ribeye Steak",
    description:
      "12 oz. ribeye, seasoned and grilled to perfection, served with roasted garlic mashed potatoes.",
    price: 24.99,
    image: dinnerImage,
  },
  {
    name: "Seared Salmon",
    description:
      "Pan-seared salmon filet with a honey-soy glaze, served with jasmine rice and steamed broccoli.",
    price: 19.99,
    image: salmon,
  },
  {
    name: "Mushroom Risotto",
    description:
      "Creamy risotto with sautéed mushrooms, Parmesan, and truffle oil.",
    price: 17.99,
    image: risotto,
  },
];
