let [hours,minutes,seconds] = [0,0,0];
let displayTime=document.querySelector("#displayTime");
let stopbtn=document.querySelector(".stopbtn");
let startbtn=document.querySelector(".startbtn");
let resetbtn=document.querySelector(".rstbtn");

let timer=null;


function stopwatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    let h = hours<10 ? "0"+ hours :hours;
    let m = minutes<10 ? "0"+ minutes :minutes;
    let s = seconds<10 ? "0"+ seconds :seconds;
    displayTime.innerText = h + ":" + m + ":" + s;
}
function watchstart(){
    if(timer!=null){
        clearInterval(timer);
    }
    timer=setInterval(stopwatch,1000); 
}

function watchstop(){
    if(timer!=null){
        clearInterval(timer);
    }
}
function watchreset(){
    clearInterval(timer);
    [hours,minutes,seconds] = [0,0,0];
    displayTime.innerText = "00:00:00";
}
