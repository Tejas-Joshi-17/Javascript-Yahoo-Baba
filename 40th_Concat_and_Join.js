// ---------------------------------------------------------------------------------------------------------------


// 7) concat( )     :-  Used to Concat Arrays


let Arr_1 = ['Apple', 'Ball', 'Cat', 'Dog']
let Arr_2 = Arr_1.concat('Rahul', 'Karan')
console.log(`Arr_2 is :- ${Arr_2}`)
// Arr_2 is :- Apple Ball Cat Dog Rahul Karan


let Arr_3 = ['Apple', 'Ball', 'Cat', 'Dog']
let Arr_4 = ['India', 'USA']
let Arr_5 = Arr_3.concat(Arr_4)
let Arr_6 = Arr_4.concat(Arr_3)
console.log(`Arr_5 is :- ${Arr_5}`)
console.log(`Arr_6 is :- ${Arr_6}`)
// Arr_5 is :- Apple Ball Cat Dog India USA
// Arr_6 is :- India USA Apple Ball Cat Dog 



let Arr_7 = ['Apple', 'Ball', 'Cat', 'Dog']
let Arr_8 = ['Tejas', 'Joshi']
let Arr_9 = ['India', 'USA']
let Arr_10 = Arr_7.concat(Arr_8, Arr_9)
let Arr_11 = Arr_7.concat(Arr_9, Arr_8)
console.log(`Arr_10 is :- ${Arr_10}`)
console.log(`Arr_11 is :- ${Arr_11}`)
// Arr_10 is :- Apple Ball Cat Dog India USA Tejas Joshi
// Arr_11 is :- India USA Apple Ball Tejas Joshi Cat Dog 


// ---------------------------------------------------------------------------------------------------------------


// 8) join( )         :-  Used to add separator between elements of an array


let Arr_12 = ['Apple', 'Ball', 'Cat', 'Dog']
console.log(Arr_12)        // Apple, Ball, Cat, Dog

let Arr_13 = Arr_12.join(" ")
console.log(Arr_13)        // Apple Ball Cat Dog

let Arr_14 = Arr_12.join("  ")
console.log(Arr_14)        // Apple  Ball  Cat  Dog

let Arr_15 = Arr_12.join(" - ")
console.log(Arr_15)        // Apple - Ball - Cat - Dog

let Arr_16 = Arr_12.join(" * ")
console.log(Arr_16)        // Apple * Ball * Cat * Dog

let Arr_17 = Arr_12.join(" @ ")
console.log(Arr_17)        // Apple @ Ball @ Cat @ Dog

let Arr_18 = Arr_12.join(" $ ")
console.log(Arr_18)        // Apple $ Ball $ Cat $ Dog



// ---------------------------------------------------------------------------------------------------------------