//ask the user what they plan to do today?
let name = prompt("Hello, what is your name?");
let eaten = confirm("Have you eaten today?");
let visitedGym = confirm("Have you hit the gym today?");
let numClasses = parseInt(prompt("How many classes do you have today?"));

//logical AND
//let healthy = eaten && visitedGym;
//console.log("Are you healthy?", healthy);

//let busyToday = visitedGym || numClasses > 0;
//console.log("Are you busy today?", busyToday);

//be careful with strings, they are case-sensitive!
if (name.toLowerCase() == "josh")
{
    console.log("That's me! I wrote this program");
    console.log("You typed", name);
}
else
{
    console.log("Welcome to my program", name);
}

if (eaten == true && visitedGym == true)
{
    console.log("You're living healthy!");
}
else if (eaten == true)
{
    console.log("Don't forget to exercise today!");
}
else if (visitedGym == true)
{
    console.log("Don't forget to eat something healthy!");
}
else
{
    console.log("Well, try to do better");
    console.log("It's best to eat every day and exercise!");
}

//add an if-statement that prints out the following:
//0 classes - "Woohoo, a day off!"
//2 or less classes - "A busy day!"
//3 or more classes - "A very busy day!"
if (numClasses == 0)
{
    console.log("Woohoo, a day off!");
}
else if (numClasses <= 2)
{
    console.log("A busy day!");
}
else if (numClasses >= 3)
{
    console.log("A very busy day!");
}

//another way to write this!
/*if (eaten && visitedGym)
{
    console.log("You're living healthy!");
}
else if (eaten)
{
    console.log("Don't forget to exercise today!");
}
else if (visitedGym)
{
    console.log("Don't forget to eat something healthy!");
}
else
{
    console.log("Well, try to do better");
    console.log("It's best to eat every day and exercise!");
}*/









