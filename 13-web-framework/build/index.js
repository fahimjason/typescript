"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./models/User");
const Collection_1 = require("./models/Collection");
const collection = new Collection_1.Collection('http://localhost:3000/users', (json) => User_1.User.buildUser(json));
collection.on('change', () => {
    console.log(collection);
});
collection.fetch();
