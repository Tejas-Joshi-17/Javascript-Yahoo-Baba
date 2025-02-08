// 1) string

var x = "a"
console.log('Datatype of "' + x + '" is :- ' + typeof x)        // Datatype of "a" is :- string
x = 'a'
console.log("Datatype of '" + x + "' is :- " + typeof x)        // Datatype of 'a' is :- string
x = "Tejas Joshi"
console.log('Datatype of "' + x + '" is :- ' + typeof x)        // Datatype of "Tejas Joshi" is :- string
x = 'Tejas Joshi'
console.log("Datatype of '" + x + "' is :- " + typeof x)        // Datatype of 'Tejas Joshi' is :- string






// 2) Number

var a = 23
console.log("Datatype of " + a + " is :- " + typeof a)          // Datatype of 23 is :- number

a = 23.34
console.log("Datatype of " + a + " is :- " + typeof a)          // Datatype of 23.34 is :- number






// 3) boolean

var a = true
console.log("Datatype of " + a + " is :- " + typeof a)          // Datatype of true is :- boolean
a = false
console.log("Datatype of " + a + " is :- " + typeof a)          // Datatype of false is :- boolean





// 4) array/object

var a = ["HTML", 23, 23.45, true, {Name:"Tejas Joshi", Age:21}]
console.log("Datatype of [" + a + "] is :- " + typeof a)
// Datatype of [HTML,23,23.45,true,[object Object]] is :- object 





// 5) object

var a = {Name:"Tejas Joshi", Age:21}
console.log("Datatype of " + a + " is :- " + typeof a)
// Datatype of [object Object] is :- object 





// 6) null

var b = null
console.log("Datatype of " + b + " is :- " + typeof b) 
// Datatype of null is :- object





// 7) undefined

var z
console.log("Datatype of " + z + " is :- " + typeof z) 
// Datatype of undefined is :- undefined 

var k = undefined 
console.log("Datatype of " + k + " is :- " + typeof k)  
// Datatype of undefined is :- undefined 