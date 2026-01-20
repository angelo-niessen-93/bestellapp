let basket = {};

let dishes = [
  {
    name: "Spaghetti Bolognese",
    category: "Warme Speisen",
    image: "./assets/img/spaghetti-1604836_640.jpg",
    price: 12.99,
    vegetarian: false,
    spicyLevel: 1
  },
  {
    name: "Penne Arrabbiata",
    category: "Warme Speisen",
    image: "./assets/img/spaghetti-1604836_640.jpg",
    price: 11.55,
    vegetarian: true,
    spicyLevel: 3
  },
  {
    name: "Hähnchen-Curry",
    category: "Warme Speisen",
    image: "./assets/img/curry-7249247_640.jpg",
    price: 13.55,
    vegetarian: false,
    spicyLevel: 3
  },
  {
    name: "Rindersteak mit Ofenkartoffeln",
    category: "Warme Speisen",
    image: "./assets/img/steak-4432946_640.jpg",
    price: 19.99,
    vegetarian: false,
    spicyLevel: 1
  },
  {
    name: "Gemüsepfanne",
    category: "Warme Speisen",
    image: "./assets/img/vegetable-pan-8027678_640.jpg",
    price: 11.25,
    vegetarian: true,
    spicyLevel: 1
  },
  {
    name: "Lasagne al Forno",
    category: "Warme Speisen",
    image: "./assets/img/lasagna-1900529_640.jpg",
    price: 13.99,
    vegetarian: false,
    spicyLevel: 1
  },
  {
    name: "Risotto mit Pilzen",
    category: "Warme Speisen",
    image: "./assets/img/rice-4457143_640.jpg",
    price: 12.55,
    vegetarian: true,
    spicyLevel: 0
  },
  {
    name: "Schnitzel Wiener Art",
    category: "Warme Speisen",
    price: 15.99,
    vegetarian: false,
    spicyLevel: 0
  },
  {
    name: "Tomatensuppe",
    category: "Vorspeisen",
    price: 5.99,
    vegetarian: true,
    spicyLevel: 0
  },
  {
    name: "Kürbissuppe",
    category: "Vorspeisen",
    price: 6.55,
    vegetarian: true,
    spicyLevel: 0
  },
  {
    name: "Bruschetta",
    category: "Vorspeisen",
    price: 6.55,
    vegetarian: true,
    spicyLevel: 0
  },
  {
    name: "Garnelen in Knoblauchöl",
    category: "Vorspeisen",
    price: 8.99,
    vegetarian: false,
    spicyLevel: 1
  },
  {
    name: "Caprese",
    category: "Vorspeisen",
    price: 7.25,
    vegetarian: true,
    spicyLevel: 0
  },
  {
    name: "Antipasti Misto",
    category: "Vorspeisen",
    price: 9.55,
    vegetarian: true,
    spicyLevel: 0
  },
  {
    name: "Caesar Salad",
    category: "Salate",
    price: 9.99,
    vegetarian: false,
    spicyLevel: 0
  },
  {
    name: "Griechischer Salat",
    category: "Salate",
    price: 8.99,
    vegetarian: true,
    spicyLevel: 0
  },
  {
    name: "Rucola-Parmesan-Salat",
    category: "Salate",
    price: 9.55,
    vegetarian: true,
    spicyLevel: 0
  },
  {
    name: "Salat mit gebratenen Hähnchenstreifen",
    category: "Salate",
    price: 11.99,
    vegetarian: false,
    spicyLevel: 0
  },
  {
    name: "Linsensalat",
    category: "Salate",
    price: 9.25,
    vegetarian: true,
    spicyLevel: 0
  },
  {
    name: "Schokoladenkuchen",
    category: "Desserts",
    price: 4.99,
    vegetarian: true,
    spicyLevel: 0
  },
  {
    name: "Tiramisu",
    category: "Desserts",
    price: 5.99,
    vegetarian: true,
    spicyLevel: 0
  },
  {
    name: "Vanilleeis mit heißen Himbeeren",
    category: "Desserts",
    price: 5.55,
    vegetarian: true,
    spicyLevel: 0
  },
  {
    name: "Panna Cotta",
    category: "Desserts",
    price: 5.25,
    vegetarian: true,
    spicyLevel: 0
  },
  {
    name: "Apfelstrudel mit Vanillesauce",
    category: "Desserts",
    price: 5.85,
    vegetarian: true,
    spicyLevel: 0
  }
];

function renderDishes() {
  const dishesList = document.getElementById("dishesList");
  dishesList.innerHTML = "";

  const categories = ["Warme Speisen", "Salate", "Desserts", "Vorspeisen"];
  
  categories.forEach(category => {
    const dishesInCategory = dishes.filter(dish => dish.category === category);
    if (dishesInCategory.length > 0) {
      dishesList.innerHTML += `<h2 class="category-title">${category}</h2>`;
      dishesInCategory.forEach(dish => {
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

  return `
    <div class="dishes">
      <img src="${dish.image}" alt="${dish.name}">
      <div class="info">
        <p><strong>${dish.name}</strong></p>
        <p>Kategorie: ${dish.category}</p>
        <p>Preis: ${dish.price}€</p>
        ${dish.vegetarian ? `<p class="vegan-label">Vegan</p>` : ""}
        <p class="spicy-label">Scharf: ${spicyIcons}</p>
        <button class="add-button" onclick="addToBasket('${dish.name}')">+</button>
      </div>
    </div>
  `;
}

function addToBasket(dishName) {
  const dish = dishes.find(d => d.name === dishName);
  if (!basket[dishName]) {
    basket[dishName] = { dish: dish, quantity: 1 };
  } else {
    basket[dishName].quantity += 1;
  }
  renderBasket();
}

function renderBasket() {
  const basketItems = document.getElementById("basketItems");
  basketItems.innerHTML = "";

  let totalPrice = 0;

  for (let key in basket) {
    const item = basket[key];
    const itemTotal = (item.dish.price * item.quantity).toFixed(2);
    totalPrice += parseFloat(itemTotal);

    basketItems.innerHTML += `
      <div class="basket-item">
        <span>${item.dish.name}</span>
        <div class="quantity-controls">
          <button class="quantity-button" onclick="changeQuantity('${key}', -1)">-</button>
          <span>${item.quantity}</span>
          <button class="quantity-button" onclick="changeQuantity('${key}', 1)">+</button>
        </div>
        <span>${itemTotal}€</span>
      </div>
    `;
  }

  document.getElementById("totalPrice").innerText = `Gesamt: ${totalPrice.toFixed(2)}€`;
}

function changeQuantity(dishName, delta) {
  if (basket[dishName]) {
    basket[dishName].quantity += delta;
    if (basket[dishName].quantity <= 0) {
      delete basket[dishName]; // Gericht entfernen, wenn Menge 0
    }
    renderBasket();
  }
}

document.getElementById("checkoutButton").addEventListener("click", () => {
  if (Object.keys(basket).length === 0) {  
  } else {
    basket = {};
    renderBasket();
  }
});

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