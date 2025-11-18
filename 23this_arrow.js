//const user = {
//user1: "anu",
//price: 999,
//
//msg: function () {
////console.log(`${user1},welcome to website`)
//console.log(`${this.user1},welcome to website`)
//}
//}
//
//user.msg()
//user.user1="aman"
//user.msg()
//console.log(this)//{}:node environment 

//function one() {
////console.log(this)//many values
//let user1 = "anu"
//console.log(this.user1)//undefined:not in functin only in object
//}
//
//one()

//const one=()=> {
////console.log(this)//many values
//let user1 = "anu"
//console.log(this.user1)//undefined:not in functin only in object
//console.log(this)//{}
//}
//
//one()

//const addtwo = (n1, n2) => { return n1 + n2 }//if using {} ,you must use |return| 
//
//console.log(addtwo(3, 4))

//const addtwo = (n1, n2) => n1 + n2//no need to use| return |,usulally one line code
//console.log(addtwo(2, 3))


//IFFI(immedately invoked function exprssion)
//->to avoid global scope pollution
//when two iifi function is in code then semicolon is must

//function chai() {
//console.log(`DBMS connected`)
//}()  // wont work


(function chai() { //named iffi :named function
    console.log(`DBMS connected`)
})(); //  work

(() => { console.log(`DBMS connected`) })();//semicolon important //not mame IIFI

((name) => { console.log(`DBMS connected${name}`) })("anu");//semicolon importan