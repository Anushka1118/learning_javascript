//for of loop->for of gives values by default

// const arr = [1, 2, 3, 4]

// for (const num of arr) {
//     console.log(num)
// }

// const greeting = "hello world"
// for (const char of greeting) {
//     console.log(`${char}  `)
// }


// const map = new Map()
// map.set('IN', 'India')
// map.set("USA", 'america')

// console.log(map)
// for (const [key, value] of map) {
//     console.log(key, ":-", value)
// }

// const myObj = {
//     'game1': 'NSF',
//     'games': 'spiderman'
// }

// for (const [key, value] of myObj) {
//     console.log(key, ":-", value) //object not iterable here
// }


// //for in loop->for in give keys by default

// const newObj = {
//     js: "javascript",
//     cpp: "c++",
//     rb: "ruby"
// }

// for (const key in newObj) {
//     console.log(key)//keys
//     console.log(newObj[key])//values
// }

// const lang = ["js", "rb", "cpp"]
// for (const key in lang) {
//     console.log(lang[key])
// }

// const map = new Map()
// map.set('IN', 'India')
// map.set("USA", 'america')


// for (const key in map) {
//     console.log(key)
// }//give nothing /not iterable for ' for in' lopp


// const coding = ["js", "rb", "cpp", "python"]
// // coding.forEach(function greet(item) {
// //     console.log(item)

// // })

// coding.forEach((item) => {
//     console.log(item)
// })

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr)
// })

// const mycoding = [
//     {
//         js: "javascript", extension: '.js'
//     },
//     {
//     },
//     {
//     }
// ]
// mycoding.forEach((item) => {
//     console.log(item.js)
// })

const myMap = new Map([
    ["name", "anu"],
    ["age", 21],
    ["stream", "btech"]
]);
myMap.set("year", 1)
//console.log(myMap)
// console.log(myMap.keys())
// console.log(myMap.values())
// console.log(myMap.entries())
console.log(myMap.has("age"))
console.log(myMap.size)
myMap.delete("age")
console.log(myMap)
console.log(myMap.size)