// script.js - For basic interactivity on the Landing Page

document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.querySelector(".search-bar");

  searchBar.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const query = searchBar.value.trim();
      if (query) {
        alert(`Searching for: ${query}`);
        // In real implementation, redirect to search results
        // window.location.href = `/search.html?q=${encodeURIComponent(query)}`;
      }
    }
  });

  const addToCartButtons = document.querySelectorAll(".product-card button");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productName = button.parentElement.querySelector("h4").innerText;
      alert(`${productName} added to cart!`);
      // Add to localStorage or update cart count in real app
    });
  });
});
