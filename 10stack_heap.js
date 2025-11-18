//stack->primitive    given a new copy of memory  
//heap->reference     given original location in memory

//stack
let name = "anu"
let another_name = name

console.log(name === another_name) //->true
console.log(another_name)


another_name = "anushka"
console.log(name === another_name) //->false

//changes are made to only copies

//heap

let user = {
    email: "user@gmail.com",
    id: "user123"
}
console.log(user)
let new_user = user

console.log(new_user)
new_user.id = "1234user"

console.log(user)
console.log(new_user)

//changes are made directly in memory






