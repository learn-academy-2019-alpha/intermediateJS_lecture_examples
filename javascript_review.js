const students = [
  'Mary',
  'Michelle',
  'Elisha',
  'Bob',
  'Jane'
]

// const newStudents = []
// for(let i = students.length -1; i >=0; i--){
//   newStudents.push(students[i] + " is awesome")
// }
// console.log(newStudents)
//
//map
// const newStudents = students.map((student)=>{
//   return `${student} is awesome`
// })

//console.log(newStudents)


//filter
// console.log(students)
// const filteredStudents = students.map((student) => {
//   //return student.indexOf('M') === 0
//   //return student[0] === 'M'
//   return student.toLowerCase().indexOf('e') == "-1"
//   //return student.toLowerCase().indexOf('e') >= 0
// })
//
//console.log(filteredStudents)



//while
// console.log(students)
// while(true){
//   const student = students.pop()
//   console.log(student)
//   break;
// }
// console.log(students)


//reduce
// const reducedStudents = students.reduce((accumulator, student)=>{
//   accumulator.push(`${student} is awesome`)
//   return accumulator
// },[])
//
// console.log('reduced students', reducedStudents)


// const filteredStudents = students.reduce((accumulator, student)=>{
//   if(student.indexOf('M') === 0){
//     accumulator.push(student)
//   }
//   return accumulator
// },[])
//
// console.log('filtered students', filteredStudents)
//

// const sum = [1,2,3].reduce((accumulator, number)=>{
//   return accumulator + number
// },0)
//
// console.log("sum!: ", sum)
//
//Comparing Items in an array

const moreStudents = ["Michelle", "brenda", "gary"]
const allStudents = [...students, ...moreStudents]

const unique = [...new Set(allStudents)]
console.log(unique)

// const allStudents = moreStudents.reduce((accumulator, student)=>{
//   if(accumulator.indexOf(student) === -1){
//     accumulator.push(student)
//   }
//   return accumulator
// },students)
//
// console.log(allStudents)
