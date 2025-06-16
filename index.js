const express = require('express');
const app = express();
const PORT = 3000;

// application middleware to parse json request (b)
app.use(express.json());

// Define the Student class (a)
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name} and grade: ${this.grade}`;
  }
}


const students = [];

// post route to add new students(c)
app.post('/students', (req, res) => {
  const { name, grade } = req.body;
}); 

// get route to return all students(d)
app.get('/students', (req, res) => {
  const allDetails = students.map(student => student.getDetails());
  res.json(allDetails);
});


app.listen(PORT, () => {
  console.log(`🚀 Server is up and running on http://localhost:${PORT}`);
});
