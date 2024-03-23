// JS can be run anywhere and that is possible due to javascript runtime environment
// JRE containes JS Engine, event loops, callback queue, microtask queue, APIs etc. JS Engine is the heart of this JRE
// Browsers, nodejs, etc all these have JRE
// Different places can have different implementation of APIs like there can be some APIs in browser which are not in nodejs and vice-versa or maybe let's say setTimeout is present in both browser and nodejs but its implementation is different in both browser and nodejs
// Google Chrome, Nodejs has their JS Engine V8(its code is written in c++), Firefox has Spider Monkey and many different environments have different JS Engines
// JS Engine take the code we provide and passes through three steps : 
// 1) Parsing 2) Compilation 3) Execution

// Parsing 
// Here everything is broken into tokens, then syntax parser converts it into an AST (Abstract Syntax Tree) 

// Compilation
// Javascript can behave as both interpreter as well as compilation language based on the JS Engine it is using 
// JIT --> Just in time, it uses both interpreter and compiler to run the code 
// Interpreter -> It runs line by line, checks for errors at each step. If there are any errors, it stops execution of program
// It converts the code into byte code and then it comes into the execution pahse 

// Execution
// This execution is done with memory heap and call stack

// We also have garbage collector inside the JS Engine which free up space from the memory heap whenever necessary. Mark And Sweep algorithm is used for garbage collection