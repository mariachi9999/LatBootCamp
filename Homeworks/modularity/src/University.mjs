async function load(date) {
  let clinic = "";
  if (date > 19 && date < 8) {
    clinic = "san_Pedro";
    const { san_pedro } = await import(`./${clinic}.mjs`);
    return san_pedro.getAvailableDoctors();
  } else {
    clinic = "los_olivos";
    const { los_olivos } = await import(`./${clinic}.mjs`);
    return los_olivos.getAvailableDoctors();
  }
}

export class University {
  constructor(address, phone, email) {
    (this.address = address), (this.phone = phone), (this.email = email);
  }
  async getAvailableDoctors() {
    let date = new Date().getHours();
    let doctors = await load(date);
    return doctors;
  }
}

const jala_university = new University(
  "libertad 6455",
  2236691122,
  "university@com"
);
