document.addEventListener("DOMContentLoaded", () => {
  const smoothieCard = document.querySelector(".recipe-card.smoothie");
  const smoothieModal = document.getElementById("smoothie-modal");
  const closeBtn = smoothieModal.querySelector(".close-button");

  smoothieCard.addEventListener("click", () => smoothieModal.style.display = "block");
  closeBtn.addEventListener("click", () => smoothieModal.style.display = "none");
  window.addEventListener("click", (e) => { if(e.target === smoothieModal) smoothieModal.style.display = "none"; });
});





document.addEventListener("DOMContentLoaded", () => {
  const buddhaCard = document.querySelector(".recipe-card.buddha");
  const buddhaModal = document.getElementById("buddha-modal");
  const closeBtn = buddhaModal.querySelector(".close-button");

  buddhaCard.addEventListener("click", () => buddhaModal.style.display = "block");
  closeBtn.addEventListener("click", () => buddhaModal.style.display = "none");
  window.addEventListener("click", (e) => {
    if (e.target === buddhaModal) buddhaModal.style.display = "none";
  });
});





document.addEventListener("DOMContentLoaded", () => {
  const salmonCard = document.querySelector(".recipe-card.salmon");
  const salmonModal = document.getElementById("salmon-modal");
  const closeBtn = salmonModal.querySelector(".close-button");

  salmonCard.addEventListener("click", () => {
    salmonModal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    salmonModal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === salmonModal) {
      salmonModal.style.display = "none";
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const energyCard = document.querySelector(".recipe-card.energy");
  const energyModal = document.getElementById("energy-modal");
  const closeBtn = energyModal.querySelector(".close-button");

  energyCard.addEventListener("click", () => energyModal.style.display = "block");
  closeBtn.addEventListener("click", () => energyModal.style.display = "none");
  window.addEventListener("click", (e) => {
    if (e.target === energyModal) energyModal.style.display = "none";
  });
});



document.getElementById('calculator-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get user inputs
  const age = parseInt(document.getElementById('age').value);
  const gender = document.getElementById('gender').value;
  const height = parseInt(document.getElementById('height').value);
  const weight = parseInt(document.getElementById('weight').value);
  const activityLevel = parseFloat(document.getElementById('activity-level').value);

  // BMR Calculation (Mifflin-St Jeor Equation)
  let bmr;
  if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5; // For male
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161; // For female
  }

  // TDEE Calculation (Total Daily Energy Expenditure)
  const tdee = bmr * activityLevel;

  // Macronutrients breakdown (simple % of TDEE)
  const carbs = (tdee * 0.50) / 4;  // 50% carbs (4 calories per gram)
  const protein = (tdee * 0.20) / 4;  // 20% protein (4 calories per gram)
  const fat = (tdee * 0.30) / 9;  // 30% fat (9 calories per gram)

  // Display results
  document.getElementById('bmr-value').textContent = `${bmr.toFixed(0)} kcal/day`;
  document.getElementById('tdee-value').textContent = `${tdee.toFixed(0)} kcal/day`;
  document.getElementById('carbs-value').textContent = `Carbs: ${carbs.toFixed(0)} g`;
  document.getElementById('protein-value').textContent = `Protein: ${protein.toFixed(0)} g`;
  document.getElementById('fat-value').textContent = `Fat: ${fat.toFixed(0)} g`;

  // Show results
  document.getElementById('results').style.display = 'block';
});


