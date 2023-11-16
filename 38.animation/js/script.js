'use strict';

// const btn = document.querySelector('#btn');

// function myAnimation() {
//   const car = document.querySelector('.car');
//   let pos = 0;

//   const timerId = setInterval(frame, 10);

//   function frame() {
//     if (pos === 700) {
//       clearInterval(timerId);
//     } else {
//       pos++;
//       car.style.left = pos + 'px';
//     }
//   }
// }

// btn.addEventListener('click', myAnimation);




//--------------------------------------------------------







function myAnimation(){
  const car=document.querySelector('.car');
let pos=0;
const btn = document.querySelector('#btn');
// let timerId;
let i=0;
const timerId=setInterval(frame,10)
function frame(){
  if(pos===800){
    clearInterval();
  }else {
    pos++;
    car.style.left=pos + 'px';
  }
}
}
btn.addEventListener('click',myAnimation)
// function logger(){
//   if(i===3){
  
//     clearInterval(timerId);
//   }
//   i++;
//   console.log('set time out');
// }
// let id=setInterval(function log(){
//   console.log('hello log');
//   id=setTimeout(log,1000)
// },1000)

