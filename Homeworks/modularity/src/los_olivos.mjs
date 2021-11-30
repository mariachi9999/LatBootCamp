import { System } from "./HealthSystem.mjs";

export const doctors = {
  available: ["Roberto", "Diego", "Maria"],
  occupied: ["Einar", "Nicolas", "Martina"],
};

export const los_olivos = new System(
  "libertad 6455",
  2236691122,
  "university@com",
  doctors
);
