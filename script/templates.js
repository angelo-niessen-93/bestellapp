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