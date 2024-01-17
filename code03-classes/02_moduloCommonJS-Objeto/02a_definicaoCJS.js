class Circulo {
    construtor(r) {
        this.raio = r;
    }

    area() {
        return Math.PI * this.raio**2;
    }

    circuferencia() {
        return 2 * Math.PI * this.raio
    }
}

module.exports = Circulo;