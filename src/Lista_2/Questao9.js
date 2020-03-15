import Lista from "../Lista";

class Pessoa{

    constructor(){
        this.listaIdade = new Lista();
        this.listaNome = new Lista();
    }

    addPessoa( nome, idade){
       this.ordemNome(nome, idade)
       this.ordemIdade(nome, idade);
    }

    ordemNome(nome, idade){
        let atual = this.listaNome.head.proximo;
        let posicao = 0;

        while (atual !== null) {
            if (atual.dado > nome) {
                this.listaNome.addAt(posicao, nome);
                this.listaNome.addAt(++posicao, idade);
                return this.listaNome.toString()
            }
            posicao++
            atual = atual.proximo;                 
        }

        if (!(nome === undefined)) {
            this.listaNome.append(nome);
            this.listaNome.append(idade);
        }
        return this.listaNome.toString();
    }
    
    ordemIdade(nome, idade){
        let atual = this.listaIdade.head.proximo;
        let posicao = 0;
        while (atual !== null) {
            atual = atual.proximo;                 
            if (atual.dado > idade) {
                this.listaIdade.addAt(posicao, nome);
                this.listaIdade.addAt(++posicao, idade);
                return this.listaIdade.toString()
            }
            posicao++
            atual = atual.proximo;                 
        }
        
        if (!(idade === undefined)) {
            this.listaIdade.append(nome);
            this.listaIdade.append(idade);
        }
        return this.listaIdade.toString();
    }
}

export default Pessoa;