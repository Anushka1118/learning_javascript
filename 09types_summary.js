//reference type(non primitive)
// array->object,object->object,function->function object

const heros = ["thor", "loki", "flash"]
console.log(heros)

let myobj = {
    name: "anu",
    age: 17
}

const myfunc = function () {
    console.log("hello world")
}
console.log(typeof (myfunc))