function a(){
    console.log(b); // JS firstly tries to find out b in the local scope of this function
    // Then it tries to find it in the global scope and since a() is called after assigning 10 to b, so it will print 10
    // If a was called before assigning 10 to b, then undefined would have been printed
    c();
    function c(){
        console.log(b); // Here also b can be accessed and assigned as 10
    }
    var x=20;
}
var b = 10;
a();
// console.log(x); // ----> x is not defined 

// Scope ---> where we can access a specific variable or function in our code

// Whenever an execution context is created, a lexical environment is also created
// Lexical environment is the local memory along with the lexical environment of its parent
// lexical --> means in hierarchy
// c is lexically inside a and a is lexically inside global scope
// lexical environment of global execution context's parent points to null

// While accessing b inside the function c, firstly js tries to find it in the lexical environment of c, not found, so it finds in the lexical environment of a, not found, then it searches in the lexical environment of global space, found. Had it not been here also, then it would have tried to find it in the lexical scope of the parent of global scope which is null, thus it would have returned that b is not defined

// This whole chain of lexical environment is called the scope chain