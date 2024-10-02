import { pegarCSS } from "./comum.js"

async function criaGraficoBarra() {
    const url = "https://github.com/hericxzin/guardarnotebook.git"
    const res = await fetch(url)
    const dados = await res.json()
    const modelo = Object.keys(dados)
    const vendas = Object.values(dados)

    const data = [
        {
            x: modelo,
            y: vendas,
            type: 'bar',
            marker: {
                color: pegarCSS('--salmon-pink') 
            }
        }
    ]

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('caixa-grafico').appendChild(grafico)
    Plotly.newPlot(grafico, data)
}

criaGraficoBarra()
