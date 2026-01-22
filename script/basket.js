let basket = {};

function addToBasket(dishName) {
  const dish = dishes.find((d) => d.name === dishName);
  if (!basket[dishName]) {
    basket[dishName] = { dish: dish, quantity: 1 };
  } else {
    basket[dishName].quantity += 1;
  }
  renderBasket();
  renderDishes();
}

function renderBasket() {
  const basketItems = document.getElementById("basketItems");
  basketItems.innerHTML = "";

  let totalPrice = 0;
  const delivery = 3.0;
  let hasItems = false;

  for (let key in basket) {
    const item = basket[key];
    hasItems = true;

    const itemTotal = item.dish.price * item.quantity;
    totalPrice += itemTotal;

    basketItems.innerHTML += `
      <div class="basket-item">
        <span>${item.dish.name}</span>
        <div class="quantity-controls">
          <button onclick="changeQuantity('${key}', -1)">-</button>
          <span>${item.quantity}</span>
          <button onclick="changeQuantity('${key}', 1)">+</button>
        </div>
        <span>${itemTotal.toFixed(2)} €</span>
      </div>
    `;
  }

  if (hasItems) {
    totalPrice += delivery;
    document.getElementById("totalPrice").innerText =
      `Gesamt: ${totalPrice.toFixed(2)} € (inkl. ${delivery.toFixed(2)} € Lieferung)`;
  } else {
    document.getElementById("totalPrice").innerText = `Gesamt: 0,00 €`;
  }
}

function changeQuantity(dishName, delta) {
  if (basket[dishName]) {
    basket[dishName].quantity += delta;
    if (basket[dishName].quantity <= 0) {
      delete basket[dishName];
    }
    renderBasket();
    renderDishes();
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
