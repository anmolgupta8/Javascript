console.log(a); // Even here memory is allocated to a but it is not yet assigned as 7, so as of now js gives this placeholder a value of undefined
var a = 7;
// console.log(x); // This is a case of not defined because x is not defined in the memory at all 

// JS is a loosely type language i.e., it does not attaches its variables to any datatypes 
var b = 10;
console.log(b);
b = "Hello World";
console.log(b);
// Works fine as it is loosely typed
// loosely typed languages are also called weakly typed language but it does not mean they are weak

a = undefined; // Should not do this!!, runs fine but don't do this!! Let's keep undefined for the purpose it is made for