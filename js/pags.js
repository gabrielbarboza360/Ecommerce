// ATUALIZAÇÂO DE PREÇOS
const btnOptionOne = document.querySelector("#optionOne") ;
const btnOptionTwo = document.querySelector("#optionTwo");
var preçoAtualizado = document.querySelector("#preço");
const imgOptionOne= document.getElementById('imagem1').src;
const imgOptionTwo = document.getElementById('imagem2').src;
const imagemFixa = document.getElementById('imagemFixo');

const eventOptionOne = () =>{
    btnOptionOne.classList.add("select");
    btnOptionTwo.classList.remove("select");
    imagemFixa.src = imgOptionOne;
    preçoAtualizado.innerHTML = "R$" + (quantidadeValor * valorAtualAtualizado) + ",00"
}

const eventOptionTwo = () =>{
    btnOptionTwo.classList.add("select");
    btnOptionOne.classList.remove("select");
    imagemFixa.src = imgOptionTwo;
    preçoAtualizado.innerHTML = "R$" + (quantidadeValor * valorAnteriorAtualizado) + ",00"
}

function atualizaçaoDePreços(){
 var quantidadeValor = Number(document.getElementById("qtde").value);
 var valorAtualStringer =  document.querySelector("#valor_atual").innerHTML;
var valorAtualAtualizado = parseFloat(valorAtualStringer);
var valorAnteriorStringer = document.querySelector("#valor_anterior").innerHTML;
var valorAnteriorAtualizado = parseFloat(valorAnteriorStringer)
 var btnOptionOne = document.querySelector("#optionOne") ;
var btnOptionTwo = document.querySelector("#optionTwo");

   btnOptionOne.addEventListener("click", (e) =>{
    eventOptionOne()
});

btnOptionTwo.addEventListener("click", (e) =>{
   eventOptionTwo()
})

   if(btnOptionOne = btnOptionOne.classList.contains("select") ){
       preçoAtualizado.innerHTML = "R$" + (quantidadeValor * valorAtualAtualizado) + ",00"
   } 
   
   if( btnOptionTwo = btnOptionTwo.classList.contains("select")){
    preçoAtualizado.innerHTML = "R$" + (quantidadeValor * valorAnteriorAtualizado) + ",00"
   }

}

const intervalo = setInterval(atualizaçaoDePreços,50);
atualizaçaoDePreços()

