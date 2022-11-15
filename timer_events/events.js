
//say hello after 5 seconds
//window.setTimeout(sayHi, 5000);
//window.setInterval(printRandom, 500);

function sayHi()
{
    console.log("Hello, world! This is Josh!");
}

function printRandom()
{
    console.log("Here is a random number", Math.random());
}

//this variable will hold our timer
let timer;

//animate the box
window.onload = function() {
    let box = document.querySelector("div#box");
    box.onclick = function() {
        //start an interval-timer to animate the box
        timer = window.setInterval(animate, 10);
    };
};

let boxSize = 50;

function animate()
{
    let box = document.querySelector("div#box");

    //increase the size of the box
    boxSize += 1.5;

    box.style.width = boxSize + "px"; //<--- needs to be 59px, 60px, 61px
    box.style.height = boxSize + "px";

    //stop the timer after some condition
    if (boxSize >= 300)
    {
        clearInterval(timer); //stop the interval
    }
}




















