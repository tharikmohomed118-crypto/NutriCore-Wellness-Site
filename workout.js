

/* Work out */
document.getElementById('workout-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent form submission from refreshing the page

  // Get the selected body part and equipment
  const bodyPart = document.getElementById('body-part').value;
  const equipment = document.getElementById('equipment').value;

  let exercises = [];

  // Generate workout plan based on body part and equipment
  if (bodyPart === 'full-body') {
    if (equipment === 'none') {
      exercises = [
        { name: 'Jumping Jacks', duration: '30 seconds' },
        { name: 'Push-ups', duration: '30 seconds' },
        { name: 'Mountain Climbers', duration: '30 seconds' },
        { name: 'Squats', duration: '30 seconds' },
        { name: 'Plank', duration: '30 seconds' }
      ];
    } else if (equipment === 'dumbbells') {
      exercises = [
        { name: 'Goblet Squats', duration: '30 seconds' },
        { name: 'Renegade Rows', duration: '30 seconds' },
        { name: 'Dumbbell Thrusters', duration: '30 seconds' },
        { name: 'Dumbbell Swings', duration: '30 seconds' }
      ];
    } else if (equipment === 'resistance-bands') {
      exercises = [
        { name: 'Band Chest Press', duration: '30 seconds' },
        { name: 'Banded Squats', duration: '30 seconds' },
        { name: 'Band Pull-Aparts', duration: '30 seconds' },
        { name: 'Band Rows', duration: '30 seconds' }
      ];
    }
  } else if (bodyPart === 'arms') {
    if (equipment === 'none') {
      exercises = [
        { name: 'Tricep Dips', duration: '30 seconds' },
        { name: 'Arm Circles', duration: '30 seconds' },
        { name: 'Push-ups', duration: '30 seconds' },
        { name: 'Diamond Push-ups', duration: '30 seconds' }
      ];
    } else if (equipment === 'dumbbells') {
      exercises = [
        { name: 'Tricep Extensions', duration: '30 seconds' },
        { name: 'Bicep Curls', duration: '30 seconds' },
        { name: 'Hammer Curls', duration: '30 seconds' },
        { name: 'Shoulder Press', duration: '30 seconds' }
      ];
    }
  } else if (bodyPart === 'legs') {
    if (equipment === 'none') {
      exercises = [
        { name: 'Single-Leg Glute Bridges', duration: '30 seconds' },
        { name: 'Calf Raises', duration: '30 seconds' },
        { name: 'Squats', duration: '30 seconds' },
        { name: 'Lunges', duration: '30 seconds' }
      ];
    } else if (equipment === 'dumbbells') {
      exercises = [
        { name: 'Goblet Squats', duration: '30 seconds' },
        { name: 'Romanian Deadlifts', duration: '30 seconds' },
        { name: 'Step-ups', duration: '30 seconds' }
      ];
    }
  }

  // Clear previous workout plan
  const exercisesContainer = document.getElementById('exercises');
  exercisesContainer.innerHTML = ''; // Clear any existing exercises

  // Display the generated workout plan
  exercises.forEach(exercise => {
    const exerciseCard = document.createElement('div');
    exerciseCard.classList.add('exercise-card');
    
    exerciseCard.innerHTML = `
      <h4>${exercise.name}</h4>
      <p>Duration: ${exercise.duration}</p>
      <button>Start</button>
    `;
    
    exercisesContainer.appendChild(exerciseCard);
  });

  // Show the workout plan section
  document.getElementById('workout-plan').style.display = 'block';
});
