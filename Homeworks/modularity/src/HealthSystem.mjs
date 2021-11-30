export class System {
  constructor(address, phone, email, doctors) {
    (this.address = address),
      (this.phone = phone),
      (this.email = email),
      (this.doctors = doctors);
  }
  getDoctors() {
    return this.doctors;
  }

  getAvailableDoctors() {
    return this.doctors.available;
  }
}
