import ListaDuplamenteLigada from "../src/ListaDuplamenteLigada";

let l;

beforeEach(() => {
	l = new ListaDuplamenteLigada();
});

test("Instanciacao", () => {
	expect(l.size()).toBe(0);
	expect(l.isEmpty()).toBe(true);
});

test("Adicionar em lugares variados", () => {
	l.add(1);
	l.add(2);
	l.add(3);
	l.add(4);
	expect(l.size()).toBe(4);
	expect(l.toString()).toBe("4->3->2->1");
	l.append(5);
	expect(l.toString()).toBe("4->3->2->1->5");

	l.removeBeginning();
	expect(l.toString()).toBe("3->2->1->5");
	l.removeEnd();
	expect(l.toString()).toBe("3->2->1");
	expect(l.size()).toBe(3);

	l.addAt(1, 6);
	expect(l.toString()).toBe("3->6->2->1");
	expect(l.search(5)).toBe(false);
	expect(l.search(6)).toBe(true);
	l.addAt(3, 7);
	expect(l.toString()).toBe("3->6->2->7->1");
	l.addAt(0, 2);
	expect(l.toString()).toBe("2->3->6->2->7->1");
});
