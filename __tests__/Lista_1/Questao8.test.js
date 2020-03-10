import verificaExpressao from "../../src/Lista_1/Questao8";



test("Teste de expressao", () => {
	expect(verificaExpressao("[ ( ) [ ( ) ] ] ( )")).toBe(true);
	expect(verificaExpressao("( ( ) ]")).toBe(false);
});