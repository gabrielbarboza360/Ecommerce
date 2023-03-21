/* =======================  Pisca Pisca letreiro =======================  */ 

const intervalo = setInterval(pisca,500);

function pisca(){
    const cor = document.querySelectorAll('.spanFrete');
    for(i = 0; i <cor.length; i++){
        cor[i].style.color = cor[i].style.color == "yellow" ? "red" : "yellow";
    }
}  

/* ========================== End Pisca Pisca ================*/

/* botões */
const btntudo = document.querySelector("#tudo")
const btnGarrafa = document.querySelector("#btnGarrafa")
const btnCamisa = document.querySelector("#camisa")
const btnRelogio = document.querySelector("#relogio")
const btnMochila = document.querySelector("#mochila")

/* Container */
const contGarrafa = document.getElementsByClassName("contGarrafa")
const contCamisa = document.getElementsByClassName("contCamisa")
const contRelogio = document.getElementsByClassName("contRelogio")
const contMochila = document.getElementsByClassName("contMochila")


document.addEventListener("click", (e) =>{
     const targetEl = e.target;
     const parentEl = targetEl.closest("div");


     if(targetEl.classList.contains("tudo")){
        for(a = 0; a<contGarrafa.length; a++){
            contGarrafa[a].style.display = "initial";
          }

          for(a = 0; a<contRelogio.length; a++){
            contRelogio[a].style.display = "initial";
           }

           for(a = 0; a<contCamisa.length; a++){
            contCamisa[a].style.display = "initial";
           }

           for(a = 0; a<contMochila.length; a++){
            contMochila[a].style.display = "initial";
           }
       
     }

     if(targetEl.classList.contains("garrafa")){
    

        for(a = 0; a<contGarrafa.length; a++){
            contGarrafa[a].style.display = "initial";
          }

          for(a = 0; a<contRelogio.length; a++){
            contRelogio[a].style.display = "none";
           }

           for(a = 0; a<contCamisa.length; a++){
            contCamisa[a].style.display = "none";
           }

           for(a = 0; a<contMochila.length; a++){
            contMochila[a].style.display = "none";
           }
      
     }

     if(targetEl.classList.contains("camisa")){
       
        for(a = 0; a<contGarrafa.length; a++){
            contGarrafa[a].style.display = "none";
          }

          for(a = 0; a<contRelogio.length; a++){
            contRelogio[a].style.display = "none";
           }

           for(a = 0; a<contCamisa.length; a++){
            contCamisa[a].style.display = "initial";
           }

           for(a = 0; a<contMochila.length; a++){
            contMochila[a].style.display = "none";
           }
     }
     
     if(targetEl.classList.contains("relogio")){
        for(a = 0; a<contGarrafa.length; a++){
            contGarrafa[a].style.display = "none";
          }

          for(a = 0; a<contRelogio.length; a++){
            contRelogio[a].style.display = "initial";
           }

           for(a = 0; a<contCamisa.length; a++){
            contCamisa[a].style.display = "none";
           }

           for(a = 0; a<contMochila.length; a++){
            contMochila[a].style.display = "none";
           }
     }

     if(targetEl.classList.contains("mochila")){
        for(a = 0; a<contGarrafa.length; a++){
            contGarrafa[a].style.display = "none";
          }

          for(a = 0; a<contRelogio.length; a++){
            contRelogio[a].style.display = "none";
           }

           for(a = 0; a<contCamisa.length; a++){
            contCamisa[a].style.display = "none";
           }

           for(a = 0; a<contMochila.length; a++){
            contMochila[a].style.display = "initial";
           }
     }

})

