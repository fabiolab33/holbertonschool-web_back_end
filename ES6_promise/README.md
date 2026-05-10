# ES6 Promises

This project focuses on understanding and using Promises in JavaScript ES6, including async operations, error handling, and async/await concepts.

## Learning Objectives

At the end of this project, you should be able to explain:

- What Promises are and why they are used
- How to use:
  - `then`
  - `catch`
  - `finally`
  - `resolve`
  - `reject`
- Promise methods:
  - `Promise.all`
  - `Promise.allSettled`
  - `Promise.race`
  - `Promise.resolve`
  - `Promise.reject`
- Error handling with:
  - `throw`
  - `try/catch/finally`
- How to use:
  - `async`
  - `await`

---

# Setup

## Install Node.js

```bash
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

## Install dependencies

### Inside the project directory:
```bash
npm install
```

---

## Run files

Example:
```bash
npx babel-node 0-main.js
```

## Run Tests
```bash
npm test
```

### Run a specific test:
```bash
npm test 6-final-user.test.js
```

---

## Project Files

| Task | Description                          |
| ---- | ------------------------------------ |
| 0    | Return a Promise                     |
| 1    | Resolve or reject a Promise          |
| 2    | Handle Promise responses             |
| 3    | Use `Promise.all`                    |
| 4    | Return resolved Promise              |
| 5    | Return rejected Promise              |
| 6    | Use `Promise.allSettled`             |
| 7    | Use `Promise.race`                   |
| 8    | Throw errors                         |
| 9    | Handle errors with try/catch/finally |
