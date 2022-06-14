let listAdivinanzas =JSON.parse(localStorage.getItem("Adivinanzas"));
/*listAdivinanzas=JSON.parse(listAdivinanzas);*/
/*adivinanza 1*/
let adv1=document.getElementById("adv1");
adv1.innerText=listAdivinanzas[0].acertijo;
let rta1=document.getElementById("rtadv1");
rta1.innerText=listAdivinanzas[0].respuesta;
/*adivinanza 2*/
let adv2=document.getElementById("adv2");
adv2.innerText=listAdivinanzas[1].acertijo;
let rta2=document.getElementById("rtadv2");
rta2.innerText=listAdivinanzas[1].respuesta;
/*adivinanza 3*/
let adv3=document.getElementById("adv3");
adv3.innerText=listAdivinanzas[2].acertijo;
let rta3=document.getElementById("rtadv3");
rta3.innerText=listAdivinanzas[2].respuesta;

let advE=document.getElementById("advE")
let rtaE= document.getElementById("rtadvE")
advE.innerText=(listAdivinanzas[3]?.acertijo||"No hay más adivinanzas");
rtaE.innerText=(listAdivinanzas[3]?.respuesta||(rtaE.style.display="none"))
