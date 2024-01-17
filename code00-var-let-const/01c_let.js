function testVar() {
    let let01 = 'let 01'
    {
        console.log('01a.'+ let01)
        let let01 = 'let 02' // 'let 02' atribuido a let01
        console.log('02a.'+ let01)
    }
    console.log('03a.'+ let01)
}

testVar()

// Erro no codigo este é comportamento esperado