
Obj_1 = {
    Fname : "Tejas",
    Lname : "Joshi",
    Age : 21,
    CGPA : 9.16,
    Favourite_Subject : ["C++", "Javascript", "Java"],
    Favourite_Player : function(){
        return "Sachin Tendulkar"
    },
    Full_Name : function(){
        return this.Fname + " " + this.Lname
    },
    Obj_2 : {
        Name : "Virat Kohli",
        Century : 103
    }
}


document.write(Obj_1)       // [object object]

console.log(Obj_1)
// {
//     Fname: 'Tejas',
//     Lname: 'Joshi',
//     Age: 21,
//     CGPA: 9.16,
//     Favourite_Subject: [ 'C++', 'Javascript', 'Java' ],
//     Favourite_Player: [Function: Favourite_Player],    
//     Full_Name: [Function: Full_Name],
//     Obj_2: { Name: 'Virat Kohli', Century: 103 }       
// }

console.log(Obj_1.Fname)                        // Tejas
console.log(Obj_1.Lname)                        // Joshi
console.log(Obj_1.Age)                          // 21
console.log(Obj_1.CGPA)                         // 9.16
console.log(Obj_1.Favourite_Subject)            // [ 'C++', 'Javascript', 'Java' ]

Favourite_Player = Obj_1.Favourite_Player()
console.log(Favourite_Player)                   // Sachin Tendulkar

Full_Name = Obj_1.Full_Name()
console.log(Full_Name)                          // Tejas Joshi

console.log(Obj_1.Obj_2)                        // { Name: 'Virat Kohli', Century: 103 }
console.log(Obj_1.Obj_2.Name)                   // Virat Kohli
console.log(Obj_1.Obj_2.Century)                // 103