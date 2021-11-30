class CryptoCurrencyAPI {
	getValue(coin) {
		console.log('Calling External API...');
		switch (coin) {
			case 'Bitcoin':
				return '$1000';
			case 'Ethereum':
				return '$200';
			case 'Ripple':
				return '$1';
			case 'Litecoin':
				return '$5';
		}
	}
}

class CryptoCurrencyAPIProxy {
	constructor() {
		this.cache = {};
	}

	getValue(coin) {
		if (this.cache[coin]) {
			return this.cache[coin];
		}

		this.cache[coin] = new CryptoCurrencyAPI().getValue(coin);
		return this.cache[coin];
	}
}
// const api = new CryptoCurrencyAPI();
const api = new CryptoCurrencyAPIProxy();

console.log(api.getValue('Bitcoin'));
console.log(api.getValue('Bitcoin'));
console.log(api.getValue('Ethereum'));
console.log(api.getValue('Ethereum'));
console.log(api.getValue('Ethereum'));
console.log(api.getValue('Ethereum'));
console.log(api.getValue('Ripple'));
console.log(api.getValue('Ripple'));
console.log(api.getValue('Litecoin'));
console.log(api.getValue('Litecoin'));
