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

  for (let key in basket) {
    const item = basket[key];

    const itemTotal = item.dish.price * item.quantity;
    totalPrice += itemTotal;

    basketItems.innerHTML += basketItemHTML(key, item, itemTotal);
  }

  document.getElementById("totalPrice").innerText =
    totalPrice > 0
      ? `Gesamt: ${(totalPrice + delivery).toFixed(2)} € (inkl. Lieferung 3.00€)`
      : "Gesamt: 0,00 €";
}


function removeFromBasket(key) {
  delete basket[key];
  renderBasket();
  renderDishes();
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
