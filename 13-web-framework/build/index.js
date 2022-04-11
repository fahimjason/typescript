"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./models/User");
// const collection = User.buildUserCollection()
// collection.on('change', () => {
//     console.log(collection);
// });
// collection.fetch();
const UserForm_1 = require("./views/UserForm");
const user = User_1.User.buildUser({ name: 'Name', age: 20 });
const root = document.getElementById('root');
if (root) {
    const userForm = new UserForm_1.UserForm(root, user);
    userForm.render();
}
else {
    throw new Error('Root element not found');
}
