//strings
//''  or ""
//forward and backward indexing same as in python

const name = "anu "
const surname = "kumari"

//console.log(name + " " + surname)
//console.log(`${name} and ${surname}`)
//console.log(`${name.toUpperCase()} and ${surname}`)

const gatename = new String('anu')

//console.log(gatename[0])
//console.log(gatename.__proto__)
//console.log(name.length)
//console.log(name.charAt(2))
//console.log(name.indexOf('a'))

const fullname = name.concat(surname)
//console.log(fullname)
//console.log(name.substring(0, 3))  //can use both positive and negative indeing but not both

const newstr = "    anu_kumari   "
console.log(newstr)
console.log(newstr.trim())
console.log(newstr.replace('_', " "))
console.log(newstr.includes("anu"))
console.log(newstr.split("_"))