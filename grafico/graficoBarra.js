async function criarGraficoBarra() {
    const url = "https://raw.githubusercontent.com/vitorgabriel15/2024-API-TENIS/refs/heads/main/barra.json"; 
    const res = await fetch(url);
    const dados = await res.json();
    
    const comidas = dados.map(item => item.nome);
    const votos = dados.map(item => item.votos);

    const data = [
        {
            x: ferramentas,
            y: votos,
            type: "bar"
        }
    ]
    
    const grafico = document.createElement("div");
    grafico.className = "grafico";
    document.getElementById("caixa-grafico").appendChild(grafico);
    Plotly.newPlot(grafico, data);
}

criarGraficoBarra();