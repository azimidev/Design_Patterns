// ES6 way Abstract Class:
class Sandwich {
	constructor() {
		if (new.target === Sandwich) {
			throw new TypeError('Sorry this class is abstract and cannot be instantiated.');
		}
	}
	makeBread() {
		console.log('Making bread.');
		return this; // because we want to chain.
	}
	addSalad() {
		console.log('Adding salad.');
		return this; // because we want to chain.
	}
	addSauces() {
		console.log('Adding sauces.');
		return this; // because we want to chain.
	}

	make() {
		return this
			.makeBread()
			.addSalad()
			.addToppings() // you HAVE to implement this method in child classes.
			.addSauces();
	}

	// ES6 way Abstract method: MUST beimplemented in child classes.
	addToppings() {
		throw new Error('This method is abstract.');
	}
}

class TurkeySandwich extends Sandwich {
	// This method MUST be implemented as parent class needs it:
	addToppings() {
		console.log('Adding turkey.');
		return this; // because we want to chain.
	}
}

class ChickenSandwich extends Sandwich {
	// This method MUST be implemented as parent class needs it:
	addToppings() {
		console.log('Adding chicken.');
		return this; // because we want to chain.
	}
}


const turkeySandwich = new TurkeySandwich();
const chickenSandwich = new ChickenSandwich();

turkeySandwich.make();
console.log('========================');
chickenSandwich.make();
