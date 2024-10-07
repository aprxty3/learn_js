const currentYear = new Date().getFullYear();
const text = `Sekarang adalah tahun ${currentYear}.`;

console.log(text);

const result = 50/2;
console.log(result);

const number = Number('100');
console.log(number);

const completed =  true;
const passed = false;
console.log(completed, passed);

const isGreater = 5 > 2;
console.log(isGreater);

let message = null;
console.log(message);

const name1 = {first: 'John', last: null};
const name2 = {first: 'John', last: undefined};
console.log(JSON.stringify(name1));
console.log(JSON.stringify(name2));