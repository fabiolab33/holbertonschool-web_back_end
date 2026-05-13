const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data
      .split('\n')
      .filter((line) => line.trim() !== '');

    const students = lines.slice(1); // remove header

    const fields = {};
    let total = 0;

    students.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');

      if (firstname && field) {
        total += 1;

        if (!fields[field]) {
          fields[field] = [];
        }

        fields[field].push(firstname);
      }
    });

    console.log(`Number of students: ${total}`);

    Object.keys(fields).forEach((field) => {
      console.log(
        `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
