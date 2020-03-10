import Lista from "../Lista";


class PilhaF{

    constructor(valor){
        this.lista = new Lista(valor);
    }
    
    push(newData){
        this.lista.add(newData);
    }

    pop(){
        return this.lista.removeBeginning();
    }

    toString(){
        return this.lista.toString();
    }

    size(){
        return this.lista.size();
    }

}


export default PilhaF;