class Developer {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}
}

class Tester {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}
}

class EmployeeFactory {
	static create(name, type) {
		switch (type) {
			case 'developer':
				return new Developer(name, type);
			case 'tester':
				return new Tester(name, type);
		}
	}
}

const employees = [];

employees.push(EmployeeFactory.create('Amir', 'developer'));
employees.push(EmployeeFactory.create('Sara', 'developer'));
employees.push(EmployeeFactory.create('John', 'tester'));
employees.push(EmployeeFactory.create('Jane', 'tester'));
employees.push(EmployeeFactory.create('Shadi', 'tester'));
employees.push(EmployeeFactory.create('Mahdi', 'developer'));

for (const employee of employees) {
	console.log(employee);
}
