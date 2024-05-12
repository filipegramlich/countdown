import { new_countdown_button, principal_button, minutes_display, seconds_display } from './elements.js'

function updateTimerDisplay (new_minutes, new_seconds) {
  new_minutes = new_minutes === undefined ? 0 : new_minutes
  new_seconds = new_seconds === undefined ? 0 : new_seconds

  minutes_display.textContent = String(new_minutes).padStart(2, "0");
  seconds_display.textContent = String(new_seconds).padStart(2, "0");
}

function counter(minutes, seconds){
  console.log(minutes, seconds)
  setTimeout(function (){
    
    seconds++;
    updateTimerDisplay(minutes, seconds);

    if (seconds >= 60) {
      minutes++;
      seconds = 0;
      updateTimerDisplay(minutes, seconds);
    }

    counter(minutes, seconds);

  }, 1000);
}

function countdownHandle () {
  let minutes = Number(minutes_display.textContent);
  let seconds = Number(seconds_display.textContent);
  
  let countdownIsOver = minutes === 0 && seconds === 0;

  if (countdownIsOver) {
    counter(minutes, seconds);
    return;
  }

  setTimeout( function() {

    if (seconds <= 0 ){
      seconds = 60
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds-1));

    countdownHandle()
  }, 1000)
}

new_countdown_button.addEventListener('click', function () {

  let new_minutes = prompt("Defina os minutos para a contagem regressiva:");

  if(!new_minutes) { return false }
  
  updateTimerDisplay(new_minutes, 0);

  return
});

principal_button.addEventListener('click', countdownHandle );