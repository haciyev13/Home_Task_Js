let resultInput = document.querySelector("#result");
let value1Input = document.querySelector("#value1");
let value2Input = document.querySelector("#value2");
let additionBtn = document.querySelector(".addition-btn");
let substractBtn = document.querySelector(".substract-btn");
let multiplyBtn = document.querySelector(".multiply-btn");
let divisionBtn = document.querySelector(".division-btn");
let resetBtn = document.querySelector(".reset-btn");

let resultValue;

additionBtn.addEventListener('click',()=>{
    if (value1Input.value === '' || value2Input.value === '') {
        alert('Zahmet olmazsa bir reqem daxil edin');
        return;
    }

    resultValue = +value1Input.value + +value2Input.value;
    resultInput.innerText = resultValue;
})

substractBtn.addEventListener("click",function(){
    if (value1Input.value === '' || value2Input.value === '') {
        alert('Zahmet olmazsa bir reqem daxil edin');
        return;
    }

    resultValue = +value1Input.value - +value2Input.value;
    resultInput.innerText = resultValue;
})

multiplyBtn.addEventListener("click",function(){
    if (value1Input.value === '' || value2Input.value === '') {
        alert('Zahmet olmazsa bir reqem daxil edin');
        return;
    }

    resultValue = +value1Input.value * +value2Input.value;
    resultInput.innerText = resultValue;
})

divisionBtn.addEventListener("click",function(){
    if (value1Input.value === '' || value2Input.value === '') {
        alert('Zahmet olmazsa reqem daxil edin');
        return;
    }

    resultValue = +value1Input.value / +value2Input.value;
    resultInput.innerText = resultValue;
})

resetBtn.addEventListener("click",function(){
    value1Input.value='';
    value2Input.value='';
    resultInput.innerText = "0";
});
