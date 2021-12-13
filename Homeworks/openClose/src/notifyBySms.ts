import NotificationCenter from "./notificationCenter";
import User from "./user";

export default class NotifyBySms extends NotificationCenter {
  private method: string;
  constructor(user: User, message: string) {
    super(user, message);
    this.method = "Sms";
  }
  notificate() {
    this.notify(this.method);
  }
}
