const fs = require('fs')

fs.readFile(
    'arquivo.txt',
    (err, buf) => {
        if(err)
            console.log('Houve um erro ao ler o arquivo')
        else
            console.log(buf.toString())
    }
)