import Lista from "../Lista";

class Pessoa{

    constructor(){
        this.listaIdade = new Lista();
        this.listaNome = new Lista();
    }



    addPessoa( nome, idade){
       this.ordemNome(nome, idade)
       // this.listaNome.ordemIdade(nome, idade);
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
        
        if (nome === undefined) {
            console.log(nome);    
        }else{
            this.listaNome.append(nome);
            this.listaNome.append(idade);
        }
        return this.listaNome.toString();
    }
    
    ordemIdade(){
        return listaIdade.toString();
    }
    

}

export default Pessoa;



// let atual = this.listaNome.head.proximo;
// let posicao = 0;

// if(this.listaNome.size() == 0){
//     this.listaNome.append(nome);
//     return;
// }else{   
//     while (atual !== null) {
//         console.log(atual.dado);
//         if (atual.dado > nome) {
//             this.listaNome.addAt(posicao, nome);
//             return;
//         }
//         posicao++
//         atual = atual.proximo;     
//     }
// }
// this.listaNome.append(nome);
