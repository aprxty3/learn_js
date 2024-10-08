const mySet = new Set([1, 2, 3]);

console.log(mySet);

const set = new Set();
set.add(1);
set.add(2);
set.add(1);
set.add('Apple');
set.add(1);
set.add('Apple');

console.log(set);

for (const number of set) {
    console.log(number);
  }

  set.forEach((value) => console.log(value));

  set.delete(1);

  console.log(set);