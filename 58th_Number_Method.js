// Number Method 

// 1)  Number()
// 2)  parseInt()
// 3)  parseFloat()
// 4)  isFinite()
// 5)  isInteger()
// 6)  toFixed()
// 7)  toPrecision()

let marks  = "100.25";

// 1) Number()
console.log(typeof marks);            // Output: string
console.log(typeof Number(marks));    // Output: number

marks = Number(marks);                // Output: 100.25

// 2) parseInt()
marks = "100.25";
console.log(marks.parseInt());         // Output: 100

// 3) parseFloat()
marks = "100.25";
console.log(marks.parseFloat());       // Output: 100.25

// 4) isFinite()
marks = 100;
console.log(marks.isFinite());         // Output: true
 
marks = Infinity;
console.log(marks.isFinite());         // Output: false

// 5) isInteger()
marks = 100;
console.log(marks.isInteger());         // Output: true

marks = 100.25;
console.log(marks.isInteger());         // Output: false

// 6) toFixed()
marks = 100.25789;
console.log(marks.toFixed(2));          // Output: 100.26

// 7) toPrecision()
marks = 100.25789;
console.log(marks.toPrecision(4));      // Output: 100.3