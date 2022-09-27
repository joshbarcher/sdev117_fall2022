//gather user inputs (as strings) then convert to numbers
//using parseInt() or parseFloat()
let num1 = parseFloat(prompt("Enter a number"));
let num2 = parseFloat(prompt("Enter a number"));

//you can always print the type of a variable (if you're unsure)
console.log(typeof num1);
console.log(typeof num2);

//perform some arithmetic
let addResult = num1 + num2;
let subResult = num1 - num2;
let multResult = num1 * num2;
let divResult = num1 / num2;
let remainderResult = 7 % 5;

//round your values
// addResult = addResult.toFixed(2);
// subResult = subResult.toFixed(2);
// multResult = multResult.toFixed(2);
// divResult = divResult.toFixed(2);

//show the results
console.log(`The result of ${num1} + ${num2} = ${addResult}`);
console.log(`The result of ${num1} - ${num2} = ${subResult}`);
console.log(`The result of ${num1} * ${num2} = ${multResult}`);
console.log(`The result of ${num1} / ${num2} = ${divResult}`);
console.log(`The result of 7 % 5 = ${remainderResult}`);

