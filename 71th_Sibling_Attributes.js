// Refer 68th_parentElement_and_parentNode.html file


let a = document.getElementById("Child-C").nextElementSibling
console.log(a)              // <div>D</div>

let b = document.getElementById("Child-C").nextSibling
console.log(b)              // #text  <---- Space

let c = document.getElementById("Child-C").previousElementSibling
console.log(c)              // <div>B</div>

let d = document.getElementById("Child-C").previousSibling
console.log(d)              // #text  <---- Space