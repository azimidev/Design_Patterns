// OLD INTERFACE
class Shipping {
	request(zipStart, zipEnd, weight) {
		// ...

		return "$50.00";
	}
}

// NEW INTERFACE
class AdvancedShipping {
	login(credentials) {
		// ...
	}
	setStart(start) {
		// ...
	}
	setDestination(destination) {
		// ...
	}
	calculate(weight) {
		return "$80.00";
	}
}

class ShippingAdapter {
	constructor(credentials) {
		this.credentials = credentials;
		this.shipping = new AdvancedShipping();
		this.shipping.login(this.credentials);
	}

	request(zipStart, zipEnd, weight) {
		this.shipping.setStart(zipStart);
		this.shipping.setDestination(zipEnd);
		return this.shipping.calculate(weight);
	}
}

const shipping = new Shipping();
const credentials = { token: "asdasd" };
const adapter = new ShippingAdapter(credentials);

// original shipping object and interface

const oldCost = shipping.request("78712", "10012", "2kg");
console.log('Old Cost: ' + oldCost); // $50.00

// new shipping object with adapted interface
const newCost = adapter.request("78712", "10012", "2kg");
console.log('New Cost: ' + newCost);
