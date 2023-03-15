
const btnStartRef = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const bodyColor = document.querySelector('body');
btnStopDesabled(true);
//  i have idea to make throught switch and flag
// btnStart.dataset.value = ""
btnStartRef.addEventListener('click', () => {
    btnStartDesabled(true);
    btnStopDesabled(false);
 

  const  timerId = setInterval(() =>{
        bodyColor.style.backgroundColor = getRandomHexColor() ;
    }, 900);
});

btnStop.addEventListener('click',()=>{
   btnStopDesabled(true);
   btnStartDesabled(false)
    clearInterval(timerId);
});

function btnStartDesabled(flag){
    btnStartRef.disabled = flag;
}
function btnStopDesabled(flag){
    btnStop.disabled = flag;
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}