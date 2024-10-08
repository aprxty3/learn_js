function myFunc(...manyMoreArgs) {
    console.log(manyMoreArgs.length);
    console.log('manyMoreArgs', manyMoreArgs);
  }
  myFunc('one', 'two', 'three');

const favorites = ['Nasi Goreng', 'Mie Goreng', 'Ayam Bakar', 'Tahu', 'Tempe'];

const [first, second, ...rest] = favorites;

console.log(first);
console.log(second);
console.log(rest);