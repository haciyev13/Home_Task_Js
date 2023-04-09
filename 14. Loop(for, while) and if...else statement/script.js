// 1
function calcAge(age) {
    return age * 365;
  }
  console.log(calcAge(65));
  console.log(calcAge(0));
  console.log(calcAge(20));


// 2
for (let i = 1; i <= 8; i++) {
  let line = "FrontEnd-Developer";
  for (let j = line; j <= line; j++){
    line += i;
  }
  console.log(line);
};

// 3
let toplam = 0;
for (let i = 2; i < 10; i += 2) {
  toplam += i;
};
console.log(toplam);

// 4
let vurma1 = 1;
for (let i = 1; i < 17; i += 2) {
  vurma1 *= i;
};
console.log(vurma1);

// 5
let vurma2 = 1;
for (let i = 10; i <= 18; i++) {
  vurma2 *= i;
}
console.log(vurma2);

// 6
let sum = 0;
for (let i = 17; i <= 30; i++) {
  if (i !== 19 && i !== 20) {
    sum += i;
  }
}
console.log(sum);

// 7
let evenSum = 0;
let oddSum = 0;
let i = 0;

while (i <= 30) {
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
  i++;
}

let result = evenSum - oddSum;
console.log(result);

// 8
for (let i = 2; i <= 16; i += 2) {
    let powerOfTwo = i ** 2;
    console.log(powerOfTwo);
  }
