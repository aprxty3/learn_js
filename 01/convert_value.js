const number = 123;
const boolean = true;

const strNumber = String(number);
const strBoolean = boolean.toString();

console.log(strNumber);
console.log(strBoolean);

const strNumber2 = '123';
const strFloat = '3.14';
const boolean2 = true;

const numFromString = Number(strNumber2);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(boolean2);

console.log(numFromString);
console.log(floatFromString);
console.log(numFromBoolean);

const cm = '20cm';
const px = '64px';

const intFromCM = parseInt(cm);
const intFromPX = parseInt(px);

console.log(intFromCM);
console.log(intFromPX);