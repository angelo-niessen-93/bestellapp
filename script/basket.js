let basket = {};

function addToBasket(dishName) {
  const dish = dishes.find((d) => d.name === dishName);
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

  document.getElementById("totalPrice").innerText =
    `Gesamt: ${totalPrice.toFixed(2)}€`;
}

function changeQuantity(dishName, delta) {
  if (basket[dishName]) {
    basket[dishName].quantity += delta;
    if (basket[dishName].quantity <= 0) {
      delete basket[dishName];
    }
    renderBasket();
  }
}

document.getElementById("checkoutButton").addEventListener("click", () => {
  if (Object.keys(basket).length === 0) {
    return;
  }

  openCheckoutModal();
});

function toggleMobileBasket() {
  const basketElement = document.getElementById("basket");
  basketElement.classList.toggle("open");
}
