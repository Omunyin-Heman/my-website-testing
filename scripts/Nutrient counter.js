// Array to store foods and their nutritional values
let foods = [];

// Function to add a new food item
function addFood() {
    // Get input values
    const foodName = document.getElementById('food-name').value.trim();
    const calories = parseFloat(document.getElementById('calories').value) || 0;
    const protein = parseFloat(document.getElementById('protein').value) || 0;
    const carbs = parseFloat(document.getElementById('carbs').value) || 0;
    const fat = parseFloat(document.getElementById('fat').value) || 0;

    // Validate input
    if (foodName === '' || calories === 0) {
        alert('Please enter valid food name and calories.');
        return;
    }

    // Create new food object
    const newFood = {
        name: foodName,
        calories: calories,
        protein: protein,
        carbs: carbs,
        fat: fat
    };

    // Add food to array
    foods.push(newFood);

    // Clear input fields
    clearInputFields();

    // Update UI
    displayFoodList();
    calculateTotals();
}

// Function to display the list of foods
function displayFoodList() {
    const foodList = document.getElementById('food-list');
    foodList.innerHTML = '';

    foods.forEach((food, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${food.name} | Calories: ${food.calories} | Protein: ${food.protein}g | Carbs: ${food.carbs}g | Fat: ${food.fat}g`;
        foodList.appendChild(listItem);
    });
}

// Function to calculate total nutrients
function calculateTotals() {
    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;

    foods.forEach(food => {
        totalCalories += food.calories;
        totalProtein += food.protein;
        totalCarbs += food.carbs;
        totalFat += food.fat;
    });

    // Update totals in UI
    document.getElementById('total-calories').textContent = totalCalories.toFixed(2);
    document.getElementById('total-protein').textContent = totalProtein.toFixed(2);
    document.getElementById('total-carbs').textContent = totalCarbs.toFixed(2);
    document.getElementById('total-fat').textContent = totalFat.toFixed(2);
}

// Function to clear input fields
function clearInputFields() {
    document.getElementById('food-name').value = '';
    document.getElementById('calories').value = '';
    document.getElementById('protein').value = '';
    document.getElementById('carbs').value = '';
    document.getElementById('fat').value = '';
}
