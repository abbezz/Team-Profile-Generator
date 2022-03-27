const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, Number) {
    super(name, id, email);
    this.Number = Number;
  }

  getNumber () {
    return this.Number;
  }
  getRole() {
  return "Manager";
}
}

module.exports = Manager;