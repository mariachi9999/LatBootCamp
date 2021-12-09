import Lamp from "./lamp";

export default class Button {
  constructor(protected lamp: Lamp) {}

  onButtonListener() {
    if (this.lamp.getStatus()) {
      this.lamp.turnOff();
    } else {
      this.lamp.turnOn();
    }
  }
}
