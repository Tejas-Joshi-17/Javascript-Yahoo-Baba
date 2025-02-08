// -----------------------------------------------------------------------------------------------------------



function Sum(First_Name, Last_Name, ...args){
    let Sum = 0;
    for(let i=0; i<args.length; i++){
        Sum += args[i];
    }

    console.log("args is :- " + args)                       // args is :- 1,2,3,4,5
    console.log(`Hello ${First_Name} ${Last_Name}`)         // Hello Tejas Joshi

    return Sum;
}

let arr_1 = [1,2,3,4,5]
console.log("Total Sum :- " + Sum("Tejas","Joshi", arr_1))      // Total Sum :- 01,2,3,4,5



// -----------------------------------------------------------------------------------------------------------



function Sum(First_Name, Last_Name, ...args){
    let Sum = 0;
    for(let i=0; i<args.length; i++){
        Sum += args[i];
    }

    console.log("args is :- " + args)                       // args is :- 1,2,3,4,5
    console.log(`Hello ${First_Name} ${Last_Name}`)         // Hello Tejas Joshi

    return Sum;
}

let arr_2 = [1,2,3,4,5]
console.log("Total Sum :- " + Sum("Tejas","Joshi", ...arr_2))      // Total Sum :- 15



// -----------------------------------------------------------------------------------------------------------



let arr = [1, "Tejas Joshi", true, 20, 4.34, false]

console.log(arr)           // [ 1, 'Tejas Joshi', true, 20, 4.34, false ]
console.log(...arr)        // 1 Tejas Joshi true 20 4.34 false
console.log([...arr])      // [ 1, 'Tejas Joshi', true, 20, 4.34, false ]



// -----------------------------------------------------------------------------------------------------------



let arr_3 = [10,20,30,40]

let arr_4 = arr_3
let arr_5 = [...arr_3]
arr_3.push(100) 

console.log(`arr_3 is :- ${arr_3}`)                 // arr_3 is :- 10,20,30,40,100
console.log(`arr_4 is :- ${arr_4}`)                 // arr_4 is :- 10,20,30,40,100
console.log(`arr_5 is :- ${arr_5}`)                 // arr_5 is :- 10,20,30,40



// -----------------------------------------------------------------------------------------------------------



let arr_6 = [1,3,5,7]
let arr_7 = [100,200,300,400]

let arr_8 = [...arr_6, ...arr_7]
console.log(`arr_8 is :- ${arr_8}`)                 // arr_8 is :- 1,3,5,7,100,200,300,400

let arr_9 = ["Tejas", "Joshi", ...arr_7, ...arr_6, true]
console.log(`arr_9 is :- ${arr_9}`)                 // arr_9 is :- Tejas,Joshi,100,200,300,400,1,3,5,7,true



// -----------------------------------------------------------------------------------------------------------



let Obj_1 = {
    Name : "Tejas Joshi",
    Course : "B.Tech"
}

let Obj_2 = {
    CGPA : 9.16
}

let Obj_3 = {...Obj_1, ...Obj_2}
console.log(Obj_3)
// { Name: 'Tejas Joshi', Course: 'B.Tech', CGPA: 9.16 }



// -----------------------------------------------------------------------------------------------------------