// ----------------------------------------------------------------------------------------------------------------------------

let Target = document.getElementsByTagName("div")[0]

console.log(Target.hasAttribute("id"))              // true
console.log(Target.hasAttribute("style"))           // false
console.log(Target.hasAttribute("class"))           // true

// ----------------------------------------------------------------------------------------------------------------------------

let Parent_1 = document.getElementsByClassName("parent-1")[0]
console.log(Parent_1.hasChildNodes())               // true

let Parent_2 = document.getElementsByClassName("parent-2")[0]
console.log(Parent_2.hasChildNodes())               // false

// ----------------------------------------------------------------------------------------------------------------------------