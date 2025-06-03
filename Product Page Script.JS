// Product Page Interaction Script

document.addEventListener("DOMContentLoaded", function () {
  // Quantity selector (if present)
  const qtyInput = document.querySelector("#product-qty");
  const addToCartBtn = document.querySelector("#add-to-cart");
  const addToWishlistBtn = document.querySelector("#add-to-wishlist");

  if (qtyInput) {
    qtyInput.addEventListener("change", () => {
      if (qtyInput.value < 1) qtyInput.value = 1;
    });
  }

  // Add to Cart action
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      const qty = qtyInput ? qtyInput.value : 1;
      alert(`Added ${qty} item(s) to cart.`);
    });
  }

  // Add to Wishlist action
  if (addToWishlistBtn) {
    addToWishlistBtn.addEventListener("click", () => {
      alert("Added to wishlist.");
    });
  }

  // Image gallery thumbnail switching
  const thumbnails = document.querySelectorAll(".thumb");
  const mainImage = document.querySelector(".main-image");

  thumbnails.forEach(thumb => {
    thumb.addEventListener("click", () => {
      if (mainImage && thumb.style.backgroundImage) {
        mainImage.style.backgroundImage = thumb.style.backgroundImage;
      }
    });
  });
});
