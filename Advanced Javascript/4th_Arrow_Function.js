// -----------------------------------------------------------------------------------------------------------


let Apple = () => {
    console.log("I Eat Apple Everyday !!!")
}

let Banana = () => console.log("I Eat Banana Everyday !!!")

Apple()     // I Eat Apple Everyday !!!
Banana()    // I Eat Banana Everyday !!!



// -----------------------------------------------------------------------------------------------------------



let Saying_Name = (Name) => {
    console.log(`Hi My Name is :- ${Name}`)
}

let Saying_Age = Age => console.log(`Hi My Age is :- ${Age}`)

Saying_Name(`Tejas Joshi`)        // Hi My Name is :- Tejas Joshi
Saying_Age(21)                    // Hi My Age is :- 21



// -----------------------------------------------------------------------------------------------------------



let Fname = `Tejas`
let Lname = `Joshi`
let Age = 21

let Details = (First_Name, Last_Name, Current_Age) => {
    return `Hello ${First_Name} ${Last_Name}, Your 
                Your Current Age is :- ${Current_Age}`
}

let My_Details = Details(Fname, Lname, Age)
console.log(My_Details)
// Hello Tejas Joshi, Your
//                 Your Current Age is :- 21



// -----------------------------------------------------------------------------------------------------------