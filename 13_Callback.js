// What is callback function
// Javascript is a synchronous single threaded language i.e., it can do one thing at a time and in a synchronous manner. Due to callbacks, we can do async things in javascript

setTimeout(function(){
    console.log("Timer");
},5000)

function x(y){
    console.log('x');
    y();
}
x(function y(){
    console.log('y');
})
// This y is the callback function since it is the responsibility of some other function (x in this case) to call this y function
// First x then y and after 5 seconds Timer is printed

// The call stacks is basically the main thread in javascript that is running onw program at a time
// If any operation blocks this call stack, that is known as blocking the main thread
// If any operation takes lots of time, then that is blocking the main thread
// That's why we use async for such operations