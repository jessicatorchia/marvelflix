function pesquisar() {

    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value


    if (campoPesquisa == ""){
        section.innerHTML = "<p class='nenhum-filme'>Nenhum filme encontrado</p>";
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let sinopse = "";
    let tags = "";


    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        sinopse = dado.sinopse.toLowerCase()
        tags = dado.tags.toLowerCase()
       
        if(titulo.includes(campoPesquisa)  || sinopse.includes(campoPesquisa) || tags.includes(campoPesquisa)){

            resultados += `
             <div class="item-resultado">
                <div class="resultado-conteudo">
                    <img src="imagens/${dado.img}" alt="${dado.titulo}" class="imagem-resultado">
                    <div class="descricao-resultado">
                        <h2>
                            <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                        </h2>
                        <p class="descricao-meta">Sinopse: ${dado.sinopse}</p>
                        <p class="descricao-meta">Ano: ${dado.ano}</p>
                        <a href="${dado.trailer}" target="_blank">Assistir trailer oficial</a>
                    </div>
                </div>
            </div>
        `;
        }
        
    }

    if(!resultados){
        resultados = "<p class='nenhum-filme'>Nenhum filme encontrado</p>";
    }

    section.innerHTML = resultados;
}

function listar(){

    let section = document.getElementById("resultados-pesquisa")

    let resultados = "";

    for (dado of dados){
        resultados += `
             <div class="item-resultado">
                <div class="resultado-conteudo">
                    <img src="imagens/${dado.img}" alt="${dado.titulo}" class="imagem-resultado">
                    <div class="descricao-resultado">
                        <h2>
                            <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                        </h2>
                        <p class="descricao-meta">Sinopse: ${dado.sinopse}</p>
                        <p class="descricao-meta">Ano: ${dado.ano}</p>
                        <a href="${dado.trailer}" target="_blank">Assistir trailer oficial</a>
                    </div>
                </div>
            </div>
        `;
    }

    section.innerHTML = resultados
}