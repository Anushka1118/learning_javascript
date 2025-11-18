//const user= new Object()
//const user = {}
//user.id = "abc123"
//user.name = "anu"
//user.age = 20

//console.log(user)
//const user1 = {
//email: "annn123",
//fullname: {
//name: "anu",
//lastname: "kumari"
//}
//}
//console.log(user1.fullname)
//console.log(user1.email)
//console.log(user1.fullname.lastname)

//const obj1 = { 1: "a", 2: "b" }
//const obj2 = { ann: "c", 4: "d" }
//const obj3 = { obj1, obj2 }//makes nested object =>obj3={obj1:{},obj2:{}}
//const obj3 = Object.assign({}, obj2, obj1)//stores all the valeu in obj1 =>obj1===obj3
//const obj3 = Object.assign({}, obj2, obj1)//stores =>integer keys in ascending order,string keys then object keys as they are added
//const obj3 = { ...obj1, ...obj2 }//mostlt used
//console.log(Object.keys(obj1));
//console.log(obj3);
//console.log('====================================');
//console.log(Object.entries(obj3));
//console.log(obj3.hasOwnProperty(1));


const user = {
    name_of_student: "anu",
    age: 9,
    islogged: false,
    mysym: "mykey1",
    //   [sym]: "mykey"


}

const { name_of_student: name } = user
console.log(name)
