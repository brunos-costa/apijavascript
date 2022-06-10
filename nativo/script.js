let lista = document.querySelector("#lista")
let tabela = document.querySelector("#tabela")

async function carregarDados(){
    const url = "https://swapi.dev/api/people/?format=json"
    try {
        let resultado = await fetch(url)

        const dados = await resultado.json()

        for(elementos of dados.results){
            //console.log(`Sou ${elementos.name} nasci no ano ${elementos.birth_year}`)
            console.log(elementos)
            //Criando elementos HTML dinamicamente
            /*
            const itemLista = document.createElement("li")
            itemLista.classList.add("list-group-item")
            itemLista.textContent = `Olá, sou ${elementos.name}, meu gênereo é ${elementos.gender} e a cor do meu cabelo é ${elementos.hair_color}`

            lista.appendChild(itemLista)
            */

            // Criando elementos HTML
            const linha = document.createElement("tr")
            const tdNome = document.createElement("td")
            const tdPeso = document.createElement("td")
            const tdCorOlho = document.createElement("td")

            // Criando conteúdo das tds
            tdNome.textContent = elementos.name
            tdPeso.textContent = elementos.mass
            tdCorOlho.textContent = elementos.eye_color

            // Adicionando os elementos em suas respectivas tags pai/mãe
            linha.appendChild(tdNome)
            linha.appendChild(tdPeso)
            linha.appendChild(tdCorOlho)

            tabela.appendChild(linha)




        }
    
        //console.log(dados.results)
    } catch (error) {
        console.log("O seguinte erro ocorreu: ", error)
    }

}

carregarDados()