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

// post route to add new students
app.post('/students', (req, res) => {
  const { name, grade } = req.body;

  /* Basic validation
  if (!name || grade === undefined) {
    return res.status(400).json({ error: 'Please provide both name and grade.' });
  }

  const newStudent = new Student(name, grade);
  students.push(newStudent);

  res.status(201).json({
    message: 'Student added successfully.',
    student: newStudent.getDetails()
  });*/
}); 

// get route to return all students
app.get('/students', (req, res) => {
  const allDetails = students.map(student => student.getDetails());
  res.json(allDetails);
});


app.listen(PORT, () => {
  console.log(`🚀 Server is up and running on http://localhost:${PORT}`);
});
