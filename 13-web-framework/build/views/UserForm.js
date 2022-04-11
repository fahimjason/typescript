"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserForm = void 0;
const View_1 = require("./View");
class UserForm extends View_1.View {
    constructor() {
        super(...arguments);
        this.onSetNameClick = () => {
            const input = this.parent.querySelector('input');
            if (input) {
                const name = input.value;
                this.model.set({ name });
            }
        };
        this.onSetAgeClick = () => {
            this.model.setRandomAge();
        };
    }
    eventsMap() {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
        };
    }
    template() {
        return `
            <div>
                <h1>User Form</h1>
                <div>User Name: ${this.model.get('name')} </div>
                <div>User Age: ${this.model.get('age')} </div>
                <input/>
                <button class="set-name">Change Name</button>
                <button class="set-age">Set Random Age</button>
            </div>
        `;
    }
}
exports.UserForm = UserForm;
