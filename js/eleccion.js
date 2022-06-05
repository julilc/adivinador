let listAdivinanzas = JSON.parse(localStorage.getItem("Adivinanzas"));
let adivinanzaHTML = document.getElementById("adivinanza")
let respuesta1 = document.getElementById("respuesta1");
let respuesta2 = document.getElementById("respuesta2");
let respuesta3 = document.getElementById("respuesta3");
let respuestaHTML = document.querySelectorAll(".botones");
let btnAcertijo = document.getElementById("continuarAceritjo")
let alertaResp = document.getElementById("alertaRespuesta");
let btnAcertijo2 = document.getElementById("continuarAceritjo2");
let nombreUsuariols = sessionStorage.getItem('Nombre Usuario');

function adivinanzaP() {
    adivinanzaHTML.innerText = listAdivinanzas[0].acertijo;
    respuesta1.innerText = ("Manzana");
    respuesta3.innerText = ("Limon");
    respuesta2.innerText = (listAdivinanzas[0].respuesta);
    adivinanzaHTML.style.color = "aliceblue"
    alertaResp.style.display="none";
    btnAcertijo.style.display="none";
    btnAcertijo2.style.display="none";
};


respuestaHTML.forEach(boton => {
    boton.addEventListener("click", (e) => {
        let respuesta = e.target.innerText;
        console.log(respuesta);
        for (let i = 0; i < 2; i++, respuesta != listAdivinanzas[0].respuesta) {
            if (respuesta == listAdivinanzas[0].respuesta) {
                adivinanzaHTML.innerText = ("Respuesta correcta! pasemos a la siguiente adivinanza!");
                adivinanzaHTML.style.color = "green";
                alertaResp.style.display="none";
                btnAcertijo.style.display = "block";
                btnAcertijo.style.alignSelf = "center"

                break;
            }
            alertaResp.innerText = ("respuesta incorrecta, le quedan " + (2 - i) + " intentos");
            alertaResp.style.color = "red";
            alertaResp.style.display="block";
        };
    })
});

/*acertijo2*/
btnAcertijo.addEventListener("click", () => {
    adivinanzaHTML.innerText = listAdivinanzas[1].acertijo;
    respuesta1.innerText = ("Rosa");
    respuesta2.innerText = ("Margarita");
    respuesta3.innerText = (listAdivinanzas[1].respuesta);
    adivinanzaHTML.style.color = "aliceblue"
    alertaResp.style.display="none";
    btnAcertijo.style.display="none";
    btnAcertijo2.style.display="none";
});
respuestaHTML.forEach(boton => {
    boton.addEventListener("click", (e) => {
        let respuesta = e.target.innerText;
        console.log(respuesta);
        for (let i = 0; i < 2; i++, respuesta != listAdivinanzas[1].respuesta) {
            if (respuesta == listAdivinanzas[1].respuesta) {
                adivinanzaHTML.innerText = ("Respuesta correcta! pasemos a la siguiente adivinanza!");
                adivinanzaHTML.style.color = "green";
                alertaResp.style.display="none";
                btnAcertijo.style.display = "none";
                btnAcertijo.style.alignSelf = "center";
                btnAcertijo2.style.display="block"

                break;
            }
            alertaResp.innerText = ("respuesta incorrecta, le quedan " + (2 - i) + " intentos");
            alertaResp.style.color = "red";
            alertaResp.style.display="block";
        };
    })
});
/*acertijo2*/
btnAcertijo2.addEventListener("click", () => {
    adivinanzaHTML.innerText = listAdivinanzas[2].acertijo;
    respuesta1.innerText = ("Barril");
    respuesta2.innerText = ("Anillo");
    respuesta3.innerText = (listAdivinanzas[2].respuesta);
    adivinanzaHTML.style.color = "aliceblue"
    alertaResp.style.display="none";
    btnAcertijo.style.display="none";
    btnAcertijo2.style.display="none";
});
respuestaHTML.forEach(boton => {
    boton.addEventListener("click", (e) => {
        let respuesta = e.target.innerText;
        console.log(respuesta);
        for (let i = 0; i < 2; i++, respuesta != listAdivinanzas[2].respuesta) {
            if (respuesta == listAdivinanzas[2].respuesta) {
                adivinanzaHTML.innerText = ("Felicidades " + nombreUsuariols + "!\nRespuesta correcta! Se han terminado las adivinanzas por hoy! Prueba las otras funciones del sitio!");
                adivinanzaHTML.style.color = "green";
                alertaResp.innerText="";
                btnAcertijo.style.display = "none";
                btnAcertijo.style.alignSelf = "center";
                btnAcertijo2.style.display="none"

                break;
            }
            alertaResp.innerText = ("respuesta incorrecta, le quedan " + (2 - i) + " intentos");
            alertaResp.style.color = "red";
            alertaResp.style.visibility="visible";
        };
    })
});

/*
/*acertijo3
btnAcertijo2.addEventListener("click", () => {
    adivinanzaHTML.innerText = listAdivinanzas[2].acertijo;
    respuesta3.innerText = ("Anillo");
    respuesta2.innerText = ("Barril");
    respuesta1.innerText = (listAdivinanzas[2].respuesta);
    adivinanzaHTML.style.color = "aliceblue"
    alertaResp.style.display="none";
    btnAcertijo.style.display="none";
    btnAcertijo2.style.display="none";
});

respuestaHTML.forEach(boton => {
    boton.addEventListener("click", (e) => {
        let respuesta = e.target.innerText;
        btnAcertijo2.style.visibility = "hidden";
        for (let i = 0; i < 3; i++, respuesta != listAdivinanzas[2].respuesta) {
            if (respuesta == listAdivinanzas[2].respuesta) {
                adivinanzaHTML.innerText = ("Felicidades " + nombreUsuariols + "!\nRespuesta correcta! Se han terminado las adivinanzas por hoy! Prueba las otras funciones del sitio!")
                adivinanzaHTML.style.color = "green";
                adivinanzaHTML.style.paddingBottom = "3rem";
                alertaResp.innerText = "";
                btnAcertijo2.style.display = "none";


                break;
            }
            alertaResp.innerText = ("respuesta incorrecta, le quedan " + (2 - i) + " intentos");
            alertaResp.style.color = "red";
            alertaResp.style.alignSelf = "center";
            alertaResp.style.paddingBottom = "3rem";
            alertaResp.visibility = "visible";
        }
    })
})
*/