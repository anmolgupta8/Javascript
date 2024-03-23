// AJAX --> Asynchronous Javascript and XML 
// AJAX helps in fetching data asynchronously without interfering with the existing page. No page reload/refresh is required
// Modern websites use JSON instead of XML for data transfer
// AJAX uses XMLHttpRequest (xhr) object to achieve this

let fetchbtn = document.getElementById("fetchbtn");
fetchbtn.addEventListener("click",buttonClickHandler);

function buttonClickHandler(){
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open("GET",'https://jsonplaceholder.typicode.com/todos/1',true); // 3rd argument is true if we want asynchronous operation and false if we want synchronous operation

    // What to do when response is ready
    xhr.onload = function(){
        if(this.status === 200) console.log(this.responseText);
        else console.log("Some error occured");
    };

    // Send the request
    xhr.send();
}