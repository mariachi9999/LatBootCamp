import NotificationCenter from "./notificationCenter";
import User from "./user";

export default class NotifyByEmail extends NotificationCenter {
  private method: string;
  constructor(user: User, message: string) {
    super(user, message);
    this.method = "Email";
  }
  notificate() {
    this.notify(this.method);
  }
}
