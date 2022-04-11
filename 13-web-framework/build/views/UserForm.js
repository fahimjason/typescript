"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserForm = void 0;
class UserForm {
    constructor(parent, model) {
        this.parent = parent;
        this.model = model;
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
            'click:.set-age': this.onSetAgeClick
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
                <button>Click Me</button>
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
