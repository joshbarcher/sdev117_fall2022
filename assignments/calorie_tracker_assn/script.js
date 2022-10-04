//this registers the button click events when the
document.getElementById("lbs-to-kgs").onclick = lbsToKgs;
document.getElementById("workout-to-met").onclick = workoutToMet;
document.getElementById("calc-calories").onclick = calculateCalories;

//convert lbs to kgs from the input fields in the page and send output to the console
function lbsToKgs()
{
    //write your code here - get the lbs value from the textbox, convert to kgs
    //and display using the output() function
    output("Pressed the lbs to kgs button");

    //get the textbox and put it in a variable
    let lbsTextbox = document.getElementById("lbs");
    lbsTextbox.style.backgroundColor = "brown";

    //get the text in the textbox
    let lbs = lbsTextbox.value;
    output("The lbs value is " + lbs);
    output(typeof lbs);

    //set the text in the textbox
    lbsTextbox.value = "New Value";
}

//determine MET value for exercises in the dropdown list and send output to the console
function workoutToMet()
{
    //write your code here - get the MET value from the dropdown and display using the
    //output() function
    output("Print MET value");
}

//Calculates the calories burned per minute, given the inputs from the page and sends the output to the console
function calculateCalories()
{
    //write your code here - get the kgs and MET values from the textboxes and display using the
    //output() function
    output("Calculate the calories burned");
}

//this function takes the provided message and prints it to the console on the page
//(DON'T ALTER THIS FUNCTION)
function output(message)
{
    let console = document.getElementById("console");
    console.innerHTML = message + "\n" + console.innerHTML;
}

