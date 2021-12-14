import deleteInterface from "./deleteInterface";
import getInterface from "./getInterface";
import insertInterface from "./insertInterface";
import Repository from "./repository";
import updateInterface from "./updateInterface";
import User from "./user";

export default class UserRepository
  implements deleteInterface, getInterface, updateInterface, insertInterface
{
  insert(user: User) {}

  update(user: User) {}

  get(): User {
    return new User("1");
  }

  delete(id: string): void {}
}
