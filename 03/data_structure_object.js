let user = {};
const products = { name: 'Sepatu', price: 230000 };

 user = {
    name: 'Dicoding',
    'last name': 'Indonesia',
    age: 9,
  };

  console.log(user);
  console.log(user.age);
  console.log(user['last name']);

const {name, price} = products;
console.log(name, price);

user = {
    id: 24,
    email: 'aras@dicoding.com',
    name: 'Arsy',
    nickname: 'Aras',
    username: 'aras123',
    password: 'secret',
  };
  
//   const {id, email} = user;
  
// console.log(id, email);

const email = user.email;
const id = user.id;

console.log(id, email);

const account = {
    balance: 1000,
    debt: 10,
  };
  
  account.balance = 2000;
  console.log(account.balance);