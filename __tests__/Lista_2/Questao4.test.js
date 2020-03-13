import InverteLista from "../../src/Lista_2/Questao4";

let l;

beforeEach(() => {
	l = new InverteLista();
});

test("inversão", () => {
    l.append(1)
    l.append(2)
    l.append(3)
    l.append(4)
    expect(l.inverter()).toBe("4->3->2->1");
})