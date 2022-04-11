import { User } from './models/User';

// const collection = User.buildUserCollection()

// collection.on('change', () => {
//     console.log(collection);
// });

// collection.fetch();

import { UserForm } from "./views/UserForm";

const user = User.buildUser({ name: 'Name', age: 20 });

const userForm = new UserForm(document.getElementById('root'), user);

userForm.render();