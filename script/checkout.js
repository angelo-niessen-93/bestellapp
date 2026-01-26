function openCheckoutModal() {
  document.getElementById("checkoutModal").style.display = "flex";
}

function closeCheckoutModal() {
  document.getElementById("checkoutModal").style.display = "none";
}


function openOrderSuccessModal() {
  document.getElementById("orderSuccessModal").style.display = "flex";
}

function closeOrderSuccessModal() {
  document.getElementById("orderSuccessModal").style.display = "none";
}

function confirmOrder() {
  const name = document.getElementById("customerName").value;
  const address = document.getElementById("customerAddress").value;
  const payment = document.getElementById("paymentMethod").value;

  if (!name || !address || !payment) {
    return;
  }

  basket = {};
  renderBasket();
  renderDishes();
  closeCheckoutModal();
  openOrderSuccessModal();
}