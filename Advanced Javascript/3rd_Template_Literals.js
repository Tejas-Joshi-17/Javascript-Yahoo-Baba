// -----------------------------------------------------------------------------------------------------------

let Name = "Tejas Joshi"
let Age = 21

console.log("Hi My Name is " + Name + " & Age is " + Age)
// Hi My Name is Tejas Joshi & Age is 21

console.log(`Hi My Name is ${Name} & Age is ${Age}`)
// Hi My Name is Tejas Joshi & Age is 21



// -----------------------------------------------------------------------------------------------------------



let Details = `Hi My Name is ${Name} & Age is ${Age}`
console.log(Details)
// Hi My Name is Tejas Joshi & Age is 21



// -----------------------------------------------------------------------------------------------------------



let Fname = "Tejas"
let Lname = "Joshi"
let Current_Age = 21

function Full_Details(F_name, L_name, Current___Age){
    return `Hello My FullName is :- "${F_name} ${L_name}" & My Age is :- '${Current___Age}' `
}

let A = Full_Details(Fname, Lname, Current_Age)
console.log(A)          // Hello My FullName is :- "Tejas Joshi" & My Age is :- '21'

let B = Full_Details(`Sachin`, `Tendulkar`, 45)
console.log(B)          // Hello My FullName is :- "Sachin Tendulkar" & My Age is :- '45'



// -----------------------------------------------------------------------------------------------------------


/*
let Fullname = "Hello,                                  <----- Error
                    My Name is Tejas Joshi,
                    Age is :- 21
                "
*/

let FullnamE = `Hello,                                  
                    My Name is Tejas Joshi,
                    Age is :- 21
                Thanks`
console.log(FullnamE)
// Hello,
//                     My Name is Tejas Joshi,
//                     Age is :- 21
//                 Thanks



// -----------------------------------------------------------------------------------------------------------