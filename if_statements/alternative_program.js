let food = prompt("What did you eat for breakfast?");
let exercised = confirm("Did you exercise today?");

//DRY principle - don't repeat yourself (in code)
if (food == "fruit")
{
    alert("You are wise");
}
else if (food == "oatmeal")
{
    if (exercised == true)
    {
        alert("You are studious");
    }
    else
    {
        alert("You are unwise");
    }
}
else if (food == "bacon & eggs")
{
    if (exercised == true)
    {
        alert("You are silly");
    }
    else
    {
        alert("You are happy");
    }
}
else if (food == "toast")
{
    if (exercised == true)
    {
        alert("You are sad");
    }
    else
    {
        alert("You are bored");
    }
}

