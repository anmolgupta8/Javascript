var n = 2;
function square(num){
    var ans = num*num;
    return ans;
}
var square2 = square(n);
var square4 = square(4);

// Memory Creating Phase Of Execution Context
// Line    Memory
// 1       n : undefined
// 2       square : {Whole function code is stored}
// 6       square2 : undefined
// 7       square4 : undefined

// Code execution phase 
// Line 1 : n=2
// Line 6 : A new execution context inside this global context is made for the function call

// Memory
// num : undefined
// ans : undefined

// Code Eexeecution
// num : 2
// ans : 4

// Now back to global execution context and the above execution context is deleted now
// Line 6 : square2 = 4
// Line 7 : A new execution context is created

// Memory
// num : undefined
// ans : undefined

// Code Eexeecution
// num : 4
// ans : 16

// Now back to global execution context and the above execution context is deleted
// Line 7 : square4 = 16

// Now whole execution context is deleted


// To do all this a call stack is maintained
// Call stack maintains the order of execution of execution contexts

// Call stack is also known as : Execution Context Stack, Program Stack, Control Stack, Runtime Stack, Machine Stack