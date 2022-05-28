
let adivinanzaHTML= document.getElementById("adivinanza")
let respuesta1 = document.getElementById("respuesta1");
let respuesta2=document.getElementById("respuesta2");
let respuesta3=document.getElementById("respuesta3");
let respuestaHTML=document.querySelectorAll(".botones");
let btnAcertijo=document.getElementById("continuarAceritjo")
let alertaResp = document.getElementById("alertaRespuesta");
let boxResp=document.getElementById("opResp");
let btnAcertijo2=document.getElementById("continuarAceritjo2");
let nombreUsuariols = sessionStorage.getItem('Nombre Usuario');
function adivinanzaP(){
    adivinanzaHTML.innerText=adivinanza1.acertijo;
    respuesta1.innerText=("Limón");
    respuesta2.innerText=(adivinanza1.respuesta);
    respuesta3.innerText=("Manzana");
    btnAcertijo.style.visibility="hidden";
    btnAcertijo2.style.visibility="hidden";}
    let validarResp = function validarResp(){
        respuesta=this.innerText;
        console.log(respuesta);
        for(let i=0; i<2; i++,respuesta!=adivinanza1.respuesta){
            if(respuesta==adivinanza1.respuesta){
            adivinanzaHTML.innerText=("Respuesta correcta! pasemos a la siguiente adivinanza!");
            adivinanzaHTML.style.color="green";
            adivinanzaHTML.style.paddingBottom="3rem";
            alertaResp.innerText="";
            btnAcertijo.style.visibility="visible";
            btnAcertijo.style="btn btn-outline-light p-3"
            btnAcertijo.style.width="50%"
            btnAcertijo.style.alignSelf="center"
        
            break;
            }
            alertaResp.innerText=("respuesta incorrecta, le quedan "+(2-i)+" intentos");
            alertaResp.style.color="red";
            alertaResp.style.alignSelf="center";
            alertaResp.style.paddingBottom="3rem";
        };
    
    }
respuestaHTML.forEach(boton=>{
boton.addEventListener("click", validarResp);});
/*acertijo2*/
btnAcertijo.addEventListener("click",()=>{
    adivinanzaHTML.innerText=adivinanza2.acertijo;
    respuesta1.innerText=("Rosa");
    respuesta2.innerText=("Margarita");
    respuesta3.innerText=(adivinanza2.respuesta); 
    adivinanzaHTML.style.color="aliceblue"
    adivinanzaHTML.style.textAlign="center";
    adivinanzaHTML.style.marginTop="3rem";
    btnAcertijo.style.visibility="hidden"; 
    

    let validarResp = function validarResp2(){
    respuesta=this.innerText;
    btnAcertijo2.style.visibility="hidden";
    for(let i=0; i<3; i++,respuesta!=adivinanza2.respuesta){
        if(respuesta==adivinanza2.respuesta){
            adivinanzaHTML.innerText=("Respuesta correcta! pasemos a la siguiente adivinanza!");
            adivinanzaHTML.style.color="green";
            adivinanzaHTML.style.paddingBottom="3rem";
            alertaResp.innerText="";
            btnAcertijo2.style.visibility="hidden";
            btnAcertijo2.style="btn btn-outline-light p-3"
            btnAcertijo2.style.width="50%"
            btnAcertijo2.style.alignSelf="center"
            
        
            break;
        }
        alertaResp.innerText=("respuesta incorrecta, le quedan "+(2-i)+" intentos");
        alertaResp.style.color="red";
        alertaResp.style.alignSelf="center";
        alertaResp.style.paddingBottom="3rem";
        alertaResp.visibility="visible";}

    }

respuestaHTML.forEach(boton=>{
boton.addEventListener("click", validarResp);})

});

/*acertijo3*/
btnAcertijo2.addEventListener("click",()=>{
    adivinanzaHTML.innerText=adivinanza3.acertijo;
    respuesta3.innerText=("Anillo");
    respuesta2.innerText=("Barril");
    respuesta1.innerText=(adivinanza3.respuesta); 
    adivinanzaHTML.style.color="aliceblue"
    adivinanzaHTML.style.textAlign="center";
    adivinanzaHTML.style.marginTop="3rem";
    btnAcertijo2.style.visibility="hidden"; 

    let validarResp = function validarResp2(){
    respuesta=this.innerText;
    btnAcertijo2.style.visibility="hidden";
    for(let i=0; i<3; i++,respuesta!=adivinanza3.respuesta){
        if(respuesta==adivinanza3.respuesta){
            adivinanzaHTML.innerText=("Felicidades "+nombreUsuariols+"!\nRespuesta correcta! Se han terminado las adivinanzas por hoy! Prueba las otras funciones del sitio!")
            adivinanzaHTML.style.color="green";
            adivinanzaHTML.style.paddingBottom="3rem";
            alertaResp.innerText="";
            btnAcertijo2.style.visibility="hidden";

        
            break;
        }
        alertaResp.innerText=("respuesta incorrecta, le quedan "+(2-i)+" intentos");
        alertaResp.style.color="red";
        alertaResp.style.alignSelf="center";
        alertaResp.style.paddingBottom="3rem";
        alertaResp.visibility="visible";}
    }

respuestaHTML.forEach(boton=>{
boton.addEventListener("click", validarResp);})
});
