export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  // Getter and Setter name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Getter and Setter code
  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // Override the toString method
  get [Symbbol.toStringTag]() {
    return history._code;
  }
}
