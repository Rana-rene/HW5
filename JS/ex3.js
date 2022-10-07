const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];

// Output:  An array of student objects with the shown properties.  
// Shows students whose last name begins with "C": First and Last name; Min, Max, and Average Score.  

const byC = students => students.firstName.startsWith("C");
const filter = (array, func) => array.filter(func);
const sumArray = array => array.reduce((acc, elem)=> acc + elem, 0);
const maxArray = array => Math.max(...array);
const minArray = array => Math.min(...array);

const cResults = filter(studentList,byC).map(student => {
    return {
        firstName: student.firstName,
        lastName: student.lastName,
        maxScore: maxArray(student.scores),
        minScore: minArray(student.scores),
        avgScore: sumArray(student.scores) / student.scores.length

        
    }
})

console.log(cResults);
