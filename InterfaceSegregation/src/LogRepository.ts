import EventLog from "./eventLog";
import getInterface from "./getInterface";
import Repository from "./repository";
import User from "./user";

export default class LogRepository implements getInterface {
  get(): EventLog {
    return new EventLog("1", "test message");
  }
}
