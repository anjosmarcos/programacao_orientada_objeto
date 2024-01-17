export class Carro {
    #_tanque
    #_capacidadeTanque

    constructor(valor) {
        this.#_tanque=0
        this.#_capacidadeTanque=valor
    }

    get tanque() {
        return this.#_tanque
    }

    get capacidadeTanque() {
        return this.#_capacidadeTanque
    }

    //FUNCIONA
    set tanque(qtd) {
        if(qtd>=0){
            if(qtd + this.#_tanque > this.#_capacidadeTanque){
                this.#_tanque = this.#_capacidadeTanque
        }
        else {
            this.#_tanque += qtd
            }
        }
    }
}