import Lista from "../Lista";

export default function escolherPosicao(remocaoSaldado, qtdSoldado){

    let lista = new Lista();

    for (let i = 1; i <= qtdSoldado;  i++) {
        lista.append(i);
    }
    
    let anterior = lista.head;
    let atual = lista.head.proximo;
    let i = 1;  

    while (lista.size() != 1){
        console.log(lista.size());
        while(atual != null){
            if(i == remocaoSaldado){
                let tem = atual.dado;
                atual = atual.proximo;
                lista.removeDado(tem);
                i = 1
            }else{   
                anterior = atual;
				atual = atual.proximo;
                i++
                console.log("else"+ i);
            }            
        }
        atual = lista.head.proximo;
    }
    return lista.toString() ;
}

// while (lista.size() != 1){
//     console.log(lista.size());
//     while(atual.proximo != null){
//         if(i == remocaoSaldado){
//             let tem = atual.dado;
//             console.log(atual);
//             atual = atual.proximo;
//             lista.removeDado(tem);  
//             console.log(atual);
//             i = 1
//         }else{   
//             anterior = atual;
//             atual = atual.proximo;
//             i++
//             console.log("else"+ i);
//         }            
//     }
//     atual = lista.head;
// }

// while (lista.size() != 1){
//     console.log(lista.size());
//     while(atual.proximo != null){
//         if(i == remocaoSaldado){
//             console.log("aasaaaa");
//             anterior.proximo = atual.proximo;
//             atual = atual.proximo;  
//             i = 0
//             break
//         }else{   
//             atual = atual.proximo;
//             console.log("bbbbbbbbbbbbbb"+ i);   
//             i++
//             console.log("bbbbbbbbbbbbbb"+ i);   

//         }
//     }
//     atual = lista.head.proximo;
// }


// while (lista.size() != 1){
//     console.log(lista.size());
//     if(i == remocaoSaldado){
//         console.log("aasaaaa");
//         if(atual.proximo == null){
//             atual = lista.head;
//         }
//         anterior.proximo = atual.proximo;
//         atual = atual.proximo;  
//         i = 1
//     }else{   
//         anterior = atual;
//         if(atual.proximo == null){
//             atual = lista.head;
//         }else{
//             atual = atual.proximo;
//         }
//         i++
//         console.log("else"+ i);
//     }
// }