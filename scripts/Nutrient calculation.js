
3. JavaScript Logic (script.js)
Add JavaScript to handle form submission, calculate nutrients, and display results:

javascript
Copy code
document.getElementById('foodForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get input values
  const foodName = document.getElementById('foodName').value;
  const calories = parseFloat(document.getElementById('calories').value);
  const protein = parseFloat(document.getElementById('protein').value);
  const carbs = parseFloat(document.getElementById('carbs').value);
  const fat = parseFloat(document.getElementById('fat').value);
  const servingSize = parseFloat(document.getElementById('servingSize').value);

  // Calculate nutrients
  const nutrients = {
    calories: calories * servingSize,
    protein: protein * servingSize,
    carbs: carbs * servingSize,
    fat: fat * servingSize
  };

  // Display results
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `
    <h2>Nutrients for ${foodName}</h2>
    <p><strong>Calories:</strong> ${nutrients.calories.toFixed(2)} kcal</p>
    <p><strong>Protein:</strong> ${nutrients.protein.toFixed(2)} g</p>
    <p><strong>Carbs:</strong> ${nutrients.carbs.toFixed(2)} g</p>
    <p><strong>Fat:</strong> ${nutrients.fat.toFixed(2)} g</p>
  `;
});
