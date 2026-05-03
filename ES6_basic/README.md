# ES6 Basic

This project focuses on learning the fundamentals of ES6 in JavaScript. It introduces modern JavaScript features such as block scope, arrow functions, default parameters, rest/spread syntax, template literals, object enhancements, and iteration methods.

## 📚 Learning Objectives

By the end of this project, you should be able to explain the following concepts without external help:

- What ES6 is
- New features introduced in ES6
- Difference between `var`, `let`, and `const`
- Block-scoped variables
- Arrow functions and lexical `this`
- Default parameters
- Rest and spread operators
- Template literals
- Object property shorthand
- Computed property names
- ES6 method properties
- Iterators and `for...of` loops

---

## 📦 Setup

### Install Node.js 20.x

```bash
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

---

## Install project dependencies

**Inside your project folder:**

```bash
npm install
```
This will install:
- Jest
- Babel
- ESLint

---

## 📁 Project Structure

| File | Description |
|------|------------|
| 0-constants.js | Replace `var` with `const` and `let` |
| 1-block-scoped.js | Fix block scope using `let` and `const` |
| 2-arrow.js | Convert function to arrow function syntax |
| 3-default-parameter.js | Use default function parameters |
| 4-rest-parameter.js | Count arguments using rest parameters |
| 5-spread-operator.js | Concatenate arrays and strings using spread syntax |
| 6-string-interpolation.js | Use template literals for string building |
| 7-getBudgetObject.js | Use object property shorthand syntax |
| 8-getBudgetCurrentYear.js | Use computed property names |
| 9-getFullBudget.js | Use ES6 method properties and spread operator |
| 10-loops.js | Replace loop with `for...of` |
| 11-createEmployeesObject.js | Create object with computed property keys |
| 12-createReportObject.js | Build nested report object with methods |

---

## ▶️ Running the code

To execute a file:
```bash
npm run dev <filename>
```

---