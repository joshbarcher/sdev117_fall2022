//declared a complex object
let car = {
    make: "Nissan",
    model: "Rogue",
    mpg: 24,
    hasSafetyFeatures: true,
    features: ["anti-lock breaks", "digital display", "usb adapter"],
    engine: {
        size: "big",
        horsePower: 180,
        pistons: 6
    },
    "type of gas": "diesel",
    computerFeatures: [
        {
            name: "bluetooth",
            version: 1.0
        },
        {
            radioType: "xm",
            version: 1.0
        },
        {
            radioType: "fm",
            version: 1.0
        }
    ]
};

//access the properties of the object
console.log(car.make, " ", car.model);
console.log("Horse power", car.engine.horsePower);

//print out the first computer feature
console.log(car.computerFeatures[0].name);

//print out the type of radio in the second computer feature
console.log(car.computerFeatures[1].radioType);

console.log(car["type of gas"]);
console.log(car["make"]);

//how would you print out the size of the engine without dot notation
console.log(car["engine"]["size"]);
console.log(car.engine.size);

