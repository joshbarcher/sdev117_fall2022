//ask for the favorite number
let favNum = parseInt(prompt("What is your favorite number"));

//show the number (with some string concatenation)
console.log("You entered " + favNum);

//adjust the number by doubling it
//favNum = favNum * 2;
favNum *= 2;
console.log("Your number doubles is " + favNum);

//favNum = favNum + 10;
favNum += 10; //add 10 to the number in favNum
console.log("Your number (plus 10) is " + favNum);

const PI = 3.145;
//favNum = favNum - PI;
favNum -= PI;
console.log("Your number (minus PI) is " + favNum);

//increment (or decrement) numbers

//increment
for (let i = 1; i <= 10; i++)
{
    favNum++;
    console.log("Your number incremented " + favNum);
}

for (let i = 1; i <= 10; i++)
{
    favNum--;
    console.log(favNum);
}








