window.onload = function() {
    let button = document.getElementById("submit");
    button.onclick = validateForm;
}

function validateForm(event)
{

    //validate the form...
    let validName = validateName();
    let validAge = validateAge();

    //if all looks all right we need to submit the form!
    if (validName === false || validAge === false)
    {
        //prevent the form from submitting
        event.preventDefault();
    }
}

function validateName()
{
    let input = document.querySelector("#name");
    let errorAside = document.querySelector("#name-error");
    let nameValue = input.value;

    if (nameValue.length >= 3 && nameValue.length <= 10)
    {
        //a good name value
        errorAside.style.display = "none";
        return true;
    }
    else
    {
        //a bad name value
        errorAside.style.display = "inline";
        return false;
    }
}

function validateAge()
{
    let input = document.querySelector("#age");
    let errorAside = document.querySelector("#age-error");
    let ageValue = parseFloat(input.value);

    if (ageValue >= 1 && ageValue <= 100)
    {
        //a good age value
        errorAside.style.display = "none";
        return true;
    }
    else
    {
        //a bad age value
        errorAside.style.display = "inline";
        return false;
    }
}