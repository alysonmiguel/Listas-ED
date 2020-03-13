import Lista from "../Lista";

class InverteLista{
    constructor(){
        this.list = new Lista();
    }

    inverter(){
        let aux = new Lista();
        while(!this.list.isEmpty()){
            aux.append(this.list.removeEnd())
        }
        return aux.toString()
    }

    append(dado){
        this.list.append(dado);
    }        
}


export default InverteLista;