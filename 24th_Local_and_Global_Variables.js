

var a = 10

function Hello(){
    var b = 20

    console.log("Value of Global Variables :- " + a)
    console.log("Value of Local Variables :- " + b)
}

Hello()
console.log("Value of Global Variables :- " + a)
// console.log("Value of Local Variables :- " + b)          <----- Error

// Value of Global Variables :- 10
// Value of Local Variables :- 20 
// Value of Global Variables :- 10