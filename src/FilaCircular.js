class FilaCircular {
	constructor(t = 10) {
		this.dados = [];
		this.fim = -1;
		this.inicio = -1;
		this.tamanho = t;
	}

	enqueue(newData) {
		if (this.isFull()) {
			throw new Error("Queue is full");
		}
		if (this.isEmpty()) {
			this.inicio = this.fim = 0;
		} else {
			this.fim = this.getNextEndPosition();
		}
		this.dados[this.fim] = newData;
	}

	dequeue() {
		if (this.isEmpty()) {
			throw new Error("Queue is empty");
		}
		let r = this.dados[this.inicio];
		if (this.size() === 1) {
			this.clear();
		} else {
			this.inicio = this.getNextBeginPosition();
		}
		return r;
	}

	front() {
		return this.dados[this.inicio];
	}

	clear() {
		this.inicio = this.fim = -1;
	}

	toString() {
		let result = "[";
		if (this.inicio <= this.fim) {
			for (let i = this.inicio; i <= this.fim; i++) {
				result += ` ${this.dados[i]} `;
			}
		} else {
			for (let i = this.inicio; i < this.tamanho; i++) {
				result += ` ${this.dados[i]} `;
			}
			for (let i = 0; i <= this.fim; i++) {
				result += ` ${this.dados[i]} `;
			}
		}
		result += "]";
		return result;
	}

	size() {
		if (this.isEmpty()) {
			return 0;
		} else if (this.inicio === this.fim) {
			return 1;
		} else if (this.inicio < this.fim) {
			return this.fim - this.inicio + 1;
		} else {
			return this.tamanho - this.inicio + this.fim + 1;
		}
	}

	isEmpty() {
		return this.inicio === -1;
	}

	isFull() {
		return (
			(this.inicio === 0 && this.fim === this.tamanho - 1) ||
			this.fim === (this.inicio - 1) % (this.tamanho - 1)
		);
	}

	getNextEndPosition() {
		return this.fim === this.tamanho - 1 && this.inicio !== 0 ? 0 : this.fim + 1;
	}

	getNextBeginPosition() {
		return this.inicio === this.tamanho - 1 ? 0 : this.inicio + 1;
	}
}

export default FilaCircular;
