//Js designed as a single thread application
// Creates the web worker:
const myWebWorker = new Worker('worker.js');

//Web workers communicate with their creator using certain methods like postMessage, onmessage, and onerror

// main.js 
btn1.addEventListner('click', (event) => {
    worker.postMessage('Calc Sum'); // Using the postMessage to send Message from the main.js to worker.js 
});

worker.onmessage = (message) => {
    alert(`The sum is: ${message.data}`);
}



//worker.js 
self.onmessage = (message) => { // Using onmessage to receive the message in the worker.js 
    let sum = 0;
    for (let i = 0; i < 10000000; i++)
        sum += i;
    self.postMessage(message + " :" + sum); // Using postMessage to send the answer back to the main.js 
}

