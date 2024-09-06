function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let termoPesquisa = document.getElementById("pesquisaInput").value.toLowerCase();
    let resultados = "";

    if (resultados == "") {
        section.innerHTML=`<p>Digite o nome de algum atleta.<p>`
    }
    
    for (let dado of dados) {
       
        if (dado.nome.toLowerCase().includes(termoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2>${dado.nome}</h2>
                    <img src="${dado.foto}" alt="imagem do atleta" class="imagem-resultado">
                    <p><strong>Data de Nascimento:</strong> ${dado.dataNascimento}</p>
                    <p><strong>Posição:</strong> ${dado.posicao}</p>
                    <p><strong>Altura:</strong> ${dado.altura}</p>
                    <p><strong>Peso:</strong> ${dado.peso}</p>
                     <p><strong>clubes:</strong> ${dado.clubes}</p>
                    <p><strong>Títulos:</strong> ${dado.titulos.join(', ')}</p>
                    
                </div>
            `;
        }
    }

    if (resultados === "") {
        resultados = `<p>Nenhum jogador encontrado.</p>`;
    }

   

    section.innerHTML = resultados;
}
