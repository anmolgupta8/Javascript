// In 2015, in ES6, js introduced let and const


// console.log(a); // Reference Error : Cannot access 'a' before initialization
let a = 10;
console.log(a);
var b = 100;

// Hoisting is done in case of let and const as well, they are also allocated memory like var and are allocated the value undefined BUT in case of var, it is stored in the global object whereas in case of let and const, it is stored in a separate memory space which is not accessible to us untill they are initialised with something 

// Temporal dead zone is the time since this let variable is hoisted untill it is initialised to some value

// We cannot access the let and const variables using window.a or this.a in the global scope because they are not attached to global object like var 

console.log('Hello');
// let x = 10;
// let x = 12;

// In this case js doesn't even run a single line of code and returns the error : Identifier 'x' has already been declared, this is a syntax error
// Even Hello will not be printed

var x = 10;
var x = 100;
console.log(x);
// This would run fine!!

// const behaves similar to let but it is even more strict than let
// const z;
// z=10;
// Syntax Error : Missing initializer in const declaration
// This is not possible in const but is possible in let
let m;
m=20;

// const n = 10;
// n = 100;
// TypeError: Assignment to constant variable

// Preference Order Of Usage --> const>let>var

// How to avoid temporal dead zone : Give all initializations on the top of the code