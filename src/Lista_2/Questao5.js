import Lista from "../Lista"

export default function embaralhar(lista){
    let aux = new Lista()    
    
    while (lista.size() > 0) {
        aux.addAt(Math.floor((Math.random() * lista.size())), lista.removeEnd());
    }
    
    return aux.toString();
}
