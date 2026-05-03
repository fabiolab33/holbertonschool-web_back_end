# ES6 Classes Project

This project focuses on mastering **ES6 classes in JavaScript**, including object-oriented programming concepts such as:

- Class definition
- Getters and setters
- Static methods
- Inheritance
- Method overriding
- Metaprogramming (Symbols)
- Object type coercion

The project is part of a backend JavaScript curriculum and is tested using **Jest** and linted with **ESLint**.

---

## 📁 Project Structure

| File | Description |
|------|------------|
| 0-classroom.js | Basic class implementation (ClassRoom) |
| 1-make_classrooms.js | Function that initializes multiple ClassRoom instances |
| 2-hbtn_course.js | Class with getters, setters, and type validation |
| 3-currency.js | Class with method to display formatted currency |
| 4-pricing.js | Class with static method and object composition |
| 5-building.js | Abstract class with required method enforcement |
| 6-sky_high.js | Class inheritance and method overriding |
| 7-airport.js | Custom object string representation using Symbol.toStringTag |
| 8-hbtn_class.js | Type coercion using valueOf and toString |
| 9-hoisting.js | Fixing class structure and exports (hoisting concepts) |
| 10-car.js | Class cloning using constructor inheritance |
| package.json | Project dependencies and scripts |

---

## ⚙️ Setup

### Install Node.js (20.x)

```bash
curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install nodejs -y
```

---

## Install dependencies
```bash
npm install
```

This installs:
- Jest (testing)
- Babel (ES6 support)
- ESLint (code linting)

---

## 🧪 Running Tests

**Run all tests:**
```bash
npm run full-test
```

**Run unit tests:**
```bash
npm run test
```

**Run specific test file:**
```bash
npm test <test-file>
```

---

## 🧹 Code Style

This project follows ESLint rules. To check your code:

```bash
npm run lint
```
---

## 📚 Key Concepts Covered

**1. Classes**
```JavaScript
class MyClass {  
    constructor(value) {    
        this._value = value;  
    }
}
```

**2. Getters & Setters**
```JavaScript
get value() {
    return this._value;
}

set value(v) {
    this._value = v;
}
```

**3. Static Methods**
```JavaScript
static myMethod() {
    return "Hello";
}
```

**4. Inheritance**
```JavaScript
class Child extends Parent {}
```

**5. Method Overriding**
```JavaScript
evacuationWarningMessage() {
    return "Custom message";
}
```

**6. Metaprogramming (Symbols)**
```JavaScript
get [Symbol.toStringTag]() {
    return this._code;
}
```

**7. Type Coercion**
```JavaScript
valueOf()   // Number()
toString()  // String()
```
