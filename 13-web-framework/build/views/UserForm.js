"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserForm = void 0;
class UserForm {
    constructor(parent, model) {
        this.parent = parent;
        this.model = model;
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
        this.bindModel();
    }
    bindModel() {
        this.model.on('change', () => {
            this.render();
        });
    }
    eventsMap() {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
        };
    }
    bindEvents(fragment) {
        const eventsMap = this.eventsMap();
        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(':');
            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            });
        }
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
    render() {
        this.parent.innerHTML = '';
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content);
        this.parent.append(templateElement.content);
    }
}
exports.UserForm = UserForm;
