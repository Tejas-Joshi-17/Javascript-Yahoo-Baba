// -----------------------------------------------------------------------------------------------------------

if(1==1){
    var a = 10
    console.log(`Value of Inner a is :- ${a}`) 
}
console.log(`Value of Outer a is :- ${a}`) 

// Value of Inner a is :- 10
// Value of Outer a is :- 10



for(var x=1; x<4; x++){
    console.log(`The Value of x is :- ${x}`)
}
// The Value of x is :- 1
// The Value of x is :- 2
// The Value of x is :- 3

console.log(`Value of x Outside is :- ${x}`)
// Value of x Outside is :- 4



// -----------------------------------------------------------------------------------------------------------



if(2==2){
    let b = 101
    console.log(`The Value of Inner b is :- ${b}`)
}
console.log(`The Value of Outer b is :- ${b}`)          // <----- Error (Block Scope)

// The Value of Inner b is :- 101




for(let y=1; y<4; y++){
    console.log(`The Value of y is :- ${y}`)
}
// The Value of y is :- 1
// The Value of y is :- 2
// The Value of y is :- 3

console.log(`Value of y Outside is :- ${y}`)            // <----- Error (Block Scope)



// -----------------------------------------------------------------------------------------------------------



if(2==2){
    const c = 110
    console.log(`The Value of Inner c is :- ${c}`)
}
console.log(`The Value of Outer c is :- ${c}`)           // <----- Error (Block Scope) 

// The Value of Inner c is :- 110



for(const z=1; z<4; z++){                               // <----- Error(Incrementation of const variable)
    console.log(`The Value of z is :- ${z}`)
}
// The Value of z is :- 1

console.log(`Value of z Outside is :- ${z}`)            // <----- Error (Block Scope)



// -----------------------------------------------------------------------------------------------------------