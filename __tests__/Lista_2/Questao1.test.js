import PilhaF from "../../src/Lista_2/Questao1";

let pilha 

beforeEach( () => {
    pilha = new PilhaF(null)
});

test("Tamanho", () => {
    expect(pilha.size()).toBe(0)
})

test("inserir dados", () => {
    pilha.push(1);
    pilha.push(2);
    pilha.push(3);
    pilha.push(4);
    expect(pilha.toString()).toBe("4->3->2->1")
})

test("Remover dados", () => {
    pilha.push(1);
    pilha.push(2);
    pilha.pop()
    pilha.push(4);
    pilha.pop();
    pilha.push(5);
    pilha.push(6);
    expect(pilha.toString()).toBe("6->5->1")
})