/*Ingreso usuario*/

let errorText = document.getElementById("errorDatos");
let usuario = document.getElementById("usuario");
let inputs = document.getElementById("inputs");
let tituloForm = document.getElementById("tituloForm");
let btnReg = document.getElementById("btnReg");
let contrasenia = document.getElementById("contrasenia");
let usuarioReg;
let contraseniaReg;
let formRegistro = document.getElementById("formRegistro");
formRegistro.addEventListener("submit", (ev) => {
    ev.preventDefault();        
    if ((usuario.value != "") && (contrasenia.value != "")&&(usuario.value.length>5)&&(contrasenia.value.length>5)) {
        if ((contrasenia.value == contraseniaReg) && (usuario.value == usuarioReg)) {
            location.href = '../menu.html';
        }
        else {      
            usuarioReg = usuario.value;
            sessionStorage.setItem("Nombre Usuario", JSON.stringify(usuario.value))
            contraseniaReg = contrasenia.value;
            btnReg.innerText="Iniciar Sesion"
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Registro Exitoso!',
                title: 'su informacion de cuenta es la siguiente:\n Usuario:' + usuario.value + '\n Contraseña: ' + contrasenia.value + '\nPor favor recuerde estos datos para inicio de sesión.',
                confirmButtonText: 'Iniciar Sesion',
            })      
            } 
}
else{
    errorText.innerText = ("Falta un dato o el usuario y contraseña no supera las 5 letras");
    errorText.style.color = "red";
}})

        let dateHTML = document.getElementById("date")
        const DateTime = luxon.DateTime;
        const now = DateTime.now().toObject();
        const date = DateTime.now().toLocaleString();
        const hour = now.hour.toString() + " : " + now.minute.toString(); now.toString(); dateHTML.innerHTML = hour;

