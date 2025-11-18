//function name() {
//console.log("anu")
//}
//name()


//function sum(num1, num2) {
//console.log(num1 + num2)
//}
//
//sum("4", 6)


//function sum(num1, num2) {
//return num1 + num2
//}
//
//const result = sum("4", 6)
//console.log(result)

//function note(user) {
//return `${user} just logged in`
//}
//
//console.log(note("anu"))
//

//
//function user(name = "sam") {
//if (name === undefined) {
//console.log("enter a name")
//return
//}
//return name
//}
//
//console.log(user())


//function calculateCartPrice(...num1) {
//return num1
//}
//console.log(calculateCartPrice(300, 800, 666))

//function demo(val1, val2, ...num) {
//console.log(val1)
//console.log(val2)
//console.log(num)
//}
//
//demo(100, 900, 400, 500, 600, 600)

const user = {
    name: "anu",
    roll: 58
}

function handleobject(anyobject) {
    console.log(anyobject.name)
}

handleobject(user)
handleobject({ name: "annn", roll: 22 })