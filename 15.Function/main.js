// 1.Sual
let getFirstValue1 = [1, 2, 3]
let getFirstValue2 = [80, 5, 100]
let getFirstValue3 = [-500, 0, 50]


function getFirstValue(arr) {
    return arr[0];
}
console.log(getFirstValue(getFirstValue1));
console.log(getFirstValue(getFirstValue2));
console.log(getFirstValue(getFirstValue3));



// 2.Sual
let getLastItem1 = [1, 2, 3]
let getLastItem2 = ["cat", "dog", "duck"]
let getLastItem3 = [true, false, true]


function getLastValue(arr) {
    return arr[arr.length - 1];
}
console.log(getLastValue(getLastItem1));
console.log(getLastValue(getLastItem2));
console.log(getLastValue(getLastItem3));


// 3.Sual

const findIndex1 = (["hi", "edabit", "fgh", "abc"], "fgh") // 2
const findIndex2 = (["Red", "blue", "Blue", "Green"], "blue") // 1
const findIndex3 = (["a", "g", "y", "d"], "d")  // 3
const findIndex4 = (["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") // 0

const findIndex = function (arr, str) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
            return i;
        }
    }
};



// 4.Sual
let addition1 = (3, 2) // 5
let addition2 = (-3, -6) // -9
let addition3 = (7, 3) // 10

function addition(a, b) {
    return a + b
}
console.log(addition(3, 2));
console.log(addition(-3, -6));
console.log(addition(7, 3));




// 5.Sual

const lessThan100 = (b, c) => b + c < 100

console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));
console.log(lessThan100(3, 77));

// 6.Sual
pota1 = {
    width: 2,
    length: 5,
    height: 1
}
pota2 = {
    width: 4,
    length: 2,
    height: 2
}
pota3 = {
    width: 2,
    length: 3,
    height: 5
}

function volumeOfBox(sizes) {
    return sizes.width * sizes.length * sizes.height;
}
console.log(volumeOfBox(pota1));
console.log(volumeOfBox(pota2));
console.log(volumeOfBox(pota3));

// 7.Sual

points(1, 1) // 5
points(7, 5) // 29
points(38, 8) // 100


function points(twoPointers, threePointers) {
    return twoPointers * 2 + threePointers * 3;
}
console.log(points(1, 1));

console.log(points(7, 5));

console.log(points(38, 8));

// 8.Sual
const arr5 = [
    {
        name: 'my name',
        surname: 'my surname',
        city: 'my city'
    },
    {
        name: 'my name',
        surname: 'my surname',
        city: 'my city'
    },
    {
        name: 'my name',
        surname: 'my surname',
        city: 'my city'
    }
];


function fillInfo(arr) {
    for (let obj of arr) {
        obj.name = 'Ehed';
        obj.surname = 'Haciyev';
        obj.city = 'Gornaboy';
    }
}
fillInfo(arr5);
console.log(arr5);