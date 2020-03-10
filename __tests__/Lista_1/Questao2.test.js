import Pilha from "../../src/Pilha";
import trocaTopoBase from "../../src/Lista_1/Questao2";

let p;

beforeEach(() => {
	p = new Pilha(5);
});

test("Teste de troca", () => {
	p.push(1);
	p.push(2);
	p.push(3);
	p.push(4);
	p.push(5);
	expect(p.toString()).toBe("[ 1  2  3  4  5 ]");
	expect(trocaTopoBase(p).toString()).toBe("[ 5  2  3  4  1 ]");
});