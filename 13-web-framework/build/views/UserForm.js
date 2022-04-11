"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserForm = void 0;
class UserForm {
    constructor(parent) {
        this.parent = parent;
    }
    template() {
        return `
            <div>
                <h1>User Form</h1>
                <input/>
            </div>
        `;
    }
    render() {
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();
        this.parent.append(templateElement.content);
    }
}
exports.UserForm = UserForm;
