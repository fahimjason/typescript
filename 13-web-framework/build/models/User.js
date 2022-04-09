"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Eventing_1 = require("./Eventing");
class User {
    constructor(data) {
        this.data = data;
        this.events = new Eventing_1.Eventing();
    }
    get(propName) {
        return this.data[propName];
    }
    set(update) {
        Object.assign(this.data, update);
    }
}
exports.User = User;
