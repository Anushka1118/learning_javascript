//singleton
//object.create

const mysym = Symbol("key1")
const sym = Symbol("key2")
//object literals
const user = {
    name: "anu",
    age: 9,
    islogged: false,
    mysym: "mykey1",
    [sym]: "mykey"


}

//console.log(user.name);
//console.log(user["name"]);
//console.log(typeof (user["mysym"]));
//console.log(typeof (user[sym]));
//
//Object.freeze(user)
//user.age = 77
//console.log(user)

user.greeting = function () {
    console.log(`hello world${this.name}`)
}

console.log(user.greeting())

