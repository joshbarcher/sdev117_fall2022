//constants to replace our "magic numbers"
const CANVAS_SIZE = 500;
const RGB_MAX = 256;

//get my canvas and the context of the canvas
let canvas = document.getElementById("my-canvas");
let context = canvas.getContext("2d");

drawShapes(30, 150);
drawShapes(40, 10);

function drawShapes(numShapes, sizeOfBox)
{
    for (let i = 1; i <= numShapes; i++)
    {
        drawABox(sizeOfBox);
    }
}

function drawABox(sizeOfBox)
{
    //generate a random (x, y) position
    let x = Math.random() * (CANVAS_SIZE - sizeOfBox); //this will give a number in [0, 500)
    let y = Math.random() * (CANVAS_SIZE - sizeOfBox);
    let color = getRandomColor();

    context.fillStyle = color;
    context.fillRect(x, y, sizeOfBox, sizeOfBox);
}

//this function returns a string of the form "rgb(120, 20, 30)"
function getRandomColor()
{
    let red = Math.random() * RGB_MAX;
    let green = Math.random() * RGB_MAX;
    let blue = Math.random() * RGB_MAX;

    return `rgb(${red},${green},${blue})`;
}








