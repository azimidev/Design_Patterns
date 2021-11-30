class UPS {
	constructor() {
		this.name = 'UPS';
	}

	calculate() {
		return 25;
	}
}

class FedEx {
	constructor() {
		this.name = 'FedEx';
	}

	calculate() {
		return 30;
	}
}

class DHL {
	constructor() {
		this.name = 'DHL';
	}

	calculate() {
		return 50;
	}
}

class Shipping {
	setStrategy(company) {
		this.company = company;
	}

	calculate() {
		return this.company.calculate();
	}
}

// const package = { from: "76712", to: "10012", weigth: "lkg" };

// the 3 strategies

const shipping = new Shipping();

shipping.setStrategy(new UPS());
console.log("UPS Strategy: " + shipping.calculate());

shipping.setStrategy(new FedEx());
console.log("Fedex Strategy: " + shipping.calculate());

shipping.setStrategy(new DHL());
console.log("DHL Strategy: " + shipping.calculate());
