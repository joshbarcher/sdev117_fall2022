document.getElementById("submit").onclick = myFunction;

function myFunction()
{
    //this is familiar
    let nameTextbox = document.getElementById("first-name");
    let name = nameTextbox.value;

    alert("Your name is " + name);

    //change the text to something different
    let otherTextbox = document.getElementById("other");
    otherTextbox.value = name;
}
