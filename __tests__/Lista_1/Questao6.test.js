import Deque from "../../src/Lista_1/Questao6";


let d;

beforeEach(() => {
	d = new Deque(5);
});

test("Testes deque", () => {
	d.insereInicio('A');
	d.insereInicio('B');
	d.insereInicio('C');
	d.insereFim('D');
	expect(d.removeInicio()).toBe('C');
	expect(d.removeInicio()).toBe('B');
	expect(d.removeFim()).toBe('D');
	expect(d.removeFim()).toBe('A');
	expect(() => {
		d.removeFim();
	}).toThrowError();
	d.insereInicio('F');
	expect(d.removeFim()).toBe('F');
});
