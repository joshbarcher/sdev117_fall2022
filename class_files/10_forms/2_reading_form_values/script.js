window.onload = function() {
    let button = document.querySelector("button");
    button.onclick = summarize;
}

//this function handles the form submission
function summarize(event)
{
    //stop the regular event behavior (submitting the form)
    event.preventDefault();

    //print out which of the radio buttons is selected
    let elements = document.querySelectorAll("input[type='checkbox']");
    console.log(elements);

    for (let i = 0; i < elements.length; i++)
    {
        let element = elements[i];
        if (element.checked)
        {
            console.log(element.value + " is selected");
        }
        else
        {
            console.log(element.value + " is not selected");
        }
    }
}

