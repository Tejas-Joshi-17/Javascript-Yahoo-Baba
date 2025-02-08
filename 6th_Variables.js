// 1) var = Updatable & Re-initializable

var a = 1
console.log("The Value of a is :- " + a)        // The Value of a is :- 1

a = "Tejas Joshi"
console.log("The Value of a is :- " + a)        // The Value of a is :- Tejas Joshi

var a = 23.34
console.log("The Value of a is :- " + a)        // The Value of a is :- 23.34






// 2) let = Updatable & but NOT Re-initializable

let b = 2
console.log("The Value of b is :- " + b)        // The Value of b is :- 2

b = "Sachin Tendulkar"
console.log("The Value of b is :- " + b)        // The Value of b is :- Sachin Tendulkar

// let b = true                                  <------- Error







// 3) const = NOT Updatable & NOT Re-initializable

const c = 3
console.log("The Value of c is :- " + c)        // The Value of c is :- 3

// c = "Virat Kohli"                            <----- Error
// const c = {Name:"Tejas Joshi", Age:21}       <----- Error