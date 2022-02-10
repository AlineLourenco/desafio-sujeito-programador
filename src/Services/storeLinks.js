// Buscar os links salvos
export async function getLinksSave(key) {
    const myLinks = await localStorage.getItem(key)

    let linkSaves = JSON.parse(myLinks) || [];

    return linkSaves;
}



// Salvar um link no navegador (local storage)
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

// Se já houver um link com o mesmo id, não duplicar
    const hasLink = linksStored.some(link => link.id === newLink.id)

    if(hasLink) {
        console.log("Esse link já existe na sua lista!")
        return;
    }

//Adicionar um novo link a lista
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log("Link salvo com sucesso!")
}


// Deletar algum link salvo
export function deleteLink(Links, id) {
    let myLinks = Links.filter( item => {
       return (item.id !== id)
    })
    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));
    console.log("Link deletado com sucesso!")

    return myLinks;
}