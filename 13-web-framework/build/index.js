"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Collection_1 = require("./models/Collection");
const collection = new Collection_1.Collection('http://localhost:3000/users');
collection.on('change', () => {
    console.log(collection);
});
collection.fetch();
