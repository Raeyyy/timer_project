const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const add = document.querySelector('.add');
const heading = document.querySelector('.heading');
const text = document.querySelector('.text');
const date = document.querySelector('.date');
const msg = document.querySelector('.msg');
const addNew = document.querySelector('.addNew');
const x = document.querySelector(".show");
const audio = new Audio('img/the song.mp3');
// const countdownBlock = document.querySelector('.time-elem');

let timeLeft = {
    d: 0,
    h: 0,
    m: 0,
    s: 0,

}

let totalSeconds;

function init(){
 totalSeconds = Math.floor((new Date('08.15.2023 12:00:00 PM') - new Date())/1000);
 console.log(totalSeconds);
 setTimeLeft();
 let interval = setInterval(() =>{
    if (totalSeconds < 0){
        clearInterval(interval);
    }
    countTime();
 }, 1000
 )
if (timeLeft.d >= 1){
 heading.innerHTML = `${timeLeft.d} days to the ${heading.innerHTML}`}
 else if (timeLeft.d == 1){
    heading.innerHTML = `One day to the ${heading.innerHTML}`
 }else{
    heading.innerHTML = `It is the D-Day`
    document.body.style.background = "url('img/d-day.jpg') no-repeat right top"
 }
if (timeLeft.m <= 1){
    heading.innerHTML = `It is Time`
    audio.play();
    document.getElementsByClassName('aud').style.display = 'block'
}
function stopaudio() {
    audio.pause();
    audio.currentTime = 0;
}    
}

function countTime(){
   if(totalSeconds > 0){
    --timeLeft.s; 
    if(timeLeft.m >= 0 && timeLeft.s < 0){
        timeLeft.s = 59;
        --timeLeft.m;
            if (timeLeft.h >= 0 && timeLeft.m < 0) {
                timeLeft.m = 59;
                --timeLeft.h;
                if (timeLeft.d >= 0 && timeLeft.h < 0) {
                    timeLeft.h = 23;
                    --timeLeft.d;
                }
            }
        }
    }
    --totalSeconds;
    printTime();
}

function printTime() {
    animateFlip(days, timeLeft.d);
    animateFlip(hours, timeLeft.h);
    animateFlip(minutes, timeLeft.m);
    animateFlip(seconds, timeLeft.s);
}

function animateFlip(element, value) {
    const valueInDom = element.querySelector('.bottom-back').innerText;
    const currentValue = value < 10 ? '0' + value : '' + value;

    if (valueInDom === currentValue) return;

    element.querySelector('.top-back span').innerText = currentValue;
    element.querySelector('.bottom-back span').innerText = currentValue;


    gsap.to(element.querySelector('.top'), 0.7, {
        rotationX: '-180deg',
        transformPerspective: 300,
        ease: Quart.easeOut,
        onComplete: function() {
            element.querySelector('.top').innerText = currentValue; 
            element.querySelector('.bottom').innerText = currentValue; 
            gsap.set(element.querySelector('.top'), {rotationX: 0});
        }
    });

    gsap.to(element.querySelector('.top-back'), 0.7, {
        rotationX: 0,
        transformPerspective: 300,
        ease: Quart.easeOut,
        clearProps: 'all'
    });

}


function setTimeLeft(){
    timeLeft.d = Math.floor(totalSeconds / (60 * 60 * 24));
    timeLeft.h = Math.floor(totalSeconds / (60 * 60) % 24);
    timeLeft.m = Math.floor(totalSeconds / (60) % 60);
    timeLeft.s = Math.floor(totalSeconds % 60);

}
init();

// add event 
function addEvent(){
        
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      

add.addEventListener('click', (eve) =>{
    // eve.preventDefault();
    if(text.value === '' || date.value === ''){
        msg.classList.add('error');
        msg.textContent = ('incomplete fields!')
        setTimeout(() => msg.remove(), 3000)
        x.style.display = "none";
       }else {
    //    let div = document.createElement("div");
    //    div.innerText = text.value;
    //    document.body.appendChild(div);
    //   div.classList.add('div-style')

    //    totalSeconds.push (Math.floor((set - new Date())/1000));
 heading.innerHTML = text.value;
let set = new Date(date.value);
       
        
        totalSeconds = Math.floor((set - new Date())/1000);
    
    addEvent();
    setTimeLeft();
    if (timeLeft.d >= 1){
        heading.innerHTML = `${timeLeft.d} days to the ${heading.innerHTML}`}
        else if (timeLeft.d == 1){
           heading.innerHTML = `One day day to the ${heading.innerHTML}`
        }else{
           heading.innerHTML = `It is the D-Day`
           document.body.style.background = "url('img/d-day.jpg') no-repeat right top"
        }
       if (timeLeft.m <= 1){
           heading.innerHTML = `It is the Time`
           audio.play();
       }
        function stopaudio() {
        audio.pause();
        audio.currentTime = 0;
    }    
    text.value = '';
    date.value = '';
    x.style.display = "none";
       }}

 )
 // back-ground settings
 function myfunction() {
    document.querySelector(".my-dropdown").classList.toggle("open");
  }
  function change1(){
    document.body.style.background = "url('img/flower.jpg') no-repeat right top";
}
function change2(){
    document.body.style.background = "url('img/city.jpg') no-repeat right top";
}
function change3(){
    document.body.style.background = "url('img/island.jpg') no-repeat right top";
}
function change4(){
    document.body.style.background = "url('img/sea.jpg') no-repeat right top";
}
function change5(){
    document.body.style.background = "url('img/prism.jpg') no-repeat right top";
}
function change6(){
    document.body.style.background = "url('img/bitcoin.jpg') no-repeat right top";
}
 