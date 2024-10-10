const url = 'https://raw.githubusercontent.com/vitorgabriel15/2024-API-TENIS/refs/heads/main/dados.json'; 

async function vizualizarInformacoes() {
    const res = await fetch(url);
    const dados = await res.json();

    const comidaName = dados[0].comida;
    const comidaVotos = dados[0].votos;
    const comidaComentario = dados[0].comentario;

    console.log(dados);

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('caixa-grafico__texto');

    paragrafo.innerHTML = `Em busca de saber quais são as comidas mais apreciadas, foi realizada uma série de pesquisas. Os dados indicam que a comida mais destacada é <span>${comidaName}</span>, com <span>${comidaVotos}</span> votos, e o comentário sobre ela é: "<span>${comidaComentario}</span>".`;

    const caixa = document.getElementById('caixa-grafico');
    caixa.appendChild(paragrafo);
}

vizualizarInformacoes();