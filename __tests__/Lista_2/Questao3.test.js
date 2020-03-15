import Arranjo from "../../src/Lista_2/Questao3"


let l

beforeEach(() => {
    l = new Arranjo();
})

test("Instanciacao", () => {
	expect(l.toString()).toBe("");
});



test("Adicionar e Remover em difrerentes possições", () => {
	l.add(1);
	l.add(2);
	l.add(3);
	l.add(4);
	expect(l.toString()).toBe("4->3->2->1");
	l.append(5);
	expect(l.toString()).toBe("4->3->2->1->5");
	l.removeBeginning();
	expect(l.toString()).toBe("3->2->1->5");
	l.removeEnd();
	expect(l.toString()).toBe("3->2->1");
	l.addAt(1, 6);
	expect(l.toString()).toBe("3->6->2->1");
});

