
// Arrays :- Array in Javascript can store multiple datatype

let Array_1 = [10, 20, 30, 20, 10]
console.log("Array_1 :- " + Array_1)        // Array_1 :- 10,20,30,20,10

console.log("Array_1 Contain :- ");
for(let i=0; i<Array_1.length; i++)
    console.log(Array_1[i])
// Array_1 Contain :- 
// 10
// 20
// 30
// 20
// 10







let Array_2 = [10, "20", 99.99, null, true, false, undefined]
console.log("Array_2 :- " + Array_2)        // Array_2 :- 10,20,99.99,,true,false,

console.log("Array_2 contains :- ")
for(let i=0; i<Array_2.length; i++)
    console.log(Array_2[i])
// Array_2 contains :-
// 10
// 20
// 99.99
// null
// true
// false
// undefined







let Array_3 = [10, "20", 99.99, null, true, undefined, false, 100]
console.log("Array_3 :- " + Array_3)        // Array_3 :- 10,20,99.99,,true,,false,100

console.log("Array_3 contains :- ")
for(let i=0; i<12; i++)
    console.log(Array_3[i])
// Array_3 contains :-
// 10
// 20
// 99.99
// null
// true
// undefined
// false
// 100
// undefined
// undefined
// undefined
// undefined