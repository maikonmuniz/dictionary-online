'use client'

async function request() {

    const returnApi = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/test`);
    const reponse = await returnApi.json()
    const meanings = []

    for (const index of reponse){
        meanings.push(index.meanings)
    }

    let listDefinitions: any
    for (const meaning of meanings) {
        listDefinitions = listDefinitionsExtract(meaning)
    }

    let result: any
    for (const definition of listDefinitions) {
        result = (extractData(definition))
    }
    return result
}

export default request

async function extractData(definitions: any){  
    const listDefinitions = []
    for (const chave of definitions) {
        listDefinitions.push(chave.definitions)
    }
    return listDefinitions
}
