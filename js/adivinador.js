/*
function adivinanza(acertijo, respuesta){
    this.acertijo=acertijo;
    this.respuesta=respuesta;
    respuesta.toUpperCase();
}
const adivinanza1=new adivinanza("Blanca por dentro, verde por fuera.\nSi no sabes, espera.\n¿Qué fruta es?","Pera");
const adivinanza2= new adivinanza("Bonita flor que gira buscando el sol. ¿Qué es?","Girasol");
const adivinanza3= new adivinanza("cuanto más le quitas más grande es", "Agujero");
console.log (adivinanza1);
let respuesta;
const adivinanzas=[
    {acertijo:"Blanca por dentro, verde por fuera.\nSi no sabes, espera.\n¿Qué fruta es?",respuesta:"Pera"},
    {acertijo:"Bonita flor que gira buscando el sol. ¿Qué es?",respuesta:"Girasol"},
    {acertijo:"cuanto más le quitas más grande es",respuesta:"Agujero"},
]
const datosCuriosos=[
    {dato:"Los juegos de ingenio son excelentes formas de mantenernos mentalmente activos" , autor:"curiosidadescuriosas"},
    {dato:"Las adivinanzas mejoran la lógica y el pensamiento crítico.", autor:"editorial geu"},
    {dato:"Favorecen el desarrollo y la asociación de ideas y conceptos.", autor:"Bosque de Fantasias"},
    {dato:"Jugar a las adivinanzas ayuda a desarrollar la paciencia, darse tiempo para escuchar, aprender a memorizar, interpretar, razonar, prestar atención, concentrarse, comprender el lenguaje articulado, asociar ideas, motivarse, y así sucesivamente.",autor:"eresmama.com"}

]

/*Ingreso usuario*/

let errorText= document.getElementById("errorDatos");
let usuario = document.getElementById("usuario");
let inputs= document.getElementById("inputs");
let tituloForm =document.getElementById("tituloForm");
let btnReg =document.getElementById("btnReg");
let contrasenia =document.getElementById("contrasenia");
let usuarioReg;
let contraseniaReg;
let formRegistro=document.getElementById("formRegistro");

formRegistro.addEventListener("submit", validarForm);
function validarForm(ev){
    if((usuario.value=="")||(contrasenia.value=="")){
    ev.preventDefault();
    errorText.innerText=("Falta un dato!");
    errorText.style.color="red";
    }
    else{           
            usuarioReg=usuario.value;
            contraseniaReg=contrasenia.value;
            ev.preventDefault();    
            tituloForm.innerText=("Registro Exitoso!")    
            inputs.style.visibility="hidden";
            errorText.style.color="green";
            errorText.innerText=("su informacion de cuenta es la siguiente:\n Usuario: "+usuario.value+"\n Contraseña: " +contrasenia.value +"\nPor favor recuerde estos datos para inicio de sesión.");
            btnReg.innerText=("Iniciar Sesión"); 
            console.log(usuarioReg);
            console.log(contraseniaReg); 
            
            formRegistro.addEventListener("submit", retornarInicio);
            function retornarInicio(ev){
            ev.preventDefault();
            tituloForm.innerText=("Inicia Sesion");    
            inputs.style.visibility="visible";
            errorText.innerText="Inicie sesion con los datos anteriores";
            
        }
        formRegistro.addEventListener("submit", validarInicio);
            function validarInicio(ev){
                if((contrasenia.value!=contraseniaReg)||(usuario.value!=usuarioReg)){
                ev.preventDefault();
                errorText.innerText=("Falta un dato!");
                errorText.style.color="red";    
                }
                else{
                    btnReg.addEventListener("click", linkQuestions);
                    function linkQuestions(){
                    location.href='../menu.html';
                    }
                }
            }
        }
    
}

    





    




/*Contestar adivinanza
if (preguntaInicial==1){
    /*adivinanza1
    alert(adivinanza1.acertijo);
    respuesta=prompt("ingrese su respuesta");
    for(let i=0; i<3; i++,respuesta!=adivinanza1.respuesta){
        if(respuesta==adivinanza1.respuesta){
            alert("respuesta correcta! pasemos a la siguiente adivinanza!");
            break;
        }
        alert("respuesta incorrecta, le quedan "+(3-i)+" intentos");
        respuesta=prompt("ingrese su respuesta");
    };
    alert("Sigamos con la nueva adivinanza!")
        
    /*adivinanza2
    alert(adivinanza2.acertijo);
    respuesta=prompt("ingrese su respuesta");
    for(let i=0; i<3; i++,respuesta!=adivinanza2.respuesta){
        if(respuesta==adivinanza2.respuesta){
            alert("respuesta correcta! pasemos a la siguiente adivinanza!");
            break;
        }
        alert("respuesta incorrecta, le quedan "+(3-i)+" intentos");
        respuesta=prompt("ingrese su respuesta");
    }
    alert("Sigamos con la nueva adivinanza!")
    /*adivinanza3
    alert(adivinanza3.acertijo);
    respuesta=prompt("ingrese su respuesta");
    for(let i=0; i<3; i++,respuesta!=adivinanza3.respuesta){
        if(respuesta==adivinanza3.respuesta){
            break;
        }
        alert("respuesta incorrecta, le quedan "+(3-i)+" intentos");
        respuesta=prompt("ingrese su respuesta");
    }
    alert("Se terminaron las adivinanzas! Pruebe conocer las otras partes del juego!");
}  

/*Crea tu adivinanza

else if (preguntaInicial==2){
alert("Bienvenido/a a crea tu propia adivinanza");
let acertijoN=prompt("ingrese su acertijo");
while(acertijoN==""){
    alert("debe ingresar un acertijo");
    acertijoN=prompt("ingrese su acertijo");
}
let respuestaN=prompt("ingrese su respuesta");
while(respuestaN==""){
    alert("debe ingresar una respuesta");
    respuestaN=prompt("ingrese su respuesta");
}
const adivinanza4= new adivinanza(acertijoN,respuestaN);
adivinanza(acertijoN,respuestaN);
alert("su adivinanza:\n"+adivinanza4.acertijo+"\n"+adivinanza4.respuesta+"\n Ha sido registrada! Muchas gracias!");
adivinanza.push(new adivinanza(acertijo=acertijoN,respuesta=respuestaN.toUpperCase()));
}   

/*lista de adivinanzas y respuestas
else if (preguntaInicial==3){
alert("Hoy se muestran las adivinanzas sobre frutas! Vuelve mañana para ver adivinanzas sobre fauna");
const resultado = adivinanzas.filter((tema) => tema.respuesta.includes ('Pera'));
console.log(resultado);
alert("Esas son todas, muchas gracias por venir!")}

/*datos curiosos
else if (preguntaInicial==4){
for (const datoCurioso of datosCuriosos){
    alert(datoCurioso.dato);
}
alert("Gracias por visitar nuestro sitio! Vuelve mañana para más adivinanzas y datos curiosos!")
}
else{
    alert("Hubo un error, intente recargando la p[agina. Disculpe las molestias.")
}
*/

