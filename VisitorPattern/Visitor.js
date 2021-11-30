class Employee {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}

	getSalary() {
		return this.salary;
	}

	setSalary(salary) {
		this.salary = salary;
	}

	accept(visitor) {
		new visitor(this);
	}
}

const parsclick = new Employee('Parsclick', 10000);
console.log(parsclick.getSalary());

class ExtraSalaryVisitor {
	constructor(emp) {
		emp.setSalary(emp.getSalary() * 2);
	}
}

parsclick.accept(ExtraSalaryVisitor);
console.log(parsclick.getSalary());
