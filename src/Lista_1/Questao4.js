import Pilha from '../Pilha'


class Fila2P {
	constructor(maxsize) {
		this.p1 = new Pilha(maxsize);
		this.p2 = new Pilha(maxsize);
	}

	enqueue(dado) {
		if (this.isFull()) {
			throw new Error("Overflow");
		} else {
			while (this.p1.size() > 0) {
				this.p2.push(this.p1.pop());
			}
			this.p1.push(dado);
			while (this.p2.size() > 0) {
				this.p1.push(this.p2.pop());
			}
		}
	}

	dequeue() {
		return this.p1.pop();
	}

	isFull() {
		return this.p1.isFull();
	}

	isEmpty() {
		return this.p1.isEmpty();
	}

	size() {
		return this.p1.size();
	}

	front() {
		return this.p1.top();
	}

	clear() {
		return this.p1.clear();
	}
}

export default Fila2P;