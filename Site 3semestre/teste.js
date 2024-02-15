var titulo=document.querySelector('.titulo');
titulo.textcontent="Lista de encomendas";



var linhastabela = document.querySelectorAll(".linha");

for (i = 0 ; i < linhastabela.length; i++){
   
    linhastabela[i].querySelector(".info-total").textContent=linhastabela[i].querySelector(".info-valor").textContent * linhastabela[i].querySelector(".info-qtd").textContent;


}