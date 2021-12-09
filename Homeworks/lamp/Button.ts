import LampInterface from "./lampInterface";

export default class Button {
  constructor(protected lamp: LampInterface) {}

  onButtonListener() {
    if (this.lamp.getStatus()) {
      this.lamp.turnOff();
    } else {
      this.lamp.turnOn();
    }
  }
}
