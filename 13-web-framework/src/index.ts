import { User } from './models/User';

const user = new User({ name: 'Fahim', age: 27 });

user.set({})
console.log(user.get('name'));
console.log(user.get('age'));