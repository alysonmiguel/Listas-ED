import inverter from "../../src/Lista_2/Questao4";
import Lista from "../../src/Lista";

let l;

beforeEach(() => {
	l = new Lista(null);
});

test("Teste de troca", () => {
	l.add(1);
	l.add(2);
	l.add(3);
	l.add(4);
	l.add(5);
	expect(l.toString()).toBe("5->4->3->2->1");
	expect(inverter(l).toString()).toBe("1->2->3->4->5");
});