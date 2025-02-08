// -----------------------------------------------------------------------------------------------------------
// Note :- "arguments" is available only in regular function not in Arrow Function.


function Total_Sum(){
    let Sum = 0;
    for(let i=0; i<arguments.length; i++){
        Sum += arguments[i]
    }

    console.log(arguments)                      // [Arguments] { '0': 10, '1': 20, '2': 30, '3': 40 }
    console.log(`Type of arguments is :- ${typeof arguments}`)      // Type of arguments is :- object
    console.log(`Sum is :- ${Sum}`)             // Sum is :- 100

    return Sum;
}


console.log(Total_Sum(10,20,30,40))             // 100
console.log(Total_Sum(10,20,30,40,50, 60))      // 210



// -----------------------------------------------------------------------------------------------------------



function Multiplication(First_Name, Last_Name, ...args){
    let Mul = 1;
    for(let i=0; i<args.length; i++){
        Mul *= args[i]
    }

    console.log("args is :- " + args)                           // args is :- 1,2,3,4,5
    console.log("Type of args is :- " + typeof args)            // Type of args is :- object
    
    console.log(`Good Morning ${First_Name} ${Last_Name}`)      // Good Morning Tejas Joshi
    return Mul;
}

console.log(`Multiplications is :- ${Multiplication("Tejas","Joshi",1,2,3,4,5)}`) 
// Multiplications is :- 120




// -----------------------------------------------------------------------------------------------------------