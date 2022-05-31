function adivinanza(acertijo, respuesta){
    this.acertijo=acertijo;
    this.respuesta=respuesta;
    respuesta.toUpperCase();
}
const adivinanzas=[]
adivinanzas.push(new adivinanza("Blanca por dentro, verde por fuera.\nSi no sabes, espera.\n¿Qué fruta es?","Pera"));
adivinanzas.push(new adivinanza("Bonita flor que gira buscando el sol. ¿Qué es?","Girasol"));
adivinanzas.push(new adivinanza("cuanto más le quitas más grande es", "Agujero"));
const guardarLocal=(clave,valor)=>{localStorage.setItem(clave,valor)};
guardarLocal("Adivinanzas",JSON.stringify(adivinanzas));
let formAcertijo= document.getElementById("formAcertijo");
let textIncompleta= document.getElementById("errorDatos");
let btnEnviarAcertijo = document.getElementById("btnSubAcertijo");
let acertijoIn = document.getElementById("acertijo");
let respuestaIn = document.getElementById("respuesta");
let acertijo;
let respuesta;
formAcertijo.addEventListener("submit", subAcertijo, adivinanza);
function subAcertijo(ev){
    if((acertijoIn.value=="")||(respuestaIn.value=="")){
    ev.preventDefault();
    textIncompleta.innerText=("Falta un dato!");
    textIncompleta.style.color="red";
    }
    else{         
            acertijo=acertijoIn.value;
            respuesta=respuestaIn.value;
            adivinanzas.push(new adivinanza(acertijo,respuesta));
            guardarLocal("Adivinanzas",JSON.stringify(adivinanzas));
            ev.preventDefault();    
            inputs.style.visibility="hidden";
            textIncompleta.style.color="green";
            textIncompleta.innerText=("su acertijo es el siguiejte:\n Acertijo: "+acertijoIn.value+"\n Respuesta: " +respuestaIn.value +"\nGracias por ser parte.");
            btnEnviarAcertijo.innerText=("Sumar otro acertijo"); 
            console.log(acertijo);
            console.log(respuesta); 
            formAcertijo.addEventListener("submit", retornarAcertijo);
            function retornarAcertijo(ev){
            ev.preventDefault();
            inputs.style.visibility="visible";
            btnEnviarAcertijo.innerText=("Guardar");   
        }

    }
}

