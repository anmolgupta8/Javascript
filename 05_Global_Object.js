// Whenever execution context is created, 'this' is created
// In global execution context, 'this' points to the global object which is windows in case of browsers
// => this === windows for global execution context 

// Global Space -> Anything not inside the function is in global space

// Whenever we create any variable or function in the global space, it gets attached to the window

var a = 10;
console.log(window.a); // This would work on browsers not here because windows is the global object of browsers. By default if we write console.log(a), then it would also run as window.a as a is added to the window object because a is in the global space.
console.log(this.a); // Again in browser, this points to the window object, so this.a will also print 10