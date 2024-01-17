function testConst() {
    const const01 = 'const01'
    {
        const const02 = 'const02'
        console.log('01a.' + const01)
        console.log('01b.' + const02)
    }
    const01 = 'novo valor'
    console.log('01a.' + const01)
    console.log('02b.' + const02)
}

testConst()

// temos dois erros esperados atribuição e acesso