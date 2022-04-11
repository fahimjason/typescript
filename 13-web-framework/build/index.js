"use strict";
// import { User } from './models/User';
Object.defineProperty(exports, "__esModule", { value: true });
// const collection = User.buildUserCollection()
// collection.on('change', () => {
//     console.log(collection);
// });
// collection.fetch();
const UserForm_1 = require("./views/UserForm");
const userForm = new UserForm_1.UserForm(document.getElementById('root'));
userForm.render();
