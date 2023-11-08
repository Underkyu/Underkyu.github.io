function adicionarItens() {
    var novaLinha = document.createElement("div");
    novaLinha.className = "linha3"; // Atualize para a próxima linha disponível (linha3, linha4, etc.)

    for (var i = 1; i <= 3; i++) {
        var novoItem = document.createElement("div");
        novoItem.className = "item" + (i + 6); // Atualize para o próximo item disponível (item7, item8, etc.)

        // Aqui você pode adicionar o conteúdo desejado para cada novo item
        novoItem.innerHTML = `
        <!--Card-->
        <div class="Card">
            <!--Imagem-->
            <div class="Imagem_container">
                <div class="Imagem">
                    <a href="produtos.html">
                    <img src="Imagens/Centro/AlfabetoLibras.png" alt="Ralsei plush" class="Imagem_produto">
                    </a>
                    <div class="div_selo">
                        <img src="Imagens/Centro/Selos/selo final ouvido.png" class="imagem_selo">
                    </div>
                </div>
            </div>
            <!--Texto do card-->
            <h1 class="Nome_Produto">Alfabeto em libras</h1>
            <br>
            <p class="preco">R$39,99</p>
            <!--Botão "Comprar agora"-->
            <div class="Comprar_Agora primeiro">
                <button class="Comprar_Agora"><h2 class="Comprar_Agora">Comprar Agora</h2></button>
            </div>
        </div>
    `;
        novaLinha.appendChild(novoItem);
    }

    // Adiciona a nova linha ao final da seção de itens
    document.querySelector('.itens').appendChild(novaLinha);
}
