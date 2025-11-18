//1970
//integer number that represent millisecond since 1st 1970

let mydate = new Date()
//console.log(mydate.getMonth())
//console.log(mydate.toString())
//console.log(mydate.toLocaleString())
//console.log(mydate.toISOString())
//console.log(mydate.getHours())
//console.log(mydate.getUTCMilliseconds())

//console.log(typeof(mydate))

let newdate = new Date(2023, 1, 8)
//console.log(newdate.toDateString())

let new_date = new Date(2023, 1, 8, 5, 4)
console.log(new_date. toLocaleString())

console.log(Date.now())   //millisecond
console.log(Math.floor(Date.now() / 1000))   //second