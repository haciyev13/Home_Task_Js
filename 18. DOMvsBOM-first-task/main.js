let count = 0;

const start = document.querySelector(".container .content #start")
const stop= document.querySelector(".container .content #stop")
const increment = document.querySelector(".container .content #increment")
const decrement = document.querySelector(".container .content #decrement");
const reset = document.querySelector(".container .content #reset");
const zero = document.querySelector(".container .content #zero");

let interval;

start.addEventListener("click", function () {
    clearInterval(interval)
    interval= setInterval(()=>{
        count++
        zero.innerText= count;
    }, 1000)
})
increment.addEventListener("click", function () {
    clearInterval(interval)
    interval= setInterval(()=>{
        count++
        zero.innerText= count;
    }, 1000)
})
decrement.addEventListener("click", function () {
    clearInterval(interval)
    interval= setInterval(()=>{
        count--
        zero.innerText= count;
    }, 1000)
})
stop.addEventListener("click", function () {
    clearInterval(interval)
})
reset.addEventListener("click", function () {
    zero.innerText= 0;
    count=0;
    clearInterval(interval)
})