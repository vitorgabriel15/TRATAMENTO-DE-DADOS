const url = "https://raw.githubusercontent.com/vitorgabriel15/json/refs/heads/main/dadosGerais.json"

async function visualizarinformacoes() {
    const res = await fetch(url)
    const dados = await res.json()
'1'
    console.log(dados.pesquisa.categoris)
}