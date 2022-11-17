let coffeeMaker = {
    type: "french press",
    timeRequiredMins: 30,
    isCoffeeFresh: true
};

console.log(coffeeMaker);

//this will convert a JS object to JSON text
let formattedText = JSON.stringify(coffeeMaker);
console.log(formattedText);

//let's try creating a JSON formatted string (careful here)
let rollOfTape = '{"lengthRemainingInches":24,"material":"masking","doubleSided":false}';

let jsObject = JSON.parse(rollOfTape);
console.log(jsObject);