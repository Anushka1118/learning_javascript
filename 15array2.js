
const marvel = ["thor", "loki"]
const dc = ["batman", "flash"]
//marvel.push(dc)
//console.log(marvel.push(dc))//push return length of reulting arr  append marvel
//console.log(marvel.concat(dc))//merge marvel

//spread operator
const mix = [...marvel, ...dc]//same as concat
//console.log(mix)

const another_arr = [1, 2, [1, 2], 3, [4, 5, [5, 6, 7]]]
//console.log(another_arr)
const real_another_arr = another_arr.flat(1)
//console.log(real_another_arr)

console.log(Array.isArray("anu"))
console.log(Array.from("anu"))