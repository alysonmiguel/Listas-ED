import ListaDuplamenteLigada from "../ListaDuplamenteLigada";

export default function converterLissta(lista){
    let listaDL = new ListaDuplamenteLigada();
       
    while(!lista.isEmpty()){
        listaDL.add(lista.removeEnd())
    }    
        
    return listaDL;
}
