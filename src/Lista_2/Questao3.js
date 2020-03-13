
class Arranjo{

    constructor(){
        this.lista = [];
    }

	add(dado) {
        this.lista.unshift(dado)
	}

	append(dado) {
        this.lista.push(dado)
	}

	removeBeginning() {
		if (this.isEmpty()) {
			throw new Error("A lista está vazia.");
		} else {
            this.lista.shift();	
		}
	}

	removeEnd() {
		if (this.isEmpty()) {
			throw new Error("A lista está vazia.");
		}else{
            this.lista.pop();
        }
	}

	isEmpty() {
		return this.lista.length === 0;
    }
    
	toString() {
        return this.lista.toString();
	}

	addAt(posicao, dado) {
		if (posicao >= this.lista.length)   {
			this.append(dado);
		} else if (posicao <= 0) {
				this.add(dado);
			} else {
                this.lista.splice(posicao, 0, dado);
			}
		}
}


export default Arranjo