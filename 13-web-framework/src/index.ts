import { User } from './models/User';

const user = new User({ name: 'Test', age: 2 });

// user.set({ name: 'Fahim', age: 26 });
// user.save();

user.events.on('change', () => {
    console.log('Change!')
});

user.events.trigger('change');