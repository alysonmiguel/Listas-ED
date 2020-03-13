class Node {
	constructor(dado) {
		this.dado = dado;
		this.anterior = null;
		this.proximo = null;
	}
}

class ListaDuplamenteLigada {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	add(dado) {
		let novo_no = new Node(dado);
		if (this.isEmpty()) {
			this.head = novo_no;
			this.tail = novo_no;
			novo_no.anterior = null;
			novo_no.proximo = null;
		} else {
			novo_no.proximo = this.head;
			novo_no.anterior = null;
			this.head.anterior = novo_no;
			this.head = novo_no;
		}
	}

	append(dado) {
		let novo_no = new Node(dado);

		if (this.isEmpty()) {
			this.head = novo_no;
			this.tail = novo_no;
			novo_no.anterior = null;
			novo_no.proximo = null;
		} else {
			novo_no.proximo = null;
			novo_no.anterior = this.tail;

			this.tail.proximo = novo_no;
			this.tail = novo_no;
		}
	}

	removeBeginning() {
		if (!this.isEmpty()) {
			let tmp = this.head.proximo;
			this.head = tmp;
			this.head.anterior = null;
		}
	}

	remove(dado) {
	}

	removeEnd() {
		if (!this.isEmpty()) {
			let tmp = this.tail.anterior;

			this.tail = tmp;
			this.tail.proximo = null;
		}
	}

	isEmpty() {
		return this.head === null;
	}

	toString() {
		let tmp = this.head;
		let texto = "";

		while (tmp != null) {
			texto += tmp.dado + (tmp.proximo ? "->" : "");
			tmp = tmp.proximo;
		}

		return texto;
	}

	size() {
		let cont = 0;
		let tmp = this.head;

		while (tmp != null) {
			tmp = tmp.proximo;
			cont++;
		}
		return cont;
	}

	addAt(posicao, dado) {
		if (posicao >= this.size()) {
			this.append(dado);
		} else {
			if (posicao <= 0) {
				//adicionando no inicio
				this.add(dado);
			} else {
				let novo_no = new Node(dado);
				let i = 1;
				let aux_a = this.head;
				let aux_b = this.head.proximo;
				while (i != posicao) {
					//iteração
					aux_a = aux_b;
					aux_b = aux_b.proximo;
					i++;
				}
				aux_a.proximo = novo_no;
				novo_no.proximo = aux_b;
				novo_no.anterior = aux_a;
				aux_b.anterior = novo_no;
			}
		}
	}

	search(dado) {
		if (this.head === null) {
			return false;
		} else {
			let tmp = this.head;
			while (tmp !== null) {
				if (tmp.dado == dado) {
					return true;
				}
				//iteração
				tmp = tmp.proximo;
			}
			return false;
		}
	}
}

export default ListaDuplamenteLigada;
