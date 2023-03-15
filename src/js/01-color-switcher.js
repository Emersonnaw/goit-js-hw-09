
btnStartRef = document.querySelector('[data-start]');
btnStop = document.querySelector('[data-stop]');
bodyColor = document.querySelector('body');
btnStopDesabled(true);
//  i have idea to make throught switch and flag
// btnStart.dataset.value = ""
btnStartRef.addEventListener('click',()=> {
    btnStartDesabled(true);
    btnStopDesabled(false);
 

    timerId = setInterval(() =>{
        bodyColor.style.backgroundColor = getRandomHexColor() ;
    }, 900);
});

btnStop.addEventListener('click',()=>{
   btnStopDesabled(true);
   btnStartDesabled(false)
    clearInterval(timerId);
});

function btnStartDesabled(flag){
    btnStart.disabled = flag;
}
function btnStopDesabled(flag){
    btnStop.disabled = flag;
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}