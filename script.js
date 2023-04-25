const timeInput = document.getElementById("time");
const addTimeBtn = document.getElementById("addTime");
const subTimeBtn = document.getElementById("subTime");
const startStopBtn = document.getElementById("startStop");
const resetBtn = document.getElementById("reset");
const timerDisplay = document.getElementById("timer");

let intervalId;
let timeLeft;
let isRunning = false;

function updateTimeDisplay() {
  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");
  timerDisplay.textContent = `00:${minutes}:${seconds}`;
}

function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
  isRunning = false;
  startStopBtn.textContent = "Démarrer";
}

function startTimer() {
  intervalId = setInterval(() => {
    timeLeft--;
    updateTimeDisplay();
    if (timeLeft === 0) {
      stopTimer();
      alert("Le temps est écoulé !");
    }
  }, 1000);
  isRunning = true;
  startStopBtn.textContent = "Arrêter";
}

function resetTimer() {
  stopTimer();
  timeInput.value = "0";
  timeLeft = 0;
  updateTimeDisplay();
}

addTimeBtn.addEventListener("click", () => {
  timeInput.stepUp();
});

subTimeBtn.addEventListener("click", () => {
  timeInput.stepDown();
});

startStopBtn.addEventListener("click", () => {
  if (isRunning) {
    stopTimer();
  } else {
    timeLeft = timeInput.value * 60;
    startTimer();
  }
});

resetBtn.addEventListener("click", () => {
  resetTimer();
});

resetTimer();
