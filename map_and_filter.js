//use map or filter to return a new array with values multiplied by 3.


// for(let i=0; i < arr.length; i++){
//     console.log(arr[i] * 3);
// }

var arr = [5, 3, 2, 9, 8]

//
// let newArr = arr.map(function(value){
//     return value * 3
// })
//
// let newArr = arr.map(value => value * 3)


// console.log(newArr);







//with map




// function mult3(array){
//     let newArr = []
//     for(let i = 0; i < array.length; i++){
//         newArr.push(array[i] * 3)
//     }
//     return newArr
// }

// console.log(mult3(arr));

//refactor with map....

var arr = [5, 3, 2, 9, 8]


// const mult3 = (array) => {
//     let newArr = array.map(function(value){
//         return value * 3
//     })
//     return newArr
// }

// const mult3 = (array) => {
//     return newArr = array.map(value => value * 3)
// }
//
// console.log(mult3(arr));


// const mult3...

//write an arrow function that takes in any array and returns a new array that identifies whether the numbers are even or odd.
// var testArr = [3, 7, 2, 5, 10, 13, 15]

//expected output [ 'odd', 'odd', 'even', 'odd', 'even', 'odd', 'odd' ]

// const oddEven = (array) => {
//     let newArr = array.map(value => {
//         if(value % 2 === 0){
//             return "even"
//         } else {
//             return "odd"
//         }
//     })
//     return newArr
// }
//
// console.log(oddEven(testArr));



//write an arrow function that takes in an array and returns only the odd numbers (do we use map or filter?  why?

// var testArr = [3, 7, 2, 5, 10, 13, 15]
//
// const oddNum = (array) => {
//     let newArr = array.filter(v => {
//         return v % 2 !== 0
//     })
//     return newArr
// }
//
// console.log(oddNum(testArr));










//write an arrow function that takes in any array and returns a new array with only the numbers at the even indexes. (do we use map or filter? why?)

var testArr = [3, 7, 2, 5, 10, 13, 15]
//expected output = [3, 2, 10, 15]

const evenIndex = (array) => {
    let newArr = array.filter((value,index) => {
        return index % 2 === 0
    })
    return newArr
}

console.log(evenIndex(testArr));






// const oddEven = (array) => {
//     let newArr = array.map(function(value) {
//         if(value % 2 === 0){
//          return "even"
//         } else {
//          return "odd"
//         }
//     })
//     return newArr
// }
//
// console.log(oddEven(testArr));

// const evenIndex = (array) => {
//     let newArr = array.filter((value, index) => {
//         if (index % 2 !== 0){
//             return value
//         }
//     })
//     return newArr
// }
//
// console.log(evenIndex(testArr));
