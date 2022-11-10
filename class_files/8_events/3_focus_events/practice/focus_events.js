//wait until the page loads
window.onload = function() {
    //select all form elements and add an onfocus event handler
    let formElements = document.querySelectorAll("input, select");

    for (let i = 0; i < formElements.length; i++)
    {
        let element = formElements[i];

        //add the event handlers
        element.onfocus = function() {
            //this will run when the element gains focus
            element.style.backgroundColor = "lightblue";
            element.style.border = "2px solid darkgreen";
        };

        element.onblur = function() {
            element.style.backgroundColor = "";
            element.style.border = "";
        };
    }
};
