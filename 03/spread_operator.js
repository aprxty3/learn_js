const obj1 = { a: 1, b: 4 };
const obj2 = { c: 6, d: 12 };
const obj3 = { ...obj1, ...obj2 };

console.log(obj3);

const originalObj = { name: 'Dicoding', age: 9 };
const copiedObj = { ...originalObj };

console.log(copiedObj);