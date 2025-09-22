let timer;
let isTimerRunning = false;
let timeLeft = 300; // 5 minutes in seconds

// Breathing Circle Animation
let isBreathing = false;

document.getElementById('start-breathing').addEventListener('click', function() {
  const breathingCircle = document.getElementById('breathing-circle');

  if (!isBreathing) {
    breathingCircle.classList.add('expand');
    breathingCircle.classList.remove('contract');
    this.textContent = 'Stop Breathing';
    isBreathing = true;
    startBreathingCycle();
  } else {
    breathingCircle.classList.remove('expand');
    breathingCircle.classList.add('contract');
    this.textContent = 'Start Breathing';
    isBreathing = false;
  }
});

function startBreathingCycle() {
  setInterval(() => {
    if (isBreathing) {
      const breathingCircle = document.getElementById('breathing-circle');
      breathingCircle.classList.toggle('expand');
      breathingCircle.classList.toggle('contract');
    }
  }, 3000); // Toggle every 3 seconds
}

// Meditation Timer Logic
document.querySelectorAll('.preset-time-btn').forEach(button => {
  button.addEventListener('click', function() {
    timeLeft = parseInt(this.getAttribute('data-time')) * 60; // Convert minutes to seconds
    updateTimerDisplay();
  });
});

document.getElementById('start-timer').addEventListener('click', function() {
  if (!isTimerRunning) {
    isTimerRunning = true;
    startTimer();
    this.textContent = 'Pause';
  } else {
    isTimerRunning = false;
    clearInterval(timer);
    this.textContent = 'Resume';
  }
});

document.getElementById('pause-timer').addEventListener('click', function() {
  clearInterval(timer);
  isTimerRunning = false;
  document.getElementById('start-timer').textContent = 'Resume';
});

document.getElementById('reset-timer').addEventListener('click', function() {
  clearInterval(timer);
  timeLeft = 300; // Reset to 5 minutes
  updateTimerDisplay();
  document.getElementById('start-timer').textContent = 'Start';
  isTimerRunning = false;
});

function startTimer() {
  timer = setInterval(function() {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimerDisplay();
    } else {
      clearInterval(timer);
      alert('Meditation session finished!');
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById('timer-display').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}


// Function to open modal with the YouTube video based on the sound selected
function openModal(soundType) {
  const modal = document.getElementById('sound-modal');
  const videoContainer = document.getElementById('modal-video-container');
  const soundTitle = document.getElementById('sound-title');

  let videoURL = "";
  let title = "";

  if (soundType === 'rain') {
    videoURL = "https://www.youtube.com/embed/XhAhviQaxpQ?autoplay=1";
    title = "Rain";
  } else if (soundType === 'ocean') {
    videoURL = "https://www.youtube.com/embed/la_AEFO8m7U?autoplay=1";
    title = "Ocean";
  } else if (soundType === 'forest') {
    videoURL = "https://www.youtube.com/embed/WEG-419sHfU?autoplay=1";
    title = "Forest";
  } else if (soundType === 'birds') {
    videoURL = "https://www.youtube.com/embed/rV_ERKtNyNA?autoplay=1";
    title = "Birds";
  }

  soundTitle.textContent = `${title} Sound`;
  videoContainer.innerHTML = `<iframe width="100%" height="400" src="${videoURL}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  
  modal.style.display = "block"; // Display the modal
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('sound-modal');
  const videoContainer = document.getElementById('modal-video-container');
  
  modal.style.display = "none"; // Hide the modal
  videoContainer.innerHTML = ''; // Clear the video content
}

// Close the modal when the user clicks the close button
document.querySelector('.close-button').addEventListener('click', closeModal);

