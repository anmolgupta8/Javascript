a();
// b();
// Function Statement OR Function Declaration
function a(){
    console.log('Hello Anmol');
}

// Function Expression
var b = function (){
    console.log("Hi");
}

// Major difference between these two is hoisting
// In case of a, function is stored in the memory but in case of b, it is initially undefined and function is assigned to it in line number 9 only and before that it will return error

// Anonymous Function
// A function without a name is called anonymous function 
// function(){} // This will be an error, it has to have a name
// We can write it like : 
var x = function(){

}

// Named function expression
// var y = function xyz(){

// }
// y() will work fine but xyz() will give error
// xyz() is created in the local scope
// We can use it like this : 
var y = function xyz(){
    console.log(xyz);
}
y();

// Parameters --> function xyz(param1, param2){} // param1, param2 are parameters
// Arguments --> xyz(1,2) // 1,2 are arguments

// First class functions or First class citizens
// We can pass functions as parameters, we can return a function from a function
// This ability to use functions as values is known as first class functions

// Arrow functions --> came in ES6 along with let and const