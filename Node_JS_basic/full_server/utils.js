const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const lines = data
        .split('\n')
        .filter((line) => line.trim() !== '');

      const students = lines.slice(1);

      const result = {};

      students.forEach((line) => {
        const [firstname, , , field] = line.split(',');

        if (firstname && field) {
          if (!result[field]) {
            result[field] = [];
          }
          result[field].push(firstname);
        }
      });

      resolve(result);
    });
  });
}

module.exports = readDatabase;
