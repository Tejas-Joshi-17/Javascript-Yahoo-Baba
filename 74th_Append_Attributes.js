// ----------------------------------------------------------------------------------------------------------------------------


let newElement_1 = document.createElement("h2")
let newElement_2 = document.createElement("h3")
let newElement_3 = document.createElement("h4")
let newElement_4 = document.createElement("h5")

document.getElementById("box").insertAdjacentElement("beforebegin", newElement_1)
document.getElementById("box").insertAdjacentElement("afterbegin", newElement_2)
document.getElementById("box").insertAdjacentElement("beforeend", newElement_3)
document.getElementById("box").insertAdjacentElement("afterend", newElement_4)

// <h2></h2>
// <div id="box">
//     <h3></h3>
//     <div>This is Sample Data Trying to Learn</div>
//     <h4></h4>
// </div> 
// <h5></h5>


// ----------------------------------------------------------------------------------------------------------------------------



let newElement_5 = "<div>Before-Begin Data</div>"
let newElement_6 = "<div>After-Begin Data</div>"
let newElement_7 = "<div>Before-End Data</div>"
let newElement_8 = "<div>After-End Data</div>"

document.getElementById("box").insertAdjacentHTML("beforebegin", newElement_5)
document.getElementById("box").insertAdjacentHTML("afterbegin", newElement_6)
document.getElementById("box").insertAdjacentHTML("beforeend", newElement_7)
document.getElementById("box").insertAdjacentHTML("afterend", newElement_8)

// <div>Before-Begin Data</div>
// <div id="box">
//     <div>After-Begin Data</div>
//     <div>This is Sample Data Trying to Learn</div>
//     <div>Before-End Data</div>
// </div>
// <div>After-End Data</div>


// ----------------------------------------------------------------------------------------------------------------------------



let newElement_9  = "Before-Begin Data"
let newElement_10 = "After-Begin Data"
let newElement_11 = "Before-End Data"
let newElement_12 = "After-End Data"

document.getElementById("box").insertAdjacentText("beforebegin", newElement_9)
document.getElementById("box").insertAdjacentText("afterbegin", newElement_10)
document.getElementById("box").insertAdjacentText("beforeend", newElement_11)
document.getElementById("box").insertAdjacentText("afterend", newElement_12)

// Before-Begin Data
// <div id="box">
//     After-Begin Data
//     <div>This is Sample Data Trying to Learn</div>
//     Before-End Data
// </div>
// After-End Data


// ----------------------------------------------------------------------------------------------------------------------------


// <h2></h2> 
// <div>Before-Begin Data</div>
// Before-Begin Data
// <div id="box">
//     After-Begin Data
//     <div>After-Begin Data</div>
//     <h3></h3>
//     <div>This is Sample Data Trying to Learn</div>
//     <h4></h4>
//     <div>Before-End Data</div>
//     Before-End Data
// </div> 
// After-End Data
// <div>After-End Data</div>
// <h5></h5>


// ----------------------------------------------------------------------------------------------------------------------------