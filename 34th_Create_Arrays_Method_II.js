
// Creation of Array usinig Object


let Array_1 = new Array(10, "Harry", "25", 99.99, true, undefined, false, null, 100)
console.log("Array_1 :- " + Array_1)        // Array_1 :- 10,Harry,25,99.99,true,,false,,100

console.log("Array_1 contains :- ")
for(let i=0; i<12; i++)
    console.log(Array_1[i]) 
// Array_1 contains :- 
// 10
// Harry
// 25
// 99.99
// true
// undefined
// false
// null
// 100
// undefined
// undefined
// undefined









// () means can hold infinit values
let Array_2 = new Array()

Array_2[0] = 10
Array_2[1] = "Tejas Joshi"
Array_2[2] = false 

console.log("Array_2 :- " + Array_2)        // Array_2 :- 10,Tejas Joshi,false

console.log("Array_2 contains :- ")
for(let i=0; i<12; i++)
    console.log(Array_2[i]) 
// Array_2 contains :-
// 10
// Tejas Joshi
// false
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// undefined










let Array_3 = new Array()

for(let i=0; i<3; i++)
    Array_3[i] = prompt("Enter the Value of Item-" + i + " :- ")
// Enter the Value of Item-0 :- 10
// Enter the Value of Item-1 :- true
// Enter the Value of Item-2 :- Tejas

console.log("Array_3 :- ")              // Array_3 :- 10,true,"Tejas"

console.log("Array_3 contains :- ")
for(let i=0; i<7; i++)
    console.log(Array_3[i])
// Array_3 contains :- 
// 10
// true
// Tejas
// undefined 
// undefined 
// undefined 
// undefined 