import Lista from "../Lista"


class FilaF{

    constructor(valor){
        this.lista = new Lista(valor);
    }

    enqueue(newData){
        this.lista.append(newData);
    }

    dequeue(){
       return this.lista.removeBeginning();
    }

    size(){
        return this.lista.size();
    }

    toString(){
        return this.lista.toString();
    }

}

export default FilaF