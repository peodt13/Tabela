var titulo = document.querySelector('.titulo');
titulo.textContent = "Lista de encomendas";

var linhastabela = document.querySelectorAll(".linha");

for (i = 0; i < linhastabela.length; i++) {

    var qtde = linhastabela[i].querySelector(".info-qtd").textContent;
    var valor =  linhastabela[i].querySelector(".info-valor").textContent;

    // Valida a quantidade
    if (!validaQtde(qtde)) {
        // Quantidade não válida, avisa o usuário
        linhastabela[i].querySelector(".info-qtd").textContent = "QTD INVÁLIDA";
        linhastabela[i].classList.add("info-invalida");
    
   
    }else{
        //valida valor 
    if (!validaValor(valor)){
        linhastabela[i].querySelector(".info-valor").textContent = "QTD INVÁLIDA";
        linhastabela[i].classList.add("info-invalida");
    }else{
        //formata valor 
    var unitFormat = formataValor(parseFloat(valor));

    linhastabela[i].querySelector(".info-total").textContent = unitFormat;

}
    }
    }


    var botaoAdicionar = document.querySelector(".add-encomenda");
    botaoAdicionar.addEventListener("click", function(event){
        event.preventDefault();
        console.log("agora sim foi é isso tmj");
    } );
        
       

    
    
    

    
    

    

function calculaTotal(qtd, unitario) {
    var total = 0;

    total= qtd * unitario;

    return total;
}

function validaQtde(qtde){
        if(!isNaN(qtde) && qtde>0){
            return true;
        }else{
            return false;
        }
    
}

function validaValor(valor){
   if(!isNaN (valor) && valor > 0){
    return true;
   }else{
    return false;
   }

}

function formataValor(valor, total){
var valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
   return valor;
}
