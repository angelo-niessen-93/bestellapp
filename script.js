let dishes = [
  {
    name: "Spaghetti Bolognese",
    category: "🍛Warme Speisen",
    image: "./assets/img/spaghetti-1604836_640.jpg",
    price: 12.99,
    vegetarian: false,
    spicyLevel: 1,
  },
  {
    name: "Penne Arrabbiata",
    category: "🍛Warme Speisen",
    image: "./assets/img/spaghetti-1604836_640.jpg",
    price: 11.55,
    vegetarian: true,
    spicyLevel: 3,
  },
  {
    name: "Hähnchen-Curry",
    category: "🍛Warme Speisen",
    image: "./assets/img/curry-7249247_640.jpg",
    price: 13.55,
    vegetarian: false,
    spicyLevel: 3,
  },
  {
    name: "Rindersteak mit Ofenkartoffeln",
    category: "🍛Warme Speisen",
    image: "./assets/img/steak-4432946_640.jpg",
    price: 19.99,
    vegetarian: false,
    spicyLevel: 1,
  },
  {
    name: "Gemüsepfanne",
    category: "🍛Warme Speisen",
    image: "./assets/img/vegetable-pan-8027678_640.jpg",
    price: 11.25,
    vegetarian: true,
    spicyLevel: 1,
  },
  {
    name: "Lasagne al Forno",
    category: "🍛Warme Speisen",
    image: "./assets/img/lasagna-1900529_640.jpg",
    price: 13.99,
    vegetarian: false,
    spicyLevel: 1,
  },
  {
    name: "Risotto mit Pilzen",
    category: "🍛Warme Speisen",
    image: "./assets/img/rice-4457143_640.jpg",
    price: 12.55,
    vegetarian: true,
    spicyLevel: 0,
  },
  {
    name: "Schnitzel Wiener Art",
    category: "🍛Warme Speisen",
    image: "./assets/img/schnitzel-961131_640.jpg",
    price: 15.99,
    vegetarian: false,
    spicyLevel: 0,
  },
  {
    name: "Tomatensuppe",
    category: "🍤Vorspeisen",
    image: "./assets/img/tomato-soup-2288056_640.jpg",
    price: 5.99,
    vegetarian: true,
    spicyLevel: 0,
  },
  {
    name: "Kürbissuppe",
    category: "🍤Vorspeisen",
    image: "./assets/img/soup-6946614_640.jpg",
    price: 6.55,
    vegetarian: true,
    spicyLevel: 0,
  },
  {
    name: "Bruschetta",
    category: "🍤Vorspeisen",
    image: "./assets/img/gourmet-5619887_640.jpg",
    price: 6.55,
    vegetarian: true,
    spicyLevel: 0,
  },
  {
    name: "Garnelen in Knoblauchöl",
    category: "🍤Vorspeisen",
    image: "./assets/img/prawns-in-tomato-sauce-4866597_640.jpg",
    price: 8.99,
    vegetarian: false,
    spicyLevel: 1,
  },
  {
    name: "Caprese",
    category: "🍤Vorspeisen",
    image: "./assets/img/mozzarella-salad-5377848_640.jpg",
    price: 7.25,
    vegetarian: true,
    spicyLevel: 0,
  },
  {
    name: "Antipasti Misto",
    category: "🍤Vorspeisen",
    image: "./assets/img/mozzarella-salad-5377848_640.jpg",
    price: 9.55,
    vegetarian: true,
    spicyLevel: 0,
  },
  {
    name: "Caesar Salad",
    category: "🥗Salate",
    image: "./assets/img/italian-salad-2156723_640.jpg",
    price: 9.99,
    vegetarian: false,
    spicyLevel: 0,
  },
  {
    name: "Griechischer Salat",
    category: "🥗Salate",
    image: "./assets/img/italian-salad-2156723_640.jpg",
    price: 8.99,
    vegetarian: true,
    spicyLevel: 0,
  },
  {
    name: "Rucola-Parmesan-Salat",
    category: "🥗Salate",
    image: "./assets/img/carpaccio-777850_640.jpg",
    price: 9.55,
    vegetarian: true,
    spicyLevel: 0,
  },
  {
    name: "Salat mit gebratenen Hähnchenstreifen",
    category: "🥗Salate",
    image: "./assets/img/salad-791891_640.jpg",
    price: 11.99,
    vegetarian: false,
    spicyLevel: 0,
  },
  {
    name: "Linsensalat",
    category: "🥗Salate",
    image: "./assets/img/salad-791891_640.jpg",
    price: 9.25,
    vegetarian: true,
    spicyLevel: 0,
  },
  {
    name: "Schokoladenkuchen",
    category: "🍰Desserts",
    image: "./assets/img/cakes-6522512_640.jpg",
    price: 4.99,
    vegetarian: true,
    spicyLevel: 0,
  },
  {
    name: "Tiramisu",
    category: "🍰Desserts",
    image: "./assets/img/tiramisu-6172170_640.jpg",
    price: 5.99,
    vegetarian: true,
    spicyLevel: 0,
  },
  {
    name: "Vanilleeis mit heißen Himbeeren",
    category: "🍰Desserts",
    image: "./assets/img/meal-2114781_640.jpg",
    price: 5.55,
    vegetarian: true,
    spicyLevel: 0,
  },
  {
    name: "Panna Cotta",
    category: "🍰Desserts",
    image: "./assets/img/dessert-1373820_640.jpg",
    price: 5.25,
    vegetarian: true,
    spicyLevel: 0,
  },
  {
    name: "Apfelstrudel mit Vanillesauce",
    category: "🍰Desserts",
    image: "./assets/img/swirl-1532893_640.jpg",
    price: 5.85,
    vegetarian: true,
    spicyLevel: 0,
  },
];

