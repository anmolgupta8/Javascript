var x=1;
a();
b();
console.log(x);

function a(){
    var x=10;
    console.log(x);
}

function b(){
    var x=100;
    console.log(x);
}

// Execution Context is made and pushed to the call stack
// Memory : 
// x : undefined
// a : {...} Complete function
// b : {...} Complete function

// Code Execution : 
// x=1

// Again execution context is created for a() and pushed to the call stack
// Memory : 
// x=undefined  Note that this x will not be the same as previous x
// Code execution : 
// x=10
// js searches x in the local space and prints it => 10 is printed

// Now whole execution context is deleted and popped out of the call stack

// Now control moves to line number 3
// New execution context is created and pushed to the call stack
// Memory : 
// x=undefined
// Code execution : 
// x=100
// js searches x in the local space and prints it => 100 is printed

// Now control goes to line 4
// Now x is searched in the local memory and x=1 is found => x=1 is printed on the console 

// Now whole global execution context is also removed from the call stack