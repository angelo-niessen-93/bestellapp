function basketItemHTML(key, item, itemTotal) {
  return `
    <div class="basket-item">
      <span>${item.dish.name}</span>
      <div class="quantity-controls">
        <button onclick="changeQuantity('${key}', -1)">-</button>
        <span>${item.quantity}</span>
        <button onclick="changeQuantity('${key}', 1)">+</button>
        <button onclick="removeFromBasket('${key}')">X</button>
      </div>
      <span>${itemTotal.toFixed(2)} €</span>
    </div>
  `;
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
