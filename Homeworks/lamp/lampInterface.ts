export default interface LampInterface {
  status: boolean;
  turnOn: () => void;
  turnOff: () => void;
  getStatus: () => boolean;
}
