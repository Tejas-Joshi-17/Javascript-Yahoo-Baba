// Refer 68th_parentElement_and_parentNode.html file


let a1 = document.getElementById("outer").firstElementChild
console.log(a1)                 // <h2>outer</h2>

let a2 = document.getElementById("outer").firstChild
console.log(a2)                 // #text  <---- Space

let a3 = document.getElementById("outer").lastElementChild
console.log(a3)                 // <div id="inner">...</div>

let a4 = document.getElementById("outer").lastChild
console.log(a4)                 // #text  <---- Space




let b1 = document.getElementById("inner").firstElementChild
console.log(b1)                 // <h2>inner</h2>

let b2 = document.getElementById("inner").firstChild
console.log(b2)                 // #text  <---- Space

let b3 = document.getElementById("inner").lastElementChild
console.log(b3)                 // <div>E</div>

let b4 = document.getElementById("inner").lastChild
console.log(b4)                 // #text  <---- Space


