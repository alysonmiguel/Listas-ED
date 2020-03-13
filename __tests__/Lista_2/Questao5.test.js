import Lista from "../../src/Lista"
import embaralhar from "../../src/Lista_2/Questao5"


let l 

beforeEach(() => {
    l = new Lista
})

test("Embaralhando", () => {
    l.add(1);
    l.add(2);
    l.add(3);
    l.add(4);
    console.log(l.toString());
    console.log(embaralhar(l));
    expect().not.toBe("");
})