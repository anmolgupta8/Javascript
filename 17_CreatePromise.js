const cart = ["shoes","pants","kurta"];
const promise = createOrder(cart); // orderId
// promise.then(function(orderId){
//     proceedToPayment(orderId);
// });
// Now let us create our own promise

function createOrder(cart){
    const pr = new Promise(function(resolve,reject){ // resolve and reject are given by js
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err); // The promise is rejected
        }
        const orderId = "12345";
        if(orderId){
            resolve(orderId);
        }
    });
    return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment successful");
    })
}

promise.then(function(orderId){ // This will be called if we resolve the promise
    console.log(orderId);
    return orderId;
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
    return paymentInfo;
})
.catch(function(err){ // This will be called if we reject the promise
    console.log(err.message);
})
// This catch will handle all the error in the promise chain i.e., it will handle all the promises above this