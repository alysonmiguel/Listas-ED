class Fila {
	constructor(size = 10) {
		this.dados = [];
		this.fim = 0;
		this.inicio = 0;
		this.maxSize = size;
	}

	enqueue(newData) {
		if (this.isFull()) {
			throw new Error("Queue is full");
		} else {
			this.dados[this.fim++] = newData;
		}
	}

	dequeue() {
		if (this.isEmpty()) {
			throw new Error("Queue is empty");
		} else {
			return this.dados[this.inicio++];
		}
	}

	front() {
		if (this.isEmpty()) {
			throw new Error("Queue is empty");
		} else {
			return this.dados[this.inicio];
		}
	}

	clear() {
		this.inicio = this.fim;
	}

	toString() {

	}

	size() {
		return this.fim - this.inicio;
	}

	isEmpty() {
		return this.inicio === this.fim;
	}

	isFull() {
		return (this.fim - this.inicio) === this.maxSize
	}
}

export default Fila;