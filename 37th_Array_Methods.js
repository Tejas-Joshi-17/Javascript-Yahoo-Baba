// Array Methods :- 

// 1)   sort( )        :-  Used to Sort the Array
// 2)   reverse( )     :-  Used to Reverse the Array
// 3)   pop( )         :-  Same like pop_back( )
// 4)   push( )        :-  Same like push_back( )
// 5)   shift( )       :-  Same like pop_front( )
// 6)   unshift( )     :-  Same like push_front( )
// 7)   concat( )      :-  Used to Concat Arrays
// 8)   join( )        :-  Used to add separator between elements of an array
// 9)   slice( )
// 10)  splice( )
// 11)  isArray( )
// 12)  indexOf( )
// 13)  lastIndexOf( )
// 14)  entries( )
// 15)  every( )
// 16)  filter( )
// 17)  find( )
// 18)  findIndex( )
// 19)  includes( )
// 20)  some( )
// 21)  forEach( )
// 22)  toString( )
// 23)  valueOf( )
// 24)  fill( )


// ---------------------------------------------------------------------------------------------------------------


// 1) sort( )        :-  Used to Sort the Array 

let Arr_1 = [10, 50, 20, 40, 30, 10, 70, 30]

console.log(`Array Before Sorting :- ${Arr_1}`)

// Sorting
Arr_1.sort()

console.log(`Array After Sorting :- ${Arr_1}`)

// Array Before Sorting :- 10, 50, 20, 40, 30, 10, 70, 30
// Array After Sorting :- 10, 10, 20, 30, 30, 40, 50, 70


// ---------------------------------------------------------------------------------------------------------------


// 2) reverse( )     :-  Used to Reverse the Array

let Arr_2 = [10, 50, 20, 40, 30, 10, 70, 30]

console.log(`Array Before Reverse :- ${Arr_2}`)

// Reverse
Arr_2.reverse()

console.log(`Array After Reverse :- ${Arr_2}`)

// Array Before Reverse :- 10, 50, 20, 40, 30, 10, 70, 30
// Array After Reverse :- 30, 70, 10, 30, 40, 20, 50, 10


// ---------------------------------------------------------------------------------------------------------------