const url = "https://raw.githubusercontent.com/vitorgabriel15/json/refs/heads/main/dadosGerais.json";

async function visualizarInformacoes() {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Network response was not ok');
        
        const dados = await res.json();

        const comidaMaisVendida = dados.titulo; 
        const numeroDeVendas = dados.vendas; 
        const plataformas = dados.plataformas; 

        const paragrafo = document.createElement('p');
        paragrafo.classList.add('caixa-grafico__texto');
        paragrafo.innerHTML = `Em ferramentas elétricas, marcas como DeWalt e Makita são muito populares. Para ferramentas manuais, a Stanley e a Craftsman se destacam. Em software, plataformas como AutoCAD e Microsoft Office estão entre as mais vendidas. A comida mais vendida foi ${comidaMaisVendida} com ${numeroDeVendas} vendidos e está disponível em ${plataformas.join(', ')}.`;

        const caixa = document.getElementById('caixa-grafico');
        caixa.appendChild(paragrafo);
    } catch (error) {
        console.error('Houve um problema com a requisição:', error);
    }
}

visualizarInformacoes();

