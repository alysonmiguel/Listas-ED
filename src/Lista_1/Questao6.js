class Deque {
	constructor(maxsize) {
		this.maxsize = maxsize;
		this.dados = [];
		this.inicio = -1;
		this.fim = 0;
	}

	insereInicio(dado) {
		if (this.isFull()) {
			throw new Error();
		} else if (this.isEmpty()) {
			this.inicio = 0;
			this.fim = 0;
		} else if (this.inicio === 0) {
			this.inicio = this.maxsize - 1;
		} else {
			this.inicio--;
		}
		this.dados[this.inicio] = dado;
	}
	insereFim(dado) {
		if (this.isFull()) {
			throw new Error();
		} else if (this.isEmpty()) {
			this.inicio = 0;
			this.fim = 0;
		} else if (this.fim === this.maxsize - 1) {
			this.fim = 0;
		} else {
			this.fim++;
		}
		this.dados[this.fim] = dado;
	}

	removeInicio() {
		if (this.isEmpty()) {
			throw new Error();
		}
		let r = this.dados[this.inicio];

		if (this.inicio === this.fim) {
			this.clear();
		} else {
			if (this.inicio === this.maxsize - 1) {
				this.inicio = 0
			} else {
				this.inicio++;
			}
		}

		return r;
	}



	removeFim() {
		if (this.isEmpty()) {
			throw new Error();
		}
		let r = this.dados[this.fim];

		if (this.inicio === this.fim) {
			this.clear();
		} else {
			if (this.fim === 0) {
				this.fim = this.maxsize - 1;
			} else {
				this.fim--;
			}
		}

		return r;
	}

	clear() {
		this.inicio = -1;
		this.fim = 0;
	}

	isEmpty() {
		return this.inicio === -1;
	}

	isFull() {
		return (this.inicio === this.fim + 1) || (this.inicio === 0 && this.fim === this.maxsize - 1);
	}
}
export default Deque;