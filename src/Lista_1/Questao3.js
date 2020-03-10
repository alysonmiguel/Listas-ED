import Fila from "../Fila";


class Pilha2F {
	constructor(maxtam = 5) {
		this.f1 = new Fila(maxtam);
		this.f2 = new Fila(maxtam);
	}

	push(dado) {
		if (this.isFull()) {
			throw new Error("Overflow");
		} else {
			while (this.f1.size() > 0) {
				this.f2.enqueue(this.f1.dequeue());
			}
			this.f1.enqueue(dado);
			while (this.f2.size() > 0) {
				this.f1.enqueue(this.f2.dequeue());
			}
		}
	}
	pop() {
		return this.f1.dequeue();
	}

	peek() {
		return this.f1.front();
	}

	isEmpty() {
		return this.f1.isEmpty();
	}

	size() {
		return this.f1.size();
	}

	isFull() {
		return this.f1.isFull();
	}

	toString() {
		return this.f1.toString();
	}
}

export default Pilha2F;