function renderDishes() {
  const dishesList = document.getElementById("dishesList");
  dishesList.innerHTML = "";

  const categories = ["🍛Warme Speisen", "🥗Salate", "🍰Desserts", "🍤Vorspeisen"];

  categories.forEach((category) => {
    const dishesInCategory = dishes.filter(
      (dish) => dish.category === category,
    );
    if (dishesInCategory.length > 0) {
      dishesList.innerHTML += `<h2 class="category-title">${category}</h2>`;
      dishesInCategory.forEach((dish) => {
        dishesList.innerHTML += renderDishesHTML(dish);
      });
    }
  });
}

function renderDishesHTML(dish) {
  let spicyIcons = "";
  for (let i = 0; i < 5; i++) {
    spicyIcons += i < dish.spicyLevel ? "🔥" : "⚪";
  }
 const isInBasket = basket[dish.name] ? " hinzugefügt" : "";
  return `
    <div class="dishes">
      <img src="${dish.image}" alt="${dish.name}">
      <div class="info">
        <p><strong>${dish.name}</strong></p>
        <p>Kategorie: ${dish.category}</p>
        <p>Preis: ${dish.price}€</p>
        ${dish.vegetarian ? `<p class="vegan-label">Vegan</p>` : ""}
        <p class="spicy-label">Scharf: ${spicyIcons}</p>
        <button class="add-button" onclick="addToBasket('${dish.name}')">+ ${isInBasket}</button>
      </div>
    </div>
  `;
}

function setRating(star) {
  const value = Number(star.dataset.value);
  const stars = document.querySelectorAll(".rating span");

  stars.forEach((s) => {
    s.classList.remove("selected"); 
    if (Number(s.dataset.value) <= value) {
      s.classList.add("selected"); 
    }
  });
}

window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  const mainContent = document.getElementById("main-content");

  setTimeout(() => {
    splash.style.transition = "opacity 0.5s";
    splash.style.opacity = 0;

    setTimeout(() => {
      splash.style.display = "none";
      mainContent.style.display = "block";
      document.body.style.overflow = "auto";
      renderDishes();
    }, 500);
  }, 1500);
});
