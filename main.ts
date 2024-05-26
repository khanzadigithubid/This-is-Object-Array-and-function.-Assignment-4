//Assignment 4 Student List Organizer

//Learning Objective: Get comfortable with data structures (objects and arrays) and basic functions in TypeScript.
//Tasks:

//1. Student Data: The provided code defines an interface named Student that describes student information like name, senior status (true/false), and whether they've completed their assignments (true/false).
//o Imagine this as a template for organizing student details.
//2. Student List:
//o An array named students stores information about several students using the Student template. Think of this array as your class list!
//3. Find Senior Students with Assignments (Optional):
//o The code (not shown here) has a function that might find students who are seniors and have completed their assignments.
//o Can you guess why this information might be helpful?
//4. Class List Update:
//o Imagine you need to update your class list! The code (not shown here) might have a function that removes students who haven' completed their assignments (assuming only seniors are responsible).
//o Can you think of any reasons why this might be useful (consider limitations)

interface Student {
  name: string;
  isSenior : boolean;
  hasCompletedAssignment: boolean;
};

let students : Student[] = [
  {
      name: "Khanzadi",
      isSenior: true,
      hasCompletedAssignment: true,
  },
  {
      name: "Fatima",
      isSenior: false,
      hasCompletedAssignment: true,
  },
  {
      name: "Amna",
      isSenior: true,
      hasCompletedAssignment: false,
  },
  {
      name: "Aizal",
      isSenior: false,
      hasCompletedAssignment: true,
  },
  {
      name: "Kulsoom",
      isSenior: true,
      hasCompletedAssignment: false,
  }

]
console.log(students);

// 3. Senior students with assignment 
let findSenior = (students: Student[]) => {
  return students.filter(student => student.isSenior && student.hasCompletedAssignment=== true)
}
console.log(findSenior(students));

// 4.Class list update
let removeStudent= (students: Student[]) => {
  return students.filter(student => student.hasCompletedAssignment === false)
}
console.log(removeStudent(students));