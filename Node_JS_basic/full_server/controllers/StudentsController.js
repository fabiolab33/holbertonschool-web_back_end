const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    const database = process.argv[2];

    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');

    readDatabase(database)
      .then((data) => {
        const fields = Object.keys(data).sort((a, b) =>
          a.toLowerCase().localeCompare(b.toLowerCase())
        );

        fields.forEach((field) => {
          res.write(
            `Number of students in ${field}: ${data[field].length}. List: ${data[
              field
            ].join(', ')}\n`
          );
        });

        res.end();
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const database = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(database)
      .then((data) => {
        if (!data[major]) {
          res.send('List:');
          return;
        }

        res.send(`List: ${data[major].join(', ')}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
