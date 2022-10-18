let food = prompt("What did you eat for breakfast?");
let exercised = confirm("Did you exercise today?");

if (food == "fruit")
{
    alert("You are wise");
}
else if (exercised == true)
{
    if (food == "oatmeal")
    {
        alert("You are healthy!");
    }
    else if (food == "bacon & eggs")
    {
        alert("You are voraciously hungry");
    }
    else if (food == "toast")
    {
        alert("You are studious!");
    }
}
else
{
    if (food == "oatmeal")
    {
        alert("You are slightly healthy!");
    }
    else if (food == "bacon & eggs")
    {
        alert("You are not wise!");
    }
    else if (food == "toast")
    {
        alert("You are silly!");
    }
}
