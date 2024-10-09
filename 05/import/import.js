import { name, email, age } from './export.js';

// must add alias for handle error
import * as variable from './export.js';
import { myFunction as userFunction } from './user.js';
import { myFunction as customerFunction } from './customer.js';

userFunction();
customerFunction();

console.log(name);
console.log(email);
console.log(age);


console.log(variable.name);
console.log(variable.email);
console.log(variable.age);