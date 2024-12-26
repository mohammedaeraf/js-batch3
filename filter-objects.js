const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 40 },
    { name: "Charlie", score: 72 },
    { name: "David", score: 50 },
    { name: "John", score: 45 },
    { name: "Sunita", score: 60 }
  ];

  const passedStudents = students.filter(student => student.score >= 50);
  console.log(passedStudents);


  