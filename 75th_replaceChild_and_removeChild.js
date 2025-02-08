// ----------------------------------------------------------------------------------------------------------------------------

let list = document.getElementById("list")

let newChild = document.createElement("li")
let Data = document.createTextNode("This is Replace Child Method")
newChild.append(Data)

let oldChild = list.children[1]

list.replaceChild(newChild, oldChild)
// <ul id="list">
//     <li>Apple</li>
//     <li>This is Replace Child Method</li>
//     <li>Cat</li>
//     <li>Dog</li>
// </ul>


// ----------------------------------------------------------------------------------------------------------------------------


let Removable_Child = list.children[2]

list.removeChild(Removable_Child)
// <ul id="list">
//     <li>Apple</li>
//     <li>Banana</li>
//     <li>Dog</li>
// </ul>


// ----------------------------------------------------------------------------------------------------------------------------