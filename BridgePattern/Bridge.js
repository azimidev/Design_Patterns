// input devices
class Gesture {
	constructor(output) {
		this.output = output;
	}
	tap() {
		this.output.click();
	}
	swipe() {
		this.output.move();
	}
	pan() {
		this.output.drag();
	}
	pinch() {
		this.output.zoom();
	}
}

class Mouse {
	constructor(output) {
		this.output = output;
	}
	click() {
		this.output.click();
	}
	move() {
		this.output.move();
	}
	down() {
		this.output.drag();
	}
	wheel() {
		this.output.zoom();
	}
}
// output devices

class Screen {
	click() {
		console.log('Screen Clicked');
	}
	move() {
		console.log('Screen moved');
	}
	drag() {
		console.log('Screen dragged');
	}
	zoom() {
		console.log('Screen zoomed');
	}
}

class Audio {
	click() {
		console.log('Audio Clicked');
	}
	move() {
		console.log('Audio waved');
	}
	drag() {
		console.log('Audio volume down');
	}
	zoom() {
		console.log('Audio volume up');
	}
}

const screen = new Screen();
const audio = new Audio();

const hand = new Gesture(screen);
const mouse = new Mouse(audio);

// Screen
hand.tap();
hand.swipe();
hand.pinch();

// Audio
mouse.click();
mouse.move();
mouse.down();
