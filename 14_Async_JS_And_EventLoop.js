// Call stack is inside the JS Engine and JS Engine is again inside the browser
// This browser has a local storage, it has a timer, it has a place to write url,etc along with JS Engine

// To access all this from the browser, we need web APIs
// setTimeout, DOM APIs, local storage, console, etc are a part of browser and not javascript
// All these can be used inside javascript Engine using "window"

console.log("Start");
setTimeout(function cb(){
    console.log("Hello");
},5000);
console.log("End");

// Now global execution context is made initially, then to run the command at line number 8, web APIs are used and console.log is executed
// Then in the call stack, setTimeout is called using the web APIs and after completion is removed from the call stack. In the mean time, the time of cb() is running and when it terminated, we need cb in the call stack but call stack is empty. Here comes the concept of event loops and callback queue

// When timer expires, this callback function is pushed inside the callback queue
// The job of event loop is to check if there are any functions in the callback queue and push them in the call stack whenever the call stack in empty

// Now why do we need callback queue, why can't event loop directly take the callback function from the browser
// Suppose, an event listener is used to print on console whenever a button is clicked. The user may continuously click the button multiple times, that's why we need a queue data structure so that the events can be executed properly

console.log("Start");
setTimeout(function cbT(){
    console.log("Timeout");
},5000);
fetch("https://api.netflix.com").then(function cbF(){
    console.log("Netflix");
});
console.log("End");

// Firstly Start js printed on the console, then cbT is stored in the web APIs environment and the timer of 5000 milliseconds starts running, in the meantime fetch starts running and cbF is also stored in the web APIs environment and is waiting for data to be returned from the netflix server

// Now let us say that netflix returned the data in 50 milliseconds so cbF should be pushed in the callback queue but it is not done !!
// There is another queue called microtask queue which has higher priority that callback queue
// All the callback functions which come from promises goes to the microtask queue
// So, cbF goes to the microtask queue
// Lets say there are multiple more statements in the global execution context code environment and in the meantime timer expires and cbT comes in the callback queue
// Now there is cbF in the microtask queue and cbT in the callback queue 
// Since microtask queue has higher priority, cbF will be pushed to the call stack by event loop when global execution context is finished and then when cbF is finished executing, cbT is pushed for execution

// There is a possibility of starvation of tasks in the callback queue