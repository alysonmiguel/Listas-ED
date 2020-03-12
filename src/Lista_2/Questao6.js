import Lista from "../Lista"


class Questao6{

    constructor(){
        this.lista = new Lista();
    }

    substring(inicio, final){   
        let aux = new Lista();
        let posicao  = 0;

        if(this.lista.isEmpty()){
            throw new Error("Lista vazia")
        }else{
            while (this.lista.head.proximo !== null) {
                if(posicao >= inicio && posicao <= final){
                 let valor = this.lista.head.proximo.dado;
                  aux.append(valor);  
                }
                
                this.lista.removeBeginning();
                posicao++;
            }
        }
     
        return aux.toString();  
    }

    append(novoDado) {
        this.lista.append(novoDado);
      }
    
}


export default Questao6