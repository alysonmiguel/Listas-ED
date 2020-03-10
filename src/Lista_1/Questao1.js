class Fracao {
	constructor(numerador, denominador = 1) {
		if (denominador === 0) {
			throw new Error("Impossível dividir por zero");
		}
		this.numerador = numerador;
		this.denominador = denominador;
	}

	multiplicar(fracao) {
		return new Fracao(this.numerador * fracao.numerador, this.denominador * fracao.denominador);
	}

	dividir(fracao) {
		return new Fracao(this.numerador * fracao.denominador, this.denominador * fracao.numerador);
	}

	toString() {
		return `${this.numerador}/${this.denominador}`;
	}
}