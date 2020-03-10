import FilaF from "../../src/Lista_2/Questao2";

let f;

beforeEach(() => {
	f = new FilaF(null)
});

test("Instanciacao", () => {
	expect(f.size()).toBe(0);
});

test("Adicionar um elemento", () => {
	f.enqueue(5);
	expect(f.size()).toBe(1);
});

test("inserir", () => {
	f.enqueue(5);
	f.enqueue(5);
	f.enqueue(5);
	f.enqueue(5);
	f.enqueue(5);
	expect(f.toString()).toBe("5->5->5->5->5")
});
