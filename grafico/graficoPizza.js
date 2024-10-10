import { pegarCSS } from "./comum.js";

async function criarGraficoPizza(){

    const url = 'https://raw.githubusercontent.com/vitorgabriel15/2024-API-TENIS/refs/heads/main/pizza.json'

    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Network response was not ok');
        const dados = await res.json();

        const ferramentas = dados.map(item => item.ferramentas); 
        const votos = dados.map(item => item.votos); 

        const data = [
            {
                labels: ferramentas, 
                values: votos, 
                type: 'pie',
                marker: {
                    colors: pegarCss('') 
                }
            }
        ];

        const layout = {
            plot_bgcolor: pegarCss('--verde'),
            paper_bgcolor: pegarCss('--sage'),
            title: {
                text: ' Votos das ferramentas',
                font: {
                    color: pegarCss('--verde-musgo'),
                    family: pegarCss('--fonte-titulo'),
                    size: 50
                }
            }
        };

        const grafico = document.createElement('div');
        grafico.className = 'grafico';
        document.getElementById('caixa-grafico').appendChild(grafico);

        if (typeof Plotly === 'undefined') {
            console.error('Plotly não está carregado. Verifique a importação.');
            return;
        }

        Plotly.newPlot(grafico, data, layout);
    } catch (error) {
        console.error('Erro ao buscar ou plotar os dados:', error);
    }
}

criarGraficoPizza();
    