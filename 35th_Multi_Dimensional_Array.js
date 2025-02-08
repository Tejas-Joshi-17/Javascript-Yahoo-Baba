// ---------------------------- Multi-Dimensional Array ---------------------------------------


let Arr_1 = [
    ["Harry", 18, "Male", "B.Com"],
    ["Sunny", 19, "Male", "BCA"],
    ["Sarah", 18, "Female", "BCA"],
    ["Tom", 17, "Male", "BA"]
]

for(let i=0; i<Arr_1.length; i++){
    for(let j=0; j<Arr_1[i].length; j++){
        document.write(`${Arr_1[i][j]} `)
    }
    document.write(`<br>`)
}

// Harry 18 Male B.Com
// Sunny 19 Male BCA
// Sarah 18 Female BCA
// Tom 17 Male B.A


//----------------------------------------------------------------------------------------------


let Arr_2 = [
    ["Harry", 18, "Male", "B.Com"],
    ["Sunny", 19, "Male", "BCA"],
    ["Sarah", 18, "Female", "BCA"],
    ["Tom", 17, "Male", "BA"]
]

document.write(`<table border="1px" cellspacing="0">`)
for(let i=0; i<Arr_2.length; i++){
    document.write(`<tr>`)
    for(let j=0; j<Arr_2[i].length; j++){
        document.write(`<td> ${Arr_2[i][j]} </td>`)
    }
    document.write(`</tr>`)
}
document.write(`</table>`)

// Harry 18 Male B.Com
// Sunny 19 Male BCA
// Sarah 18 Female BCA
// Tom 17 Male B.A


//----------------------------------------------------------------------------------------------


let Arr_3 = [
    ["Harry", 18, "Male", "B.Com", "India"],
    ["Sunny", 19, "Male", "BCA"],
    ["Sarah", 18, "Female", "BCA", "Japan", "China"],
    ["Tom", 17, "Male", "BA"]
]

document.write(`<table border="1px" cellspacing="0">`)
for(let i=0; i<Arr_3.length; i++){
    document.write(`<tr>`)
    for(let j=0; j<Arr_3[i].length; j++){
        document.write(`<td> ${Arr_3[i][j]} </td>`)
    }
    document.write(`</tr>`)
}
document.write(`</table>`)

// Harry 18 Male B.Com India
// Sunny 19 Male BCA
// Sarah 18 Female BCA Japan China
// Tom 17 Male B.A


//----------------------------------------------------------------------------------------------


let Arr_4 = [
    ["Harry", 18, "Male", "B.Com", "India", "N.Korea"],
    ["Sunny", 19, "Male", "BCA", "England", "USA"],
    ["Sarah", 18, "Female", "BCA", "Japan", "China"],
    ["Tom", 17, "Male", "BA", "Russia", "Brazil"],
    ["Tom", 17, "Male", "BA", "Russia", "Brazil"],
    ["Tom", 17, "Male", "BA", "Russia", "Brazil"]
]

document.write(`<table border="1px" cellspacing="0">`)
for(let i=0; i<Arr_4.length; i++){
    document.write(`<tr>`)
    for(let j=0; j<Arr_4[i].length; j++){
        document.write(`<td> ${Arr_4[i][j]} </td>`)
    }
    document.write(`</tr>`)
}
document.write(`</table>`)

// Harry 18 Male B.Com India N.Korea
// Sunny 19 Male BCA England USA
// Sarah 18 Female BCA Japan China
// Tom 17 Male B.A Russia Brazil
// Tom 17 Male B.A Russia Brazil
// Tom 17 Male B.A Russia Brazil


//----------------------------------------------------------------------------------------------