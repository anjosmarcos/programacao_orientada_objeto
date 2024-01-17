export class Circulo {
    constructor(r) {
        this.raio = r;
    }

    area() {
        return Math.PI * Math.pow(this.raio, 2);
    }

    circuferencia() {
        return 2 * Math.PI * this.raio;
    }
}