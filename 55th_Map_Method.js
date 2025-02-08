// -----------------------------------------------------------------------------------------------------------

let Array_1 = [1, 2, 3, 4, 5]

console.log(`Original Array :-  ${Array_1}`)        // Original Array :-  1,2,3,4,5

let Array_2 = Array_1.map(Multiplier)

function Multiplier(x){
    return  x*10
}

console.log(`New Array :- ${Array_2}`)              // New Array :- 10,20,30,40,50


// -----------------------------------------------------------------------------------------------------------


let Obj_1 = [
    {Name : "Tejas", Age : 21},
    {Name : "Sachin", Age : 46},
    {Name : "Virat", Age : 35},
]

console.log(Obj_1)
// [
    //     { Name: 'Tejas', Age: 21 }, 
    //     { Name: 'Sachin', Age: 46 },
    //     { Name: 'Virat', Age: 35 }  
    // ]
    
let Name = Obj_1.map(Name_Recovering)

function Name_Recovering(x){
    return x.Name + " -> " + x.Age
}

console.log(Name)           // [ 'Tejas -> 21', 'Sachin -> 46', 'Virat -> 35' ]
    

// -----------------------------------------------------------------------------------------------------------