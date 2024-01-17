class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }

    valDaErro() {
        throw new ValidationError('Dados invalidos');
    }
}

try {
    const instance = new ValidationError();
    instance.valDaErro();
}
catch (e) {
    console.log(e.name);
    console.log(e.message);
}