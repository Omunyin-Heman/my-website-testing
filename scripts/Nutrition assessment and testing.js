document.addEventListener('DOMContentLoaded', function() {
    const foodNameInput = document.getElementById('food-name');
    const caloriesInput = document.getElementById('calories');
    const carbsInput = document.getElementById('carbs');
    const proteinInput = document.getElementById('protein');
    const fatInput = document.getElementById('fat');
    const addFoodBtn = document.getElementById('add-food-btn');
    const foodList = document.getElementById('food-list');
    const nutrientsList = document.getElementById('nutrients-list');

    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;

    addFoodBtn.addEventListener('click', function() {
        const foodName = foodNameInput.value.trim();
        const calories = parseFloat(caloriesInput.value);
        const carbs = parseFloat(carbsInput.value);
        const protein = parseFloat(proteinInput.value);
        const fat = parseFloat(fatInput.value);

        if (foodName === '') {
            alert('Please enter a food name.');
            return;
        }

        if (isNaN(calories) || isNaN(carbs) || isNaN(protein) || isNaN(fat)) {
            alert('Please enter valid numeric values for calories, carbs, protein, and fat.');
            return;
        }

        // Create food item element
        const foodItem = document.createElement('div');
        foodItem.classList.add('food-item');
        foodItem.innerHTML = `<strong>${foodName}</strong> - Calories: ${calories} kcal, Protein: ${protein}g, Carbs: ${carbs}g, Fat: ${fat}g`;

        // Add food item to the list
        foodList.appendChild(foodItem);

        // Update total nutrients
        totalCalories += calories;
        totalProtein += protein;
        totalCarbs += carbs;
        totalFat += fat;

        updateTotalNutrients();
        
        // Clear input fields
        foodNameInput.value = '';
        caloriesInput.value = '';
        carbsInput.value = '';
        proteinInput.value = '';
        fatInput.value = '';
    });

    function updateTotalNutrients() {
        nutrientsList.innerHTML = `
            <li>Total Calories: ${totalCalories} kcal</li>
            <li>Total Protein: ${totalProtein} g</li>
            <li>Total Carbohydrates: ${totalCarbs} g</li>
            <li>Total Fat: ${totalFat} g</li>
        `;
    }
});