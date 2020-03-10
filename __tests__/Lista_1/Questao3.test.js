import Pilha2F from "../../src/Lista_1/Questao3";


let p;

beforeEach(() => {
	p = new Pilha2F(5);
});

test("Instanciacao", () => {
	expect(p.size()).toBe(0);
});

test("Adicionar um elemento", () => {
	p.push(5);
	expect(p.size()).toBe(1);
});

test("Underflow", () => {
	expect(() => {
		p.pop();
	}).toThrowError();
});

test("Teste de overflow", () => {
	p.push(1);
	p.push(2);
	p.push(3);
	p.push(4);
	p.push(5);
	expect(p.peek()).toBe(5);
	expect(() => {
		p.push(5);
	}).toThrowError();
});
