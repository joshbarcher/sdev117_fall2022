//select the list and then the parent of the list (the <aside> element)
let list = document.querySelector("ol.list");
let aside = list.parentElement;
let children = list.children;

//make some changes to the list
list.style.fontFamily = "Baskerville,Baskerville Old Face,Hoefler Text,Garamond,Times New Roman,serif";
list.style.color = "blue";

//make some changes to the parent element
aside.style.backgroundColor = "rgb(195,242,212)";
aside.style.border = "1px solid black";
aside.style.padding = "5px";

//this loops over the indices of the array in the children variable
for (let i = 0; i < children.length; i++)
{
    children[i].style.fontWeight = "bold";
    children[i].style.color = getRandomRGB();
    children[i].style.backgroundColor = getGrayscaleRGB();
}

function randomColorPart()
{
    return Math.floor(Math.random() * 256);
}

//produces a random rgb(x,y,z) string to assign to a style property
function getRandomRGB()
{
    let red = randomColorPart();
    let green = randomColorPart();
    let blue = randomColorPart();

    return `rgb(${red},${green},${blue})`;
}

function getGrayscaleRGB()
{
    let colorPart = randomColorPart();

    return `rgb(${colorPart},${colorPart},${colorPart})`;
}



