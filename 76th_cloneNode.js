// ----------------------------------------------------------------------------------------------------------------------------

let Target = document.getElementById("list-1").children[1]

let Copy_Element_1 = Target.cloneNode(false)
console.log(Copy_Element_1)         // <li class="Banana-Tree"></li>

let Copy_Element_2 = Target.cloneNode(true)
console.log(Copy_Element_2)         // <li class="Banana-Tree">Banana</li>


// ----------------------------------------------------------------------------------------------------------------------------


let new_Element = Target.cloneNode(true)
document.getElementById("list-2").append(new_Element)
// <ul id="list-2" style="font-size: 20px;">
//     <li>America</li>
//     <li>India</li>
//     <li>Banana</li>
// </ul>


// ----------------------------------------------------------------------------------------------------------------------------