let Array = [
    {Name: "Tejas Joshi", Century : 110},
    {Name: "Virat Kohli", Century : 103},
    {Name: "Sachin Tendulkar", Century : 100},
]

document.write(Array)               // [object Object],[object Object],[object Object]

console.log(Array)
// [
//     { Name: 'Tejas Joshi', Century: 110 },    
//     { Name: 'Virat Kohli', Century: 103 },    
//     { Name: 'Sachin Tendulkar', Century: 100 }
// ]

console.log(Array[0])               // { Name: 'Tejas Joshi', Century: 110 }
console.log(Array[1])               // { Name: 'Virat Kohli', Century: 103 }
console.log(Array[2])               // { Name: 'Sachin Tendulkar', Century: 100 }

console.log(Array[0].Name)          // Tejas Joshi
console.log(Array[0].Century)       // 110

console.log(Array[1].Name)          // Virat Kohli
console.log(Array[1].Century)       // 103

console.log(Array[2].Name)          // Sachin Tendulkar
console.log(Array[2].Century)       // 100



