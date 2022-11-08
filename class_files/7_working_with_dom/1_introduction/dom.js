//select all the paragraphs
let elements = document.querySelectorAll("article > p, h1");
//let elements = document.getElementsByTagName("p");
//let elements = document.getElementsByClassName("first");
console.log(elements);

//make a change to each paragraph
for (let i = 0; i < elements.length; i++)
{
    elements[i].innerHTML = "something";
}

//loop over all paragraphs and make them more interesting!
let paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++)
{
    let singlePara = paragraphs[i];

    singlePara.style.backgroundColor = "lightblue";
    singlePara.style.borderTop = "1px solid darkblue";
}

