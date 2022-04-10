import { Model } from './Models';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const rootUrl = 'http://localhost:3000/users';
export class User extends Model<UserProps> {
    static buildUser(attars: UserProps): User {
        return new User(
            new Attributes<UserProps>(attars),
            new Eventing(),
            new ApiSync(rootUrl)
        )
    }
}