class Shop {
	build(builder) {
		builder.step1()
		builder.step2()
		return builder.get()
	}
}

class CarBuilder {
	constructor() {
		this.car = null
	}
	step1() {
		this.car = new Car()
	}

	step2() {
		this.car.addParts()
	}

	get() {
		return this.car
	}
}

class TruckBuilder {
	constructor() {
		this.truck = null
	}
	step1() {
		this.truck = new Truck()
	}

	step2() {
		this.truck.addParts()
	}

	get() {
		return this.truck
	}
}

class Car {
	constructor() {
		this.doors = 0;
	}

	addParts() {
		this.doors = 4;
	}

	say() {
		console.log(`I have ${this.doors} doors`);
	}
}


class Truck {
	constructor() {
		this.doors = 0;
	}

	addParts() {
		this.doors = 2;
	}

	say() {
		console.log(`I have ${this.doors} doors`);
	}
}

const shop = new Shop();

const carBuilder = new CarBuilder();
const truckBuilder = new TruckBuilder();

const car = shop.build(carBuilder);
const truck = shop.build(truckBuilder);

car.say();
truck.say();
