import Pessoa from "../../src/Lista_2/Questao9"


let l 

beforeEach(() =>{
    l = new Pessoa()
})

test("Inserindo pessoas", () => {
    l.addPessoa("maria", 10)
    l.addPessoa("alyson", 20)
    l.addPessoa("pedro", 5)
    l.addPessoa("daniel", 21)
    l.addPessoa("taniro", 34)
    expect(l.ordemNome()).toBe('alyson->20->daniel->21->maria->10->pedro->5->taniro->34');
    // expect(l.ordemIdade()).toBe('2->3->4');
})