// Refer 68th_parentElement_and_parentNode.html file


let a1 = document.getElementById("inner").children
console.log(a1)       
// HTMLCollection(6) [h2, span, div, div#Child-C, div, div, Child-C: div#Child-C]
// 0: h2
// 1: span
// 2: div
// 3: div#Child-C
// 4: div
// 5: div
// Child-C: div#Child-C
// length: 6





let a2 = document.getElementById("inner").childNodes
console.log(a2)       
// NodeList(13) [text, h2, text, span, text, div, text, div#Child-C, text, div, text, div, text]
// 0: text
// 1: h2
// 2: text
// 3: span
// 4: text
// 5: div
// 6: text
// 7: div#Child-C
// 8: text
// 9: div
// 10: text
// 11: div
// 12: text
// length: 13




let b1 = document.getElementById("outer").children
console.log(b1) 
// HTMLCollection(2) [h2, div#inner, inner: div#inner]
// 0: h2
// 1: div#inner
// inner: div#inner
// length: 2



let b2 = document.getElementById("outer").childNodes
console.log(b2) 
// NodeList(5) [text, h2, text, div#inner, text]
// 0: text
// 1: h2
// 2: text
// 3: div#inner
// 4: text
// length: 5




let c1 = document.children
console.log(c1)
// HTMLCollection [html]
// 0: html
// length: 1


let c2 = document.childNodes
console.log(c2)
// NodeList(2) [<!DOCTYPE html>, html]
// 0: <!DOCTYPE html>
// 1: html
// length: 2




let d1 = document.getElementById("Child-C").children
console.log(d1)
// HTMLCollection []
// length: 0


let d2 = document.getElementById("Child-C").childNodes
console.log(d2)
// NodeList [text]
// 0: text
// length: 1


let e1 = document.getElementById("Child-C").children
console.log(e1)
// HTMLCollection []
// length: 0


let e2 = document.getElementById("Child-C").childNodes
console.log(e2)
// NodeList [text]
// 0: text
// length: 1