// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();
// This is closure !!

// Function along with its lexical scope is called closure
// A closure is the combination of a function bundeled together with its lexical environment

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }

// var z = x();
// console.log(z);

// After x() is called, it is removed from the call stack and also y will not be there, then what will happen if we call z()
// z();
// Here z() tries to find the value of a but it is not there but still 7 is printed
// Here comes the role of closures. When a function is returned, it stores its lexical scope
// So when we returned y, the closure of y is returned i.e., y along with its lexical scope is returned

// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }

// var z = x();
// z();
// Now 100 will be printed as function y is not storing the value 7 instead it is storing the reference to the variable a 

function z(){
    var b = 900;
    function x(){
        var a = 7;
        function y(){
            console.log(a,b);
        }
        a = 100;
        return y();
    }
    x();
}

z();

// Will it still be a called a closure?
// Yes, 100 900 is printed and the values a and b will not be garbage collected and their values will be preserved 

// One of the use of closures is in setTimeouts

// Disadvantage of closures : Can lead to storage of lots of memory as garbage collection of those variables is not done till the program terminates