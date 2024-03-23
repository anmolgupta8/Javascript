// async function getData(){
//     return "Hello";
// }
// Async function always return a promise
// If we don't return a promise from this function, it will wrap whatever we return in a promise and then return that promise

// const p = new Promise((resolve,reject)=>{
//     resolve("Promise Resolved Value!!");
// });

// async function getData(){
//     return p;
// }

// const dataPromise = getData();
// console.log(dataPromise);
// dataPromise.then(function print(data){
//     console.log(data);
// });

const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved Value!!");    
    },10000);
});

// async and await together are used to handle promises

// Earlier how we used to resolve? --> In the below mentioned way : 

function getData(){
    // JS Engine will not wait for this promise to be resolve and will print Hello Anmol first
    p.then(function(data){
        console.log(data);
    });
    console.log("Hello Anmol");
}

// getData();

// Now how we will resolve :

async function handlePromise(){
    console.log("Hiii"); // This will be printed immediately
    // await function can only be used inside an async function
    const val = await p; // await is used in front of the promise that has to be resolved
    // Here the JS Engine waits for the promise to be resolved
    // This will only go to next line once the promise is resolved
    console.log("Hello!!");
    console.log(val);
}

// handlePromise();

async function handlePromise2(){
    const val = await p;
    console.log("Handle Promise 1");
    console.log(val);

    const val2 = await p;
    console.log("Handle Promise 2");
    console.log(val2);
}
// handlePromise2();

// Here both of the values are printed after 10seconds together

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved Value!!");    
    },5000);
});

async function handlePromise3(){
    const val = await p;
    console.log("Handle Promise 1");
    console.log(val);

    const val2 = await p2;
    console.log("Handle Promise 2");
    console.log(val2);
}

// handlePromise3();

// Here as well, both of the values are printed after 10 seconds together even though promise 2 is resolved after 5 seconds

// Now let us reverse the order of promises
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved Value!!");    
    },5000);
});
const p4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved Value!!");    
    },10000);
});

async function handlePromise4(){
    try{
        const val = await p3;
        console.log("Handle Promise 1");
        console.log(val);
    
        const val2 = await p4;
        console.log("Handle Promise 2");
        console.log(val2);
    }
    catch(err){ // Handling errors
        console.log(err);
    }
}
handlePromise4().catch(function(err){ // Either handle like above or like this, the old way. This works because handlePromise() always returns a promise and we can handle errors in promise like this
    console.log(err);
});

// Now handle promise 1 and val are printed after 5 seconds and handle promise 2 and val2 are printed after 10 seconds

// How does this work?
// Lets discuss handlePromise4()
// Intially the call stack is empty, when handlePromise4() is called, it comes in the call stack
// When the execution reaches line no 101, it sees the await and the method handlePromise4 is susoended for the time being and get out of the call stack. It will not block the main thread.
// After 5 seconds, it comes back and continues its execution from where it left
// After that when it goes to line no 105, it sees that it needs 10 seconds and only 5 seconds are completed as of now, so again it get out of the call stack until the promise is resolved.