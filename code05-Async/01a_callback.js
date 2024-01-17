const fs = require('fs')

const onRead = function(err, buf) {
    if(err) 
        console.log('Houve um erro ao ler o arquivo')
    else
        console.log(buf.toString())
}

fs.readFile('arquivo.txt', onRead)