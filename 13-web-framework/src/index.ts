import { User } from './models/User';

const user = new User({ name: 'Fahim', age: 27 });

user.on('change', () => {
    console.log('change1');
});
user.on('change', () => {
    console.log('change2');
});
user.on('ch', () => {
    console.log('ch');
});

user.trigger('ch');
console.log(user);