import User from "./user";
import NotifyByEmail from "./notifyByEmail";
import NotifyBySms from "./notifyBySms";
import NotifyByFacebook from "./notifyByFacebook";

const user = new User("Bob");
const notificationFacebook = new NotifyByFacebook(user, "testMessage");
const notificationEmail = new NotifyByEmail(user, "testMessage");
const notificationSms = new NotifyBySms(user, "testMessage");

notificationSms.notificate();
notificationFacebook.notificate();
notificationEmail.notificate();
