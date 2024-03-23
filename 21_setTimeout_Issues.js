// setTimeout does not always work exactly at the time you give

console.log("Start");
setTimeout(function(){
    console.log("Callback");
},5000);
console.log("End");

// Suppose there is millions of line of code that needs to be run after this.
// First of all global execution context is pushed into the call stack. The callback function of the setTimeout is stored in the web APIs and suppose those millions of lines take 10 seconds to execute. Now after 5 seconds, the callback function is pushed into the callback queue and event loop keeps on checking if the call stack is empty or not but the global execution context is not popped until all those millions of lines complete their execution. So, the callback function of the setTimeout function will be executed after 10 seconds instead of 5 seconds. This is called concurrency model.

// Now lets try to block the main thread by 10 seconds
let startDate = new Date().getTime(); // This will give the current time in milliseconds
let endDate = startDate;
while(endDate<startDate+10000){
    endDate = new Date().getTime();
}

console.log("While expires");

// Start will be printed, then end will be printed and after 10 seconds, while expires and callback will be printed

console.log("Starting...");
setTimeout(function(){
    console.log("Callback2");
},0);
console.log("Ending...");

// Even though the time is 0 in the setTimeout but the callback function has to go to the web APIs first, then into the callback queue and then back to the call stack. So the order of execution will be Starting... Ending... Callback2