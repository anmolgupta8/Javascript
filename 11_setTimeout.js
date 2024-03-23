// function x(){
//     var i=1;
//     setTimeout(function(){
//         console.log(i);
//     },2000);
//     console.log('Hello Anmol');
// }
// x();

// Hello Anmol will immediately be printed but i will be printed after 2 seconds
// It will not wait for i to print and then print Hello Anmol 
// function (){
//     console.log(i);
// }
// This function forms the closure and takes the reference of i with it

// function x(){
//     for(var i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
// }
// x();

// What do we expect? --> It will print 1 2 3 4 5 ? No!!
// It will print 6 6 6 6 6 each after one second gap

// Here closures is working in setTimeout. i's reference is stored and when needed we can use it
// Firstly setTimeout(function(){ console.log(i); } function call is stored for one second and other parts of the function x continue running. In the mean time, the for loop will continue its execution before one second and i is incremented to 6
// Now when its time to call the function setTimeout, it is pointing to the reference of i and now i is 6 so for every second, 6 is printed

// We can use let instead of var to correct this
// We know that let has a block scope and every time for loop runs, a new copy of i is created and stored accordingly with the function setTimeout

// function x(){
//     for(let i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
// }
// x();

// Now if we want to print it using var only and not let, then what we can do?

function x(){
    function close(j){
        setTimeout(function(){
            console.log(j);
        },j*1000);
    }
    for(var i=1;i<=5;i++){
        close(i);
        // Now everytime a new copy of i is created
    }
}
x();
// So it will print 1 2 3 4 5 after every second