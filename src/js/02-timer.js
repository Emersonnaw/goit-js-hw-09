import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

let timerId = null;
let selectedTime = null;
let deltaTime = null;
const refs ={
    button:document.querySelector("[data-start]"),
    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector("[data-minutes]"),
    seconds: document.querySelector("[data-seconds]"),
}; 

refs.button.disabled = true;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        selectedTime = selectedDates[0].getTime();
        deltaTime = Date.now();

        // Date.now() method for getting real time without creating an instance
    if (deltaTime > selectedTime){
        
        Notify.failure(
            "Please choose a date in the future",
            {timeout: 6000,},
          );
    } else {
        refs.button.disabled = false;   
    };

    },
  };
//initial library
flatpickr('#datetime-picker', options);
// catch event click  
refs.button.addEventListener('click',startTimer);

//start timer
function startTimer() {
  if(refs.button.dataset.value){
    return;
  }
  
 
  const timerId = setInterval(()=> {
        refs.button.dataset.value = "isActive";
        const deltaTime =  selectedTime - Date.now();
        const timerDate = convertMs(deltaTime);
     console.log(deltaTime);
        if(deltaTime < 1100){
          //stop counter on Zero
          clearInterval(timerId);
            
            }  

        
      updateTimerFace(timerDate);
      

      //console.log( deltaTime );
     
      },1000);

    
   
}

// calculated miliseconds 
  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
  // add zero before number
  function addLeadingZero(value){
    return String(value).padStart(2,'0'); 
  }
// update interface
  function updateTimerFace({days, hours, minutes, seconds}){
    refs.days.textContent = days;
      refs.hours.textContent = hours;
      refs.minutes.textContent = minutes;
      refs.seconds.textContent = seconds;
}