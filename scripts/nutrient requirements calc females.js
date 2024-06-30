function calculateNutrientRequirements() {
    // Get user input
    const age = parseInt(document.getElementById('age').value);
    const activityLevel = document.getElementById('activity-level').value;

    // Define activity factors (multipliers for calorie calculation)
    const activityFactors = {
        sedentary: 1.2,
        'lightly-active': 1.375,
        'moderately-active': 1.55,
        'very-active': 1.725,
        'super-active': 1.9
    };

    // Calculate Total Daily Energy Expenditure (TDEE) using Harris-Benedict equation
    // For females: BMR = 655 + (9.6 * weight in kg) + (1.8 * height in cm) - (4.7 * age in years)
    // We assume weight and height are constant for simplicity in this example

    // Calculate BMR (Basal Metabolic Rate)
    const bmr = 655 + (9.6 * 55) + (1.8 * 165) - (4.7 * age);

    // Calculate TDEE based on activity level
    const tdee = Math.round(bmr * activityFactors[activityLevel]);

    // Calculate macronutrient requirements (percentages based on general recommendations)
    // For simplicity, percentages are fixed; adjust as per specific guidelines
    const carbPercent = 50; // 50% of total calories from carbohydrates
    const proteinPercent = 20; // 20% of total calories from protein
    const fatPercent = 30; // 30% of total calories from fat

    // Calculate calorie breakdown into grams for each macronutrient
    const carbCalories = Math.round(tdee * (carbPercent / 100));
    const proteinCalories = Math.round(tdee * (proteinPercent / 100));
    const fatCalories = Math.round(tdee * (fatPercent / 100));

    const carbGrams = Math.round(carbCalories / 4); // 4 calories per gram of carbohydrate
    const proteinGrams = Math.round(proteinCalories / 4); // 4 calories per gram of protein
    const fatGrams = Math.round(fatCalories / 9); // 9 calories per gram of fat

    // Display results
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h3>Estimated Daily Calorie Needs:</h3>
        <p><strong>Total Calories:</strong> ${tdee} kcal</p>
        
        <h3>Macronutrient Requirements:</h3>
        <ul>
            <li><strong>Carbohydrates:</strong> ${carbGrams} grams (${carbPercent}%)</li>
            <li><strong>Protein:</strong> ${proteinGrams} grams (${proteinPercent}%)</li>
            <li><strong>Fat:</strong> ${fatGrams} grams (${fatPercent}%)</li>
        </ul>
    `;
}




