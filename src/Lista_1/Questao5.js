import Pilha from '../Pilha'

export default function conversorBin(num) {

	let aux;
	let result = "";

	for (aux = new Pilha(10); num > 0; num = Math.floor(num / 2)) aux.push(num % 2)
	while (aux.size() > 0) result += `${aux.pop()}`;

	return result;
}