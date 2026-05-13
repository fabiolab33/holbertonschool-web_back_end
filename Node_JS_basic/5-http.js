const http = require('http');
const fs = require('fs');

const database = process.argv[2];

function getStudentsData(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((l) => l.trim() !== '');
      const students = lines.slice(1);

      const fields = {};
      let total = 0;

      students.forEach((line) => {
        const [firstname, , , field] = line.split(',');

        if (firstname && field) {
          total += 1;

          if (!fields[field]) {
            fields[field] = [];
          }

          fields[field].push(firstname);
        }
      });

      let output = `Number of students: ${total}\n`;

      Object.keys(fields).forEach((field) => {
        output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      });

      resolve(output.trim());
    });
  });
}

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
    return;
  }

  if (req.url === '/students') {
    res.write('This is the list of our students\n');

    getStudentsData(database)
      .then((data) => {
        res.end(data);
      })
      .catch(() => {
        res.end('Cannot load the database');
      });

    return;
  }

  res.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;