class Process {
	constructor(state) {
		this.state = state;
	}
}

const Singleton = (function () {
	// class ProcessManager {
	// 	constructor() {
	// 		this.processes = 0;
	// 	}
	// }
	let instance;

	function createInstance() {
		return new Process('New Object');
	}

	return {
		getInstance() {
			if (!instance) {
				instance = createInstance();
			}
			return instance;
		}
	};
}
)();

const processManager1 = Singleton.getInstance();
const processManager2 = Singleton.getInstance();

console.log(processManager1 === processManager2);
