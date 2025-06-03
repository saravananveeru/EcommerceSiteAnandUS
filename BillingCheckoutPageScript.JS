// JavaScript for Landing Page Interactions
// Example: Toggle dropdowns, banner slides, etc.

// JavaScript for Product Page Interactions
function updateQuantity(input) {
  const quantity = parseInt(input.value);
  const priceElement = input.closest('.product-info').querySelector('.product-price');
  const basePrice = parseFloat(priceElement.dataset.base);
  priceElement.textContent = '₹' + (quantity * basePrice).toFixed(2);
}

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    alert('Added to cart!');
  });
});

document.querySelectorAll('.add-to-wishlist').forEach(button => {
  button.addEventListener('click', () => {
    alert('Added to wishlist!');
  });
});

// JavaScript for Cart Page Interactions
function recalculateCartTotal() {
  let total = 0;
  document.querySelectorAll('.cart-item').forEach(item => {
    const quantity = parseInt(item.querySelector('.quantity-input').value);
    const price = parseFloat(item.querySelector('.item-price').dataset.base);
    total += quantity * price;
  });
  document.querySelector('.cart-total span').textContent = '₹' + total.toFixed(2);
}

document.querySelectorAll('.quantity-input').forEach(input => {
  input.addEventListener('change', () => {
    if (input.value < 1) input.value = 1;
    recalculateCartTotal();
  });
});

document.querySelectorAll('.remove-item').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.cart-item');
    item.remove();
    recalculateCartTotal();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  recalculateCartTotal();

  // JavaScript for Checkout/Billing Page Interactions
  const billingForm = document.getElementById('billing-form');
  if (billingForm) {
    billingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const inputs = billingForm.querySelectorAll('input[required]');
      let valid = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.style.border = '2px solid red';
          valid = false;
        } else {
          input.style.border = '1px solid #ccc';
        }
      });

      if (valid) {
        alert('Order placed successfully!');
        billingForm.reset();
      } else {
        alert('Please fill in all required fields.');
      }
    });
  }
});
