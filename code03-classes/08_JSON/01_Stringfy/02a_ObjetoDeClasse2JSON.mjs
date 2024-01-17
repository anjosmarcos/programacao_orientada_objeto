import {UmaClasse} from "../../07_Desestruturacao/03a_umaClasse.mjs"

let umObjetoClasse = new UmaClasse("Primeiro atributo")
let json = JSON.stringify(umObjetoClasse)
console.log(json)