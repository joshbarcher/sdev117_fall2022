
//empty object
let computer = {};

//add some properties to the object
computer.cpu = "Intel 9900k";
computer.memory = "32gb Corsair Dominator RAM";
computer.numFans = 12;

computer.turnOn = function() {
    console.log("You turn on the computer");
};

//access the properties on the object
console.log("How many fans?", computer.numFans);
computer.turnOn();
