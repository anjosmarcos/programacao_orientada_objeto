function testConst() {
    const const01 = {propriedade: 'valor'}
    console.log('01a.'+ const01.propriedade)

    const01 = {propriedade: 'novo valor'}
    console.log('01b.'+ const01.propriedade)
}

testConst()

// temos um erro esperado, pois estamos atributos  um valor 