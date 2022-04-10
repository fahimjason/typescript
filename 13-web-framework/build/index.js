"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./models/User");
const user = User_1.User.buildUser({ id: 1 });
user.on('change', () => {
    console.log(user);
});
user.fetch();
