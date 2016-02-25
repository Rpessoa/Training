const bmw = {
  brand: "BMW",
  model: "X6",
  speed: 260,
  price: 1000
};

const ferrari = {
  brand: "Ferrari",
  model: "Moreno",
  speed: 360,
  price: 500
};

// Object Car Constructor
const car = {
  constructor: function (spec) {
    let {brand, model, speed, price} = spec;
    return Object.freeze({
      brand, model, speed, price
      });
    }
};

// using the car constructor to create our BMW
const newCar = car.constructor(bmw);

console.log(newCar);
console.log(newCar.speed);

let newCar2 = newCar.constructor(ferrari);

console.log(newCar2);

// testing the Object.keys methods
var array = Object.keys(newCar)
            .map(function(key) {
              return `${key} and ${newCar[key]}`;
            });

console.log(array);
