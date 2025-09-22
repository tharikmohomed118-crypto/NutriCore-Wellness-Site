const slogans = [
  "Eat well, live well!",
  "Healthy body, healthy mind.",
  "Stay active, stay happy.",
  "Nourish your soul.",
  "Fitness is a lifestyle.",
];

let index = 0;
const sloganElement = document.getElementById('slogan');

setInterval(() => {
  index = (index + 1) % slogans.length;
  sloganElement.style.opacity = 0;
  setTimeout(() => {
    sloganElement.textContent = slogans[index];
    sloganElement.style.opacity = 1;
  }, 300);
}, 3000);

document.getElementById('newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const emailInput = document.getElementById('email-input');
  const message = document.getElementById('subscription-message');
  const email = emailInput.value.trim();

  if(email) {
    let emails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];
    if(!emails.includes(email)) {
      emails.push(email);
      localStorage.setItem('subscribedEmails', JSON.stringify(emails));
      message.textContent = "Thanks for subscribing!";
      message.style.color = "lightgreen";
      emailInput.value = '';
    } else {
      message.textContent = "You're already subscribed.";
      message.style.color = "orange";
    }
  } else {
    message.textContent = "Please enter a valid email.";
    message.style.color = "red";
  }
});
