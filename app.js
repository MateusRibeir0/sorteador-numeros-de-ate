function sortear(){
    // Capturar a qtd de números sorteados bem como de e ate.
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    // Gerar condicional para informar situações onde não é possível sortear.
    if (de >= ate) {
    alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
    return;
      }
    
      if (quantidade > (ate - de)) {
        alert('A quantidade de números sorteados é maior que a diferença entre os valores, tente novamente.');
        return;
    }    
    // Fazer uma lista com os números sorteados gerados aleatoriamente.
    let sorteados = [];
    let numero;
    
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        while (sorteados.includes(numero)){
        numero = obterNumeroAleatorio(de, ate)
        }
        sorteados.push(numero);
    }

    // Exibir no html quais foram os números sorteados.

    let resultado = document.getElementById('resultado')
    resultado.innerHTML =  `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`

    alterarStatusBotao()

}

// Sortear número aleatório

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Habilitar e desabilitar o botão reiniciar.

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')) {
            botao.classList.remove('container__botao-desabilitado');
            botao.classList.add('container__botao');
    } else {
            botao.classList.remove('container__botao');
            botao.classList.add('container__botao-desabilitado');
    }
}

// Limpar informações para reiniciar.

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    resultado.innerHTML =  `<label class="texto__paragrafo">Números sorteados: Nenhum até o momento.</label>`
    alterarStatusBotao()
}