// Refer 68th_parentElement_and_parentNode.html file


let a = document.getElementById("inner").parentElement
console.log(a)          // <div id="outer">...</div>

let b = document.getElementById("outer").parentElement
console.log(b)          // <body>...</body>

let c = document.body.parentElement
console.log(c)          // <html>...</html>

let d = document.parentElement
console.log(d)          // null

let e = document.parentNode
console.log(e)          // null