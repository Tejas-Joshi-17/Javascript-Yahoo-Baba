// -----------------------------------------------------------------------------------------------------------


// 1) const Variable with Object :- We can update individually but not all at a time

const Obj_1 = {
    Name : "Tejas Joshi",
    Age : 21,
    CGPA : 9.16
}

// document.write(Obj_1)           // [object Object]
console.log(Obj_1)                 // { Name: 'Tejas Joshi', Age: 21, CGPA: 9.16 }
console.log(Obj_1.Name)            // Tejas Joshi
console.log(Obj_1.Age)             // 21
console.log(Obj_1.CGPA)            // 9.16

// Obj_1 = {                            <----- Error
//     Name : "Sachin Tendulkar",
//     Age : 46,
//     CGPA : 10
// }

Obj_1.Name = "Sachin Tendulkar"
Obj_1.Age = 46
Obj_1.CGPA = 10

console.log(Obj_1)                 // { Name: 'Sachin Tendulkar', Age: 21, CGPA: 10 }
console.log(Obj_1.Name)            // Sachin Tendulkar
console.log(Obj_1.Age)             // 46
console.log(Obj_1.CGPA)            // 10



// -----------------------------------------------------------------------------------------------------------



// 2) const Variable with Array :- We can update individually but not all at a time

const Array = [1, 2, 3, 4, 5]

console.log(Array)                      // [ 1, 2, 3, 4, 5 ]

// Array = [10, 20, 30, 40, 50]         <---- Error

Array[0] = 10
Array[1] = 20
Array[2] = 30
Array[3] = 40
Array[4] = 50

console.log(Array)                      // [ 10, 20, 30, 40, 50 ]

// -----------------------------------------------------------------------------------------------------------