
/**
 * Implementação de uma Pilha
 * @author {https://github.com/taniro}
 */

class Pilha {

	/**
	 * Construtor padrão da classe Pilha.
	 * @param {number} [size = 10] - Tamanho da Pilha. Caso não informado a Pilha terá tamanho 10.
	 */
	constructor(size = 10) {
		this.maxSize = size;
		this.dados = [];
		this.topo = -1;
	}

	/**
	 * Adiciona um elemento na Pilha.
	 * @param {any} newData - Elemento a ser adicionado à Pilha.
	 * @throws {Error} - Lança um erro de Overflow caso a pilha esteja cheia.
	 */
	push(newData) {
		if (this.isFull()) {
			throw new Error("Overflow");
		}
		else {
			this.dados[++this.topo] = newData;
		}
	}

	/**
	 * Remove um elemento da Pilha.
	 * @returns {any} - Retorna o elemento removido da Pilha.
	 * @throws {Error} - Lança um erro de Underflow caso a pilha esteja vazia.
	 */
	pop() {
		if (this.isEmpty()) {
			throw new Error("Underflow");
		} else {
			return this.dados[this.topo--];
		}
	}

	/**
	 * Retorna o elemento no topo da Pilha sem remover.
	 * @returns {any} - Elemento do topo da Pilha.
	 * @throws {Error} - Lança um erro de Underflow caso a pilha esteja vazia.
	 */
	top() {
		if (this.isEmpty()) {
			throw new Error("Empty");
		} else {
			return this.dados[this.topo];
		}
	}

	/**
	 * Remove todos os elementos da Pilha.
	 */
	clear() {
		this.topo = -1;
	}

	/**
	 * Retorna o tamanho da Pilha.
	 * @returns {number} - Tamanho da Pilha.
	 */
	size() {
		return this.topo + 1;
	}

	/**
	 * Verifica que uma Pilha é vazia.
	 * @returns {boolean} - Retorna [true] se a Pilha estiver vazia, [false] caso contrário.
	 */
	isEmpty() {
		return this.size() === 0;
	}

	/**
	 * Verifica que uma Pilha é cheia.
	 * @returns {boolean} - Retorna [true] se a Pilha estiver cheia, [false] caso contrário.
	 */
	isFull() {
		return this.size() === this.maxSize;
	}

	/**
	 * Retorna uma string contendo todos os elementos da Pilha.
	 * @returns {string} - Conteúdo da Pilha formatado.
	 */
	toString() {
		let result = "[";
		for (let i = 0; i <= this.topo; i++) {
			result += ` ${this.dados[i]} `;
		}
		result += "]";
		return result;
	}
}

export default Pilha;