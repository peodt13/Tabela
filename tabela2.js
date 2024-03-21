document.addEventListener("DOMContentLoaded", function() {
    var botaoEnviar = document.querySelector('.add-encomenda');
    botaoEnviar.addEventListener('click', lidarComEnvioDoFormulario);
});

function lidarComEnvioDoFormulario(evento) {
    evento.preventDefault();

    var nome = document.getElementById('nome').value;
    var produto = document.getElementById('produto').value;
    var quantidade = document.getElementById('qtd').value;
    var valor_unitario = document.getElementById('valor_unitario').value;

    // Valida a quantidade e o valor unitário antes de adicionar à tabela
    if (validaQtde(quantidade) && validaValor(valor_unitario)) {
        adicionarEncomendaNaTabela(nome, produto, quantidade, valor_unitario);
        limparCamposDoFormulario();
    } else {
        alert("Quantidade ou valor inválidos. Por favor, verifique e tente novamente.");
    }
}

function validaQtde(qtde) {
    return !isNaN(qtde) && parseFloat(qtde) > 0;
}

function validaValor(valor) {
    return !isNaN(valor) && parseFloat(valor) > 0;
}

function adicionarEncomendaNaTabela(nome, produto, quantidade, valor_unitario) {
    var corpoDaTabela = document.querySelector('tbody');
    var novaLinha = corpoDaTabela.insertRow();

    var valoresDasCelulas = [nome, produto, quantidade, valor_unitario];
    valoresDasCelulas.forEach(function(valorDaCelula, indice) {
        var novaCelula = novaLinha.insertCell(indice);
        novaCelula.textContent = valorDaCelula;
    });

    var valorTotal = parseFloat(quantidade) * parseFloat(valor_unitario);
    var novaCelulaTotal = novaLinha.insertCell(valoresDasCelulas.length);
    novaCelulaTotal.textContent = formataValor(valorTotal);
}

function limparCamposDoFormulario() {
    var formulario = document.querySelector('.container form');
    formulario.reset();
}

function formataValor(valor) {
    return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}
