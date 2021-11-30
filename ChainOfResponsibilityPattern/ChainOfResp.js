class Checker {
	setSuccessor(successor) {
		this.successor = successor;
	}

	check(status) {
		throw new Error('You should implement this method');
	}

	next(status) {
		if (this.successor) {
			this.successor.check(status);
		}
	}
}

class Lock extends Checker {
	check(status) {
		if (!status.locked) {
			// throw new Error('The door is not locked');
			console.error('The door is not locked');
		}
		super.next(status);
	}
}

class Alarm extends Checker {
	check(status) {
		if (!status.alarmOn) {
			// throw new Error('The alarm is not on);
			console.error('The alarm is not on');
		}
		super.next(status);
	}
}

class Light extends Checker {
	check(status) {
		if (!status.lightOff) {
			// throw new Error('TThe light is not off');
			console.error('The light is not off');
		}
		super.next(status);
	}
}


class Status {
	constructor() {
		this.locked = true;
		this.alarmOn = true;
		this.lightOff = true;
	}
}


const lock = new Lock();
const alarm = new Alarm();
const light = new Light();

lock.setSuccessor(alarm);
alarm.setSuccessor(light);

const status = new Status();
lock.check(status);
// alarm.check(status);
// light.check(status);
