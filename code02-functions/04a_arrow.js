let somar = () => console.log("Funcao sem parametros");
somar();
somar(1);

let somarUnderscore = () => console.log("Funcao usando underscore");
somarUnderscore();

let somarParams = (x, y) => x + y;
console.log(somarParams(1, 2));

somarParams = (x,y) => { return x + y}
console.log(somarParams(3,4));

// retorna p maior numero
somarParams = (x,y) => x>y?x:y
console.log(somarParams(3,4));

somarParams = (x,y) => {
    if(x>y) 
        return x;
    else
        return y;
}

console.log(somarParams(7,8));