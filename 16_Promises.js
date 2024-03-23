const cart = ["shoes","pants","kurta"];
createOrder(cart,function(orderId){
    proceedToPayment(orderId);
});
// To solve the problem of inversion of control and callback hell, we use promises : 
const promise = createOrder(cart);
// promies is just an empty object like {data : undefined}, Whenever line 6 runs, js returns us a promise like this and the program will just go on executing as we are not sure how much time it will take
// After the createOrder function is completed, promise fills the data automatically i.e., orderId in this case

promise.then(function(orderId){
    proceedToPayment(orderId);
});

// Now when the data inside the promise is filled, it automatically calls this callback function
// Earlier we were passing the callback function to another function, now we are attaching a callback function to a promise object
// Whenever promise object is filled with javascript, it will 100% call our function and it will call it only once, so the problem of doubt that callback will be called or it will be called twice is removed.

const GITHUB_API = "https://api.github.com/users/Anmol081202";
const user = fetch(GITHUB_API); // Returns a promise
user.then(function(data){
    console.log(data);
});

// This data inside promises are immutable i.e., no one can change this data

// What is a promise?
// A promise is an object representing the eventual completion or failure of an asynchronous operation.

// How callback hell is dealed with promises?
// This is done by promise chaining

createOrder(cart)
    .then(function(orderId){
        return proceedToPayment(orderId); // We should return the promise when we are chaining the promises so that they execute one after the other properly
    })
    .then(function(paymentInfo){
        return showOrderSummary(paymentInfo);
    })
    .then(function(paymentInfo){
        return updateWallet(paymentInfo);
    });