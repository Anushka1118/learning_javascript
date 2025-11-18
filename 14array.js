//arrays

const myarr = [1, 2, 3, 4, 5]
//shallow copy->copy and source share same referenc 
//can use mixed datatype

const arr = new Array(1, 2, 3, 4, 5)

//console.log(myarr[0])

//myarr.push(6, 7)
//console.log(myarr)

//myarr.pop()
//console.log(myarr)

//myarr.unshift(9)
//console.log(myarr)

//myarr.shift()
//console.log(myarr)
//console.log(myarr.includes(3))

//console.log(myarr.join())//[2,3,4,5,6]->"2,3,4,5,6"
//console.log(typeof (myarr.join()))//string

const newarr = [1, 2, 3, 4, 5]
//console.log("a", newarr)
//
//console.log(myarr.slice(1, 3))//print [1,3)
//console.log("b", newarr)
//
//console.log(newarr.splice(1, 3))//print [1,3] also remove [1,3] from array
//console.log("c", newarr)


const arr2 = newarr.map(val => val * 3)
console.log(arr2)