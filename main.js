//Assignment 4 Student List Organizer
;
var students = [
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
];
console.log(students);
// 3. Senior students with assignment 
var findSenior = function (students) {
    return students.filter(function (student) { return student.isSenior && student.hasCompletedAssignment === true; });
};
console.log(findSenior(students));
// 4.Class list update
var removeStudent = function (students) {
    return students.filter(function (student) { return student.hasCompletedAssignment === false; });
};
console.log(removeStudent(students));
