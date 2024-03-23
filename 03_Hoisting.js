console.log(x);
getName();
console.log(getName);

var x = 7;
function getName(){
    console.log("Namaste Javascript");
}

// Output : 
// undefined
// Namaste Javascript
// f getName(){
//     console.log("Namaste Javascript");
// }

// This is called hoisting in JS
// This is happening because of execution context.

console.log(x);
console.log(getName2);
console.log(getName3);

var x = 7;
var getName2 = function(){
    console.log("Hellooo");
}
var getName3 = ()=>{
    console.log("Namaste Javascript");
}

// Here these functions are treated as variable and in the memory phase, they are given the value undefined like variables