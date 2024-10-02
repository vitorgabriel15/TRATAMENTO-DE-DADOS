const url = 'https://raw.githubusercontent.com/hericxzin/guardarnotebook/refs/heads/main/books.json';

async function visualizarInfos() {
    try {
        const res = await fetch(url);
 
        if (!res.ok) {
            throw new Error('Network response was not ok ' + res.statusText);
        }

        const dados = await res.json();
    
        if (dados.length === 0) {
            throw new Error('Nenhum dado encontrado');
        }

        const notebookMais = dados[0].notebook;
        const NumeroVotos = dados[0].votos;
        const comentarios = dados[0].comentario;

        console.log(comentarios);

        const paragrafo = document.createElement("p");
        paragrafo.classList.add("caixa-grafico__texto");
        paragrafo.innerHTML = `Essa pesquisa buscou fazer um levantamento dos notebooks mais usados pelo mundo.foi possível concluir que o notebook <span>${notebookMais}</span> ficou em primeiro lugar, com aproximadamente <span>${NumeroVotos}</span> votos. O principal comentário sobre o notebook foi: <span>${comentarios}</span>`;
        
        const caixa = document.getElementById("caixa-grafico");
        caixa.appendChild(paragrafo);
    } catch (error) {
        console.error('Houve um problema com a requisição Fetch:', error);
    }
}

visualizarInfos();
