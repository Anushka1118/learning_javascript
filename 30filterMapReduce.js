//map=>always return array of same length
//map=>can change elements based on assigned operation to it
//filter =>return aray of same or less size
//filter=>checks a condition on elements and return accordingly same element 

const myNum = [1, 2, 3, 4, 5, 6, 7]

// const val = myNum.forEach((item) => {
//     console.log(item)
//     return item;
// })
// console.log(val)  //undefined:forEach doesnt return any value

// const val = myNum.filter((items) => items > 3)  //not using {}:directly return the result 
// // const val = myNum.filter((item) => { return item > 3 })  //using {}:we have to explicitlyreturn value
// console.log(val)  //array of numbers

// const val = myNum.map(num => num + 10)
// console.log(val)

// const val = myNum.map((num) => num > 10)//.map(nums => nums * 10)
//  console.log(val)//array of boolean values



//CHAINING
// const val = myNum.map((num) => num * 10).map(nums => nums + 1)
// console.log(val)

// const val = myNum.map((num) => num * 10).filter(nums => nums > 30)
// console.log(val)


//REDUCE
i = 0
const arr = [1, 2, 3, 4, 5]
const total = arr.reduce((acc, curval) => {
    console.log(acc);
    return acc + curval, i
})
console.log(total)