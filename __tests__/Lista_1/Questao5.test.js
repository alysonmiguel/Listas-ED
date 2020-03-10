import conversorBin from "../../src/Lista_1/Questao5";


test("Teste de conversao", () => {
	expect(conversorBin(14)).toBe("1110");
	expect(conversorBin(7)).toBe("111");
	expect(conversorBin(2)).toBe("10");
	expect(conversorBin(1)).toBe("1");
});