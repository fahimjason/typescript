"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./models/User");
const user = new User_1.User({ name: 'Test', age: 2 });
// user.set({ name: 'Fahim', age: 26 });
// user.save();
user.events.on('change', () => {
    console.log('Change!');
});
user.events.trigger('change');
