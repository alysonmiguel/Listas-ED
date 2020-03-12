import Questao6 from "../../src/Lista_2/Questao6"

let l

beforeEach(() => {
    l = new Questao6()
})

test("Sub String", () => {
    l.append(1)
    l.append(2)
    l.append(3)
    l.append(4)
    l.append(5)
    expect(l.substring(2,4)).toBe("3->4->5");
})

// 1,2 = 3, 4 
// 2,3 = 2, 3
