// Refer 68th_parentElement_and_parentNode.html file


let newElement = document.createElement("div")
let newText = document.createTextNode("This is Sample Text")
let newCommit = document.createComment("This is Javascript Commits")

console.log(newElement)         // <div></div>
console.log(newText)            // "This is Sample Text"
console.log(newCommit)          // <!-- This is Javascript Commits -->