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
            sessionStorage.setItem("Nombre Usuario",JSON.stringify(usuario.value))
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

/*lista de adivinanzas y respuestas
else if (preguntaInicial==3){
alert("Hoy se muestran las adivinanzas sobre frutas! Vuelve mañana para ver adivinanzas sobre fauna");
const resultado = adivinanzas.filter((tema) => tema.respuesta.includes ('Pera'));
console.log(resultado);
alert("Esas son todas, muchas gracias por venir!")}*/