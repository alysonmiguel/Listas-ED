
class Arranjo{

    constructor(){
        this.array = [];
    }

	add(dado) {
		let aux = [dado];
		for (let i = 0; i < this.size(); i++) {
			aux[i+1] = this.array[i]		
		}
		this.array = aux;
	}

	append(dado) {
        this.array[this.size()] = dado;
	}

	removeBeginning() {
		if (this.isEmpty()) {
			throw new Error("A lista está vazia.");
		} else {
			let aux = []
			for (let i = 0; i < this.size(); i++) {
				aux[i] = this.array[i+1];	
			}
			this.array = aux;
		}
	}

	removeEnd() {
		if (this.isEmpty()) {
			throw new Error("A lista está vazia.");
		}else{
            let aux = []
			for (let i = 0; i < this.size() -1 ; i++) {
				aux[i] = this.array[i];	
			}
			this.array = aux;
        }
	}

	isEmpty() {
		return this.array[0] === undefined;
    }
	
	size(){
		let i = 0
		while(!(this.array[i] === undefined)){
			i++
		}
		return i;
	}

	search(dado){
		for (let i = 0; i < this.size(); i++) {
			if(this.array[i] === dado){
				return true;
			}
		}
		return false;
	}
	
	toString() {
        let string = "";
	
		for (let i = 0; i < this.size(); i++) {
			string += this.array[i] + (this.array[i+1] === undefined ? "" : "->");
		}
		return string;
	}


	addAt(posicao, dado) {
		if (posicao >= this.size())   {
			this.append(dado);
		} else if (posicao == 0) {
				this.add(dado);
			} else {
				let aux = [];
				for (let i = 0, j = 0;  j < this.size(); i++, j++) {
					if(posicao == i){
						aux[i] = dado;
						aux[++i] =  this.array[j];
					}else{
						aux[i] = this.array[j];
					}
				}
				this.array = aux;
			}
		}
}


export default Arranjo