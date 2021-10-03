class Student {
  constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
  }
}

class Bootcamp {
  constructor(name, level, students) {
    this.name = name;
    this.level = level;
    students = [];
  }
  registerStudent(studentToRegister) {
    studentToRegister = Student.email;
    students.push(studentToRegister);
    console.log(students);
    return students;
  }
}
// Array method to verify if the student's email address
const lily = new Student("lily", "lily@world.org", "Seattle");
const Danny = new Student("Danny", "danny@world.org", "Miami");
const Juliana = new Student("Juliana", "juliana@world.org", "NewYork");

webDevFundamentals.registerStudent(lily);
webDevFundamentals.registerStudent(Danny);
webDevFundamentals.registerStudent(Juliana);
webDevFundamentals;
