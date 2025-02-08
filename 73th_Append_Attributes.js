// Refer 73th_Append_Attributes.html file


let newElement = document.createElement("div")
let newText = document.createTextNode("This is Sample Data")

console.log(newElement)             // <div></div>
console.log(newText)                // "This is Sample Data"

newElement.append(newText)
console.log(newElement)             // <div>This is Sample Data</div>



// document.getElementById("outer").append(newElement)
// <div id="outer">
//     <h3>Starting of Tag</h3>
//     <h3 id="middle">Middle of Tag</h3>
//     <h3>Ending of Tag</h3>
//     <div>This is Sample Data</div>
// </div>


let b = document.getElementById("outer").children
console.log(b)
// HTMLCollection(3) [h3, h3#middle, h3, middle: h3#middle]
// 0: h3
// 1: h3#middle
// 2: h3
// middle: h3#middle
// length: 3



document.getElementById("outer").insertBefore(newElement, b[1])
// <div id="outer">
//     <h3>Starting of Tag</h3>
//     <div>This is Sample Data</div>
//     <h3 id="middle">Middle of Tag</h3>
//     <h3>Ending of Tag</h3>
// </div>