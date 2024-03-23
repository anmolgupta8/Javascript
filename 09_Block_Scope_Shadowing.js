{
    var a = 10;
    console.log(a); 
} // This is a block
// Block is also known as compound statement
// Block combines multiple js statements into groups
// We group multiple statements in a group so that we can use it where js expects one statement 

if(true) // expects a single statement here 
{
    // This block acts as that single statement
}
// What is block scope? => Whatever variable and functions we can access inside the block

// Here we can see that x will be hoisted in the global space and is initialised as undefined whereas y and z are hoisted in a separate space named block and are initialised with undefined
{
    var x = 10;
    let y = 20;
    const z = 30;
}
console.log(x); // x=10 will be printed
// y and z will not be accessible outside the block, so we say that let and const are always in block scope

var p = 100;
{
    var p = 10; // This p shadowed the above p and changed its value
    console.log(p); // 10 is printed
}
console.log(p); // 10 is printed

let q = 100; // This q is hoisted inside a separate memory location called script. Let it be q1
{
    let q = 10; // This q is hoisted in the block scope. Let it be q2
    // This q2 is shadowing the value of q1 here
    console.log(q); // prints 10
}
console.log(q); // prints 100
// q2 will be removed from the memory once the block finishes and only q1 will be accessible here 

// Similar thing with const as that of let

// Illeagal Shadowing
let r = 10;
{
    // var r = 10; // Syntax Error : Identifier 'r' has already been declared
}

let h = 10;
function func2(){
    var h = 10; // This works fine as scope of h is upto funct2 only here
}

var g = 2;
{
    let g = 3; // This is possible
    console.log(g);
}
console.log(g);

// blocks also follow lexical scopes => lexical block scope

// Scopes work same with simple functions and arrow functions