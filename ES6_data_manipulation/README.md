# ES6 Data Manipulation

## Description

This project focuses on JavaScript ES6 data manipulation techniques. It covers how to work with modern data structures and array methods such as `map`, `filter`, and `reduce`, as well as ES6 features like `Set`, `Map`, and typed arrays.

The goal is to strengthen understanding of functional programming concepts and efficient data handling in JavaScript.

---

## Learning Objectives

By the end of this project, you should be able to explain:

- How to use `map`, `filter`, and `reduce` on arrays
- What typed arrays are and how they work
- How to use `Set`, `Map`, and `WeakMap`
- How to manipulate and transform data using ES6 features

---

## Requirements

- Node.js 20.x
- npm 9.x
- Ubuntu 20.04 LTS
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files must end with a new line
- Code must use `.js` extension
- All functions must be exported
- Code must pass Jest tests
- Code must pass ESLint checks

---

## Setup

### Install NodeJS 20.x

```bash
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```
### Check versions:

```bash
node -v
npm -v
```

---

## Install dependencies

### Inside the project directory:
```bash
npm install
```

### If needed:
```bash
npm install --save-dev jest babel-jest @babel/core @babel/preset-env eslint
```

---

## Project Files

| Task | File                      | Description                                   |
| ---- | ------------------------- | --------------------------------------------- |
| 0    | 0-get_list_students.js    | Returns an array of student objects           |
| 1    | 1-get_list_student_ids.js | Returns an array of student IDs using `map`   |
| 2    | 2-get_students_by_loc.js  | Filters students by city using `filter`       |
| 3    | 3-get_ids_sum.js          | Sums all student IDs using `reduce`           |
| 4    | 4-update_grade_by_city.js | Combines `filter` and `map` to add grades     |
| 5    | 5-typed_arrays.js         | Creates an Int8 typed array using ArrayBuffer |
| 6    | 6-set.js                  | Creates a Set from an array                   |
| 7    | 7-has_array_values.js     | Checks if all values exist in a Set           |
| 8    | 8-clean_set.js            | Formats Set values into a string              |
| 9    | 9-groceries_list.js       | Creates a Map of grocery items                |
| 10   | 10-update_uniq_items.js   | Updates Map values (1 → 100)                  |
