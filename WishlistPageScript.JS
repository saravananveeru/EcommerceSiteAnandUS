// Wishlist Page Interactions

// Add to Cart from Wishlist
document.querySelectorAll('.wishlist-info .add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.wishlist-item');
    const title = item.querySelector('h3').textContent;
    alert(`"${title}" added to cart.`);
    // Optional: remove from wishlist after adding to cart
    // item.remove();
  });
});

// Remove from Wishlist
document.querySelectorAll('.wishlist-info .remove').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.wishlist-item');
    const title = item.querySelector('h3').textContent;
    item.remove();
    alert(`"${title}" removed from wishlist.`);
  });
});
