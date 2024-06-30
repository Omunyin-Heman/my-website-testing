document.addEventListener("DOMContentLoaded", function() {
    const categoryButtons = document.querySelectorAll(".category-btn");
    const foodDetails = document.querySelectorAll(".food-details");
  
    categoryButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        // Remove 'active' class from all food details
        foodDetails.forEach(function(detail) {
          detail.classList.remove("active");
        });
  
        // Add 'active' class to the clicked category's food details
        const category = this.getAttribute("data-category");
        const categoryDetails = document.getElementById(`${category}-details`);
        categoryDetails.classList.add("active");
      });
    });
  });
  