import Pilha from '../Pilha'




export default function verificaExpressao(texto) {
	let aux = new Pilha(20);

	for (let i = 0; i < texto.length; i++) {
		if (texto[i] === '[' || texto[i] === '(') {
			aux.push(texto[i]);
		} else if (texto[i] === ']' || texto[i] === ')') {
			let r = aux.pop();
			if ((r === '(' && texto[i] !== ')') || (r === '[' && texto[i] !== ']')) return false;
		}
	}

	return aux.isEmpty();
}