import Lista from "../../src/Lista"
import converterLissta from "../../src/Lista_2/Questao8";

let l 

beforeEach(() =>{
    l = new Lista();
})


test("Transformando lista em lista ligada", () => {
    l.append(1);
    l.append(2);
    l.append(3);
    let listaLigada = converterLissta(l);
    expect(listaLigada.toString()).toBe("1->2->3");
    expect(listaLigada.tail.dado).toBe(3);
    expect(listaLigada.tail.anterior.dado).toBe(2);
    expect(listaLigada.head.proximo.dado).toBe(2);
})