class Car {

    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    printInfo() {
        console.log(`Make - ${this.make}; Model - ${this.model}; Year - ${this.year}; Color - ${this.color}`);
    }
}

const car = new Car('Triber', 'Renault', 2024, 'Black');
car.printInfo();

/*
    Differences with Java
    1. keyword 'constructor' is used
    2. no datatypes for constructor params
    3. function keyword is not required
    4. no need to declare props
    5. no need to specify the type of reference
*/