// Set the target date for the countdown (e.g., December 31, 2023)
const targetDate = new Date("Dec 31, 2023 00:00:00").getTime();

// Update the countdown every second
const interval = setInterval(function() {
  const currentDate = new Date().getTime();
  const timeLeft = targetDate - currentDate;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // When the countdown is over, display a message
  if (timeLeft < 0) {
    clearInterval(interval);
    document.getElementById("timer").innerHTML = "Countdown is over!";
  }
}, 1000);
