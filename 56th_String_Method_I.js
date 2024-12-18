// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// String Method - I

// 1)  length
// 2)  toLowerCase()
// 3)  toUpperCase()
// 4)  includes()
// 5)  startsWith()
// 6)  endsWith()
// 7)  search()
// 8)  match()
// 9)  indexOf()
// 10) lastIndex()
// 11) replace()

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1) length :- Return Length of String 

let str1 = `Javascript in Great Language`;
console.log(`Length of String is :- ${str1.length}`)
// Length of String is :- 28

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2) toLowerCase() :- Return Lower Case of String

let str2 = `Javascript in Great Language`;
console.log(`LowerCase of String is :- ${str2.toLowerCase()}`)
// LowerCase of String is :- javascript in great language

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3) toUpperCase() :- Return Upper Case of String

let str3 = `Javascript is Great Language`;
console.log(`UppseCase of String is :- ${str3.toUpperCase()}`)
// UppseCase of String is :- JAVASCRIPT IS GREAT LANGUAGE

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4) includes(`x`) :- Return boolean is 'x' present or not

let str4 = `Javascript is Great Language`;
console.log(`Is Great present in String :- ${str4.includes(`Great`)}`)   // Is Great present in String :- true 
console.log(`Is great present in String :- ${str4.includes(`great`)}`)   // Is great present in String :- false
console.log(`Is ipt present in String :- ${str4.includes(`ipt`)}`)       // Is ipt present in String :- true
console.log(`Is ipT present in String :- ${str4.includes(`ipT`)}`)       // Is ipT present in String :- false

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 5) startsWith(`x`) :- Return boolean is String startWith 'x' or not

let str5 = `Javascript is Great Language`;
console.log(`Is String startWith 'Jav' :- ${str5.startsWith(`Jav`)}`)   // Is String startWith 'Jav' :- true
console.log(`Is String startWith 'JAv' :- ${str5.startsWith(`JAv`)}`)   // Is String startWith 'JAv' :- false
console.log(`Is String startWith 'is' :- ${str5.startsWith(`is`)}`)     // Is String startWith 'is' :- false

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 6) endsWith(`x`) :- Return boolean is String endsWith 'x' or not

let str6 = `Javascript is Great Language`;
console.log(`Is String endsWith 'age' :- ${str5.endsWith(`age`)}`)     // Is String endsWith 'age' :- true
console.log(`Is String endsWith 'Age' :- ${str5.endsWith(`Age`)}`)     // Is String endsWith 'Age' :- false
console.log(`Is String endsWith 'lan' :- ${str5.endsWith(`lan`)}`)     // Is String endsWith 'lan' :- false

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 7) search(`x`) :- Return Starting Index of 'x' in String if not present return -1

let str7 = `Javascript is Great Language`;
console.log(`Index of 'lan' in String is  :- ${str5.search(`lan`)}`)     // Index of 'lan' in String is  :- -1
console.log(`Index of 'Lan' in String is  :- ${str5.search(`Lan`)}`)     // Index of 'Lan' in String is  :- 20
console.log(`Index of 'gr' in String is  :- ${str5.search(`gr`)}`)       // Index of 'gr' in String is  :- -1

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------