class Member {
	constructor(name) {
		this.name = name;
		this.chatroom = null;
	}

	send(message, toMember) {
		this.chatroom.send(message, this, toMember);
	}

	receive(message, fromMember) {
		console.log(`${fromMember.name} to ${this.name}: ${message}`);
	}
}

class Chatroom {
	constructor() {
		this.members = {};
	}

	addMember(member) {
		this.members[member.name] = member;
		member.chatroom = this;
	}

	send(message, fromMember, toMember) {
		toMember.receive(message, fromMember);
	}
}

const chatroom = new Chatroom();

const john = new Member('John');
const amir = new Member('Amir');
const sara = new Member('Sara');

chatroom.addMember(john);
chatroom.addMember(sara);
chatroom.addMember(amir);

amir.send('How you doing?', sara);
sara.send('Hey! Im good how are you yourself?', amir);

john.send('Hey!', sara);
sara.send('Please stop messaging me!', john);
john.send('Okay!', sara);
