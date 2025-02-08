
function Hello(Fname, Lname){
    console.log("Hello " + Fname + " " + Lname)
}
Hello("Tejas","Joshi")
// Hello Tejas Joshi



function Hello(Fname, Lname){
    console.log("Hello " + Fname + " " + Lname)
}
Hello("Tejas")
// Hello Tejas undefined



function Hello(Fname, Lname){
    console.log("Hello " + Fname + " " + Lname)
}
Hello()
// Hello undefined undefined 





// -----------------------------------------------------------------------------------------------------------



function Greet(Fname="Sachine", Lname="Tendulkar"){
    console.log("Good Morning " + Fname + " " + Lname)
}
Greet("Tejas", "Joshi")
// Good Morning Tejas Joshi


function Greet(Fname="Sachine", Lname="Tendulkar"){
    console.log("Good Morning " + Fname + " " + Lname)
}
Greet("Tejas")
// Good Morning Tejas undefined


function Greet(Fname="Sachine", Lname="Tendulkar"){
    console.log("Good Morning " + Fname + " " + Lname)
}
Greet()
// Good Morning undefined undefined