import { System } from "./HealthSystem.mjs";

export const doctors = {
  available: ["Micaela", "Marianela", "Alberto"],
  occupied: ["Sergio", "Orlando", "Mayra"],
};

export const san_pedro = new System(
  "jujuy 1221",
  22360013123,
  "san_pedro@com",
  doctors
);

console.log(san_pedro.getAvailableDoctors());
