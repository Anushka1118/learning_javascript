// = ->assignmet
// == ,!=  ->check
// ===->type check

// console.log(2 == 2)
// console.log(2 == "2")//check only vlue
// console.log(2 == 3)
// console.log(2 === 2)
// console.log(2 === "2")//checks type also


// if (2 === 2) {

// }
// else {

// }

// const userName = "anu.1118"

// if (userName) {
//     console.log("you're logged in")

// }
// else { console.log("wrong userNmae") }

//if(){}
//elseif(){}
//else{}

//if (true) console.log("true"), console.log("true again") //not reccomended after comma,
//if (true) console.log("true")//called implicit scope

// &&->and  ||->or
const month = "jan"
switch (month) {  //if any case is satisfied,all code below is executed but default
    case "feb":
        console.log("jan")
        break;

    case "jan":
        console.log("jan")
        break;
    case 3:
        console.log("march")
        break;

    default:
        console.log("none")
        break;
}


//falsy values
//false,0,-0,BigInt 0n,,"",null,undefine,NaN

//truthy value
//"0","false"," ",[],{},function(){}
// const userName = ""
// if (userName === "") {
//     console.log("string is empty")
// }
// const emptyObject = {}
// if (Object.keys(emptyObject).length === 0) {
//     console.log("obj is empty")
// }

let val;
val = 5 ?? 4
console.log(val)

let val1;
val1 = null ?? 2
console.log(val1)

let val2;
val2 = undefined ?? 2
console.log(val2)

let val3 = null ?? 10 ?? 2

const price = 100
price <= 80 ? console.log("less than 80") : console.log("more than 80")