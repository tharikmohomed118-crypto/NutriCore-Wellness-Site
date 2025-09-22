document.getElementById('calculator-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get input values
  const age = parseInt(document.getElementById('age').value);
  const gender = document.getElementById('gender').value;
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const activityLevel = parseFloat(document.getElementById('activity-level').value);

  // Basic validation (optional)
  if (!age || !height || !weight || !activityLevel) {
    alert('Please fill in all required fields correctly.');
    return;
  }

  // Calculate BMR (using Mifflin-St Jeor Equation)
  let bmr;
  if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  // Calculate TDEE
  const tdee = bmr * activityLevel;

  // Macronutrients calculator based on TDEE (example ratios)
  const carbs = Math.round((tdee * 0.50) / 4); // 50% calories from carbs (4 cal/g)
  const protein = Math.round((tdee * 0.25) / 4); // 25% calories protein
  const fat = Math.round((tdee * 0.25) / 9); // 25% calories fat (9 cal/g)

  // Show results section
  const resultsDiv = document.getElementById('results');
  resultsDiv.style.display = 'block';

  // Set results text
  document.getElementById('bmr-value').textContent = bmr.toFixed(0) + ' kcal/day';
  document.getElementById('tdee-value').textContent = tdee.toFixed(0) + ' kcal/day';
  document.getElementById('carbs-value').querySelector('span').textContent = carbs;
  document.getElementById('protein-value').querySelector('span').textContent = protein;
  document.getElementById('fat-value').querySelector('span').textContent = fat;
});
