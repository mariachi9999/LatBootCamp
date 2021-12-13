import NotificationCenter from "./notificationCenter";
import User from "./user";

export default class NotifyByFacebook extends NotificationCenter {
  private method: string;
  constructor(user: User, message: string) {
    super(user, message);
    this.method = "Facebook";
  }
  notificate() {
    this.notify(this.method);
  }
}
