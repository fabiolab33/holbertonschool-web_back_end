# Node_JS_basic

This project introduces Node.js fundamentals, including file system operations, HTTP servers (native and Express), asynchronous programming, and project structuring with ES6 modules using Babel.

---

## Project Structure

| File / Directory | Description |
|------------------|-------------|
| 0-console.js | Prints a message to STDOUT using a function |
| 1-stdin.js | Reads input from standard input (stdin) and responds interactively |
| 2-read_file.js | Reads a CSV file synchronously and counts students |
| 3-read_file_async.js | Reads a CSV file asynchronously using Promises |
| 4-http.js | Basic HTTP server using Node.js `http` module |
| 5-http.js | HTTP server with routing and async student data |
| 6-http_express.js | Basic Express server with one route |
| 7-http_express.js | Express server with multiple routes and async data |
| database.csv | CSV database containing student records |
| package.json | Project dependencies and npm scripts |
| babel.config.js | Babel configuration for ES6 support |
| .eslintrc.js | ESLint configuration for code linting |

| full_server/ | Complete MVC Express server using ES6 modules |
|--------------|--------------------------------------------------|
| full_server/server.js | Main Express server entry point |
| full_server/utils.js | Utility functions (reads and parses CSV database) |
| full_server/controllers/AppController.js | Controller for homepage route |
| full_server/controllers/StudentsController.js | Controller for students routes |
| full_server/routes/index.js | Defines all application routes |

---

## Installation

npm install

## Usage

### Basic scripts

node 0-console.js
node 1-stdin.js

### HTTP server (Node.js)

node 4-http.js
node 5-http.js database.csv

### Express server

node 6-http_express.js
node 7-http_express.js database.csv

### Full server (Babel + Express)

npm run dev

## Features

### Console (Node.js basics)
- Print messages to STDOUT

### stdin handling
- Read user input from terminal
- Supports piped input

### File system (sync & async)
- Read CSV file
- Count students by field
- Handle missing files

### HTTP server (native Node.js)
- Basic routing
- Plain text responses

### Express server
- Simplified routing
- Handles / and /students routes
- Error handling

### Full server architecture
- MVC structure
- Controllers + Routes + Utils
- Async file reading with Promises
- ES6 + Babel support

---

## Learning Objectives

- Node.js modules
- process.argv usage
- process.stdin usage
- File system (fs module)
- HTTP module
- Express framework
- Async programming (callbacks & promises)
- Project structuring
- Babel + ES6 usage
- Nodemon workflow

---

## Testing

npm run test
npm run full-test
npm run lint