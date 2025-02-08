// ---------------------------- Modify Array Element -----------------------------------------


let Arr_1 = [10, 20, 30, 40, 50]

document.write(`Array Before Modification :- ${Arr_1}`)

// Modification
Arr_1[2] = "Tejas Joshi"
Arr_1[3] = true

document.write(`Array After Modification :- ${Arr_1}`)

// Array Before Modification :- 10, 20, 30, 40, 50
// Array After Modification :- 10, 20, Tejas Joshi, true, 50


// ---------------------------- Delete Array Element -----------------------------------------


let Arr_2 = [10, 20, 30, 40, 50]

document.write(`Array Before Deletion :- ${Arr_1}`)

// Deletion
delete Arr_2[2]
delete Arr_2[3]

document.write(`Array After Deletion :- ${Arr_1}`)

// Array Before Deletion :- 10, 20, 30, 40, 50
// Array After Deletion :- 10, 20, ., ., 50


// ---------------------------------------------------------------------------------------------