"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserForm_1 = require("./views/UserForm");
const User_1 = require("./models/User");
const user = User_1.User.buildUser({ name: 'NAME', age: 20 });
const root = document.getElementById('root');
if (root) {
    const userForm = new UserForm_1.UserForm(root, user);
    userForm.render();
}
else {
    throw new Error('Root element not found');
}
