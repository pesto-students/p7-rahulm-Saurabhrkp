const car = {
  brand: 'Tata',
  model: 'Nexon',
  registrationNumber: 'BH12345',

  displayDetails: function (ownerName) {
    console.log(`${ownerName}, this is your car: ${this.registrationNumber}, ${this.brand} - ${this.model}`);
  }
};

const myCarDetails = car.displayDetails.bind(car, 'Sameer');
myCarDetails();

const carCreatedOn = function (ownerName, date) {
  console.log(`${this.brand} - ${this.model} owned by ${ownerName} was created on ${date}`);
};

carCreatedOn.apply(car, ['Sameer', '2019-01-01']);

const carDetails = function (type) {
  console.log(`${this.brand} - ${this.model} is an ${type} car`);
};

carDetails.call(car, 'Electric');