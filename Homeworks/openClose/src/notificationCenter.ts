import User from "./user";

export default abstract class NotificationCenter {
  constructor(protected user: User, protected message: string) {}

  notify(method: string) {
    console.log(
      `Notify by ${method} to ${this.user.name} message: ${this.message}...`
    );
  }
}
