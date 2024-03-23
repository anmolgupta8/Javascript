const cart = ["shoes","pants","kurta"];
api.createOrder(); // orderId
api.proceedToPayment(orderId);
// proceedToPayment needs the output of proceedPayment, they are dependent on each other
// This was handled using callback functions in the following way : 
api.createOrder(cart,function(orderId){
    api.proceedToPayment(orderId,function(){
        api.showOrderSummary(function(){
            api.updateWallet();
        });
    });
});
// This type of code is unreadable and unmaintainable and this is called callback hell!!
// Now we will study the most important inversion of control
// Consider the follwoing : 
api.createOrder(cart,function(orderId){
    api.proceedToPayment(orderId);
});

// We are trusting so much on createOrder api that it will call an important function proceedToPayment, but what if createOrder function doesn't work properly or is called twice etc.
// This is called inversion of control