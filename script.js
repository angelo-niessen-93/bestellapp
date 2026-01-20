let dishes = [
  {
    name: "Spaghetti Bolognese",
    category: "Warme Speisen",
    image: "assets/img/spaghetti-1604836_640.jpg",
    price: 12.99,
    vegetarian: false,
    spicyLevel: 1
  },
  {
    name: "Penne Arrabbiata",
    category: "Warme Speisen",
    image: "assets/img/spaghetti-1604836_640.jpg",
    price: 11.55,
    vegetarian: true,
    spicyLevel: 3
  },
  {
    name: "Hähnchen-Curry",
    category: "Warme Speisen",
    image: "assets/img/curry-7249247_640.jpg",
    price: 13.55,
    vegetarian: false,
    spicyLevel: 3
  },
  {
    name: "Rindersteak mit Ofenkartoffeln",
    category: "Warme Speisen",
    image: "assets/img/steak-4432946_640.jpg",
    price: 19.99,
    vegetarian: false,
    spicyLevel: 1
  },
  {
    name: "Gemüsepfanne",
    category: "Warme Speisen",
    image: "assets/img/vegetable-pan-8027678_640.jpg",
    price: 11.25,
    vegetarian: true,
    spicyLevel: 1
  },
  {
    name: "Lasagne al Forno",
    category: "Warme Speisen",
    price: 13.99,
    vegetarian: false,
    spicyLevel: 1
  },
  {
    name: "Risotto mit Pilzen",
    category: "Warme Speisen",
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
    dishesList.innerHTML="";
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

    for(let i = 0;i < dishes.length; i++){
        dishesList.innerHTML += renderDishesHTML(dishes[i], i);
    }

function renderDishesHTML(dishes, index) {
  return `
    <div class="dishes">
        <p>Name: ${dishes.name}</p>
        <p>Kathegorie: ${dishes.category}</p>
        <img src="${dishes.image}" alt="${dishes.name}">
        <p>Preis: ${dishes.price}€</p>
         ${dishes.vegetarian ? `<p class="vegan-label">Vegan</p>` : ""}
        <p>Scharf: ${dishes.spicyLevel}</p>
    </div>`;
}
function renderDishesHTML(dish, index) {
  let spicyIcons = "";
  for (let i = 0; i < 5; i++) {
    if (i < dish.spicyLevel) {
      spicyIcons += "🔥";
    } else {
      spicyIcons += "⚪";
    }
  }

  return `
    <div class="dishes">
        <p>Name: ${dish.name}</p>
        <p>Preis: ${dish.price}€</p>
        <img src="${dishes.image}" alt="${dishes.name}">
        ${dish.vegetarian ? `<p class="vegan-label">Vegan</p>` : ""}
        <p class="spicy-label">Scharf: ${spicyIcons}</p>
    </div>`;
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