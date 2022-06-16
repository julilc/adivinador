let listAdivinanzas = JSON.parse(localStorage.getItem("Adivinanzas"));
let adivinanzaHTML = document.getElementById("adivinanza")
let respuesta1 = document.getElementById("respuesta1");
let respuesta2 = document.getElementById("respuesta2");
let respuesta3 = document.getElementById("respuesta3");
let btnAcertijo = document.getElementById("continuarAceritjo")
let alertaResp = document.getElementById("alertaRespuesta");
let nombreUsuariols = sessionStorage.getItem('Nombre Usuario');
let indiceAdiv = 0;
let contResp = 3;

function adivinanzaP(indiceAdiv, countResp) {
    if (indiceAdiv == 3)() => {
        adivinanzaHTML.innerText = ("Felicidades " + nombreUsuariols + "!\nRespuesta correcta! Se han terminado las adivinanzas por hoy! Prueba las otras funciones del sitio!");
        adivinanzaHTML.style.color = "green";
        alertaResp.style.display = "none";
        btnAcertijo.innerText = "volver a inicio"
        btnAcertijo.style.alignSelf = "center";
    }
    countResp = 3
    adivinanzaHTML.innerText = (listAdivinanzas[indiceAdiv].acertijo)
    respuesta1.innerText = (listAdivinanzas[indiceAdiv].respInco1);
    respuesta3.innerText = (listAdivinanzas[indiceAdiv].respInco2);
    respuesta2.innerText = (listAdivinanzas[indiceAdiv].respuesta);
    adivinanzaHTML.style.color = "aliceblue"
    alertaResp.style.display = "none";
    btnAcertijo.style.display = "none";
    validarRespuesta(indiceAdiv, countResp);
};

function validarRespuesta(indiceAdiv, countResp) {
    let btnAcertijo = document.getElementById("continuarAceritjo")
    let respuestaHTML = document.querySelectorAll(".botones");
    respuestaHTML.forEach(boton => {
        boton.addEventListener("click", (e) => {
            let respuesta = e.target.innerText;
            if (respuesta == listAdivinanzas[indiceAdiv].respuesta) {
                adivinanzaHTML.innerText = ("Respuesta correcta! pasemos a la siguiente adivinanza!");
                adivinanzaHTML.style.color = "green";
                alertaResp.style.display = "none";
                btnAcertijo.style.display = "block";
                btnAcertijo.style.alignSelf = "center";
            } else {
                alertaResp.innerText = ("respuesta incorrecta, le quedan " + (countResp--) + " intentos");
                alertaResp.style.color = "red";
                alertaResp.style.display = "block";
                setTimeout(()=>{
                    alert("Pista:"+listAdivinanzas[indiceAdiv].pista)
                }, 4000);
                if (countResp < 0) {
                    alert("se te acabaron las posibilidades")
                    location.href = "menu.html"
                }
            }
        })
    });
}
adivinanzaP(indiceAdiv)

btnAcertijo.addEventListener("click", () => {
    console.log(indiceAdiv);
    if (indiceAdiv == 2) {
        adivinanzaHTML.innerText = ("Felicidades " + nombreUsuariols + "!\nRespuesta correcta! Se han terminado las adivinanzas por hoy! Prueba las otras funciones del sitio!");
        adivinanzaHTML.style.color = "green";
        alertaResp.style.display = "none";
        btnAcertijo.style.display = "none";
        let respuestas=document.getElementById("opResp");
        respuestas.style.display="none";
        
    } 
    else {
        indiceAdiv++;
        adivinanzaP(indiceAdiv);
    }

})

/*
/*acertijo2
btnAcertijo.addEventListener("click", () => {
    adivinanzaHTML.innerText = listAdivinanzas[1].acertijo;
    respuesta1.innerText = ("Rosa");
    respuesta2.innerText = ("Margarita");
    respuesta3.innerText = (listAdivinanzas[1].respuesta);
    adivinanzaHTML.style.color = "aliceblue"
    alertaResp.style.display="none";
    btnAcertijo.style.display="none";
    btnAcertijo2.style.display="none";
    setTimeout(()=>{
        alert("psita: se forma sumando Gira+Sol")
    }, 4000);
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
/*acertijo3
btnAcertijo2.addEventListener("click", () => {
    adivinanzaHTML.innerText = listAdivinanzas[2].acertijo;
    respuesta1.innerText = ("Barril");
    respuesta2.innerText = ("Anillo");
    respuesta3.innerText = (listAdivinanzas[2].respuesta);
    adivinanzaHTML.style.color = "aliceblue"
    alertaResp.style.display="none";
    btnAcertijo.style.display="none";
    btnAcertijo2.style.display="none";
    setTimeout(()=>{
        alert("pista: cuando se taladra una pared se forma un...")
    }, 4000);
});
respuestaHTML.forEach(boton => {
    boton.addEventListener("click", (e) => {
        let respuesta = e.target.innerText;
        console.log(respuesta);
        console.log(listAdivinanzas[2].respuesta);
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
})*/