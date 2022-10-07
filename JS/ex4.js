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



// let tester = function() {
//         var newArray= [];
//         for (var i = 0; i <studentList.length; i++) {
//             newArray.push(studentList[i].lastName + ', ' + studentList[i].firstName);
//             newArray.push(studentList[i].scores);
//     }
//     return newArray;
// }
// console.log(tester(studentList));

const sumArray = (array) => array.reduce((acc, elem) => acc + elem, 0);

const extraPoints = array => array.map(student => {
    return {
        firstName: student.firstName,
        lastName: student.lastName,
        Updated_Scores: student.scores.map(x => x+5)}
    });

let pencil = extraPoints(studentList);


for (const x of pencil) { 
      let gradesSum = 0;
      for (const grade of x.Updated_Scores) {
        gradesSum += grade;
      }
      const averageGrade = gradesSum / x.Updated_Scores.length;
      x.Updated_Scores.push(averageGrade)
  }

  console.log(pencil);


for(let i= 0; i<pencil.length; i++) {
    console.log(`Full Name(last, first): ${pencil[i].lastName}, ${pencil[i].firstName}\nUpdates Scores: ${pencil[i].Updated_Scores}`);
    // console.log(`Updates Scores: ${pencil[i].Updated_Scores}`)
}
