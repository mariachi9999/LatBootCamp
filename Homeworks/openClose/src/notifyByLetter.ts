import NotificationCenter from "./notificationCenter";
import User from "./user";

export default class NotifyByLetter extends NotificationCenter {
  private method: string;
  constructor(user: User, message: string) {
    super(user, message);
    this.method = "Letter";
  }
  notificate() {
    this.notify(this.method);
  }
}
