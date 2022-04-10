"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./models/User");
const user = new User_1.User({ id: 1, name: 'Fizan', age: 0 });
user.on('save', () => {
    console.log(user);
});
user.save();
