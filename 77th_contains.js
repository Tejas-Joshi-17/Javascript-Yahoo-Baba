
let Target = document.getElementById("parent")

let a1 = document.getElementsByClassName("children")[0]
let a2 = document.getElementById("grand-children")
let a3 = document.getElementsByClassName("grant-grand-children")[0]

console.log(Target.contains(a1))        // true
console.log(Target.contains(a2))        // true
console.log(Target.contains(a3))        // true


let b1 = document.getElementById("children")
let b2 = document.getElementsByClassName("grand-children")[0]
let b3 = document.getElementById("grant-grand-children")

console.log(Target.contains(b1))        // false
console.log(Target.contains(b2))        // false
console.log(Target.contains(b3))        // false